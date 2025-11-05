"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * KeepTogether Stories
 */
var KeepTogether_1 = require("./KeepTogether");
var meta = {
    title: 'Resume Core/Print/KeepTogether',
    component: KeepTogether_1.KeepTogether,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        children: 'Content that should stay together when printing',
    },
};
exports.Example = {
    args: {
        children: 'Experience section - do not break across pages',
    },
};
