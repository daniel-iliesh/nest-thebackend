"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * PublicationItem Stories
 */
var PublicationItem_1 = require("./PublicationItem");
var meta = {
    title: 'Resume Core/Publications/PublicationItem',
    component: PublicationItem_1.PublicationItem,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        title: 'Scaling Microservices: Lessons from Production',
        publication: 'Tech Engineering Blog',
        date: '2023',
        url: 'https://techblog.example.com/scaling-microservices',
    },
};
exports.Example = {
    args: {
        title: 'Introduction to React Server Components',
        publication: 'Modern Web Development Magazine',
        date: 'March 2023',
        url: 'https://webdev.example.com/react-server-components',
    },
};
