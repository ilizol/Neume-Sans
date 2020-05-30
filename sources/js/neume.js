for (var i = 0; i < glyphs_data.length; i++)
{
    var gd = glyphs_data[i];
    var path = new opentype.Path();
    var gc = [];
    if (typeof gd.pathData === "undefined")
    {
        gd.pathData = [];
    }
    if (typeof gd.components !== "undefined")
    {
        gc = gd.components;
        for (var ci = 0; ci < gc.length; ci++)
        {
            var cpd = [];
            var cn = gc[ci][0];
            var cd = glyphs_paths_data[cn];
            var cx = gc[ci][1];
            var cy = gc[ci][2];
            for (var cj = 0; cj < cd.length; cj++)
            {
                var pd = [];
                pd[0] = cd[cj][0];
                pd[1] = cd[cj][1] + cx;
                pd[2] = cd[cj][2] + cy;
                pd[3] = cd[cj][3] + cx;
                pd[4] = cd[cj][4] + cy;
                pd[5] = cd[cj][5] + cx;
                pd[6] = cd[cj][6] + cy;
                gd.pathData.push(pd);
            }
        }
        //alert(gd.pathData);
    }
    for (var j = 0; j < gd.pathData.length; j++)
    {
        var pd = gd.pathData[j];
        var t = pd[0];
        var x = pd[1] * SCALE;
        var y = pd[2] * SCALE;
        if (t === 'M')
        {
            path.moveTo(x, y);
        }
        else if (t === 'L')
        {
            path.lineTo(x, y);
        }
        else if (t === 'C')
        {
            var x1 = pd[3] * SCALE;
            var y1 = pd[4] * SCALE;
            var x2 = pd[5] * SCALE;
            var y2 = pd[6] * SCALE;
            path.curveTo(x1, y1, x2, y2, x, y);
        }
        else if (t === 'Q')
        {
            var x1 = pd[3] * SCALE;
            var y1 = pd[4] * SCALE;
            path.quadTo(x1, y1, x, y);
        }
    }
    var glyph = new opentype.Glyph({
        name: gd.name,
        unicode: gd.unicode,
        advanceWidth: gd.advanceWidth * SCALE,
        path: path
    });
    glyphs.push(glyph);
}

var font = new opentype.Font({
    familyName: 'Neume Sans',
    styleName: 'Regular',
    unitsPerEm: UNITS_PER_EM,
    ascender: ASCENDER,
    descender: DESCENDER,
    glyphs: glyphs
});
//console.log(font.toTables());
var buffer = font.toArrayBuffer();
var font2 = opentype.parse(buffer);

document.getElementById('fontFamilyName').innerHTML = font2.names.fontFamily.en;

for (var i = 0; i < font2.glyphs.length; i++)
{
    var glyph = font2.glyphs.get(i);
    var ctx = createGlyphCanvas(glyph, 458);
    var x = 40;
    var y = 340;
    var fontSize = 340;
    var advanceWidth = glyph.advanceWidth;
    //alert(glyph.advanceWidth);
    glyph.draw(ctx, x, y, fontSize);
    // glyph.drawPoints(ctx, x, y, fontSize);
    glyph.drawMetrics(ctx, x, y, fontSize, advanceWidth);
}