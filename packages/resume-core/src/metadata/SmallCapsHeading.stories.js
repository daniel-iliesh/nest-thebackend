"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Level3 = exports.Large = exports.Small = exports.Medium = void 0;
var SmallCapsHeading_jsx_1 = require("./SmallCapsHeading.jsx");
var meta = {
    title: 'Metadata/SmallCapsHeading',
    component: SmallCapsHeading_jsx_1.SmallCapsHeading,
    tags: ['autodocs'],
    argTypes: {
        level: {
            control: 'number',
            min: 1,
            max: 6,
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
    },
};
exports.default = meta;
exports.Medium = {
    args: {
        children: 'Professional Experience',
        level: 2,
        size: 'md',
    },
};
exports.Small = {
    args: {
        children: 'Education',
        level: 3,
        size: 'sm',
    },
};
exports.Large = {
    args: {
        children: 'Technical Skills',
        level: 2,
        size: 'lg',
    },
};
exports.Level3 = {
    args: {
        children: 'Certifications',
        level: 3,
        size: 'md',
    },
};
