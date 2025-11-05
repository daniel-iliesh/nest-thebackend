"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * Spacer Stories
 */
var Spacer_1 = require("./Spacer");
var meta = {
    title: 'Resume Core/Utils/Spacer',
    component: Spacer_1.Spacer,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        size: 'medium',
    },
};
exports.Example = {
    args: {
        size: 'large',
    },
};
