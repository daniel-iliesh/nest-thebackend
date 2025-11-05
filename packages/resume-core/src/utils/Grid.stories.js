"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * Grid Stories
 */
var Grid_1 = require("./Grid");
var meta = {
    title: 'Resume Core/Utils/Grid',
    component: Grid_1.Grid,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        children: 'Grid container content',
    },
};
exports.Example = {
    args: {
        columns: 3,
        gap: 'large',
        children: 'Three column grid',
    },
};
