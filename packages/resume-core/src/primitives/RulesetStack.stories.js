"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllVariants = exports.Thicker = exports.CustomColor = exports.WideSpacing = exports.TightSpacing = exports.FiveRules = exports.TwoRules = exports.Default = void 0;
var RulesetStack_1 = require("./RulesetStack");
var meta = {
    title: 'Primitives/Dividers/RulesetStack',
    component: RulesetStack_1.RulesetStack,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {},
};
exports.TwoRules = {
    args: {
        count: 2,
    },
};
exports.FiveRules = {
    args: {
        count: 5,
    },
};
exports.TightSpacing = {
    args: {
        count: 3,
        gapMultiplier: 0.5,
    },
};
exports.WideSpacing = {
    args: {
        count: 3,
        gapMultiplier: 2,
    },
};
exports.CustomColor = {
    args: {
        count: 3,
        color: '#94a3b8',
    },
};
exports.Thicker = {
    args: {
        count: 3,
        thickness: '0.6pt',
    },
};
exports.AllVariants = {
    render: function () { return (<div style={{ maxWidth: '600px' }}>
      <p>2 rules (minimal)</p>
      <RulesetStack_1.RulesetStack count={2}/>

      <p>3 rules (default)</p>
      <RulesetStack_1.RulesetStack count={3}/>

      <p>5 rules (maximum)</p>
      <RulesetStack_1.RulesetStack count={5}/>

      <p>Tight spacing (0.5x multiplier)</p>
      <RulesetStack_1.RulesetStack count={3} gapMultiplier={0.5}/>

      <p>Wide spacing (2x multiplier)</p>
      <RulesetStack_1.RulesetStack count={3} gapMultiplier={2}/>

      <p>Custom color (slate)</p>
      <RulesetStack_1.RulesetStack count={3} color="#94a3b8"/>

      <p>Thicker rules (0.6pt)</p>
      <RulesetStack_1.RulesetStack count={3} thickness="0.6pt"/>
    </div>); },
};
