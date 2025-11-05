"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * DividerVariants Stories
 */
var DividerVariants_1 = require("./DividerVariants");
var meta = {
    title: 'Resume Core/Visuals/DividerVariants',
    component: DividerVariants_1.DividerVariants,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        variant: 'solid',
    },
};
exports.Example = {
    args: {
        variant: 'dotted',
        spacing: 'large',
    },
};
