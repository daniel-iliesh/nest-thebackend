"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * Badge Stories
 */
var Badge_1 = require("./Badge");
var meta = {
    title: 'Resume Core/Primitives/Badge',
    component: Badge_1.Badge,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        children: 'New',
    },
};
exports.Example = {
    args: {
        children: 'Featured',
        variant: 'primary',
    },
};
