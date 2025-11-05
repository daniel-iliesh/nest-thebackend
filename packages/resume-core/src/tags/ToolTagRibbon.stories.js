"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyTags = exports.SingleTag = exports.ManyTags = exports.LargeSize = exports.SmallSize = exports.NoSeparator = exports.WithSlashSeparator = exports.WithDotSeparator = exports.Default = void 0;
var ToolTagRibbon_1 = require("./ToolTagRibbon");
var meta = {
    title: 'Tags/ToolTagRibbon',
    component: ToolTagRibbon_1.ToolTagRibbon,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
};
exports.default = meta;
var frontendStack = [
    'React',
    'TypeScript',
    'Next.js',
    'Tailwind CSS',
    'styled-components',
];
var backendStack = [
    'Node.js',
    'Express',
    'PostgreSQL',
    'Redis',
    'MongoDB',
    'GraphQL',
];
var fullStack = [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'PostgreSQL',
    'Docker',
    'AWS',
    'Git',
    'REST APIs',
    'GraphQL',
    'Redis',
    'MongoDB',
    'Kubernetes',
    'CI/CD',
];
exports.Default = {
    args: {
        tags: frontendStack,
    },
};
exports.WithDotSeparator = {
    args: {
        tags: frontendStack,
        separator: '•',
    },
};
exports.WithSlashSeparator = {
    args: {
        tags: backendStack,
        separator: '/',
    },
};
exports.NoSeparator = {
    args: {
        tags: frontendStack,
        separator: '',
    },
};
exports.SmallSize = {
    args: {
        tags: frontendStack,
        size: 'small',
    },
};
exports.LargeSize = {
    args: {
        tags: frontendStack,
        size: 'large',
    },
};
exports.ManyTags = {
    args: {
        tags: fullStack,
    },
    parameters: {
        docs: {
            description: {
                story: 'Demonstrates wrapping behavior with many tags',
            },
        },
    },
};
exports.SingleTag = {
    args: {
        tags: ['React'],
    },
};
exports.EmptyTags = {
    args: {
        tags: [],
    },
    parameters: {
        docs: {
            description: {
                story: 'Component returns null when no tags are provided',
            },
        },
    },
};
