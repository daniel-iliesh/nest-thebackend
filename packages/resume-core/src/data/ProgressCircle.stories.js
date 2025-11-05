"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechnologyStack = exports.SkillProficiency = exports.Small = exports.Large = exports.CustomColor = exports.WithValue = exports.Default = void 0;
var react_1 = require("react");
/**
 * ProgressCircle Stories
 */
var ProgressCircle_1 = require("./ProgressCircle");
var meta = {
    title: 'Resume Core/Data/ProgressCircle',
    component: ProgressCircle_1.ProgressCircle,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
    argTypes: {
        value: { control: { type: 'range', min: 0, max: 100, step: 5 } },
        size: { control: { type: 'range', min: 40, max: 150, step: 10 } },
        strokeWidth: { control: { type: 'range', min: 2, max: 12, step: 1 } },
        color: { control: 'color' },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        value: 75,
        max: 100,
    },
};
exports.WithValue = {
    args: {
        value: 85,
        max: 100,
        label: 'JavaScript',
        showValue: true,
    },
};
exports.CustomColor = {
    args: {
        value: 90,
        max: 100,
        color: '#28a745',
        label: 'React',
        showValue: true,
    },
};
exports.Large = {
    args: {
        value: 70,
        max: 100,
        size: 120,
        strokeWidth: 10,
        label: 'TypeScript',
        showValue: true,
    },
};
exports.Small = {
    args: {
        value: 80,
        max: 100,
        size: 50,
        strokeWidth: 4,
        label: 'Node.js',
    },
};
exports.SkillProficiency = {
    render: function () { return (<div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      <ProgressCircle_1.ProgressCircle value={95} label="Expert" showValue color="#28a745"/>
      <ProgressCircle_1.ProgressCircle value={80} label="Advanced" showValue color="#007bff"/>
      <ProgressCircle_1.ProgressCircle value={60} label="Intermediate" showValue color="#ffc107"/>
      <ProgressCircle_1.ProgressCircle value={30} label="Beginner" showValue color="#dc3545"/>
    </div>); },
};
exports.TechnologyStack = {
    render: function () { return (<div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
            gap: '1.5rem',
        }}>
      <ProgressCircle_1.ProgressCircle value={90} label="JavaScript" showValue/>
      <ProgressCircle_1.ProgressCircle value={85} label="React" showValue color="#61dafb"/>
      <ProgressCircle_1.ProgressCircle value={80} label="TypeScript" showValue color="#3178c6"/>
      <ProgressCircle_1.ProgressCircle value={75} label="Node.js" showValue color="#339933"/>
      <ProgressCircle_1.ProgressCircle value={70} label="Python" showValue color="#3776ab"/>
      <ProgressCircle_1.ProgressCircle value={65} label="Docker" showValue color="#2496ed"/>
    </div>); },
};
