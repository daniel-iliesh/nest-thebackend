"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * Section Stories
 */
var Section_1 = require("./Section");
var meta = {
    title: 'Resume Core/Primitives/Section',
    component: Section_1.Section,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        title: 'Work Experience',
        children: 'Section content goes here',
    },
};
exports.Example = {
    args: {
        title: 'Skills',
        children: 'List of skills and technologies',
    },
};
