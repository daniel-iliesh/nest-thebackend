"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsSpan = exports.SmallCaps = exports.Tracked = void 0;
var SubsectionLabel_jsx_1 = require("./SubsectionLabel.jsx");
var meta = {
    title: 'Metadata/SubsectionLabel',
    component: SubsectionLabel_jsx_1.SubsectionLabel,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['tracked', 'caps'],
        },
        as: { control: 'text' },
    },
};
exports.default = meta;
exports.Tracked = {
    args: {
        children: 'Key Achievements',
        variant: 'tracked',
    },
};
exports.SmallCaps = {
    args: {
        children: 'Technical Skills',
        variant: 'caps',
    },
};
exports.AsSpan = {
    args: {
        children: 'Responsibilities',
        variant: 'tracked',
        as: 'span',
    },
};
