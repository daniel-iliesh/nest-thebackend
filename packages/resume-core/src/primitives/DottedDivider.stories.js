"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllVariants = exports.LargerDots = exports.SparseSpacing = exports.CustomColor = exports.Default = void 0;
var DottedDivider_1 = require("./DottedDivider");
var meta = {
    title: 'Primitives/Dividers/DottedDivider',
    component: DottedDivider_1.DottedDivider,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {},
};
exports.CustomColor = {
    args: {
        color: '#94a3b8',
    },
};
exports.SparseSpacing = {
    args: {
        spacing: '8px',
    },
};
exports.LargerDots = {
    args: {
        dotSize: '3px',
    },
};
exports.AllVariants = {
    render: function () { return (<div style={{ maxWidth: '600px' }}>
      <p>Default dotted divider</p>
      <DottedDivider_1.DottedDivider />

      <p>Custom color (slate)</p>
      <DottedDivider_1.DottedDivider color="#94a3b8"/>

      <p>Sparse spacing (8px)</p>
      <DottedDivider_1.DottedDivider spacing="8px"/>

      <p>Larger dots (3px)</p>
      <DottedDivider_1.DottedDivider dotSize="3px"/>
    </div>); },
};
