"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomColor = exports.MixedLength = exports.MinimalStyle = exports.Default = void 0;
var ListDashCompact_1 = require("./ListDashCompact");
/**
 * ListDashCompact Stories
 */
var meta = {
    title: 'Resume Core/Lists/ListDashCompact',
    component: ListDashCompact_1.ListDashCompact,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        items: [
            'JavaScript, TypeScript, Python',
            'React, Vue.js, Angular',
            'Node.js, Express, Django',
            'PostgreSQL, MongoDB, Redis',
        ],
    },
};
exports.MinimalStyle = {
    args: {
        items: [
            'Bachelor of Science in Computer Science',
            'Certified AWS Solutions Architect',
            'Google Cloud Professional',
            'Scrum Master Certification',
        ],
    },
};
exports.MixedLength = {
    args: {
        items: [
            'Short',
            'This is a longer item that demonstrates how the compact dash list handles multi-line content',
            'Medium length item',
            'Another concise entry',
        ],
    },
};
exports.CustomColor = {
    args: {
        items: [
            'Team leadership and mentorship',
            'Agile project management',
            'Technical documentation',
            'Stakeholder communication',
        ],
        color: '#666',
    },
};
