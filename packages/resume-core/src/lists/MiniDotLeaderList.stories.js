"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LongList = exports.CustomColor = exports.Skills = exports.Default = void 0;
var MiniDotLeaderList_1 = require("./MiniDotLeaderList");
/**
 * MiniDotLeaderList Stories
 */
var meta = {
    title: 'Resume Core/Lists/MiniDotLeaderList',
    component: MiniDotLeaderList_1.MiniDotLeaderList,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        items: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'AWS'],
    },
};
exports.Skills = {
    args: {
        items: [
            'Team Leadership',
            'Agile/Scrum',
            'Code Review',
            'Mentorship',
            'Technical Writing',
            'Public Speaking',
        ],
    },
};
exports.CustomColor = {
    args: {
        items: [
            'Bachelor of Science',
            'Computer Science',
            'Stanford University',
            '2018',
        ],
        color: '#0066cc',
    },
};
exports.LongList = {
    args: {
        items: [
            'React',
            'Vue.js',
            'Angular',
            'Svelte',
            'Next.js',
            'Nuxt',
            'Gatsby',
            'TypeScript',
            'JavaScript',
            'Node.js',
            'Express',
            'Fastify',
            'PostgreSQL',
            'MongoDB',
            'Redis',
            'Docker',
            'Kubernetes',
            'AWS',
            'Azure',
            'GCP',
        ],
    },
};
