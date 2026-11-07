//--- ison ---
var iw = 7.25;
var iuy = 1.5;
//--- oligon ---
var ow = 8;
var ouy = 1.5;
//--- oligon-long ---
var olw = 9;
//--- petaste ---
var pw = 7.5;
var py = 0.5;
//--- kentemata ---
var kw = 2.8;
var kuy = 1.5;
//--- kentemata-ul ---
var kulx = 1.2;
//--- kentemata-uc ---
var kucx = 2.6;
//--- kentema ---
var Kw = 1.4;
//--- kentema-uc ---
var Kucx = 3.25;
//--- kentema-r ---
var Krx = ow;
//--- hypsele ---
var hy = 1.5;
//--- hypsele-l ---
var hlx = 0;
//--- hypsele-r ---
var hrx = 5.7;
//--- hypsele-c ---
var hcx = 2.8;
//--- hypsele-uc ---
var hucx = 3.4;
var hucy = 3.175;
//--- apostrophos ---
var aw = 3.25;
var auy = 1.5;
var adx = 1.75;
var ady = -1;
//--- apostrophos-dr ---
var adrx = 5.75;
var adry = -1.75;
//--- apostrophos-uc ---
var aucx = 1.75;
//--- hyporrhoe ---
var hpw = 1.8;
var hpuy = 1.7;
//--- hyporrhoe-uc ---
var hpucx = 3.1;
//--- elaphron ---
var ew = 7.5;
var euy = 1.85;
var e3uy = 2.15;
var edy = -2;
//--- chamele ---
var chaw = 6.5;
var chauy = 1.75;
var chauuy = 2.5;
//--- klasma ---
var kluy = 1.75;
var klu2y = 2;
var kldy = -1.75;
//--- haple ---
var hapw = 1;
var hapdy = -1;
var hapd2y = -1.25;
//--- bareia ---
var baw = 2.5;
//--- psephiston ---
var psedx = 0.25;
var psedy = -2;
var psed2x = 1.5;
var psed2y = -2.75;
//--- homalon ---
var homdx = 0.25;
var homdy = -2;
var homd2x = 1.5;
var homd2y = -2.75;
//--- antikenoma ---
var antdx = 0.5;
var antdy = -1.5;
var antd2x = 0.5;
var antd2y = -2.5;
//--- heteron ---
var hetdx = -0.75;
var hetdy = -1.25;
var hetd2x = 1.75;
var hetd2y = -1.55;
//--- endophonon ---
var enddx = 0.25;
var enddy = -1.75;
var endd2x = -1.15;
var endd2y = -2;
//--- gorgon ---
var gorw = 0.35;
var gordy = -2;
var goru2y = 3;

glyphs_data.push(
    {
        "name": ".notdef",
        "unicode": 0,
        "advanceWidth": 5,
        "pathData": [
            ['M', 0, 0],
            ['L', 0, 7],
            ['L', 5, 7],
            ['L', 5, 0],
            ['M', 1, 1],
            ['L', 4, 1],
            ['L', 4, 6],
            ['L', 1, 6]
        ]
    },
    {
        "name": "space",
        "unicode": 32,
        "advanceWidth": 2
    },
    {
        "name": "test1",
        "unicode": 1,
        "advanceWidth": 5,
        "pathData": [
            ['M', 0, 0],
            ['L', 0, 7],
            ['L', 5, 7],
            //['L', 5, 0],
            ['C', 5, 0, 10, 7, 10, 0],
            //['Q', 5,0, 12,3.5],
            ['M', 1, 1],
            ['L', 4, 1],
            ['L', 4, 6],
            ['L', 1, 6]
        ]
    },
    {
        "name": "test2",
        "unicode": 2,
        "advanceWidth": 5,
        "pathData": [
            ['M', 0, 0],
            ['L', 0, 7],
            ['L', 5, 7],
            //['L', 5, 0],
            //['C', 5,0, 10,7, 10,0],
            ['Q', 5, 0, 12, 3.5],
            ['M', 1, 1],
            ['L', 4, 1],
            ['L', 4, 6],
            ['L', 1, 6]
        ]
    },
    {
        "name": "test3",
        "unicode": 3,
        "advanceWidth": 10,
        "pathData": [
            ['M', 5, 7.5],
            ['C', 5, 0, 10, 7.5, 10, 0],
            ['C', 5, 7.5, 0, 0, 0, 7.5],
            ['M', 5, 5.5],
            ['C', 5, 2, 2.5, 5.5, 2.5, 2],
            ['C', 5, 5.5, 7.5, 2, 7.5, 5.5]
        ]
    },
    {
        "name": "test4",
        "unicode": 4,
        "advanceWidth": 5,
        "pathData": [
            ['M', 2.5, 3.75],
            ['C', 2.5, 0, 5, 3.75, 5, 0],
            ['C', 2.5, 3.75, 0, 0, 0, 3.75],
            ['M', 2.5, 2.75],
            ['C', 2.5, 1, 1.25, 2.75, 1.25, 1],
            ['C', 2.5, 2.75, 3.75, 1, 3.75, 2.75]
        ]
    },
    {
        "name": "ison",
        "unicode": uniStart++,
        "advanceWidth": iw,
        "components": [
            // ison
            ['ison', 0, 0]
        ]
    },
    {
        "name": "ison.short",
        "unicode": uniStart++,
        "advanceWidth": 6.25,
        "components": [
            // ison-short
            ['ison-short', 0, 0]
        ]
    },
    {
        "name": "oligon",
        "unicode": uniStart++,
        "advanceWidth": ow,
        "components": [
            // oligon
            ['oligon', 0, 0]
        ]
    },
    {
        "name": "oligon.long",
        "unicode": uniStart++,
        "advanceWidth": olw,
        "components": [
            // oligon-long
            ['oligon-long', 0, 0]
        ]
    },
    {
        "name": "petaste",
        "unicode": uniStart++,
        "advanceWidth": pw,
        "components": [
            // petaste
            ['petaste', 0, 0]
        ]
    },
    {
        "name": "kentemata",
        "unicode": uniStart++,
        "advanceWidth": kw,
        "components": [
            // kentemata
            ['kentemata', 0, 0]
        ]
    },
    {
        "name": "kentema",
        "unicode": uniStart++,
        "advanceWidth": Kw,
        "components": [
            // kentema
            ['kentema', 0, 0]
        ]
    },
    {
        "name": "hypsele",
        "unicode": uniStart++,
        "advanceWidth": 3,
        "components": [
            // hypsele
            ['hypsele', 0, 0]
        ]
    },
    {
        "name": "apostrophos",
        "unicode": uniStart++,
        "advanceWidth": aw,
        "components": [
            // apostrophos
            ['apostrophos', 0, 0]
        ]
    },
    {
        "name": "hyporrhoe",
        "unicode": uniStart++,
        "advanceWidth": hpw,
        "components": [
            // hyporrhoe
            ['hyporrhoe', 0, 0]
        ]
    },
    {
        "name": "elaphron",
        "unicode": uniStart++,
        "advanceWidth": ew,
        "components": [
            // elaphron
            ['elaphron', 0, 0]
        ]
    },
    {
        "name": "elaphron.short",
        "unicode": uniStart++,
        "advanceWidth": 6.5,
        "components": [
            // elaphron-short
            ['elaphron-short', 0, 0]
        ]
    },
    {
        "name": "chamele",
        "unicode": uniStart++,
        "advanceWidth": chaw,
        "components": [
            // chamele
            ['chamele', 0, 0]
        ]
    },
    {
        "name": "chamele.short",
        "unicode": uniStart++,
        "advanceWidth": 6,
        "components": [
            // chamele-short
            ['chamele-short', 0, 0]
        ]
    },
    {
        "name": "klasma",
        "unicode": uniStart++,
        "advanceWidth": 3,
        "components": [
            // klasma
            ['klasma', 0, 0]
        ]
    },
    {
        "name": "haple",
        "unicode": uniStart++,
        "advanceWidth": 1,
        "components": [
            // haple
            ['haple', 0, 0]
        ]
    },
    {
        "name": "diple",
        "unicode": uniStart++,
        "advanceWidth": 2 * 1,
        "components": [
            // diple
            ['diple', 0, 0]
        ]
    },
    {
        "name": "triple",
        "unicode": uniStart++,
        "advanceWidth": 3 * 1,
        "components": [
            // triple
            ['triple', 0, 0]
        ]
    },
    {
        "name": "tetraple",
        "unicode": uniStart++,
        "advanceWidth": 4 * 1,
        "components": [
            // tetraple
            ['tetraple', 0, 0]
        ]
    },
    {
        "name": "bareia",
        "unicode": uniStart++,
        "advanceWidth": baw,
        "components": [
            // bareia
            ['bareia', 0, 0]
        ]
    },
    {
        "name": "psephiston",
        "unicode": uniStart++,
        "advanceWidth": 7.5,
        "components": [
            // psephiston
            ['psephiston', 0, 0]
        ]
    },
    {
        "name": "psephiston.long",
        "unicode": uniStart++,
        "advanceWidth": 8,
        "components": [
            // psephiston-long
            ['psephiston-long', 0, 0]
        ]
    },
    {
        "name": "homalon",
        "unicode": uniStart++,
        "advanceWidth": 7.5,
        "components": [
            // homalon
            ['homalon', 0, 0]
        ]
    },
    {
        "name": "homalon.long",
        "unicode": uniStart++,
        "advanceWidth": 8.5,
        "components": [
            // homalon-long
            ['homalon-long', 0, 0]
        ]
    },
    {
        "name": "antikenoma",
        "unicode": uniStart++,
        "advanceWidth": 7.5,
        "components": [
            // antikenoma
            ['antikenoma', 0, 0]
        ]
    },
    {
        "name": "antikenoma.short",
        "unicode": uniStart++,
        "advanceWidth": 6.5,
        "components": [
            // antikenoma-short
            ['antikenoma-short', 0, 0]
        ]
    },
    {
        "name": "heteron",
        "unicode": uniStart++,
        "advanceWidth": 7.5,
        "components": [
            // heteron
            ['heteron', 0, 0]
        ]
    },
    {
        "name": "heteron.long",
        "unicode": uniStart++,
        "advanceWidth": 8.5,
        "components": [
            // heteron-long
            ['heteron-long', 0, 0]
        ]
    },
    {
        "name": "endophonon",
        "unicode": uniStart++,
        "advanceWidth": 7.5,
        "components": [
            // endophonon
            ['endophonon', 0, 0],
            // ring-long
            ['ring-long', 2.25, -1.25],
            // haple 1
            ['haple', 2, 0.75],
            // haple 2
            ['haple', 4.75, 0.75]
        ]
    },
    {
        "name": "endophonon.short",
        "unicode": uniStart++,
        "advanceWidth": 6.5,
        "components": [
            // endophonon-short
            ['endophonon-short', 0, 0],
            // ring-long
            ['ring-long', 1.75, -1.25],
            // haple 1
            ['haple', 1.5, 0.75],
            // haple 2
            ['haple', 4.25, 0.75]
        ]
    },
    {
        "name": "ring",
        "unicode": uniStart++,
        "advanceWidth": 2,
        "components": [
            // ring
            ['ring', 0, 0]
        ]
    },
    {
        "name": "ring.long",
        "unicode": uniStart++,
        "advanceWidth": 3,
        "components": [
            // ring-long
            ['ring-long', 0, 0]
        ]
    },
    {
        "name": "gorgon",
        "unicode": uniStart++,
        "advanceWidth": 1.5,
        "components": [
            // gorgon
            ['gorgon', 0, 0]
        ]
    },
    {
        "name": "gorgon.short",
        "unicode": uniStart++,
        "advanceWidth": 1.25,
        "components": [
            // gorgon-short
            ['gorgon-short', 0, 0]
        ]
    }
);