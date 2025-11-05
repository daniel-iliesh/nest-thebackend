"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsDiv = exports.ExtraSmall = exports.Small = void 0;
var GreyLabelCaps_jsx_1 = require("./GreyLabelCaps.jsx");
var meta = {
    title: 'Metadata/GreyLabelCaps',
    component: GreyLabelCaps_jsx_1.GreyLabelCaps,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['xs', 'sm'],
        },
        as: { control: 'text' },
    },
};
exports.default = meta;
exports.Small = {
    args: {
        children: 'Education',
        size: 'sm',
    },
};
exports.ExtraSmall = {
    args: {
        children: '2018-2022',
        size: 'xs',
    },
};
exports.AsDiv = {
    args: {
        children: 'Certification',
        size: 'sm',
        as: 'div',
    },
};
