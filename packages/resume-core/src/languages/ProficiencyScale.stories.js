"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * ProficiencyScale Stories
 */
var ProficiencyScale_1 = require("./ProficiencyScale");
var meta = {
    title: 'Resume Core/Languages/ProficiencyScale',
    component: ProficiencyScale_1.ProficiencyScale,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        language: 'English',
        level: 5,
        maxLevel: 5,
    },
};
exports.Example = {
    args: {
        language: 'Spanish',
        level: 4,
        maxLevel: 5,
    },
};
