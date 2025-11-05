"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleBadge = exports.EmptyBadges = exports.Certifications = exports.ManyBadges = exports.ThinStroke = exports.ThickStroke = exports.NotRounded = exports.LargeSize = exports.SmallSize = exports.Default = void 0;
var BadgeRowOutline_1 = require("./BadgeRowOutline");
var meta = {
    title: 'Badges/BadgeRowOutline',
    component: BadgeRowOutline_1.BadgeRowOutline,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
};
exports.default = meta;
var softSkills = [
    'Leadership',
    'Communication',
    'Problem Solving',
    'Teamwork',
];
var hardSkills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'PostgreSQL',
    'Docker',
];
var categories = ['Frontend', 'Backend', 'DevOps', 'Design'];
var certifications = ['AWS Certified', 'Scrum Master', 'PMP', 'Security+'];
exports.Default = {
    args: {
        items: softSkills,
    },
};
exports.SmallSize = {
    args: {
        items: hardSkills,
        size: 'small',
    },
};
exports.LargeSize = {
    args: {
        items: softSkills,
        size: 'large',
    },
};
exports.NotRounded = {
    args: {
        items: categories,
        rounded: false,
    },
    parameters: {
        docs: {
            description: {
                story: 'Square corners instead of fully rounded',
            },
        },
    },
};
exports.ThickStroke = {
    args: {
        items: softSkills,
        strokeWidth: '1pt',
    },
    parameters: {
        docs: {
            description: {
                story: 'Thicker border for more emphasis (1pt instead of default 0.5pt)',
            },
        },
    },
};
exports.ThinStroke = {
    args: {
        items: hardSkills,
        strokeWidth: '0.5pt',
    },
    parameters: {
        docs: {
            description: {
                story: 'Minimum recommended stroke width (0.5pt) to avoid scalloping',
            },
        },
    },
};
exports.ManyBadges = {
    args: {
        items: [
            'JavaScript',
            'TypeScript',
            'React',
            'Vue',
            'Angular',
            'Node.js',
            'Express',
            'PostgreSQL',
            'MongoDB',
            'Redis',
            'Docker',
            'Kubernetes',
            'AWS',
            'Azure',
            'Git',
        ],
    },
    parameters: {
        docs: {
            description: {
                story: 'Demonstrates wrapping behavior with many badges',
            },
        },
    },
};
exports.Certifications = {
    args: {
        items: certifications,
        size: 'medium',
        strokeWidth: '0.75pt',
    },
    parameters: {
        docs: {
            description: {
                story: 'Example usage for displaying certifications',
            },
        },
    },
};
exports.EmptyBadges = {
    args: {
        items: [],
    },
    parameters: {
        docs: {
            description: {
                story: 'Component returns null when no items are provided',
            },
        },
    },
};
exports.SingleBadge = {
    args: {
        items: ['Full Stack Developer'],
    },
};
