"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LongTitle = exports.WithoutVenue = exports.MultipleAuthors = exports.WithUrl = exports.Default = void 0;
var PublicationEntryPlain_1 = require("./PublicationEntryPlain");
var meta = {
    title: 'Publications/PublicationEntryPlain',
    component: PublicationEntryPlain_1.PublicationEntryPlain,
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        author: 'Smith, J. & Doe, A.',
        year: 2023,
        title: 'A Novel Approach to Resume Formatting for ATS Systems',
        venue: 'Journal of CV Design, Vol. 12, pp. 45-67',
    },
};
exports.WithUrl = {
    args: {
        author: 'Johnson, M.',
        year: 2024,
        title: 'Machine Learning Applications in Resume Parsing',
        venue: 'IEEE Conference on Document Processing',
        url: 'https://example.com/paper',
    },
};
exports.MultipleAuthors = {
    args: {
        author: "Zhang, L., Patel, R., O'Connor, S. & Williams, K.",
        year: 2022,
        title: 'Cross-Platform Resume Standards: A Comprehensive Survey',
        venue: 'ACM Computing Surveys, Vol. 55, No. 3',
        url: 'https://doi.org/10.1145/example',
    },
};
exports.WithoutVenue = {
    args: {
        author: 'Brown, T.',
        year: 2023,
        title: 'Self-Published Guide to Professional Resume Writing',
    },
};
exports.LongTitle = {
    args: {
        author: 'Martinez, A. & Chen, W.',
        year: 2021,
        title: 'An Extensive Analysis of Applicant Tracking System Requirements and Their Impact on Resume Design Patterns in Modern Hiring Processes',
        venue: 'International Journal of Human Resources Technology',
    },
};
