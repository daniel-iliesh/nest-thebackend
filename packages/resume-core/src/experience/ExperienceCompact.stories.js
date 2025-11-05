"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * ExperienceCompact Stories
 */
var ExperienceCompact_1 = require("./ExperienceCompact");
var meta = {
    title: 'Resume Core/Experience/ExperienceCompact',
    component: ExperienceCompact_1.ExperienceCompact,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        experiences: [
            {
                position: 'Senior Software Engineer',
                company: 'Tech Corp',
                date: '2020 - Present',
            },
            {
                position: 'Software Engineer',
                company: 'Innovation Labs',
                date: '2018 - 2020',
            },
            {
                position: 'Junior Developer',
                company: 'WebDev Agency',
                date: '2016 - 2018',
            },
        ],
    },
};
exports.Example = {
    args: {
        experiences: [
            {
                position: 'Product Manager',
                company: 'StartupXYZ',
                date: 'Jan 2022 - Present',
            },
            {
                position: 'Product Owner',
                company: 'Enterprise Corp',
                date: '2019 - 2021',
            },
        ],
    },
};
