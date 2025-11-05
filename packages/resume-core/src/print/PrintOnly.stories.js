"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * PrintOnly Stories
 */
var PrintOnly_1 = require("./PrintOnly");
var meta = {
    title: 'Resume Core/Print/PrintOnly',
    component: PrintOnly_1.PrintOnly,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        children: 'This content only appears in print',
    },
};
exports.Example = {
    args: {
        children: 'Page footer for printed resumes',
    },
};
