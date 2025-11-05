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
exports.AccentTopRule = AccentTopRule;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var StyledRule = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", ";\n  max-width: 40%; /* Design constraint: max 40% */\n  min-width: 25%; /* Design constraint: min 25% */\n  height: ", ";\n  background-color: ", ";\n  margin-bottom: ", ";\n  margin-left: ", ";\n  margin-right: ", ";\n\n  @media print {\n    /* Ensure color renders in print */\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n    /* Prevent page breaks */\n    page-break-inside: avoid;\n    /* Ensure minimum thickness for print visibility */\n    min-height: 2pt;\n  }\n\n  @media screen and (max-width: 768px) {\n    /* Increase width slightly on mobile for better visibility */\n    width: ", ";\n  }\n"], ["\n  width: ", ";\n  max-width: 40%; /* Design constraint: max 40% */\n  min-width: 25%; /* Design constraint: min 25% */\n  height: ", ";\n  background-color: ", ";\n  margin-bottom: ", ";\n  margin-left: ", ";\n  margin-right: ", ";\n\n  @media print {\n    /* Ensure color renders in print */\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n    /* Prevent page breaks */\n    page-break-inside: avoid;\n    /* Ensure minimum thickness for print visibility */\n    min-height: 2pt;\n  }\n\n  @media screen and (max-width: 768px) {\n    /* Increase width slightly on mobile for better visibility */\n    width: ", ";\n  }\n"])), function (props) { return props.width || '30%'; }, function (props) { return props.thickness || '2.5pt'; }, function (props) {
    var _a, _b;
    return props.color ||
        ((_b = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.colors) === null || _b === void 0 ? void 0 : _b.accent) ||
        'var(--resume-color-accent, #2563eb)';
}, function (props) { var _a, _b; return ((_b = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.spacing) === null || _b === void 0 ? void 0 : _b.tight) || 'var(--resume-space-tight, 0.5rem)'; }, function (props) {
    if (props.align === 'center')
        return 'auto';
    if (props.align === 'right')
        return 'auto';
    return '0';
}, function (props) {
    if (props.align === 'center')
        return 'auto';
    if (props.align === 'right')
        return '0';
    return 'auto';
}, function (props) { return (props.width ? "calc(".concat(props.width, " * 1.2)") : '36%'); });
function AccentTopRule(_a) {
    var width = _a.width, _b = _a.align, align = _b === void 0 ? 'left' : _b, thickness = _a.thickness, color = _a.color, className = _a.className, rest = __rest(_a, ["width", "align", "thickness", "color", "className"]);
    return (<StyledRule role="presentation" aria-hidden="true" width={width} align={align} thickness={thickness} color={color} className={"resume-accent-top-rule ".concat(className || '').trim()} {...rest}/>);
}
exports.default = AccentTopRule;
var templateObject_1;
