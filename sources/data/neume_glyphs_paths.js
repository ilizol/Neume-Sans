//--- kentimata-2 ---
var k2x = 1.4;
//--- haple ---
var hapw = 1;

var glyphs_paths_data = {
    "ison": [
        ['M', 5.5, 0],
        ['C', 1, 2, -0.75, -0.25, -0.75, 2.5],
        ['C', 1.5, 0.8, 2.5, 1.5, 0, 1.5],
        ['C', 6.75, 0.6, 3, 0.4, 6, 1],
        ['C', 6.8, 0, 7.25, 0.3, 7.5, -0.3]
    ],
    "ison-short": [
        ['M', 5.5, 0],
        ['C', 1, 2, -0.75, -0.25, -0.75, 2.5],
        ['C', 1.5, 0.8, 2.5, 1.5, 0, 1.5],
        ['C', 5.75, 0.6, 3, 0.4, 5, 1],
        ['C', 5.8, 0, 6.25, 0.3, 6.5, -0.3]
    ],
    "oligon": [
        ['M', 0.75, 0],
        ['C', 0.3, 0.8, 0, 0.1, -0.2, 1.1],
        ['L', 7.25, 0.8],
        ['C', 7.7, 0, 8, 0.7, 8.2, -0.3]
    ],
    "oligon-long": [
        ['M', 0.75, 0],
        ['C', 0.3, 0.8, 0, 0.1, -0.2, 1.1],
        ['L', 8.25, 0.8],
        ['C', 8.7, 0, 9, 0.7, 9.2, -0.3]
    ],
    "petaste": [
        ['M', 0, 1.3],
        ['C', 1.75, 1.3, 0.25, 1.5, 1.25, 1.5],
        ['C', 6, 1.3, 3.75, 0, 7.5, 0],
        ['C', 7.25, 1.3, 6.25, 1.4, 7, 1.4],
        ['C', 0, 1.3, 8.5, -1.5, 4.5, -1.25]
    ],
    "kentima": [
        ['M', 0.1, 0.9],
        ['C', 0.2, 1.1, -0.2, 1.1, 0.1, 1.1],
        ['L', 0.65, 1.1],
        ['C', 1, 0.9, 0.9, 1.1, 0.9, 1.1],
        ['L', 1.3, 0],
        ['C', 1.2, -0.2, 1.6, -0.2, 1.3, -0.2],
        ['L', 0.75, -0.2],
        ['C', 0.4, 0, 0.5, -0.2, 0.5, -0.2]
    ],
    "kentimata": [
        // kentima 1
        ['M', 0.1, 0.9],
        ['C', 0.2, 1.1, -0.2, 1.1, 0.1, 1.1],
        ['L', 0.65, 1.1],
        ['C', 1, 0.9, 0.9, 1.1, 0.9, 1.1],
        ['L', 1.3, 0],
        ['C', 1.2, -0.2, 1.6, -0.2, 1.3, -0.2],
        ['L', 0.75, -0.2],
        ['C', 0.4, 0, 0.5, -0.2, 0.5, -0.2],
        // kentima 2
        ['M', 0.1 + k2x, 0.9],
        ['C', 0.2 + k2x, 1.1, -0.2 + k2x, 1.1, 0.1 + k2x, 1.1],
        ['L', 0.65 + k2x, 1.1],
        ['C', 1 + k2x, 0.9, 0.9 + k2x, 1.1, 0.9 + k2x, 1.1],
        ['L', 1.3 + k2x, 0],
        ['C', 1.2 + k2x, -0.2, 1.6 + k2x, -0.2, 1.3 + k2x, -0.2],
        ['L', 0.75 + k2x, -0.2],
        ['C', 0.4 + k2x, 0, 0.5 + k2x, -0.2, 0.5 + k2x, -0.2]
    ],
    "hypsile": [
        ['M', 0, 0],
        ['C', 2, 2.5, 1.5, 2.25, 1, 2.5],
        ['L', 2.85, 2.5],
        ['L', 1.5, 0.75],
        ['C', 1.75, 0.3, 1.2, 0.3, 1.1, 0.25],
        ['C', 1.75, 0, 1.85, 0.2, 1.85, 0.1]
    ],
    "apostrophos": [
        ['M', 1.75, 0],
        ['C', 0, 1.1, 2.5, 0.75, 2.1, 0.5],
        ['C', 0.4, 1.4, 0.1, 1.4, 0.3, 1.4],
        ['C', 2.75, -0.1, 3, 0.85, 3.9, 0.8],
        ['C', 1.75, 0, 2.5, -0.15, 2, -0.15]
    ],
    "hyporroe": [
        ['M', 0.1, -0.2],
        ['C', 0.2, -0.4, -0.2, -0.4, 0.1, -0.4],
        ['L', 0.75, -0.4],
        ['C', 1.1, -0.2, 1, -0.4, 1, -0.4],
        ['L', 1.7, 0.8],
        ['C', 1.6, 1, 2, 1, 1.7, 1],
        ['L', 1.05, 1],
        ['C', 0.7, 0.8, 0.8, 1, 0.8, 1]
    ],
    "elaphron": [
        ['M', 0.25, -0.3],
        ['C', 7.5, -0.4, -1, 2.5, 3.5, 2.25],
        ['C', 5.75, -0.3, 7, -0.5, 6.25, -0.5],
        ['C', 1.5, -0.3, 3, 1.5, 0.75, 1],
        ['C', 0.25, -0.3, 1, -0.4, 0.75, -0.4]
    ],
    "elaphron-short": [
        ['M', 0.25, -0.3],
        ['C', 6.5, -0.4, -1, 2.5, 3.5, 2.25],
        ['C', 5, -0.3, 6, -0.5, 5.25, -0.5],
        ['C', 1.5, -0.3, 3, 1.5, 0.75, 1],
        ['C', 0.25, -0.3, 1, -0.4, 0.75, -0.4]
    ],
    "chamele": [
        ['M', 0, 2],
        ['C', 2, 0, 1.25, 0, 1.25, 0],
        ['L', 6.25, 0],
        ['C', 6, 0.75, 6.75, -0.25, 6.25, 0.75],
        ['L', 4, 0.75],
        ['C', 1.5, 2, 3, 0.75, 1.75, 0.5],
        ['C', 0, 2, 1, 2.1, 0.5, 2.1],
        // diagonal line
        ['M', 4.75, -0.5],
        ['C', 5.5, -0.5, 5, -0.55, 5.25, -0.55],
        ['L', 4.75, 1.25],
        ['C', 4, 1.25, 4.25, 1.3, 4.5, 1.3]
    ],
    "chamele-short": [
        ['M', 0, 2],
        ['C', 2, 0, 1.25, 0, 1.25, 0],
        ['L', 5.75, 0],
        ['C', 5.5, 0.75, 6.25, -0.25, 5.75, 0.75],
        ['L', 4, 0.75],
        ['C', 1.5, 2, 3, 0.75, 1.75, 0.5],
        ['C', 0, 2, 1, 2.1, 0.5, 2.1],
        // diagonal line
        ['M', 4.25, -0.5],
        ['C', 5, -0.5, 4.5, -0.55, 4.75, -0.55],
        ['L', 4.25, 1.25],
        ['C', 3.5, 1.25, 3.75, 1.3, 4, 1.3]
    ],
    "klasma": [
        ['M', 0.1, 0.5],
        ['C', 2, 0.7, 4, -1.5, 3, 1],
        ['C', 0.2, 0.75, 2.25, 0, 1, 0.25],
        ['C', 0.1, 0.5, 0.05, 0.7, 0, 0.55]
    ],
    "haple": [
        ['M', 0.05, 0.2],
        ['C', 0.2, 0, -0.1, 0, 0.1, 0],
        ['L', 0.5, 0],
        ['C', 0.8, 0.2, 0.7, 0, 0.7, 0],
        ['L', 0.85, 0.3],
        ['C', 0.7, 0.5, 1, 0.5, 0.8, 0.5],
        ['L', 0.4, 0.5],
        ['C', 0.1, 0.3, 0.2, 0.5, 0.2, 0.5]
    ],
    "diple": [
        // haple 1
        ['M', 0.05, 0.2],
        ['C', 0.2, 0, -0.1, 0, 0.1, 0],
        ['L', 0.5, 0],
        ['C', 0.8, 0.2, 0.7, 0, 0.7, 0],
        ['L', 0.85, 0.3],
        ['C', 0.7, 0.5, 1, 0.5, 0.8, 0.5],
        ['L', 0.4, 0.5],
        ['C', 0.1, 0.3, 0.2, 0.5, 0.2, 0.5],
        // haple 2
        ['M', 0.05 + hapw, 0.2],
        ['C', 0.2 + hapw, 0, -0.1 + hapw, 0, 0.1 + hapw, 0],
        ['L', 0.5 + hapw, 0],
        ['C', 0.8 + hapw, 0.2, 0.7 + hapw, 0, 0.7 + hapw, 0],
        ['L', 0.85 + hapw, 0.3],
        ['C', 0.7 + hapw, 0.5, 1 + hapw, 0.5, 0.8 + hapw, 0.5],
        ['L', 0.4 + hapw, 0.5],
        ['C', 0.1 + hapw, 0.3, 0.2 + hapw, 0.5, 0.2 + hapw, 0.5]
    ],
    "triple": [
        // haple 1
        ['M', 0.05, 0.2],
        ['C', 0.2, 0, -0.1, 0, 0.1, 0],
        ['L', 0.5, 0],
        ['C', 0.8, 0.2, 0.7, 0, 0.7, 0],
        ['L', 0.85, 0.3],
        ['C', 0.7, 0.5, 1, 0.5, 0.8, 0.5],
        ['L', 0.4, 0.5],
        ['C', 0.1, 0.3, 0.2, 0.5, 0.2, 0.5],
        // haple 2
        ['M', 0.05 + hapw, 0.2],
        ['C', 0.2 + hapw, 0, -0.1 + hapw, 0, 0.1 + hapw, 0],
        ['L', 0.5 + hapw, 0],
        ['C', 0.8 + hapw, 0.2, 0.7 + hapw, 0, 0.7 + hapw, 0],
        ['L', 0.85 + hapw, 0.3],
        ['C', 0.7 + hapw, 0.5, 1 + hapw, 0.5, 0.8 + hapw, 0.5],
        ['L', 0.4 + hapw, 0.5],
        ['C', 0.1 + hapw, 0.3, 0.2 + hapw, 0.5, 0.2 + hapw, 0.5],
        // haple 3
        ['M', 0.05 + 2 * hapw, 0.2],
        ['C', 0.2 + 2 * hapw, 0, -0.1 + 2 * hapw, 0, 0.1 + 2 * hapw, 0],
        ['L', 0.5 + 2 * hapw, 0],
        ['C', 0.8 + 2 * hapw, 0.2, 0.7 + 2 * hapw, 0, 0.7 + 2 * hapw, 0],
        ['L', 0.85 + 2 * hapw, 0.3],
        ['C', 0.7 + 2 * hapw, 0.5, 1 + 2 * hapw, 0.5, 0.8 + 2 * hapw, 0.5],
        ['L', 0.4 + 2 * hapw, 0.5],
        ['C', 0.1 + 2 * hapw, 0.3, 0.2 + 2 * hapw, 0.5, 0.2 + 2 * hapw, 0.5]
    ],
    "tetraple": [
        // haple 1
        ['M', 0.05, 0.2],
        ['C', 0.2, 0, -0.1, 0, 0.1, 0],
        ['L', 0.5, 0],
        ['C', 0.8, 0.2, 0.7, 0, 0.7, 0],
        ['L', 0.85, 0.3],
        ['C', 0.7, 0.5, 1, 0.5, 0.8, 0.5],
        ['L', 0.4, 0.5],
        ['C', 0.1, 0.3, 0.2, 0.5, 0.2, 0.5],
        // haple 2
        ['M', 0.05 + hapw, 0.2],
        ['C', 0.2 + hapw, 0, -0.1 + hapw, 0, 0.1 + hapw, 0],
        ['L', 0.5 + hapw, 0],
        ['C', 0.8 + hapw, 0.2, 0.7 + hapw, 0, 0.7 + hapw, 0],
        ['L', 0.85 + hapw, 0.3],
        ['C', 0.7 + hapw, 0.5, 1 + hapw, 0.5, 0.8 + hapw, 0.5],
        ['L', 0.4 + hapw, 0.5],
        ['C', 0.1 + hapw, 0.3, 0.2 + hapw, 0.5, 0.2 + hapw, 0.5],
        // haple 3
        ['M', 0.05 + 2 * hapw, 0.2],
        ['C', 0.2 + 2 * hapw, 0, -0.1 + 2 * hapw, 0, 0.1 + 2 * hapw, 0],
        ['L', 0.5 + 2 * hapw, 0],
        ['C', 0.8 + 2 * hapw, 0.2, 0.7 + 2 * hapw, 0, 0.7 + 2 * hapw, 0],
        ['L', 0.85 + 2 * hapw, 0.3],
        ['C', 0.7 + 2 * hapw, 0.5, 1 + 2 * hapw, 0.5, 0.8 + 2 * hapw, 0.5],
        ['L', 0.4 + 2 * hapw, 0.5],
        ['C', 0.1 + 2 * hapw, 0.3, 0.2 + 2 * hapw, 0.5, 0.2 + 2 * hapw, 0.5],
        // haple 4
        ['M', 0.05 + 3 * hapw, 0.2],
        ['C', 0.2 + 3 * hapw, 0, -0.1 + 3 * hapw, 0, 0.1 + 3 * hapw, 0],
        ['L', 0.5 + 3 * hapw, 0],
        ['C', 0.8 + 3 * hapw, 0.2, 0.7 + 3 * hapw, 0, 0.7 + 3 * hapw, 0],
        ['L', 0.85 + 3 * hapw, 0.3],
        ['C', 0.7 + 3 * hapw, 0.5, 1 + 3 * hapw, 0.5, 0.8 + 3 * hapw, 0.5],
        ['L', 0.4 + 3 * hapw, 0.5],
        ['C', 0.1 + 3 * hapw, 0.3, 0.2 + 3 * hapw, 0.5, 0.2 + 3 * hapw, 0.5]
    ],
    "vareia": [
        ['M', 0, 2],
        ['C', 5.5, -2, 1.25, -2, 3, -2],
        ['C', 5.5, -1.75, 5.75, -1.95, 5.75, -1.8],
        ['C', 1.25, 2, 2.5, -1.5, 1.75, -0.5],
        ['C', 0, 2, 1, 2.1, 0.5, 2.1]
    ]
};