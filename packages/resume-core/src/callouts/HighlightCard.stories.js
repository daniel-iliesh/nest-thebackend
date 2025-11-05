"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
var HighlightCard_1 = require("./HighlightCard");
var meta = {
    title: 'Resume Core/Callouts/HighlightCard',
    component: HighlightCard_1.HighlightCard,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        title: 'Featured Achievement',
        description: 'Led development of cloud-native architecture serving 1M+ daily users',
    },
};
exports.Example = {
    args: {
        title: 'Key Skill',
        description: 'Expert in React, TypeScript, and modern web development',
        icon: '⭐',
    },
};
