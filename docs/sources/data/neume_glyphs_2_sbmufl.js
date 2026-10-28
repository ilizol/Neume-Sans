glyphs_data.push(
    //######### Characters of Quantity (U+E000 - U+E09F) ########
    //###### https://neanes.github.io/sbmufl/#/tables/quantity ######
    {
        "name": "ison",
        "unicode": 0xE000,
        "advanceWidth": 7.25,
        "components": [
            // ison
            ['ison', 0, 0]
        ]
    },
    {
        "name": "oligon",
        "unicode": 0xE001,
        "advanceWidth": 8,
        "components": [
            // oligon
            ['oligon', 0, 0]
        ]
    },
    {
        "name": "oligonKentimaMiddle",
        "unicode": 0xE002,
        "advanceWidth": Krx + Kw,
        "components": [
            //--- oligon ---
            ['oligon', 0, 0],
            //--- kentema-r ---
            ['kentema', Krx, 0]
        ]
    },
    {
        "name": "oligonKentimaBelow",
        "unicode": 0xE003,
        "advanceWidth": ow,
        "components": [
            //--- oligon ---
            ['oligon', 0, 0],
            //--- kentema-dr ---
            ['kentema', 5.25, -kuy]
        ]
    },
    //TODO add missing sbmufl glyphs
    //...
    {
        "name": "apostrofos",
        "unicode": 0xE021,
        "advanceWidth": aw,
        "components": [
            // apostrophos
            ['apostrophos', 0, 0]
        ]
    },
    {
        "name": "apostrofosSyndesmos",
        "unicode": 0xE022,
        "advanceWidth": 2.5 + aw,
        "components": [
            //--- apostrophos-ul ---
            ['apostrophos', 0, 0.25],
            //--- apostrophos-dr ---
            ['apostrophos', 2.5, adry]
        ]
    },
    //TODO add missing sbmufl glyphs
    //...
    {
        "name": "elafron",
        "unicode": 0xE024,
        "advanceWidth": ew,
        "components": [
            // elaphron
            ['elaphron', 0, 0]
        ]
    },
    //TODO add missing sbmufl glyphs
    //...
    {
        "name": "petastiIson",
        "unicode": 0xE040,
        "advanceWidth": pw,
        "components": [
            //--- petaste ---
            ['petaste', 0, 0],
            //--- ison-uc ---
            ['ison', 0, iuy + py]
        ]
    },
    {
        "name": "petasti",
        "unicode": 0xE041,
        "advanceWidth": pw,
        "components": [
            // petaste
            ['petaste', 0, 0]
        ]
    },
    //TODO add missing sbmufl glyphs
    //...
    {
        "name": "kentimata",
        "unicode": 0xE081,
        "advanceWidth": kw,
        "components": [
            // kentemata
            ['kentemata', 0, 0]
        ]
    },
    {
        "name": "oligonKentimataBelow",
        "unicode": 0xE082,
        "advanceWidth": ow,
        "components": [
            //--- oligon ---
            ['oligon', 0, 0],
            //--- kentemata-dr ---
            ['kentemata', 4.7, -kuy]
        ]
    },
    {
        "name": "oligonKentimataAbove",
        "unicode": 0xE083,
        "advanceWidth": ow,
        "components": [
            //--- oligon ---
            ['oligon', 0, 0],
            //--- kentemata-uc ---
            ['kentemata', kucx, kuy]
        ]
    },
    {
        "name": "oligonIsonKentimata",
        "unicode": 0xE084,
        "advanceWidth": olw,
        "components": [
            //--- oligon-long ---
            ['oligon-long', 0, 0],
            //--- ison-short-ul ---
            ['ison-short', -0.5, 1.5],
            //--- kentemata-ur ---
            ['kentemata', 5.75, kuy]
        ]
    },
    //TODO add missing sbmufl glyphs
    //...
    //######### Characters of Quality (U+E0A0 - U+E0CF) ########
    //###### https://neanes.github.io/sbmufl/#/tables/quality ######
    {
        "name": "vareia",
        "unicode": 0xE0A0,
        "advanceWidth": baw,
        "components": [
            // bareia
            ['bareia', 0, 0]
        ]
    },
    //TODO add missing sbmufl glyphs
    //...
);