import argparse
import json
from pathlib import Path
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

    font.fontname = "NeumeSansSBMUFL"
    font.familyname = "Neume Sans SBMUFL"
    font.fullname = "Neume Sans SBMUFL"
    font.sfnt_names = tuple(
        (
            language,
            name_id,
            " :Neume Sans SBMUFL"
            if name_id == "UniqueID"
            else "Neume Sans SBMUFL"
            if name_id == "Preferred Family"
            else value,
        )
        for language, name_id, value in font.sfnt_names
    )
    font.generate(str(args.outfile))
    font.close()



if __name__ == "__main__":
    main()
