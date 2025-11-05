"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * LanguageBar Stories
 */
var LanguageBar_1 = require("./LanguageBar");
var meta = {
    title: 'Resume Core/Languages/LanguageBar',
    component: LanguageBar_1.LanguageBar,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        language: 'English',
        fluency: 'Native',
    },
};
exports.Example = {
    args: {
        language: 'Spanish',
        fluency: 'Professional Working Proficiency',
    },
};
