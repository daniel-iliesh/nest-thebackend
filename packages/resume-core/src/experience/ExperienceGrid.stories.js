"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * ExperienceGrid Stories
 */
var ExperienceGrid_1 = require("./ExperienceGrid");
var meta = {
    title: 'Resume Core/Experience/ExperienceGrid',
    component: ExperienceGrid_1.ExperienceGrid,
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
            {
                position: 'Intern Developer',
                company: 'Code Academy',
                date: '2015 - 2016',
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
            {
                position: 'Business Analyst',
                company: 'Consulting Firm',
                date: '2017 - 2019',
            },
        ],
    },
};
