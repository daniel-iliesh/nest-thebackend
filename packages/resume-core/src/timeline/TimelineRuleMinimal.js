"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineRuleMinimal = TimelineRuleMinimal;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: var(--resume-space-item, 12pt);\n\n  @media print {\n    break-inside: avoid;\n  }\n"], ["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: var(--resume-space-item, 12pt);\n\n  @media print {\n    break-inside: avoid;\n  }\n"])));
var Rule = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 1px;\n  background-color: ", ";\n\n  @media print {\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n"], ["\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 1px;\n  background-color: ", ";\n\n  @media print {\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n"])), function (props) {
    return props.$lineColor || 'var(--resume-color-border, #ddd)';
});
var Item = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: baseline;\n  gap: 12px;\n  padding-left: 20px;\n"], ["\n  position: relative;\n  display: flex;\n  align-items: baseline;\n  gap: 12px;\n  padding-left: 20px;\n"])));
var Tick = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: ", ";\n  height: ", ";\n  background-color: ", ";\n\n  @media print {\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n    min-height: 2pt; /* Ensure visibility in print */\n  }\n"], ["\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: ", ";\n  height: ", ";\n  background-color: ", ";\n\n  @media print {\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n    min-height: 2pt; /* Ensure visibility in print */\n  }\n"])), function (props) { return props.$width || '8px'; }, function (props) {
    var height = props.$height || '2pt';
    // Ensure minimum 2pt height
    var value = parseFloat(height);
    var unit = height.replace(/[\d.]/g, '');
    return value < 2 && unit === 'pt' ? '2pt' : height;
}, function (props) {
    return props.$color || 'var(--resume-color-border, #ddd)';
});
var Date = styled_components_1.default.span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: var(--resume-size-small, 10pt);\n  color: var(--resume-color-secondary, #666);\n  font-weight: var(--resume-weight-normal, 400);\n  white-space: nowrap;\n  flex-shrink: 0;\n"], ["\n  font-size: var(--resume-size-small, 10pt);\n  color: var(--resume-color-secondary, #666);\n  font-weight: var(--resume-weight-normal, 400);\n  white-space: nowrap;\n  flex-shrink: 0;\n"])));
var Content = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  flex: 1;\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  flex: 1;\n"])));
var Label = styled_components_1.default.span(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  font-size: var(--resume-size-body, 11pt);\n  color: var(--resume-color-primary, #000);\n  font-weight: var(--resume-weight-medium, 500);\n"], ["\n  font-size: var(--resume-size-body, 11pt);\n  color: var(--resume-color-primary, #000);\n  font-weight: var(--resume-weight-medium, 500);\n"])));
var Meta = styled_components_1.default.span(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  font-size: var(--resume-size-small, 10pt);\n  color: var(--resume-color-tertiary, #999);\n"], ["\n  font-size: var(--resume-size-small, 10pt);\n  color: var(--resume-color-tertiary, #999);\n"])));
/**
 * TimelineRuleMinimal
 * Displays a vertical timeline with tick marks and minimal styling
 * Perfect for chronological work history or education sections
 */
function TimelineRuleMinimal(_a) {
    var items = _a.items, lineColor = _a.lineColor, _b = _a.tickHeight, tickHeight = _b === void 0 ? '2pt' : _b, _c = _a.tickWidth, tickWidth = _c === void 0 ? '8px' : _c, className = _a.className;
    if (!items || items.length === 0)
        return null;
    return (<Container className={"resume-timeline-rule-minimal ".concat(className || '').trim()}>
      <Rule $lineColor={lineColor}/>
      {items.map(function (item, index) { return (<Item key={index}>
          <Tick $height={tickHeight} $width={tickWidth} $color={lineColor}/>
          <Date>{item.date}</Date>
          <Content>
            {item.label && <Label>{item.label}</Label>}
            {item.meta && <Meta>{item.meta}</Meta>}
          </Content>
        </Item>); })}
    </Container>);
}
exports.default = TimelineRuleMinimal;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
