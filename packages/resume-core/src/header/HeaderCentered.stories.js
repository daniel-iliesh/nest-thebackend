"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithTitle = exports.WithContacts = exports.Default = void 0;
var HeaderCentered_1 = require("./HeaderCentered");
var meta = {
    title: 'Resume Core/Header/HeaderCentered',
    component: HeaderCentered_1.HeaderCentered,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        name: 'Sarah Johnson',
        title: 'Senior Software Engineer',
        contact: [
            { icon: '📧', text: 'sarah.johnson@example.com' },
            { icon: '📱', text: '(555) 123-4567' },
        ],
    },
};
exports.WithContacts = {
    args: {},
};
exports.WithTitle = {
    args: {},
};
