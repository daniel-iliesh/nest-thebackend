"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * ContactInfo Stories
 */
var ContactInfo_1 = require("./ContactInfo");
var meta = {
    title: 'Resume Core/Primitives/ContactInfo',
    component: ContactInfo_1.ContactInfo,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        email: 'sarah.johnson@example.com',
        phone: '(555) 123-4567',
        location: 'San Francisco, CA',
    },
};
exports.Example = {
    args: {
        email: 'michael.chen@example.com',
        url: 'https://michaelchen.com',
        linkedin: 'linkedin.com/in/michaelchen',
    },
};
