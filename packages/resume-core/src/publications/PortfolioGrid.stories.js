"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * PortfolioGrid Stories
 */
var PortfolioGrid_1 = require("./PortfolioGrid");
var meta = {
    title: 'Resume Core/Publications/PortfolioGrid',
    component: PortfolioGrid_1.PortfolioGrid,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        items: [
            {
                title: 'E-Commerce Platform',
                image: 'https://placehold.co/400x300',
                url: '#',
            },
            {
                title: 'Analytics Dashboard',
                image: 'https://placehold.co/400x300',
                url: '#',
            },
            { title: 'Mobile App', image: 'https://placehold.co/400x300', url: '#' },
            {
                title: 'Design System',
                image: 'https://placehold.co/400x300',
                url: '#',
            },
        ],
    },
};
exports.Example = {
    args: {
        items: [
            {
                title: 'Project Alpha',
                image: 'https://placehold.co/400x300',
                url: '#',
                tags: ['React', 'AWS'],
            },
            {
                title: 'Project Beta',
                image: 'https://placehold.co/400x300',
                url: '#',
                tags: ['Vue', 'Firebase'],
            },
            {
                title: 'Project Gamma',
                image: 'https://placehold.co/400x300',
                url: '#',
                tags: ['Angular', 'GCP'],
            },
        ],
    },
};
