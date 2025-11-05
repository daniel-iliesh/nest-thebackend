"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * ComparisonTable Stories
 */
var ComparisonTable_1 = require("./ComparisonTable");
var meta = {
    title: 'Resume Core/Tables/ComparisonTable',
    component: ComparisonTable_1.ComparisonTable,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        headers: ['Skill', 'Previous Role', 'Current Role'],
        rows: [
            ['Team Leadership', '5 people', '12 people'],
            ['Budget Management', '$500K', '$2M'],
            ['Project Scope', 'Single Product', 'Multiple Products'],
            ['Tech Stack', 'React, Node.js', 'React, Node.js, Python, AWS'],
        ],
        firstColumnLabel: true,
    },
};
exports.Example = {
    args: {
        headers: ['Category', 'Basic', 'Professional', 'Enterprise'],
        rows: [
            ['Price', '$0/month', '$29/month', '$99/month'],
            ['Users', '1', '10', 'Unlimited'],
            ['Storage', '1GB', '100GB', '1TB'],
            ['Support', 'Email', 'Priority Email', '24/7 Phone'],
        ],
        firstColumnLabel: true,
        align: 'center',
    },
};
