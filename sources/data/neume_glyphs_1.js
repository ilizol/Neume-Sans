//--- ison ---
var iw = 7.25;
var iuy = 1.5;
//--- oligon ---
var ow = 8;
var ouy = 1.5;
//--- oligon-long ---
var olw = 9;
//--- petastie ---
var pw = 7.5;
var py = 0.5;
//--- kendimata ---
var kuy = 1.5;
//--- kendimata-ul ---
var kulx = 1.2;
//--- kendimata-uc ---
var kucx = 2.6;
//--- kendima ---
var Kw = 1.4;
//--- kendima-uc ---
var Kucx = 3.25;
//--- kendima-r ---
var Krx = ow;
//--- hypsilie ---
var hy = 1.5;
//--- hypsilie-l ---
var hlx = 0;
//--- hypsilie-r ---
var hrx = 5.7;
//--- hypsilie-c ---
var hcx = 2.8;
//--- hypsilie-uc ---
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
//--- hyporroe ---
var hpw = 1.8;
var hpuy = 1.7;
//--- hyporroe-uc ---
var hpucx = 3.1;
//--- elaphron ---
var ew = 7.5;
var euy = 1.85;
var e3uy = 2.15;
var edy = -2;
//--- hamilie ---
var haw = 6.5;
var hauy = 1.75;
var hauuy = 2.5;

glyphs_data.push(
  {
    "name": "ison+apostrophos",
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
    "name": "apostrophos+hyporroe",
    "unicode": uniStart++,
    "advanceWidth": aw + hpw,
    "components": [
      //--- apostrophos ---
      ['apostrophos', 0, 0],
      //--- hyporroe-r ---
      ['hyporroe', aw, 0]
    ]
  },
  {
    "name": "syn-elaphron",
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
    "name": "oligon+ison",
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
    "name": "petastie+ison",
    "unicode": uniStart++,
    "advanceWidth": pw,
    "components": [
      //--- petastie ---
      ['petastie', 0, 0],
      //--- ison-uc ---
      ['ison', 0, iuy + py]
    ]
  },
  {
    "name": "oligon+apostrophos",
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
    "name": "petastie+apostrophos",
    "unicode": uniStart++,
    "advanceWidth": pw,
    "components": [
      //--- petastie ---
      ['petastie', 0, 0],
      //--- apostrophos-uc ---
      ['apostrophos', aucx, auy + py]
    ]
  },
  {
    "name": "oligon+hyporroe",
    "unicode": uniStart++,
    "advanceWidth": ow,
    "components": [
      //--- oligon ---
      ['oligon', 0, 0],
      //--- hyporroe-uc ---
      ['hyporroe', hpucx, hpuy]
    ]
  },
  {
    "name": "petastie+hyporroe",
    "unicode": uniStart++,
    "advanceWidth": pw,
    "components": [
      //--- petastie ---
      ['petastie', 0, 0],
      //--- hyporroe-uc ---
      ['hyporroe', hpucx, hpuy + py]
    ]
  },
  {
    "name": "oligon+syn-elaphron",
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
    "name": "petastie+syn-elaphron",
    "unicode": uniStart++,
    "advanceWidth": pw + aw,
    "components": [
      //--- petastie ---
      ['petastie', aw, 0],
      //--- elaphron-uc ---
      ['elaphron', aw, euy + py],
      //--- apostrophos-ul ---
      ['apostrophos', 0, euy + py]
    ]
  },
  {
    "name": "oligon+elaphron",
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
    "name": "petastie+elaphron",
    "unicode": uniStart++,
    "advanceWidth": pw,
    "components": [
      //--- petastie ---
      ['petastie', 0, 0],
      //--- elaphron-uc ---
      ['elaphron', 0, euy + py]
    ]
  },
  {
    "name": "elaphron-3",
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
    "name": "oligon+elaphron-3",
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
    "name": "petastie+elaphron-3",
    "unicode": uniStart++,
    "advanceWidth": pw,
    "components": [
      //--- petastie ---
      ['petastie', 0, 0],
      //--- elaphron-uc ---
      ['elaphron', 0, e3uy + py],
      //--- apostrophos-uc ---
      ['apostrophos', adx, e3uy + ady + py]
    ]
  },
  {
    "name": "oligon+hamilie",
    "unicode": uniStart++,
    "advanceWidth": ow,
    "components": [
      //--- oligon ---
      ['oligon', 0, 0],
      //--- hamilie-uc ---
      ['hamilie', 0, hauy]
    ]
  },
  {
    "name": "petastie+hamilie",
    "unicode": uniStart++,
    "advanceWidth": pw,
    "components": [
      //--- petastie ---
      ['petastie', 0, 0],
      //--- hamilie-uc ---
      ['hamilie', 0, hauy + py]
    ]
  },
  {
    "name": "hamilie-5",
    "unicode": uniStart++,
    "advanceWidth": haw,
    "components": [
      //--- hamilie ---
      ['hamilie', 0, 0],
      //--- apostrophos-dc ---
      ['apostrophos', adx, edy]
    ]
  },
  {
    "name": "hamilie-6",
    "unicode": uniStart++,
    "advanceWidth": ew,
    "components": [
      //--- hamilie ---
      ['hamilie', 0, 0],
      //--- elaphron-dc ---
      ['elaphron', 0, edy]
    ]
  },
  {
    "name": "hamilie-7",
    "unicode": uniStart++,
    "advanceWidth": ew,
    "components": [
      //--- hamilie ---
      ['hamilie', 0, 0],
      //--- elaphron-dc ---
      ['elaphron', 0, edy],
      //--- apostrophos-dc ---
      ['apostrophos', adx, edy + ady]
    ]
  },
  {
    "name": "hamilie-8",
    "unicode": uniStart++,
    "advanceWidth": haw,
    "components": [
      //--- hamilie ---
      ['hamilie', 0, 0],
      //--- hamilie-uc ---
      ['hamilie', 0, hauuy]
    ]
  },
  {
    "name": "hamilie-9",
    "unicode": uniStart++,
    "advanceWidth": haw,
    "components": [
      //--- hamilie ---
      ['hamilie', 0, 0],
      //--- hamilie-uc ---
      ['hamilie', 0, hauuy],
      //--- apostrophos-dc ---
      ['apostrophos', adx, edy]
    ]
  },
  {
    "name": "hamilie-10",
    "unicode": uniStart++,
    "advanceWidth": ew,
    "components": [
      //--- hamilie ---
      ['hamilie', 0, 0],
      //--- hamilie-uc ---
      ['hamilie', 0, hauuy],
      //--- elaphron-dc ---
      ['elaphron', 0, edy]
    ]
  },
  {
    "name": "hamilie-11",
    "unicode": uniStart++,
    "advanceWidth": ew,
    "components": [
      //--- hamilie ---
      ['hamilie', 0, 0],
      //--- hamilie-uc ---
      ['hamilie', 0, hauuy],
      //--- elaphron-dc ---
      ['elaphron', 0, edy],
      //--- apostrophos-dc ---
      ['apostrophos', adx, edy + ady]
    ]
  },
  {
    "name": "hamilie-12",
    "unicode": uniStart++,
    "advanceWidth": haw,
    "components": [
      //--- hamilie ---
      ['hamilie', 0, 0],
      //--- hamilie-uc ---
      ['hamilie', 0, hauuy],
      //--- hamilie-uc ---
      ['hamilie', 0, 2 * hauuy]
    ]
  },
  {
    "name": "hamilie-13",
    "unicode": uniStart++,
    "advanceWidth": haw,
    "components": [
      //--- hamilie ---
      ['hamilie', 0, 0],
      //--- hamilie-uc ---
      ['hamilie', 0, hauuy],
      //--- hamilie-uc ---
      ['hamilie', 0, 2 * hauuy],
      //--- apostrophos-dc ---
      ['apostrophos', adx, edy]
    ]
  },
  {
    "name": "hamilie-14",
    "unicode": uniStart++,
    "advanceWidth": ew,
    "components": [
      //--- hamilie ---
      ['hamilie', 0, 0],
      //--- hamilie-uc ---
      ['hamilie', 0, hauuy],
      //--- hamilie-uc ---
      ['hamilie', 0, 2 * hauuy],
      //--- elaphron-dc ---
      ['elaphron', 0, edy]
    ]
  },
  {
    "name": "hamilie-15",
    "unicode": uniStart++,
    "advanceWidth": ew,
    "components": [
      //--- hamilie ---
      ['hamilie', 0, 0],
      //--- hamilie-uc ---
      ['hamilie', 0, hauuy],
      //--- hamilie-uc ---
      ['hamilie', 0, 2 * hauuy],
      //--- elaphron-dc ---
      ['elaphron', 0, edy],
      //--- apostrophos-dc ---
      ['apostrophos', adx, edy + ady],
    ]
  },
  {
    "name": "oligon+ison+1",
    "unicode": uniStart++,
    "advanceWidth": olw,
    "components": [
      //--- oligon-long ---
      ['oligon-long', 0, 0],
      //--- ison-short-ul ---
      ['ison-short', -0.5, 1.5],
      //--- kendimata-ur ---
      ['kendimata', 5.75, kuy]
    ]
  },
  {
    "name": "oligon+apostrophos+1",
    "unicode": uniStart++,
    "advanceWidth": ow,
    "components": [
      //--- oligon ---
      ['oligon', 0, 0],
      //--- apostrophos-ul ---
      ['apostrophos', 0.25, auy],
      //--- kendimata-ur ---
      ['kendimata', 4.4, kuy]
    ]
  },
  {
    "name": "oligon+hyporroe+1",
    "unicode": uniStart++,
    "advanceWidth": ow,
    "components": [
      //--- oligon ---
      ['oligon', 0, 0],
      //--- hyporroe-ul ---
      ['hyporroe', 1.25, hpuy],
      //--- kendimata-ur ---
      ['kendimata', 4.4, kuy]
    ]
  },
  {
    "name": "oligon+syn-elaphron+1",
    "unicode": uniStart++,
    "advanceWidth": olw + aw,
    "components": [
      //--- oligon-long ---
      ['oligon-long', aw, 0],
      //--- elaphron-short-ul ---
      ['elaphron-short', aw - 0.5, euy],
      //--- kendimata-ur ---
      ['kendimata', aw + 6, kuy],
      //--- apostrophos-ul ---
      ['apostrophos', -0.5, euy]
    ]
  },
  {
    "name": "oligon+elaphron+1",
    "unicode": uniStart++,
    "advanceWidth": olw,
    "components": [
      //--- oligon-long ---
      ['oligon-long', 0, 0],
      //--- elaphron-short-ul ---
      ['elaphron-short', -0.5, euy],
      //--- kendimata-ur ---
      ['kendimata', 6, kuy]
    ]
  },
  {
    "name": "oligon+elaphron-3+1",
    "unicode": uniStart++,
    "advanceWidth": olw,
    "components": [
      //--- oligon-long ---
      ['oligon-long', 0, 0],
      //--- elaphron-short-ul ---
      ['elaphron-short', -0.5, e3uy],
      //--- apostrophos-uc ---
      ['apostrophos', adx - 0.75, e3uy + ady],
      //--- kendimata-ur ---
      ['kendimata', 6, kuy]
    ]
  },
  {
    "name": "oligon+hamilie+1",
    "unicode": uniStart++,
    "advanceWidth": olw,
    "components": [
      //--- oligon-long ---
      ['oligon-long', 0, 0],
      //--- hamilie-short-ul ---
      ['hamilie-short', -0.25, hauy],
      //--- kendimata-ur ---
      ['kendimata', 6, kuy]
    ]
  },
  {
    "name": "kendimata+oligon",
    "unicode": uniStart++,
    "advanceWidth": ow,
    "components": [
      //--- oligon ---
      ['oligon', 0, 0],
      //--- kendimata-dr ---
      ['kendimata', 4.7, -kuy]
    ]
  },
  {
    "name": "oligon+kendimata",
    "unicode": uniStart++,
    "advanceWidth": ow,
    "components": [
      //--- oligon ---
      ['oligon', 0, 0],
      //--- kendimata-uc ---
      ['kendimata', kucx, kuy]
    ]
  },
  {
    "name": "kendima+oligon",
    "unicode": uniStart++,
    "advanceWidth": ow,
    "components": [
      //--- oligon ---
      ['oligon', 0, 0],
      //--- kendima-dr ---
      ['kendima', 5.25, -kuy]
    ]
  },
  {
    "name": "oligon+2",
    "unicode": uniStart++,
    "advanceWidth": Krx + Kw,
    "components": [
      //--- oligon ---
      ['oligon', 0, 0],
      //--- kendima-r ---
      ['kendima', Krx, 0]
    ]
  },
  {
    "name": "petatie+2",
    "unicode": uniStart++,
    "advanceWidth": pw,
    "components": [
      //--- petastie ---
      ['petastie', 0, 0],
      //--- oligon-uc ---
      ['oligon', -0.5, ouy + py]
    ]
  },
  {
    "name": "oligon+2+kendimata",
    "unicode": uniStart++,
    "advanceWidth": Krx + Kw,
    "components": [
      //--- oligon ---
      ['oligon', 0, 0],
      //--- kendima-r ---
      ['kendima', Krx, 0],
      //--- kendimata-uc ---
      ['kendimata', kucx, kuy]
    ]
  },
  {
    "name": "oligon+3",
    "unicode": uniStart++,
    "advanceWidth": ow,
    "components": [
      //--- oligon ---
      ['oligon', 0, 0],
      //--- kendima-uc ---
      ['kendima', Kucx, kuy]
    ]
  },
  {
    "name": "petastie+3",
    "unicode": uniStart++,
    "advanceWidth": pw,
    "components": [
      //--- petastie ---
      ['petastie', 0, 0],
      //--- kendima-uc ---
      ['kendima', Kucx, kuy + py]
    ]
  },
  {
    "name": "oligon+4",
    "unicode": uniStart++,
    "advanceWidth": ow,
    "components": [
      //--- oligon ---
      ['oligon', 0, 0],
      //--- hypsilie-r ---
      ['hypsilie', hrx, hy]
    ]
  },
  {
    "name": "petastie+4",
    "unicode": uniStart++,
    "advanceWidth": pw,
    "components": [
      //--- petastie ---
      ['petastie', 0, 0],
      //--- hypsilie-r ---
      ['hypsilie', hrx, hy + py]
    ]
  },
  {
    "name": "oligon+4+kendimata",
    "unicode": uniStart++,
    "advanceWidth": ow,
    "components": [
      //--- oligon ---
      ['oligon', 0, 0],
      //--- hypsilie-r ---
      ['hypsilie', 5, hy],
      //--- kendimata-ul ---
      ['kendimata', kulx, kuy]
    ]
  },
  {
    "name": "oligon+5",
    "unicode": uniStart++,
    "advanceWidth": ow,
    "components": [
      //--- oligon ---
      ['oligon', 0, 0],
      //--- hypsilie-l ---
      ['hypsilie', hlx, hy]
    ]
  },
  {
    "name": "petastie+5",
    "unicode": uniStart++,
    "advanceWidth": pw,
    "components": [
      //--- petastie ---
      ['petastie', 0, 0],
      //--- hypsilie-l ---
      ['hypsilie', hlx, hy + py]
    ]
  },
  {
    "name": "oligon+5+kendimata",
    "unicode": uniStart++,
    "advanceWidth": ow,
    "components": [
      //--- oligon ---
      ['oligon', 0, 0],
      //--- hypsilie-l ---
      ['hypsilie', 0.5, hy],
      //--- kendimata-ur ---
      ['kendimata', 4, kuy]
    ]
  },
  {
    "name": "oligon+6",
    "unicode": uniStart++,
    "advanceWidth": ow,
    "components": [
      //--- oligon ---
      ['oligon', 0, 0],
      //--- hypsilie-r ---
      ['hypsilie', hrx, hy],
      //--- kendima-uc ---
      ['kendima', Kucx, kuy]
    ]
  },
  {
    "name": "petastie+6",
    "unicode": uniStart++,
    "advanceWidth": pw,
    "components": [
      //--- petastie ---
      ['petastie', 0, 0],
      //--- hypsilie-r ---
      ['hypsilie', hrx, hy + py],
      //--- kendima-uc ---
      ['kendima', Kucx, kuy + py]
    ]
  },
  {
    "name": "oligon+6+kendimata",
    "unicode": uniStart++,
    "advanceWidth": Krx + Kw,
    "components": [
      //--- oligon ---
      ['oligon', 0, 0],
      //--- hypsilie-r ---
      ['hypsilie', 5, hy],
      //--- kendima-r ---
      ['kendima', Krx, 0],
      //--- kendimata-ul ---
      ['kendimata', kulx, kuy]
    ]
  },
  {
    "name": "oligon+7",
    "unicode": uniStart++,
    "advanceWidth": ow,
    "components": [
      //--- oligon ---
      ['oligon', 0, 0],
      //--- hypsilie-uc ---
      ['hypsilie', hucx, hucy],
      //--- kendima-uc ---
      ['kendima', Kucx, kuy]
    ]
  },
  {
    "name": "petastie+7",
    "unicode": uniStart++,
    "advanceWidth": pw,
    "components": [
      //--- petastie ---
      ['petastie', 0, 0],
      //--- hypsilie-uc ---
      ['hypsilie', hucx, hucy + py],
      //--- kendima-uc ---
      ['kendima', Kucx, kuy + py]
    ]
  },
  {
    "name": "oligon+8",
    "unicode": uniStart++,
    "advanceWidth": ow,
    "components": [
      //--- oligon ---
      ['oligon', 0, 0],
      //--- hypsilie-l ---
      ['hypsilie', hlx, hy],
      //--- hypsilie-r ---
      ['hypsilie', hrx, hy]
    ]
  },
  {
    "name": "petastie+8",
    "unicode": uniStart++,
    "advanceWidth": pw,
    "components": [
      //--- petastie ---
      ['petastie', 0, 0],
      //--- hypsilie-l ---
      ['hypsilie', hlx, hy + py],
      //--- hypsilie-r ---
      ['hypsilie', hrx, hy + py]
    ]
  },
  {
    "name": "oligon+9",
    "unicode": uniStart++,
    "advanceWidth": ow,
    "components": [
      //--- oligon ---
      ['oligon', 0, 0],
      //--- hypsilie-r ---
      ['hypsilie', hrx, hy],
      //--- hypsilie-uc ---
      ['hypsilie', hucx, hucy],
      //--- kendimata-uc ---
      ['kendimata', kucx, kuy]
    ]
  },
  {
    "name": "petastie+9",
    "unicode": uniStart++,
    "advanceWidth": pw,
    "components": [
      //--- petastie ---
      ['petastie', 0, 0],
      //--- hypsilie-r ---
      ['hypsilie', hrx, hy + py],
      //--- hypsilie-uc ---
      ['hypsilie', hucx, hucy + py],
      //--- kendimata-uc ---
      ['kendimata', kucx, kuy + py]
    ]
  },
  {
    "name": "oligon+10",
    "unicode": uniStart++,
    "advanceWidth": ow,
    "components": [
      //--- oligon ---
      ['oligon', 0, 0],
      //--- hypsilie-r ---
      ['hypsilie', hrx, hy],
      //--- hypsilie-uc ---
      ['hypsilie', hucx, hucy],
      //--- kendima-uc ---
      ['kendima', Kucx, kuy]
    ]
  },
  {
    "name": "petastie+10",
    "unicode": uniStart++,
    "advanceWidth": pw,
    "components": [
      //--- petastie ---
      ['petastie', 0, 0],
      //--- hypsilie-r ---
      ['hypsilie', hrx, hy + py],
      //--- hypsilie-uc ---
      ['hypsilie', hucx, hucy + py],
      //--- kendima-uc ---
      ['kendima', Kucx, kuy + py]
    ]
  },
  {
    "name": "oligon+11",
    "unicode": uniStart++,
    "advanceWidth": ow,
    "components": [
      //--- oligon ---
      ['oligon', 0, 0],
      //--- hypsilie-l ---
      ['hypsilie', hlx, hy],
      //--- hypsilie-uc ---
      ['hypsilie', hucx, hucy],
      //--- kendima-uc ---
      ['kendima', Kucx, kuy]
    ]
  },
  {
    "name": "petastie+11",
    "unicode": uniStart++,
    "advanceWidth": pw,
    "components": [
      //--- petastie ---
      ['petastie', 0, 0],
      //--- hypsilie-l ---
      ['hypsilie', hlx, hy + py],
      //--- hypsilie-uc ---
      ['hypsilie', hucx, hucy + py],
      //--- kendima-uc ---
      ['kendima', Kucx, kuy + py]
    ]
  },
  {
    "name": "oligon+12",
    "unicode": uniStart++,
    "advanceWidth": ow,
    "components": [
      //--- oligon ---
      ['oligon', 0, 0],
      //--- hypsilie-l ---
      ['hypsilie', hlx, hy],
      //--- hypsilie-r ---
      ['hypsilie', hrx, hy],
      //--- hypsilie-c ---
      ['hypsilie', hcx, hy]
    ]
  },
  {
    "name": "petastie+12",
    "unicode": uniStart++,
    "advanceWidth": pw,
    "components": [
      //--- petastie ---
      ['petastie', 0, 0],
      //--- hypsilie-l ---
      ['hypsilie', hlx, hy + py],
      //--- hypsilie-r ---
      ['hypsilie', hrx, hy + py],
      //--- hypsilie-c ---
      ['hypsilie', hcx, hy + py]
    ]
  },
  {
    "name": "oligon+13",
    "unicode": uniStart++,
    "advanceWidth": ow,
    "components": [
      //--- oligon ---
      ['oligon', 0, 0],
      //--- hypsilie-l ---
      ['hypsilie', hlx, hy],
      //--- hypsilie-r ---
      ['hypsilie', hrx, hy],
      //--- hypsilie-uc ---
      ['hypsilie', hucx, hucy],
      //--- kendimata-uc ---
      ['kendimata', kucx, kuy]
    ]
  },
  {
    "name": "petastie+13",
    "unicode": uniStart++,
    "advanceWidth": pw,
    "components": [
      //--- petastie ---
      ['petastie', 0, 0],
      //--- hypsilie-l ---
      ['hypsilie', hlx, hy + py],
      //--- hypsilie-r ---
      ['hypsilie', hrx, hy + py],
      //--- hypsilie-uc ---
      ['hypsilie', hucx, hucy + py],
      //--- kendimata-uc ---
      ['kendimata', kucx, kuy + py]
    ]
  },
  {
    "name": "oligon+14",
    "unicode": uniStart++,
    "advanceWidth": ow,
    "components": [
      //--- oligon ---
      ['oligon', 0, 0],
      //--- hypsilie-l ---
      ['hypsilie', hlx, hy],
      //--- hypsilie-r ---
      ['hypsilie', hrx, hy],
      //--- hypsilie-uc ---
      ['hypsilie', hucx, hucy],
      //--- kendima-uc ---
      ['kendima', Kucx, kuy]
    ]
  },
  {
    "name": "petastie+14",
    "unicode": uniStart++,
    "advanceWidth": pw,
    "components": [
      //--- petastie ---
      ['petastie', 0, 0],
      //--- hypsilie-l ---
      ['hypsilie', hlx, hy + py],
      //--- hypsilie-r ---
      ['hypsilie', hrx, hy + py],
      //--- hypsilie-uc ---
      ['hypsilie', hucx, hucy + py],
      //--- kendima-uc ---
      ['kendima', Kucx, kuy + py]
    ]
  },
  {
    "name": "oligon+15",
    "unicode": uniStart++,
    "advanceWidth": Krx + Kw,
    "components": [
      //--- oligon ---
      ['oligon', 0, 0],
      //--- hypsilie-l ---
      ['hypsilie', hlx, hy],
      //--- hypsilie-r ---
      ['hypsilie', hrx, hy],
      //--- hypsilie-uc ---
      ['hypsilie', hucx, hucy],
      //--- kendima-r ---
      ['kendima', Krx, 0],
      //--- kendimata-uc ---
      ['kendimata', kucx, kuy]
    ]
  },
  {
    "name": "petastie+15",
    "unicode": uniStart++,
    "advanceWidth": pw,
    "components": [
      //--- petastie ---
      ['petastie', 0, 0],
      //--- oligon-uc ---
      ['oligon', -0.5, ouy + py],
      //--- hypsilie-ul ---
      ['hypsilie', hlx - 0.5, ouy + hy + py],
      //--- hypsilie-ur ---
      ['hypsilie', hrx - 0.5, ouy + hy + py],
      //--- hypsilie-uc ---
      ['hypsilie', hucx - 0.5, ouy + hucy + py],
      //--- kendima-uc ---
      ['kendima', Kucx - 0.5, ouy + kuy + py]
    ]
  }

);