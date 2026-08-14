function hexDump(bytes)
{
    var hexString = bytes.map(function (v)
    {
        var h = v.toString(16);
        return h.length === 1 ? '0' + h : h;
    });
    return hexString.join(' ').toUpperCase();
}

// Create a canvas and adds it to the document.
// Returns the 2d drawing context.
function createGlyphCanvas(glyph, size)
{
    var canvasId, html, glyphsDiv, wrap, canvas, ctx;
    canvasId = 'c' + glyph.index;
    var hex = glyph.unicode.toString(16);
    hex = hex.toUpperCase();
    while (hex.length < 4)
    {
        hex = "0" + hex;
    }
    var ascii = String.fromCodePoint(glyph.unicode);
    var advanceWidth = glyph.advanceWidth;
    html = '<div class="wrapper" style="width:' + size + 'px"><canvas id="' + canvasId + '" width="' + size + '" height="' + size + '"></canvas><span><small style="color:gray">' + glyph.index + '. [' + glyph.unicode + '] U+' + hex + ' | ' + advanceWidth + '</small><big style="font-weight:bold;margin-left:1em;">' + ascii + '</big><br>' + glyph.name + '</span></div>';
    glyphsDiv = document.getElementById('glyphs');
    wrap = document.createElement('div');
    wrap.innerHTML = html;
    glyphsDiv.appendChild(wrap);
    canvas = document.getElementById(canvasId);
    ctx = canvas.getContext('2d');
    return ctx;
}