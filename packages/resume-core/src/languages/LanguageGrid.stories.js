"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * LanguageGrid Stories
 */
var LanguageGrid_1 = require("./LanguageGrid");
var meta = {
    title: 'Resume Core/Languages/LanguageGrid',
    component: LanguageGrid_1.LanguageGrid,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        languages: [
            { name: 'English', level: 'Native' },
            { name: 'Spanish', level: 'Professional' },
            { name: 'French', level: 'Intermediate' },
        ],
    },
};
exports.Example = {
    args: {
        languages: [
            { name: 'Mandarin', level: 'Native' },
            { name: 'English', level: 'Fluent' },
        ],
    },
};
