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
exports.KeylineDivider = KeylineDivider;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var StyledHr = styled_components_1.default.hr(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: none;\n  border-top: 0.5pt solid\n    ", ";\n  margin-left: ", ";\n  margin-right: ", ";\n  margin-top: ", ";\n  margin-bottom: ", ";\n\n  @media print {\n    /* Ensure minimum stroke weight for print visibility */\n    border-top-width: 0.3pt;\n    /* Prevent page breaks */\n    page-break-inside: avoid;\n    /* Ensure border renders in all print modes */\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n"], ["\n  border: none;\n  border-top: 0.5pt solid\n    ", ";\n  margin-left: ", ";\n  margin-right: ", ";\n  margin-top: ", ";\n  margin-bottom: ", ";\n\n  @media print {\n    /* Ensure minimum stroke weight for print visibility */\n    border-top-width: 0.3pt;\n    /* Prevent page breaks */\n    page-break-inside: avoid;\n    /* Ensure border renders in all print modes */\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n"])), function (props) {
    var _a, _b;
    return props.color ||
        ((_b = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.colors) === null || _b === void 0 ? void 0 : _b.border) ||
        'var(--resume-color-border, #e5e7eb)';
}, function (props) { return props.inset || '0'; }, function (props) { return props.inset || '0'; }, function (props) { var _a, _b; return ((_b = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.spacing) === null || _b === void 0 ? void 0 : _b.tight) || 'var(--resume-space-tight, 0.5rem)'; }, function (props) { var _a, _b; return ((_b = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.spacing) === null || _b === void 0 ? void 0 : _b.tight) || 'var(--resume-space-tight, 0.5rem)'; });
function KeylineDivider(_a) {
    var inset = _a.inset, color = _a.color, className = _a.className, rest = __rest(_a, ["inset", "color", "className"]);
    return (<StyledHr role="separator" aria-orientation="horizontal" inset={inset} color={color} className={"resume-keyline-divider ".concat(className || '').trim()} {...rest}/>);
}
exports.default = KeylineDivider;
var templateObject_1;
