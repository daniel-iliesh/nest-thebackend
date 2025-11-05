"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsDiv = exports.LongIntroduction = exports.CustomColor = exports.WithMaxWidth = exports.Default = void 0;
var SectionIntroParagraph_jsx_1 = require("./SectionIntroParagraph.jsx");
var meta = {
    title: 'Typography/SectionIntroParagraph',
    component: SectionIntroParagraph_jsx_1.SectionIntroParagraph,
    tags: ['autodocs'],
    argTypes: {
        color: { control: 'color' },
        maxWidth: { control: 'text' },
        as: {
            control: 'select',
            options: ['p', 'div', 'span'],
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        children: 'Senior software engineer with 10+ years of experience building scalable distributed systems and leading cross-functional teams.',
    },
};
exports.WithMaxWidth = {
    args: {
        children: 'Creative problem-solver with a passion for elegant code architecture and mentoring junior developers.',
        maxWidth: '500px',
    },
};
exports.CustomColor = {
    args: {
        children: 'Full-stack developer specializing in modern web technologies and cloud infrastructure.',
        color: '#2563eb',
    },
};
exports.LongIntroduction = {
    args: {
        children: 'Results-driven technology leader with extensive experience in enterprise software development, team building, and product strategy. Proven track record of delivering high-impact solutions that drive business growth and operational efficiency.',
    },
};
exports.AsDiv = {
    args: {
        children: 'DevOps engineer focused on automation, reliability, and continuous improvement.',
        as: 'div',
    },
};
