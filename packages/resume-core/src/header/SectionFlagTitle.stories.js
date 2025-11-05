"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Level3 = exports.BlueAccent = exports.WideFlag = exports.CustomColor = exports.Skills = exports.Default = void 0;
var SectionFlagTitle_1 = require("./SectionFlagTitle");
var meta = {
    title: 'Resume Core/Header/SectionFlagTitle',
    component: SectionFlagTitle_1.SectionFlagTitle,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        children: 'Work Experience',
    },
};
exports.Skills = {
    args: {
        children: 'Technical Skills',
        level: 2,
    },
};
exports.CustomColor = {
    args: {
        children: 'Featured Projects',
        flagColor: '#8b5cf6',
    },
};
exports.WideFlag = {
    args: {
        children: 'Education',
        flagWidth: '6px',
    },
};
exports.BlueAccent = {
    args: {
        children: 'Certifications',
        flagColor: '#2563eb',
        flagWidth: '5px',
    },
};
exports.Level3 = {
    args: {
        children: 'Languages',
        level: 3,
    },
};
