"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * PullQuote Stories
 */
var PullQuote_1 = require("./PullQuote");
var meta = {
    title: 'Resume Core/Quotes/PullQuote',
    component: PullQuote_1.PullQuote,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        quote: "Sarah's technical leadership and innovative approach to problem-solving have transformed our engineering culture.",
        author: 'Michael Chen',
        context: 'CTO at Tech Corp',
    },
};
exports.Example = {
    args: {
        quote: 'An exceptional engineer who combines deep technical expertise with outstanding communication skills. A true asset to any team.',
        author: 'Jennifer Martinez',
        context: 'VP of Engineering, Innovation Labs',
    },
};
