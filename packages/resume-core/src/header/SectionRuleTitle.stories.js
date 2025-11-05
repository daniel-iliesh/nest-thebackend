"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortTitle = exports.Level3Heading = exports.CustomColor = exports.PartialRule = exports.Education = exports.Default = void 0;
var SectionRuleTitle_1 = require("./SectionRuleTitle");
var meta = {
    title: 'Resume Core/Header/SectionRuleTitle',
    component: SectionRuleTitle_1.SectionRuleTitle,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        children: 'Professional Experience',
    },
};
exports.Education = {
    args: {
        children: 'Education & Certifications',
        level: 2,
    },
};
exports.PartialRule = {
    args: {
        children: 'Skills',
        ruleWidth: '50%',
    },
};
exports.CustomColor = {
    args: {
        children: 'Projects',
        ruleColor: '#2563eb',
    },
};
exports.Level3Heading = {
    args: {
        children: 'Technical Expertise',
        level: 3,
    },
};
exports.ShortTitle = {
    args: {
        children: 'Awards',
        ruleWidth: '80%',
    },
};
