"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * SkillMatrix Stories
 */
var SkillMatrix_1 = require("./SkillMatrix");
var meta = {
    title: 'Resume Core/Tables/SkillMatrix',
    component: SkillMatrix_1.SkillMatrix,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        categories: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
        skills: [
            {
                name: 'JavaScript',
                levels: {
                    Beginner: null,
                    Intermediate: null,
                    Advanced: 'advanced',
                    Expert: 'expert',
                },
            },
            {
                name: 'Python',
                levels: {
                    Beginner: null,
                    Intermediate: 'intermediate',
                    Advanced: 'advanced',
                    Expert: null,
                },
            },
            {
                name: 'React',
                levels: {
                    Beginner: null,
                    Intermediate: null,
                    Advanced: null,
                    Expert: 'expert',
                },
            },
            {
                name: 'Node.js',
                levels: {
                    Beginner: null,
                    Intermediate: null,
                    Advanced: 'advanced',
                    Expert: null,
                },
            },
        ],
    },
};
exports.Example = {
    args: {
        categories: ['Learning', 'Proficient', 'Expert'],
        skills: [
            {
                name: 'TypeScript',
                levels: {
                    Learning: null,
                    Proficient: null,
                    Expert: 'expert',
                },
            },
            {
                name: 'GraphQL',
                levels: {
                    Learning: null,
                    Proficient: 'advanced',
                    Expert: null,
                },
            },
            {
                name: 'Docker',
                levels: {
                    Learning: 'intermediate',
                    Proficient: null,
                    Expert: null,
                },
            },
        ],
    },
};
