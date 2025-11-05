"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * SectionTitle Stories
 */
var SectionTitle_1 = require("./SectionTitle");
var meta = {
    title: 'Resume Core/Primitives/SectionTitle',
    component: SectionTitle_1.SectionTitle,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        children: 'Professional Experience',
    },
};
exports.Example = {
    args: {
        children: 'Education & Certifications',
        level: 2,
    },
};
