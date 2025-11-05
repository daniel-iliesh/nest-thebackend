"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LongNames = exports.Complete = exports.WithUrl = exports.WithDate = exports.WithCredentialId = exports.Default = void 0;
var CertificationRow_1 = require("./CertificationRow");
var meta = {
    title: 'Certifications/CertificationRow',
    component: CertificationRow_1.CertificationRow,
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        issuer: 'AWS',
        name: 'Solutions Architect Associate',
    },
};
exports.WithCredentialId = {
    args: {
        issuer: 'AWS',
        name: 'Solutions Architect Associate',
        credentialId: 'CERT-123-456-789',
    },
};
exports.WithDate = {
    args: {
        issuer: 'Microsoft',
        name: 'Azure Developer Associate',
        credentialId: 'AZ-204',
        date: '2023-06',
    },
};
exports.WithUrl = {
    args: {
        issuer: 'Google',
        name: 'Professional Cloud Architect',
        credentialId: 'GCP-PCA-20230415',
        date: '2023-04',
        url: 'https://google.accredible.com/example',
    },
};
exports.Complete = {
    args: {
        issuer: 'CompTIA',
        name: 'Security+ ce Certification',
        credentialId: 'COMP001234567890',
        date: '2024-01',
        url: 'https://comptia.org/certifications/verify',
    },
};
exports.LongNames = {
    args: {
        issuer: 'Project Management Institute',
        name: 'Project Management Professional (PMP)',
        credentialId: 'PMI-PMP-2023-123456',
        date: '2023-09',
    },
};
