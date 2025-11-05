"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * ProfileCard Stories
 */
var ProfileCard_1 = require("./ProfileCard");
var meta = {
    title: 'Resume Core/Profile/ProfileCard',
    component: ProfileCard_1.ProfileCard,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        name: 'Sarah Johnson',
        title: 'Senior Software Engineer',
        image: 'https://i.pravatar.cc/150?img=1',
        summary: 'Experienced software engineer with 8+ years building scalable web applications.',
    },
};
exports.Example = {
    args: {
        name: 'Michael Chen',
        title: 'Product Manager',
        image: 'https://i.pravatar.cc/150?img=12',
        location: 'San Francisco, CA',
        summary: 'Product leader focused on user-centric design and data-driven decisions.',
    },
};
