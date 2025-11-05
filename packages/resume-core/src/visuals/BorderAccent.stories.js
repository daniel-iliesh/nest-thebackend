"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * BorderAccent Stories
 */
var BorderAccent_1 = require("./BorderAccent");
var meta = {
    title: 'Resume Core/Visuals/BorderAccent',
    component: BorderAccent_1.BorderAccent,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        side: 'left',
    },
};
exports.Example = {
    args: {
        side: 'top',
        color: 'accent',
    },
};
