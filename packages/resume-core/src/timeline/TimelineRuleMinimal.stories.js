"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatesOnly = exports.MinimalLabels = exports.CustomColors = exports.CustomTickHeight = exports.Default = void 0;
var TimelineRuleMinimal_1 = require("./TimelineRuleMinimal");
exports.default = {
    title: 'Timeline/TimelineRuleMinimal',
    component: TimelineRuleMinimal_1.TimelineRuleMinimal,
    tags: ['autodocs'],
};
var sampleItems = [
    {
        date: 'Jan 2020',
        label: 'Software Engineer',
        meta: 'Tech Corp',
    },
    {
        date: 'Mar 2022',
        label: 'Senior Software Engineer',
        meta: 'Innovation Labs',
    },
    {
        date: 'Jun 2024',
        label: 'Lead Engineer',
        meta: 'Startup Inc',
    },
];
exports.Default = {
    args: {
        items: sampleItems,
    },
};
exports.CustomTickHeight = {
    args: {
        items: sampleItems,
        tickHeight: '3pt',
    },
};
exports.CustomColors = {
    args: {
        items: sampleItems,
        lineColor: '#4a90e2',
        tickHeight: '2.5pt',
    },
};
exports.MinimalLabels = {
    args: {
        items: [
            { date: '2020', label: 'Bachelor of Science' },
            { date: '2022', label: 'Master of Science' },
            { date: '2024', label: 'PhD Candidate' },
        ],
    },
};
exports.DatesOnly = {
    args: {
        items: [
            { date: 'Q1 2020' },
            { date: 'Q3 2021' },
            { date: 'Q2 2023' },
            { date: 'Present' },
        ],
    },
};
