"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesetStack = RulesetStack;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var StyledStack = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  margin-top: ", ";\n  margin-bottom: ", ";\n\n  @media print {\n    page-break-inside: avoid;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  margin-top: ", ";\n  margin-bottom: ", ";\n\n  @media print {\n    page-break-inside: avoid;\n  }\n"])), function (props) { var _a, _b; return ((_b = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.spacing) === null || _b === void 0 ? void 0 : _b.tight) || 'var(--resume-space-tight, 0.5rem)'; }, function (props) { var _a, _b; return ((_b = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.spacing) === null || _b === void 0 ? void 0 : _b.tight) || 'var(--resume-space-tight, 0.5rem)'; });
var StyledRule = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  height: ", ";\n  background-color: ", ";\n  margin-bottom: ", ";\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media print {\n    /* Ensure minimum stroke weight for print visibility */\n    min-height: 0.3pt;\n    /* Ensure color renders in print */\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n"], ["\n  width: 100%;\n  height: ", ";\n  background-color: ", ";\n  margin-bottom: ", ";\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media print {\n    /* Ensure minimum stroke weight for print visibility */\n    min-height: 0.3pt;\n    /* Ensure color renders in print */\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n"])), function (props) { return props.thickness || '0.4pt'; }, function (props) {
    var _a, _b;
    return props.color ||
        ((_b = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.colors) === null || _b === void 0 ? void 0 : _b.border) ||
        'var(--resume-color-border, #e5e7eb)';
}, function (props) { return props.gapSize; });
function RulesetStack(_a) {
    var _b = _a.count, count = _b === void 0 ? 3 : _b, _c = _a.gapMultiplier, gapMultiplier = _c === void 0 ? 1 : _c, thickness = _a.thickness, color = _a.color, className = _a.className, rest = __rest(_a, ["count", "gapMultiplier", "thickness", "color", "className"]);
    // Clamp count between 2 and 5
    var ruleCount = Math.min(Math.max(count, 2), 5);
    // Calculate gap size based on body leading (assuming 1.5 line-height)
    // Default body line-height from tokens is 1.5
    var baseLeading = 1.5; // From typography.lineHeights.normal
    var gapSize = "calc(".concat(baseLeading * gapMultiplier, "rem * 0.5)");
    return (<StyledStack role="separator" aria-orientation="horizontal" className={"resume-ruleset-stack ".concat(className || '').trim()} {...rest}>
      {Array.from({ length: ruleCount }, function (_, index) { return (<StyledRule key={index} thickness={thickness} color={color} gapSize={gapSize} aria-hidden="true"/>); })}
    </StyledStack>);
}
exports.default = RulesetStack;
var templateObject_1, templateObject_2;
