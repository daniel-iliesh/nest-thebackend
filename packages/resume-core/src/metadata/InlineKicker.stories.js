"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsDiv = exports.CustomColor = exports.Default = void 0;
var InlineKicker_jsx_1 = require("./InlineKicker.jsx");
var meta = {
    title: 'Metadata/InlineKicker',
    component: InlineKicker_jsx_1.InlineKicker,
    tags: ['autodocs'],
    argTypes: {
        color: { control: 'color' },
        as: { control: 'text' },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        children: 'Featured Project',
    },
};
exports.CustomColor = {
    args: {
        children: 'Senior Role',
        color: '#2563eb',
    },
};
exports.AsDiv = {
    args: {
        children: 'Leadership Position',
        as: 'div',
    },
};
