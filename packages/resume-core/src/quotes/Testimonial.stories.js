"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * Testimonial Stories
 */
var Testimonial_1 = require("./Testimonial");
var meta = {
    title: 'Resume Core/Quotes/Testimonial',
    component: Testimonial_1.Testimonial,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        quote: 'Sarah is an exceptional engineer who consistently delivers high-quality work. Her technical expertise and problem-solving abilities are outstanding.',
        author: 'Michael Chen',
        position: 'CTO',
        company: 'Tech Corp',
        photo: 'https://i.pravatar.cc/150?img=12',
    },
};
exports.Example = {
    args: {
        quote: "One of the best developers I've had the pleasure of working with. Sarah's leadership and mentorship have been invaluable to our team's growth.",
        author: 'Jennifer Martinez',
        position: 'VP of Engineering',
        company: 'Innovation Labs',
        photo: 'https://i.pravatar.cc/150?img=5',
    },
};
