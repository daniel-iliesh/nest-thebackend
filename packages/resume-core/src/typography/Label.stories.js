"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bold = exports.CustomColor = exports.Uppercase = exports.Default = void 0;
/**
 * Label Stories
 */
var Label_1 = require("./Label");
var meta = {
    title: 'Resume Core/Typography/Label',
    component: Label_1.Label,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        children: 'Label Text',
    },
};
exports.Uppercase = {
    args: { uppercase: true, children: 'Uppercase Label' },
};
exports.CustomColor = {
    args: { color: '#007bff', children: 'Colored Label' },
};
exports.Bold = { args: { weight: 'bold', children: 'Bold Label' } };
