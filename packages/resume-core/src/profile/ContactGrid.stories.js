"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * ContactGrid Stories
 */
var ContactGrid_1 = require("./ContactGrid");
var meta = {
    title: 'Resume Core/Profile/ContactGrid',
    component: ContactGrid_1.ContactGrid,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        items: [
            { icon: '📧', label: 'Email', value: 'sarah.johnson@example.com' },
            { icon: '📱', label: 'Phone', value: '(555) 123-4567' },
            { icon: '📍', label: 'Location', value: 'San Francisco, CA' },
        ],
    },
};
exports.Example = {
    args: {
        items: [
            { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/sarahjohnson' },
            { icon: '🐙', label: 'GitHub', value: 'github.com/sarahjohnson' },
        ],
    },
};
