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

glyphs_data.push(
    {
        "name": "ison_klasmaU",
        "unicode": uniStart++,
        "advanceWidth": iw,
        "components": [
            //--- ison ---
            ['ison', 0, 0],
            //--- klasma-u ---
            ['klasma', 2.5, kluy]
        ]
    },
    {
        "name": "oligon_klasmaU",
        "unicode": uniStart++,
        "advanceWidth": ow,
        "components": [
            //--- oligon ---
            ['oligon', 0, 0],
            //--- klasma-u ---
            ['klasma', 2.5, kluy]
        ]
    },
    {
        "name": "petaste_klasmaD",
        "unicode": uniStart++,
        "advanceWidth": pw,
        "components": [
            //--- petaste ---
            ['petaste', 0, 0],
            //--- klasma-d ---
            ['klasma', 3.75, kldy]
        ]
    },
    {
        "name": "apostrophos_klasmaU",
        "unicode": uniStart++,
        "advanceWidth": aw,
        "components": [
            //--- apostrophos ---
            ['apostrophos', 0, 0],
            //--- klasma-u ---
            ['klasma', 0.25, kluy]
        ]
    },
    {
        "name": "elaphron_klasmaU",
        "unicode": uniStart++,
        "advanceWidth": ew,
        "components": [
            //--- elaphron ---
            ['elaphron', 0, 0],
            //--- klasma-u ---
            ['klasma', 2.75, kluy]
        ]
    },
    {
        "name": "chamele_klasmaU",
        "unicode": uniStart++,
        "advanceWidth": chaw,
        "components": [
            //--- chamele ---
            ['chamele', 0, 0],
            //--- klasma-u ---
            ['klasma', 2, klu2y]
        ]
    },
    {
        "name": "apostrophos_hapleD",
        "unicode": uniStart++,
        "advanceWidth": aw,
        "components": [
            //--- apostrophos ---
            ['apostrophos', 0, 0],
            //--- haple-d ---
            ['haple', aw / 2, hapdy]
        ]
    },
    {
        "name": "hyporrhoe_hapleD2",
        "unicode": uniStart++,
        "advanceWidth": hpw,
        "components": [
            //--- hyporrhoe ---
            ['hyporrhoe', 0, 0],
            //--- haple-d2 ---
            ['haple', 0, hapd2y]
        ]
    },
    {
        "name": "ison_dipleD",
        "unicode": uniStart++,
        "advanceWidth": iw,
        "components": [
            //--- ison ---
            ['ison', 0, 0],
            //--- diple-d ---
            ['diple', iw / 2.25, hapdy]
        ]
    },
    {
        "name": "oligon_dipleD",
        "unicode": uniStart++,
        "advanceWidth": ow,
        "components": [
            //--- oligon ---
            ['oligon', 0, 0],
            //--- diple-d ---
            ['diple', ow / 2.5, hapdy]
        ]
    },
    {
        "name": "apostrophos_dipleD",
        "unicode": uniStart++,
        "advanceWidth": aw,
        "components": [
            //--- apostrophos ---
            ['apostrophos', 0, 0],
            //--- diple-d ---
            ['diple', aw / 3, hapdy]
        ]
    },
    {
        "name": "elaphron_dipleD",
        "unicode": uniStart++,
        "advanceWidth": ew,
        "components": [
            //--- elaphron ---
            ['elaphron', 0, 0],
            //--- diple-d ---
            ['diple', ew / 3, hapdy]
        ]
    },
    {
        "name": "ison_tripleD",
        "unicode": uniStart++,
        "advanceWidth": iw,
        "components": [
            //--- oligon ---
            ['ison', 0, 0],
            //--- triple-d ---
            ['triple', iw / 2.5, hapdy]
        ]
    },
    {
        "name": "apostrophos_tripleD",
        "unicode": uniStart++,
        "advanceWidth": aw,
        "components": [
            //--- apostrophos ---
            ['apostrophos', 0, 0],
            //--- triple-d ---
            ['triple', aw / 4, hapdy]
        ]
    },
    {
        "name": "apostrophos_tetrapleD",
        "unicode": uniStart++,
        "advanceWidth": aw,
        "components": [
            //--- apostrophos ---
            ['apostrophos', 0, 0],
            //--- tetraple-d ---
            ['tetraple', aw / 5, hapdy]
        ]
    },
    {
        "name": "bareia_ison",
        "unicode": uniStart++,
        "advanceWidth": baw + iw,
        "components": [
            //--- bareia ---
            ['bareia', 0, 0],
            //--- ison ---
            ['ison', baw, 0]
        ]
    },
    {
        "name": "bareia_oligon",
        "unicode": uniStart++,
        "advanceWidth": baw + ow,
        "components": [
            //--- bareia ---
            ['bareia', 0, 0],
            //--- oligon ---
            ['oligon', baw, 0]
        ]
    },
    {
        "name": "bareia_petaste",
        "unicode": uniStart++,
        "advanceWidth": baw + pw,
        "components": [
            //--- bareia ---
            ['bareia', 0, 0],
            //--- petaste ---
            ['petaste', baw, 0]
        ]
    },
    {
        "name": "bareia_apos_apos",
        "unicode": uniStart++,
        "advanceWidth": baw + 2 * aw,
        "components": [
            //--- bareia ---
            ['bareia', 0, 0],
            //--- apostrophos 1 ---
            ['apostrophos', baw, 0],
            //--- apostrophos 2 ---
            ['apostrophos', baw + aw, 0]
        ]
    },
    {
        "name": "bareia_apostrophoi",
        "unicode": uniStart++,
        "advanceWidth": baw + 2.5 + aw,
        "components": [
            //--- bareia ---
            ['bareia', 0, 0],
            //--- apostrophos-ul ---
            ['apostrophos', baw, 0.25],
            //--- apostrophos-dr ---
            ['apostrophos', baw + 2.5, adry]
        ]
    },
    {
        "name": "bareia_haple",
        "unicode": uniStart++,
        "advanceWidth": baw + hapw,
        "components": [
            //--- bareia ---
            ['bareia', 0, 0],
            //--- haple ---
            ['haple', baw, 0]
        ]
    },
    {
        "name": "bareia_diple",
        "unicode": uniStart++,
        "advanceWidth": baw + 2 * hapw,
        "components": [
            //--- bareia ---
            ['bareia', 0, 0],
            //--- diple ---
            ['diple', baw, 0]
        ]
    },
    {
        "name": "bareia_triple",
        "unicode": uniStart++,
        "advanceWidth": baw + 3 * hapw,
        "components": [
            //--- bareia ---
            ['bareia', 0, 0],
            //--- triple ---
            ['triple', baw, 0]
        ]
    },
    {
        "name": "bareia_tetraple",
        "unicode": uniStart++,
        "advanceWidth": baw + 4 * hapw,
        "components": [
            //--- bareia ---
            ['bareia', 0, 0],
            //--- tetraple ---
            ['tetraple', baw, 0]
        ]
    },
    {
        "name": "ison_psephistonD",
        "unicode": uniStart++,
        "advanceWidth": iw,
        "components": [
            //--- ison ---
            ['ison', 0, 0],
            //--- psephiston-d ---
            ['psephiston', psedx, psedy]
        ]
    },
    {
        "name": "oligon_psephistonD",
        "unicode": uniStart++,
        "advanceWidth": ow,
        "components": [
            //--- oligon ---
            ['oligon', 0, 0],
            //--- psephiston-long-d ---
            ['psephiston-long', psedx, psedy]
        ]
    },
    {
        "name": "peta_klasD_psefD2R",
        "unicode": uniStart++,
        "advanceWidth": pw,
        "components": [
            //--- petaste ---
            ['petaste', 0, 0],
            //--- klasma-d ---
            ['klasma', 3.75, kldy],
            //--- psephiston-long-d2r ---
            ['psephiston-long', psed2x, psed2y]
        ]
    },
    {
        "name": "olig_kentDR_psefD2R",
        "unicode": uniStart++,
        "advanceWidth": ow,
        "components": [
            //--- oligon ---
            ['oligon', 0, 0],
            //--- kentema-dr ---
            ['kentema', 5.25, -kuy],
            //--- psephiston-long-d2r ---
            ['psephiston-long', psed2x, psed2y]
        ]
    },
    {
        "name": "ison_homalonD",
        "unicode": uniStart++,
        "advanceWidth": iw,
        "components": [
            //--- ison ---
            ['ison', 0, 0],
            //--- homalon-d ---
            ['homalon', homdx, homdy]
        ]
    },
    {
        "name": "oligon_homalonD",
        "unicode": uniStart++,
        "advanceWidth": ow,
        "components": [
            //--- oligon ---
            ['oligon', 0, 0],
            //--- homalon-d ---
            ['homalon', homdx, homdy]
        ]
    },
    {
        "name": "apos_ison_homaDR",
        "unicode": uniStart++,
        "advanceWidth": aw + iw,
        "components": [
            //--- apostrophos ---
            ['apostrophos', 0, 0],
            //--- ison ---
            ['ison', aw, 0],
            //--- homalon-dr ---
            ['homalon', aw / 3 + homdx, homdy]
        ]
    },
    {
        "name": "olig_ken2DR_homaD2R",
        "unicode": uniStart++,
        "advanceWidth": ow,
        "components": [
            //--- oligon ---
            ['oligon', 0, 0],
            //--- kentemata-dr ---
            ['kentemata', 4.7, -kuy],
            //--- homalon-d2r ---
            ['homalon', homd2x, homd2y]
        ]
    },
    {
        "name": "oligon_antikenomaD",
        "unicode": uniStart++,
        "advanceWidth": ow,
        "components": [
            //--- oligon ---
            ['oligon', 0, 0],
            //--- antikenoma-d ---
            ['antikenoma', antdx, antdy]
        ]
    },
    {
        "name": "olig_kentDR_antiD2",
        "unicode": uniStart++,
        "advanceWidth": ow,
        "components": [
            //--- oligon ---
            ['oligon', 0, 0],
            //--- kentema-dr ---
            ['kentema', 5.25, -kuy],
            //--- antikenoma-d2 ---
            ['antikenoma', antd2x, antd2y]
        ]
    },
    {
        "name": "apos_apos_antiD_haplD2",
        "unicode": uniStart++,
        "advanceWidth": 2 * aw,
        "components": [
            //--- apostrophos 1 ---
            ['apostrophos', 0, 0],
            //--- apostrophos 2 ---
            ['apostrophos', aw, 0],
            //--- antikenoma-short-d ---
            ['antikenoma-short', - aw / 3, 0.75 * antdy],
            //--- haple-d2 ---
            ['haple', aw / 2, 1.5 * hapd2y]
        ]
    },
    {
        "name": "bare_peta_antiD_haplD2",
        "unicode": uniStart++,
        "advanceWidth": baw + pw,
        "components": [
            //--- bareia ---
            ['bareia', 0, 0],
            //--- petaste ---
            ['petaste', baw, 0],
            //--- antikenoma-d ---
            ['antikenoma', baw + pw / 4, antdy],
            //--- haple-d2 ---
            ['haple', pw, 1.75 * hapd2y]
        ]
    },
    {
        "name": "ison_apostrophosDR",
        "unicode": uniStart++,
        "advanceWidth": 5 + aw,
        "components": [
            //--- ison ---
            ['ison', 0, 0],
            //--- apostrophos-dr ---
            ['apostrophos', 5, adry]
        ]
    },
    {
        "name": "apostrophoi",
        "unicode": uniStart++,
        "advanceWidth": 2.5 + aw,
        "components": [
            //--- apostrophos-ul ---
            ['apostrophos', 0, 0.25],
            //--- apostrophos-dr ---
            ['apostrophos', 2.5, adry]
        ]
    },
    {
        "name": "apostrophos_hyporrhoe",
        "unicode": uniStart++,
        "advanceWidth": aw + hpw,
        "components": [
            //--- apostrophos ---
            ['apostrophos', 0, 0],
            //--- hyporrhoe-r ---
            ['hyporrhoe', aw, 0]
        ]
    },
    {
        "name": "synelaphron",
        "unicode": uniStart++,
        "advanceWidth": aw + ew,
        "components": [
            //--- apostrophos ---
            ['apostrophos', 0, 0],
            //--- elaphron-r ---
            ['elaphron', aw, 0]
        ]
    },
    {
        "name": "oligon_isonU",
        "unicode": uniStart++,
        "advanceWidth": ow,
        "components": [
            //--- oligon ---
            ['oligon', 0, 0],
            //--- ison-uc ---
            ['ison', 0, iuy]
        ]
    },
    {
        "name": "petaste_isonU",
        "unicode": uniStart++,
        "advanceWidth": pw,
        "components": [
            //--- petaste ---
            ['petaste', 0, 0],
            //--- ison-uc ---
            ['ison', 0, iuy + py]
        ]
    },
    {
        "name": "oligon_apostrophosU",
        "unicode": uniStart++,
        "advanceWidth": ow,
        "components": [
            //--- oligon ---
            ['oligon', 0, 0],
            //--- apostrophos-uc ---
            ['apostrophos', aucx, auy]
        ]
    },
    {
        "name": "petaste_apostrophosU",
        "unicode": uniStart++,
        "advanceWidth": pw,
        "components": [
            //--- petaste ---
            ['petaste', 0, 0],
            //--- apostrophos-uc ---
            ['apostrophos', aucx, auy + py]
        ]
    },
    {
        "name": "oligon_hyporrhoeU",
        "unicode": uniStart++,
        "advanceWidth": ow,
        "components": [
            //--- oligon ---
            ['oligon', 0, 0],
            //--- hyporrhoe-uc ---
            ['hyporrhoe', hpucx, hpuy]
        ]
    },
    {
        "name": "petaste_hyporrhoeU",
        "unicode": uniStart++,
        "advanceWidth": pw,
        "components": [
            //--- petaste ---
            ['petaste', 0, 0],
            //--- hyporrhoe-uc ---
            ['hyporrhoe', hpucx, hpuy + py]
        ]
    },
    {
        "name": "oligon_synelaphronU",
        "unicode": uniStart++,
        "advanceWidth": ow + aw,
        "components": [
            //--- oligon ---
            ['oligon', aw, 0],
            //--- elaphron-uc ---
            ['elaphron', aw, euy],
            //--- apostrophos-ul ---
            ['apostrophos', 0, euy]
        ]
    },
    {
        "name": "petaste_synelaphronU",
        "unicode": uniStart++,
        "advanceWidth": pw + aw,
        "components": [
            //--- petaste ---
            ['petaste', aw, 0],
            //--- elaphron-uc ---
            ['elaphron', aw, euy + py],
            //--- apostrophos-ul ---
            ['apostrophos', 0, euy + py]
        ]
    },
    {
        "name": "oligon_elaphronU",
        "unicode": uniStart++,
        "advanceWidth": ow,
        "components": [
            //--- oligon ---
            ['oligon', 0, 0],
            //--- elaphron-uc ---
            ['elaphron', 0, euy]
        ]
    },
    {
        "name": "petaste_elaphronU",
        "unicode": uniStart++,
        "advanceWidth": pw,
        "components": [
            //--- petaste ---
            ['petaste', 0, 0],
            //--- elaphron-uc ---
            ['elaphron', 0, euy + py]
        ]
    },
    {
        "name": "elaphron.d3",
        "unicode": uniStart++,
        "advanceWidth": ew,
        "components": [
            //--- elaphron ---
            ['elaphron', 0, 0],
            //--- apostrophos-dc ---
            ['apostrophos', adx, ady]
        ]
    },
    {
        "name": "oligon_elaphron.d3U",
        "unicode": uniStart++,
        "advanceWidth": ow,
        "components": [
            //--- oligon ---
            ['oligon', 0, 0],
            //--- elaphron-uc ---
            ['elaphron', 0, e3uy],
            //--- apostrophos-uc ---
            ['apostrophos', adx, e3uy + ady]
        ]
    },
    {
        "name": "petaste_elaphron.d3U",
        "unicode": uniStart++,
        "advanceWidth": pw,
        "components": [
            //--- petaste ---
            ['petaste', 0, 0],
            //--- elaphron-uc ---
            ['elaphron', 0, e3uy + py],
            //--- apostrophos-uc ---
            ['apostrophos', adx, e3uy + ady + py]
        ]
    },
    {
        "name": "oligon_chameleU",
        "unicode": uniStart++,
        "advanceWidth": ow,
        "components": [
            //--- oligon ---
            ['oligon', 0, 0],
            //--- chamele-uc ---
            ['chamele', 0, chauy]
        ]
    },
    {
        "name": "petaste_chameleU",
        "unicode": uniStart++,
        "advanceWidth": pw,
        "components": [
            //--- petaste ---
            ['petaste', 0, 0],
            //--- chamele-uc ---
            ['chamele', 0, chauy + py]
        ]
    },
    {
        "name": "chamele.d5",
        "unicode": uniStart++,
        "advanceWidth": chaw,
        "components": [
            //--- chamele ---
            ['chamele', 0, 0],
            //--- apostrophos-dc ---
            ['apostrophos', adx, edy]
        ]
    },
    {
        "name": "chamele.d6",
        "unicode": uniStart++,
        "advanceWidth": ew,
        "components": [
            //--- chamele ---
            ['chamele', 0, 0],
            //--- elaphron-dc ---
            ['elaphron', 0, edy]
        ]
    },
    {
        "name": "chamele.d7",
        "unicode": uniStart++,
        "advanceWidth": ew,
        "components": [
            //--- chamele ---
            ['chamele', 0, 0],
            //--- elaphron-dc ---
            ['elaphron', 0, edy],
            //--- apostrophos-dc ---
            ['apostrophos', adx, edy + ady]
        ]
    },
    {
        "name": "chamele.d8",
        "unicode": uniStart++,
        "advanceWidth": chaw,
        "components": [
            //--- chamele ---
            ['chamele', 0, 0],
            //--- chamele-uc ---
            ['chamele', 0, chauuy]
        ]
    },
    {
        "name": "chamele.d9",
        "unicode": uniStart++,
        "advanceWidth": chaw,
        "components": [
            //--- chamele ---
            ['chamele', 0, 0],
            //--- chamele-uc ---
            ['chamele', 0, chauuy],
            //--- apostrophos-dc ---
            ['apostrophos', adx, edy]
        ]
    },
    {
        "name": "chamele.d10",
        "unicode": uniStart++,
        "advanceWidth": ew,
        "components": [
            //--- chamele ---
            ['chamele', 0, 0],
            //--- chamele-uc ---
            ['chamele', 0, chauuy],
            //--- elaphron-dc ---
            ['elaphron', 0, edy]
        ]
    },
    {
        "name": "chamele.d11",
        "unicode": uniStart++,
        "advanceWidth": ew,
        "components": [
            //--- chamele ---
            ['chamele', 0, 0],
            //--- chamele-uc ---
            ['chamele', 0, chauuy],
            //--- elaphron-dc ---
            ['elaphron', 0, edy],
            //--- apostrophos-dc ---
            ['apostrophos', adx, edy + ady]
        ]
    },
    {
        "name": "chamele.d12",
        "unicode": uniStart++,
        "advanceWidth": chaw,
        "components": [
            //--- chamele ---
            ['chamele', 0, 0],
            //--- chamele-uc ---
            ['chamele', 0, chauuy],
            //--- chamele-uc ---
            ['chamele', 0, 2 * chauuy]
        ]
    },
    {
        "name": "chamele.d13",
        "unicode": uniStart++,
        "advanceWidth": chaw,
        "components": [
            //--- chamele ---
            ['chamele', 0, 0],
            //--- chamele-uc ---
            ['chamele', 0, chauuy],
            //--- chamele-uc ---
            ['chamele', 0, 2 * chauuy],
            //--- apostrophos-dc ---
            ['apostrophos', adx, edy]
        ]
    },
    {
        "name": "chamele.d14",
        "unicode": uniStart++,
        "advanceWidth": ew,
        "components": [
            //--- chamele ---
            ['chamele', 0, 0],
            //--- chamele-uc ---
            ['chamele', 0, chauuy],
            //--- chamele-uc ---
            ['chamele', 0, 2 * chauuy],
            //--- elaphron-dc ---
            ['elaphron', 0, edy]
        ]
    },
    {
        "name": "chamele.d15",
        "unicode": uniStart++,
        "advanceWidth": ew,
        "components": [
            //--- chamele ---
            ['chamele', 0, 0],
            //--- chamele-uc ---
            ['chamele', 0, chauuy],
            //--- chamele-uc ---
            ['chamele', 0, 2 * chauuy],
            //--- elaphron-dc ---
            ['elaphron', 0, edy],
            //--- apostrophos-dc ---
            ['apostrophos', adx, edy + ady],
        ]
    },
    {
        "name": "olig_isonUL_ken2UR",
        "unicode": uniStart++,
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
    {
        "name": "olig_aposUL_ken2UR",
        "unicode": uniStart++,
        "advanceWidth": ow,
        "components": [
            //--- oligon ---
            ['oligon', 0, 0],
            //--- apostrophos-ul ---
            ['apostrophos', 0.25, auy],
            //--- kentemata-ur ---
            ['kentemata', 4.4, kuy]
        ]
    },
    {
        "name": "olig_hypoUL_ken2UR",
        "unicode": uniStart++,
        "advanceWidth": ow,
        "components": [
            //--- oligon ---
            ['oligon', 0, 0],
            //--- hyporrhoe-ul ---
            ['hyporrhoe', 1.25, hpuy],
            //--- kentemata-ur ---
            ['kentemata', 4.4, kuy]
        ]
    },
    {
        "name": "olig_syneUL_ken2UR",
        "unicode": uniStart++,
        "advanceWidth": olw + aw,
        "components": [
            //--- oligon-long ---
            ['oligon-long', aw, 0],
            //--- elaphron-short-ul ---
            ['elaphron-short', aw - 0.5, euy],
            //--- kentemata-ur ---
            ['kentemata', aw + 6, kuy],
            //--- apostrophos-ul ---
            ['apostrophos', -0.5, euy]
        ]
    },
    {
        "name": "olig_elafUL_ken2UR",
        "unicode": uniStart++,
        "advanceWidth": olw,
        "components": [
            //--- oligon-long ---
            ['oligon-long', 0, 0],
            //--- elaphron-short-ul ---
            ['elaphron-short', -0.5, euy],
            //--- kentemata-ur ---
            ['kentemata', 6, kuy]
        ]
    },
    {
        "name": "olig_elaf.d3UL_ken2UR",
        "unicode": uniStart++,
        "advanceWidth": olw,
        "components": [
            //--- oligon-long ---
            ['oligon-long', 0, 0],
            //--- elaphron-short-ul ---
            ['elaphron-short', -0.5, e3uy],
            //--- apostrophos-uc ---
            ['apostrophos', adx - 0.75, e3uy + ady],
            //--- kentemata-ur ---
            ['kentemata', 6, kuy]
        ]
    },
    {
        "name": "olig_chamUL_ken2UR",
        "unicode": uniStart++,
        "advanceWidth": olw,
        "components": [
            //--- oligon-long ---
            ['oligon-long', 0, 0],
            //--- chamele-short-ul ---
            ['chamele-short', -0.25, chauy],
            //--- kentemata-ur ---
            ['kentemata', 6, kuy]
        ]
    },
    {
        "name": "oligon_kentemataDR",
        "unicode": uniStart++,
        "advanceWidth": ow,
        "components": [
            //--- oligon ---
            ['oligon', 0, 0],
            //--- kentemata-dr ---
            ['kentemata', 4.7, -kuy]
        ]
    },
    {
        "name": "oligon_kentemataU",
        "unicode": uniStart++,
        "advanceWidth": ow,
        "components": [
            //--- oligon ---
            ['oligon', 0, 0],
            //--- kentemata-uc ---
            ['kentemata', kucx, kuy]
        ]
    },
    {
        "name": "oligon_kentemaDR",
        "unicode": uniStart++,
        "advanceWidth": ow,
        "components": [
            //--- oligon ---
            ['oligon', 0, 0],
            //--- kentema-dr ---
            ['kentema', 5.25, -kuy]
        ]
    },
    {
        "name": "oligon_kentemaR",
        "unicode": uniStart++,
        "advanceWidth": Krx + Kw,
        "components": [
            //--- oligon ---
            ['oligon', 0, 0],
            //--- kentema-r ---
            ['kentema', Krx, 0]
        ]
    },
    {
        "name": "petaste_oligonU",
        "unicode": uniStart++,
        "advanceWidth": pw,
        "components": [
            //--- petaste ---
            ['petaste', 0, 0],
            //--- oligon-uc ---
            ['oligon', -0.5, ouy + py]
        ]
    },
    {
        "name": "olig_kentR_ken2U",
        "unicode": uniStart++,
        "advanceWidth": Krx + Kw,
        "components": [
            //--- oligon ---
            ['oligon', 0, 0],
            //--- kentema-r ---
            ['kentema', Krx, 0],
            //--- kentemata-uc ---
            ['kentemata', kucx, kuy]
        ]
    },
    {
        "name": "oligon.a3",
        "unicode": uniStart++,
        "advanceWidth": ow,
        "components": [
            //--- oligon ---
            ['oligon', 0, 0],
            //--- kentema-uc ---
            ['kentema', Kucx, kuy]
        ]
    },
    {
        "name": "petaste.a3",
        "unicode": uniStart++,
        "advanceWidth": pw,
        "components": [
            //--- petaste ---
            ['petaste', 0, 0],
            //--- kentema-uc ---
            ['kentema', Kucx, kuy + py]
        ]
    },
    {
        "name": "oligon.a4",
        "unicode": uniStart++,
        "advanceWidth": ow,
        "components": [
            //--- oligon ---
            ['oligon', 0, 0],
            //--- hypsele-r ---
            ['hypsele', hrx, hy]
        ]
    },
    {
        "name": "petaste.a4",
        "unicode": uniStart++,
        "advanceWidth": pw,
        "components": [
            //--- petaste ---
            ['petaste', 0, 0],
            //--- hypsele-r ---
            ['hypsele', hrx, hy + py]
        ]
    },
    {
        "name": "oligon.a4_kentemataUL",
        "unicode": uniStart++,
        "advanceWidth": ow,
        "components": [
            //--- oligon ---
            ['oligon', 0, 0],
            //--- hypsele-r ---
            ['hypsele', 5, hy],
            //--- kentemata-ul ---
            ['kentemata', kulx, kuy]
        ]
    },
    {
        "name": "oligon.a5",
        "unicode": uniStart++,
        "advanceWidth": ow,
        "components": [
            //--- oligon ---
            ['oligon', 0, 0],
            //--- hypsele-l ---
            ['hypsele', hlx, hy]
        ]
    },
    {
        "name": "petaste.a5",
        "unicode": uniStart++,
        "advanceWidth": pw,
        "components": [
            //--- petaste ---
            ['petaste', 0, 0],
            //--- hypsele-l ---
            ['hypsele', hlx, hy + py]
        ]
    },
    {
        "name": "oligon.a5_kentemataUR",
        "unicode": uniStart++,
        "advanceWidth": ow,
        "components": [
            //--- oligon ---
            ['oligon', 0, 0],
            //--- hypsele-l ---
            ['hypsele', 0.5, hy],
            //--- kentemata-ur ---
            ['kentemata', 4, kuy]
        ]
    },
    {
        "name": "oligon.a6",
        "unicode": uniStart++,
        "advanceWidth": ow,
        "components": [
            //--- oligon ---
            ['oligon', 0, 0],
            //--- hypsele-r ---
            ['hypsele', hrx, hy],
            //--- kentema-uc ---
            ['kentema', Kucx, kuy]
        ]
    },
    {
        "name": "petaste.a6",
        "unicode": uniStart++,
        "advanceWidth": pw,
        "components": [
            //--- petaste ---
            ['petaste', 0, 0],
            //--- hypsele-r ---
            ['hypsele', hrx, hy + py],
            //--- kentema-uc ---
            ['kentema', Kucx, kuy + py]
        ]
    },
    {
        "name": "oligon.a6_kentemataUL",
        "unicode": uniStart++,
        "advanceWidth": Krx + Kw,
        "components": [
            //--- oligon ---
            ['oligon', 0, 0],
            //--- hypsele-r ---
            ['hypsele', 5, hy],
            //--- kentema-r ---
            ['kentema', Krx, 0],
            //--- kentemata-ul ---
            ['kentemata', kulx, kuy]
        ]
    },
    {
        "name": "oligon.a7",
        "unicode": uniStart++,
        "advanceWidth": ow,
        "components": [
            //--- oligon ---
            ['oligon', 0, 0],
            //--- hypsele-uc ---
            ['hypsele', hucx, hucy],
            //--- kentema-uc ---
            ['kentema', Kucx, kuy]
        ]
    },
    {
        "name": "petaste.a7",
        "unicode": uniStart++,
        "advanceWidth": pw,
        "components": [
            //--- petaste ---
            ['petaste', 0, 0],
            //--- hypsele-uc ---
            ['hypsele', hucx, hucy + py],
            //--- kentema-uc ---
            ['kentema', Kucx, kuy + py]
        ]
    },
    {
        "name": "oligon.a8",
        "unicode": uniStart++,
        "advanceWidth": ow,
        "components": [
            //--- oligon ---
            ['oligon', 0, 0],
            //--- hypsele-l ---
            ['hypsele', hlx, hy],
            //--- hypsele-r ---
            ['hypsele', hrx, hy]
        ]
    },
    {
        "name": "petaste.a8",
        "unicode": uniStart++,
        "advanceWidth": pw,
        "components": [
            //--- petaste ---
            ['petaste', 0, 0],
            //--- hypsele-l ---
            ['hypsele', hlx, hy + py],
            //--- hypsele-r ---
            ['hypsele', hrx, hy + py]
        ]
    },
    {
        "name": "oligon.a9",
        "unicode": uniStart++,
        "advanceWidth": ow,
        "components": [
            //--- oligon ---
            ['oligon', 0, 0],
            //--- hypsele-r ---
            ['hypsele', hrx, hy],
            //--- hypsele-uc ---
            ['hypsele', hucx, hucy],
            //--- kentemata-uc ---
            ['kentemata', kucx, kuy]
        ]
    },
    {
        "name": "petaste.a9",
        "unicode": uniStart++,
        "advanceWidth": pw,
        "components": [
            //--- petaste ---
            ['petaste', 0, 0],
            //--- hypsele-r ---
            ['hypsele', hrx, hy + py],
            //--- hypsele-uc ---
            ['hypsele', hucx, hucy + py],
            //--- kentemata-uc ---
            ['kentemata', kucx, kuy + py]
        ]
    },
    {
        "name": "oligon.a10",
        "unicode": uniStart++,
        "advanceWidth": ow,
        "components": [
            //--- oligon ---
            ['oligon', 0, 0],
            //--- hypsele-r ---
            ['hypsele', hrx, hy],
            //--- hypsele-uc ---
            ['hypsele', hucx, hucy],
            //--- kentema-uc ---
            ['kentema', Kucx, kuy]
        ]
    },
    {
        "name": "petaste.a10",
        "unicode": uniStart++,
        "advanceWidth": pw,
        "components": [
            //--- petaste ---
            ['petaste', 0, 0],
            //--- hypsele-r ---
            ['hypsele', hrx, hy + py],
            //--- hypsele-uc ---
            ['hypsele', hucx, hucy + py],
            //--- kentema-uc ---
            ['kentema', Kucx, kuy + py]
        ]
    },
    {
        "name": "oligon.a11",
        "unicode": uniStart++,
        "advanceWidth": ow,
        "components": [
            //--- oligon ---
            ['oligon', 0, 0],
            //--- hypsele-l ---
            ['hypsele', hlx, hy],
            //--- hypsele-uc ---
            ['hypsele', hucx, hucy],
            //--- kentema-uc ---
            ['kentema', Kucx, kuy]
        ]
    },
    {
        "name": "petaste.a11",
        "unicode": uniStart++,
        "advanceWidth": pw,
        "components": [
            //--- petaste ---
            ['petaste', 0, 0],
            //--- hypsele-l ---
            ['hypsele', hlx, hy + py],
            //--- hypsele-uc ---
            ['hypsele', hucx, hucy + py],
            //--- kentema-uc ---
            ['kentema', Kucx, kuy + py]
        ]
    },
    {
        "name": "oligon.a12",
        "unicode": uniStart++,
        "advanceWidth": ow,
        "components": [
            //--- oligon ---
            ['oligon', 0, 0],
            //--- hypsele-l ---
            ['hypsele', hlx, hy],
            //--- hypsele-r ---
            ['hypsele', hrx, hy],
            //--- hypsele-c ---
            ['hypsele', hcx, hy]
        ]
    },
    {
        "name": "petaste.a12",
        "unicode": uniStart++,
        "advanceWidth": pw,
        "components": [
            //--- petaste ---
            ['petaste', 0, 0],
            //--- hypsele-l ---
            ['hypsele', hlx, hy + py],
            //--- hypsele-r ---
            ['hypsele', hrx, hy + py],
            //--- hypsele-c ---
            ['hypsele', hcx, hy + py]
        ]
    },
    {
        "name": "oligon.a13",
        "unicode": uniStart++,
        "advanceWidth": ow,
        "components": [
            //--- oligon ---
            ['oligon', 0, 0],
            //--- hypsele-l ---
            ['hypsele', hlx, hy],
            //--- hypsele-r ---
            ['hypsele', hrx, hy],
            //--- hypsele-uc ---
            ['hypsele', hucx, hucy],
            //--- kentemata-uc ---
            ['kentemata', kucx, kuy]
        ]
    },
    {
        "name": "petaste.a13",
        "unicode": uniStart++,
        "advanceWidth": pw,
        "components": [
            //--- petaste ---
            ['petaste', 0, 0],
            //--- hypsele-l ---
            ['hypsele', hlx, hy + py],
            //--- hypsele-r ---
            ['hypsele', hrx, hy + py],
            //--- hypsele-uc ---
            ['hypsele', hucx, hucy + py],
            //--- kentemata-uc ---
            ['kentemata', kucx, kuy + py]
        ]
    },
    {
        "name": "oligon.a14",
        "unicode": uniStart++,
        "advanceWidth": ow,
        "components": [
            //--- oligon ---
            ['oligon', 0, 0],
            //--- hypsele-l ---
            ['hypsele', hlx, hy],
            //--- hypsele-r ---
            ['hypsele', hrx, hy],
            //--- hypsele-uc ---
            ['hypsele', hucx, hucy],
            //--- kentema-uc ---
            ['kentema', Kucx, kuy]
        ]
    },
    {
        "name": "petaste.a14",
        "unicode": uniStart++,
        "advanceWidth": pw,
        "components": [
            //--- petaste ---
            ['petaste', 0, 0],
            //--- hypsele-l ---
            ['hypsele', hlx, hy + py],
            //--- hypsele-r ---
            ['hypsele', hrx, hy + py],
            //--- hypsele-uc ---
            ['hypsele', hucx, hucy + py],
            //--- kentema-uc ---
            ['kentema', Kucx, kuy + py]
        ]
    },
    {
        "name": "oligon.a15",
        "unicode": uniStart++,
        "advanceWidth": Krx + Kw,
        "components": [
            //--- oligon ---
            ['oligon', 0, 0],
            //--- hypsele-l ---
            ['hypsele', hlx, hy],
            //--- hypsele-r ---
            ['hypsele', hrx, hy],
            //--- hypsele-uc ---
            ['hypsele', hucx, hucy],
            //--- kentema-r ---
            ['kentema', Krx, 0],
            //--- kentemata-uc ---
            ['kentemata', kucx, kuy]
        ]
    },
    {
        "name": "petaste.a15",
        "unicode": uniStart++,
        "advanceWidth": pw,
        "components": [
            //--- petaste ---
            ['petaste', 0, 0],
            //--- oligon-uc ---
            ['oligon', -0.5, ouy + py],
            //--- hypsele-ul ---
            ['hypsele', hlx - 0.5, ouy + hy + py],
            //--- hypsele-ur ---
            ['hypsele', hrx - 0.5, ouy + hy + py],
            //--- hypsele-uc ---
            ['hypsele', hucx - 0.5, ouy + hucy + py],
            //--- kentema-uc ---
            ['kentema', Kucx - 0.5, ouy + kuy + py]
        ]
    }

);