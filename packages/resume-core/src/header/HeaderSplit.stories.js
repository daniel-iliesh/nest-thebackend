"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithTitle = exports.WithContacts = exports.Default = void 0;
var HeaderSplit_1 = require("./HeaderSplit");
var meta = {
    title: 'Resume Core/Header/HeaderSplit',
    component: HeaderSplit_1.HeaderSplit,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        name: 'Sarah Johnson',
        title: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        email: 'sarah.johnson@example.com',
        phone: '(555) 123-4567',
    },
};
exports.WithContacts = {
    args: {},
};
exports.WithTitle = {
    args: {},
};
