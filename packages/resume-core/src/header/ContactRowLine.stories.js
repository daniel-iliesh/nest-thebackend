"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleItem = exports.CustomSeparator = exports.Minimal = exports.WithLinks = exports.Default = void 0;
var ContactRowLine_1 = require("./ContactRowLine");
var meta = {
    title: 'Resume Core/Header/ContactRowLine',
    component: ContactRowLine_1.ContactRowLine,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        items: [
            { text: 'jane.smith@example.com', href: 'mailto:jane.smith@example.com' },
            { text: '(555) 123-4567', href: 'tel:+15551234567' },
            { text: 'San Francisco, CA' },
        ],
    },
};
exports.WithLinks = {
    args: {
        items: [
            { text: 'john.doe@example.com', href: 'mailto:john.doe@example.com' },
            {
                text: 'linkedin.com/in/johndoe',
                href: 'https://linkedin.com/in/johndoe',
            },
            { text: 'github.com/johndoe', href: 'https://github.com/johndoe' },
        ],
    },
};
exports.Minimal = {
    args: {
        items: [
            { text: 'alex@example.com', href: 'mailto:alex@example.com' },
            { text: 'New York, NY' },
        ],
    },
};
exports.CustomSeparator = {
    args: {
        items: [
            { text: 'contact@example.com' },
            { text: '(555) 987-6543' },
            { text: 'Boston, MA' },
        ],
        separator: '|',
    },
};
exports.SingleItem = {
    args: {
        items: [
            {
                text: 'singlecontact@example.com',
                href: 'mailto:singlecontact@example.com',
            },
        ],
    },
};
