"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
var InfoBox_1 = require("./InfoBox");
var meta = {
    title: 'Resume Core/Callouts/InfoBox',
    component: InfoBox_1.InfoBox,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        title: 'Professional Summary',
        children: 'Experienced software engineer with 8+ years building scalable web applications.',
    },
};
exports.Example = {
    args: {
        title: 'Contact Information',
        children: 'Available for full-time positions and consulting opportunities.',
    },
};
