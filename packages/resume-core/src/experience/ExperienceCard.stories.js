"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * ExperienceCard Stories
 */
var ExperienceCard_1 = require("./ExperienceCard");
var meta = {
    title: 'Resume Core/Experience/ExperienceCard',
    component: ExperienceCard_1.ExperienceCard,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        title: 'Senior Software Engineer',
        company: 'Tech Corp',
        location: 'San Francisco, CA',
        date: '2020 - Present',
        summary: 'Led development of cloud-native microservices architecture, improving system scalability by 300%. Mentored junior developers and established best practices for code review and testing.',
    },
};
exports.Example = {
    args: {
        title: 'Product Manager',
        company: 'StartupXYZ',
        location: 'Remote',
        date: 'Jan 2022 - Dec 2023',
        summary: 'Defined product roadmap for B2B SaaS platform serving 10,000+ users. Collaborated with engineering and design teams to ship 15+ major features.',
    },
};
