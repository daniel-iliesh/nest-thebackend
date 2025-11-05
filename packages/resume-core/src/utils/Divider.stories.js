"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * Divider Stories
 */
var Divider_1 = require("./Divider");
var meta = {
    title: 'Resume Core/Utils/Divider',
    component: Divider_1.Divider,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {},
};
exports.Example = {
    args: {
        variant: 'dashed',
    },
};
