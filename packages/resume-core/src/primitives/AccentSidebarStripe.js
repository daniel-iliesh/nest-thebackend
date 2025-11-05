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
exports.AccentSidebarStripe = AccentSidebarStripe;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var StyledStripe = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  ", "\n  top: ", ";\n  width: ", ";\n  max-width: 6mm; /* ATS-safe maximum */\n  height: ", ";\n  background-color: ", ";\n  pointer-events: none; /* Prevent interaction */\n\n  @media print {\n    /* Ensure color renders in print */\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n    /* Prevent page breaks inside stripe */\n    page-break-inside: avoid;\n  }\n\n  @media screen and (max-width: 768px) {\n    /* Reduce width on mobile */\n    width: ", ";\n  }\n"], ["\n  position: absolute;\n  ", "\n  top: ", ";\n  width: ", ";\n  max-width: 6mm; /* ATS-safe maximum */\n  height: ", ";\n  background-color: ", ";\n  pointer-events: none; /* Prevent interaction */\n\n  @media print {\n    /* Ensure color renders in print */\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n    /* Prevent page breaks inside stripe */\n    page-break-inside: avoid;\n  }\n\n  @media screen and (max-width: 768px) {\n    /* Reduce width on mobile */\n    width: ", ";\n  }\n"])), function (props) { return (props.position === 'right' ? 'right: 0;' : 'left: 0;'); }, function (props) { return props.top || '0'; }, function (props) { return props.width || '4mm'; }, function (props) { return props.height || '100%'; }, function (props) {
    var _a, _b;
    return props.color ||
        ((_b = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.colors) === null || _b === void 0 ? void 0 : _b.accent) ||
        'var(--resume-color-accent, #2563eb)';
}, function (props) { return (props.width ? "calc(".concat(props.width, " * 0.75)") : '3mm'); });
function AccentSidebarStripe(_a) {
    var width = _a.width, color = _a.color, _b = _a.position, position = _b === void 0 ? 'left' : _b, height = _a.height, top = _a.top, className = _a.className, rest = __rest(_a, ["width", "color", "position", "height", "top", "className"]);
    return (<StyledStripe role="presentation" aria-hidden="true" width={width} color={color} position={position} height={height} top={top} className={"resume-accent-stripe ".concat(className || '').trim()} {...rest}/>);
}
exports.default = AccentSidebarStripe;
var templateObject_1;
