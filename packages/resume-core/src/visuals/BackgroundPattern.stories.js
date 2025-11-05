"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * BackgroundPattern Stories
 */
var BackgroundPattern_1 = require("./BackgroundPattern");
var meta = {
    title: 'Resume Core/Visuals/BackgroundPattern',
    component: BackgroundPattern_1.BackgroundPattern,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        pattern: 'dots',
    },
};
exports.Example = {
    args: {
        pattern: 'grid',
        opacity: 0.1,
    },
};
