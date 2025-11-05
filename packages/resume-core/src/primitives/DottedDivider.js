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
exports.DottedDivider = DottedDivider;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var StyledHr = styled_components_1.default.hr(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: none;\n  border-top: ", " dotted\n    ", ";\n  margin-top: ", ";\n  margin-bottom: ", ";\n\n  /* Override default border-top-width to use fixed spacing */\n  ", "\n\n  @media print {\n    /* Ensure dots render in all print modes */\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n    /* Prevent page breaks */\n    page-break-inside: avoid;\n    /* Fixed dot rendering for PDF generation */\n    border-top-width: ", ";\n  }\n"], ["\n  border: none;\n  border-top: ", " dotted\n    ", ";\n  margin-top: ", ";\n  margin-bottom: ", ";\n\n  /* Override default border-top-width to use fixed spacing */\n  ", "\n\n  @media print {\n    /* Ensure dots render in all print modes */\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n    /* Prevent page breaks */\n    page-break-inside: avoid;\n    /* Fixed dot rendering for PDF generation */\n    border-top-width: ", ";\n  }\n"])), function (props) { return props.dotSize || '2px'; }, function (props) {
    var _a, _b;
    return props.color ||
        ((_b = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.colors) === null || _b === void 0 ? void 0 : _b.border) ||
        'var(--resume-color-border, #e5e7eb)';
}, function (props) { var _a, _b; return ((_b = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.spacing) === null || _b === void 0 ? void 0 : _b.tight) || 'var(--resume-space-tight, 0.5rem)'; }, function (props) { var _a, _b; return ((_b = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.spacing) === null || _b === void 0 ? void 0 : _b.tight) || 'var(--resume-space-tight, 0.5rem)'; }, function (props) {
    var _a, _b;
    return props.spacing &&
        "\n    background-image: radial-gradient(\n      circle,\n      ".concat(props.color ||
            ((_b = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.colors) === null || _b === void 0 ? void 0 : _b.border) ||
            'var(--resume-color-border, #e5e7eb)', " ").concat(props.dotSize || '2px', ",\n      transparent ").concat(props.dotSize || '2px', "\n    );\n    background-size: ").concat(props.spacing, " 1px;\n    background-repeat: repeat-x;\n    background-position: center;\n    border: none;\n    height: 1px;\n  ");
}, function (props) { return props.dotSize || '2px'; });
function DottedDivider(_a) {
    var color = _a.color, spacing = _a.spacing, dotSize = _a.dotSize, className = _a.className, rest = __rest(_a, ["color", "spacing", "dotSize", "className"]);
    return (<StyledHr role="separator" aria-orientation="horizontal" color={color} spacing={spacing} dotSize={dotSize} className={"resume-dotted-divider ".concat(className || '').trim()} {...rest}/>);
}
exports.default = DottedDivider;
var templateObject_1;
