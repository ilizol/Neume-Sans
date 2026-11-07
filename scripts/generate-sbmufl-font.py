import argparse
import json
import os
from pathlib import Path
import struct
import subprocess

import fontforge


ROOT = Path(__file__).resolve().parent.parent
SCALE = 100
PUA_START = 0xE000
PUA_END = 0xF8FF
COMPONENT_ALIASES = {
    "oligon-long": "oligon.long",
    "ison-short": "ison.short",
}
SFNT_CHECKSUM_MAGIC = 0xB1B0AFBA


def find_head_table(font_data):
    table_count = struct.unpack_from(">H", font_data, 4)[0]
    for table_index in range(table_count):
        record_offset = 12 + table_index * 16
        if font_data[record_offset : record_offset + 4] == b"head":
            table_offset, table_length = struct.unpack_from(">II", font_data, record_offset + 8)
            return record_offset, table_offset, table_length
    raise ValueError("Missing OpenType head table")


def sfnt_checksum(data):
    padded_data = data + b"\0" * (-len(data) % 4)
    checksum = 0
    for offset in range(0, len(padded_data), 4):
        checksum += int.from_bytes(padded_data[offset : offset + 4], "big")
    return checksum & 0xFFFFFFFF


def copy_head_modification_time(source_path, output_path):
    source_data = source_path.read_bytes()
    output_data = bytearray(output_path.read_bytes())
    _, source_head_offset, _ = find_head_table(source_data)
    record_offset, output_head_offset, output_head_length = find_head_table(output_data)

    output_data[output_head_offset + 28 : output_head_offset + 36] = (
        source_data[source_head_offset + 28 : source_head_offset + 36]
    )
    output_data[output_head_offset + 8 : output_head_offset + 12] = b"\0" * 4
    head_checksum = sfnt_checksum(
        output_data[output_head_offset : output_head_offset + output_head_length]
    )
    struct.pack_into(">I", output_data, record_offset + 4, head_checksum)
    check_sum_adjustment = (SFNT_CHECKSUM_MAGIC - sfnt_checksum(output_data)) & 0xFFFFFFFF
    struct.pack_into(">I", output_data, output_head_offset + 8, check_sum_adjustment)
    output_path.write_bytes(output_data)


def load_sbmufl_glyphs():
    exporter = ROOT / "scripts/export-sbmufl-glyphs.js"
    result = subprocess.run(
        ["node", str(exporter)],
        check=True,
        capture_output=True,
        text=True,
    )
    return json.loads(result.stdout)


def main():
    parser = argparse.ArgumentParser(description="Generate the Neume Sans SBMUFL font")
    parser.add_argument(
        "infile",
        nargs="?",
        default=ROOT / "fonts/otf/NeumeSans-Regular.otf",
        help="FontForge source font (defaults to the original OTF to preserve duplicate encodings)",
    )
    parser.add_argument(
        "outfile",
        nargs="?",
        default=ROOT / "fonts/ttf/NeumeSans-SBMUFL.ttf",
        help="Output TrueType font",
    )
    parser.add_argument(
        "--sfdir",
        help="Optional FontForge source directory output",
    )
    args = parser.parse_args()

    font = fontforge.open(str(args.infile))

    for glyph_data in load_sbmufl_glyphs():
        target_name = glyph_data["name"]
        components = glyph_data["components"]
        if (
            len(components) == 1
            and components[0][0] == target_name
            and components[0][1:] == [0, 0]
        ):
            continue

        if target_name not in font:
            raise ValueError("Missing SBMUFL target glyph: " + target_name)

        glyph = font[target_name]
        glyph.clear()
        glyph.width = round(glyph_data["advanceWidth"] * SCALE)
        glyph.unicode = glyph_data["unicode"]

        for component_name, x_offset, y_offset in components:
            source_name = COMPONENT_ALIASES.get(component_name, component_name)
            if source_name not in font:
                raise ValueError("Missing component glyph: " + component_name)
            glyph.addReference(
                source_name,
                (1, 0, 0, 1, x_offset * SCALE, y_offset * SCALE),
            )

    for glyph in font.glyphs():
        if glyph.unicode >= 0 and not PUA_START <= glyph.unicode <= PUA_END:
            glyph.unicode = -1

    font.fontname = "NeumeSansSBMUFL-Regular"
    font.familyname = "Neume Sans SBMUFL"
    font.fullname = "Neume Sans SBMUFL Regular"
    font.sfnt_names = tuple(
        (
            language,
            name_id,
            " :Neume Sans SBMUFL Regular"
            if name_id == "UniqueID"
            else "Neume Sans SBMUFL"
            if name_id == "Preferred Family"
            else value,
        )
        for language, name_id, value in font.sfnt_names
    )
    font.generate(str(args.outfile))
    font.close()

    copy_head_modification_time(Path(args.infile), Path(args.outfile))

    source_stat = Path(args.infile).stat()
    output_stat = Path(args.outfile).stat()
    os.utime(
        args.outfile,
        ns=(output_stat.st_atime_ns, source_stat.st_mtime_ns),
    )

    if args.sfdir:
        props_file = Path(args.sfdir) / "font.props"
        modification_time = round(source_stat.st_mtime)
        props = props_file.read_text().splitlines()
        props = [
            f"ModificationTime: {modification_time}"
            if line.startswith("ModificationTime: ")
            else line
            for line in props
        ]
        props_file.write_text("\n".join(props) + "\n")


if __name__ == "__main__":
    main()
