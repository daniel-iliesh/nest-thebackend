"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinimalStyle = exports.NormalFontStyle = exports.ThickBorder = exports.CustomAccentColor = exports.WithoutQuotes = exports.Default = void 0;
var QuoteStripe_jsx_1 = require("./QuoteStripe.jsx");
var meta = {
    title: 'Typography/QuoteStripe',
    component: QuoteStripe_jsx_1.QuoteStripe,
    tags: ['autodocs'],
    argTypes: {
        accentColor: { control: 'color' },
        borderWidth: { control: 'text' },
        fontStyle: {
            control: 'select',
            options: ['italic', 'normal'],
        },
        paddingLeft: { control: 'text' },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        children: '"Exceptional problem solver with keen attention to detail"',
    },
};
exports.WithoutQuotes = {
    args: {
        children: 'Leadership excellence in cross-functional teams',
    },
};
exports.CustomAccentColor = {
    args: {
        children: '"Innovative thinker who drives transformational change"',
        accentColor: '#8b5cf6',
    },
};
exports.ThickBorder = {
    args: {
        children: '"Technical expertise combined with business acumen"',
        borderWidth: '5px',
        accentColor: '#2563eb',
    },
};
exports.NormalFontStyle = {
    args: {
        children: 'Strategic leader with proven track record in scaling organizations',
        fontStyle: 'normal',
    },
};
exports.MinimalStyle = {
    args: {
        children: 'Passionate about creating accessible, user-centered experiences',
        accentColor: '#000',
        borderWidth: '2px',
    },
};
