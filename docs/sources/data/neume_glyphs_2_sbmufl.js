glyphs_data.push(
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
);