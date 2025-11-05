"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * ColorBlock Stories
 */
var ColorBlock_1 = require("./ColorBlock");
var meta = {
    title: 'Resume Core/Visuals/ColorBlock',
    component: ColorBlock_1.ColorBlock,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        color: 'primary',
    },
};
exports.Example = {
    args: {
        color: 'accent',
        children: 'Content with colored background',
    },
};
