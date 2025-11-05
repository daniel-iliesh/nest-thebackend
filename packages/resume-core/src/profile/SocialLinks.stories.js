"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * SocialLinks Stories
 */
var SocialLinks_1 = require("./SocialLinks");
var meta = {
    title: 'Resume Core/Profile/SocialLinks',
    component: SocialLinks_1.SocialLinks,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        links: [
            { platform: 'LinkedIn', url: 'https://linkedin.com/in/sarahjohnson' },
            { platform: 'GitHub', url: 'https://github.com/sarahjohnson' },
            { platform: 'Twitter', url: 'https://twitter.com/sarahjohnson' },
        ],
    },
};
exports.Example = {
    args: {
        links: [
            { platform: 'LinkedIn', url: 'https://linkedin.com/in/michaelchen' },
            { platform: 'Portfolio', url: 'https://michaelchen.com' },
        ],
    },
};
