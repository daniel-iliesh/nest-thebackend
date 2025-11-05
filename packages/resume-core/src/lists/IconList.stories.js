"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * IconList Stories
 */
var IconList_1 = require("./IconList");
var meta = {
    title: 'Resume Core/Lists/IconList',
    component: IconList_1.IconList,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        items: [
            { text: 'Email: sarah.johnson@example.com', icon: '📧' },
            { text: 'Phone: (555) 123-4567', icon: '📱' },
            { text: 'Location: San Francisco, CA', icon: '📍' },
            { text: 'LinkedIn: linkedin.com/in/sarahjohnson', icon: '💼' },
        ],
    },
};
exports.Example = {
    args: {
        items: [
            { text: 'Led team of 12 engineers', icon: '👥' },
            { text: 'Shipped 15+ major features', icon: '🚀' },
            { text: 'Reduced costs by 40%', icon: '💰' },
            { text: 'Improved performance 3x', icon: '⚡' },
        ],
    },
};
