"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LongDescriptions = exports.CustomColor = exports.StackedLayout = exports.InlineLayout = void 0;
var DefinitionKeyline_1 = require("./DefinitionKeyline");
/**
 * DefinitionKeyline Stories
 */
var meta = {
    title: 'Resume Core/Lists/DefinitionKeyline',
    component: DefinitionKeyline_1.DefinitionKeyline,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.InlineLayout = {
    args: {
        items: [
            { term: 'Languages', description: 'JavaScript, TypeScript, Python, Go' },
            { term: 'Frameworks', description: 'React, Node.js, Express, Django' },
            { term: 'Databases', description: 'PostgreSQL, MongoDB, Redis' },
            { term: 'Cloud', description: 'AWS, Docker, Kubernetes, Terraform' },
        ],
        layout: 'inline',
    },
};
exports.StackedLayout = {
    args: {
        items: [
            {
                term: 'Education',
                description: 'Bachelor of Science in Computer Science, Stanford University',
            },
            {
                term: 'Certification',
                description: 'AWS Certified Solutions Architect Professional',
            },
            {
                term: 'Languages',
                description: 'English (Native), Spanish (Professional), Mandarin (Conversational)',
            },
            {
                term: 'Interests',
                description: 'Open source contribution, Technical writing, Conference speaking',
            },
        ],
        layout: 'stacked',
    },
};
exports.CustomColor = {
    args: {
        items: [
            { term: 'Role', description: 'Senior Software Engineer' },
            { term: 'Team', description: 'Platform Engineering' },
            { term: 'Location', description: 'San Francisco, CA' },
            { term: 'Duration', description: '2020 - Present' },
        ],
        layout: 'inline',
        color: '#0066cc',
    },
};
exports.LongDescriptions = {
    args: {
        items: [
            {
                term: 'Frontend',
                description: 'React, Vue.js, Angular, TypeScript, Next.js, Tailwind CSS, styled-components, Storybook',
            },
            {
                term: 'Backend',
                description: 'Node.js, Python, Go, Express, FastAPI, GraphQL, REST APIs, Microservices architecture',
            },
            {
                term: 'DevOps',
                description: 'Docker, Kubernetes, AWS, GCP, CI/CD, Jenkins, GitHub Actions, Terraform, Infrastructure as Code',
            },
        ],
        layout: 'stacked',
    },
};
