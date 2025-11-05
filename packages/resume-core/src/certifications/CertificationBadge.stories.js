"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * CertificationBadge Stories
 */
var CertificationBadge_1 = require("./CertificationBadge");
var meta = {
    title: 'Resume Core/Certifications/CertificationBadge',
    component: CertificationBadge_1.CertificationBadge,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        name: 'AWS Certified Solutions Architect',
        issuer: 'Amazon Web Services',
    },
};
exports.Example = {
    args: {
        name: 'Certified Kubernetes Administrator',
        issuer: 'CNCF',
        date: '2023',
    },
};
