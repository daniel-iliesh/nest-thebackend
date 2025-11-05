"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoTitle = exports.LongContent = exports.SmallSize = exports.InfoVariant = exports.WarningVariant = exports.SuccessVariant = exports.WithIcon = exports.Default = void 0;
var AccentCalloutPanel_jsx_1 = require("./AccentCalloutPanel.jsx");
var meta = {
    title: 'Containers/AccentCalloutPanel',
    component: AccentCalloutPanel_jsx_1.AccentCalloutPanel,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'success', 'warning', 'info'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md'],
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        title: 'Key Achievement',
        children: 'Led the successful migration of a monolithic application to microservices architecture, serving over 10 million users with zero downtime during the transition.',
    },
};
exports.WithIcon = {
    args: {
        title: 'Career Milestone',
        icon: '🏆',
        children: 'Promoted to Senior Engineer after 18 months, recognizing exceptional technical leadership and mentorship contributions.',
    },
};
exports.SuccessVariant = {
    args: {
        title: 'Project Success',
        icon: '✓',
        variant: 'success',
        children: 'Delivered the mobile app redesign 2 weeks ahead of schedule, resulting in a 45% increase in user engagement and 4.8 App Store rating.',
    },
};
exports.WarningVariant = {
    args: {
        title: 'Important Note',
        icon: '⚠',
        variant: 'warning',
        children: 'Notice period: 4 weeks. Currently on a critical project timeline through end of Q2.',
    },
};
exports.InfoVariant = {
    args: {
        title: 'Additional Context',
        icon: 'ℹ',
        variant: 'info',
        children: 'Open to relocation for the right opportunity. Preferred locations: San Francisco Bay Area, Seattle, or remote.',
    },
};
exports.SmallSize = {
    args: {
        title: 'Quick Note',
        size: 'sm',
        children: 'Available for consulting engagements starting Q3 2024.',
    },
};
exports.LongContent = {
    args: {
        title: 'Technical Leadership Experience',
        icon: '👥',
        variant: 'info',
        children: (<div>
        <p>
          As Engineering Lead, I've guided multiple cross-functional teams
          through complex technical challenges:
        </p>
        <ul style={{ marginTop: '8px', marginBottom: 0 }}>
          <li>Established code review best practices across 4 teams</li>
          <li>Implemented CI/CD pipeline reducing deployment time by 75%</li>
          <li>Mentored 8 engineers who were promoted to senior positions</li>
          <li>Led architecture decisions for 3 major product initiatives</li>
        </ul>
      </div>),
    },
};
exports.NoTitle = {
    args: {
        children: 'This callout panel has no title, just content. Still maintains the distinctive left border and accent styling.',
    },
};
