"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * HeaderMinimal Stories
 */
var HeaderMinimal_1 = require("./HeaderMinimal");
var meta = {
    title: 'Resume Core/Header/HeaderMinimal',
    component: HeaderMinimal_1.HeaderMinimal,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        name: 'Sarah Johnson',
        title: 'Senior Software Engineer',
    },
};
exports.Example = {
    args: {
        name: 'Michael Chen',
        title: 'Product Manager',
        email: 'michael.chen@example.com',
    },
};
