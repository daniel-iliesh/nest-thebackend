"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineInline = TimelineInline;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
/**
 * Unicode characters for proper typography
 * EN_DASH: – (U+2013) - used for ranges
 * NARROW_NO_BREAK_SPACE:   (U+202F) - used around dash
 */
var EN_DASH = '\u2013';
var NARROW_NO_BREAK_SPACE = '\u202F';
/**
 * Format a single date using Intl.DateTimeFormat
 */
function formatSingleDate(dateStr, format, locale, numberingSystem, presentLabel) {
    if (!dateStr) {
        return presentLabel || getPresentLabel(locale);
    }
    var date = typeof dateStr === 'string' ? new Date(dateStr) : dateStr;
    if (isNaN(date.getTime())) {
        return typeof dateStr === 'string' ? dateStr : '';
    }
    var monthFormats = {
        short: { month: 'short' },
        long: { month: 'long' },
        numeric: { month: '2-digit' },
    };
    var options = __assign(__assign({}, monthFormats[format]), { year: 'numeric' });
    if (numberingSystem) {
        options.numberingSystem = numberingSystem;
    }
    var formatter = new Intl.DateTimeFormat(locale, options);
    return formatter.format(date);
}
/**
 * Get localized "Present" label
 */
function getPresentLabel(locale) {
    var labels = {
        en: 'Present',
        'en-US': 'Present',
        'en-GB': 'Present',
        fr: 'Présent',
        'fr-FR': 'Présent',
        es: 'Presente',
        'es-ES': 'Presente',
        de: 'Heute',
        'de-DE': 'Heute',
        it: 'Presente',
        'it-IT': 'Presente',
        pt: 'Presente',
        'pt-BR': 'Presente',
        ja: '現在',
        'ja-JP': '現在',
        zh: '至今',
        'zh-CN': '至今',
        'zh-TW': '至今',
        ko: '현재',
        'ko-KR': '현재',
        ar: 'حاضر',
        'ar-SA': 'حاضر',
    };
    return labels[locale] || labels[locale.split('-')[0]] || 'Present';
}
var InlineContainer = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: var(--resume-size-small, 10pt);\n  color: var(--resume-color-secondary, #666);\n  white-space: nowrap;\n  font-variant-numeric: tabular-nums; /* Consistent number width */\n\n  @media print {\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n"], ["\n  font-size: var(--resume-size-small, 10pt);\n  color: var(--resume-color-secondary, #666);\n  white-space: nowrap;\n  font-variant-numeric: tabular-nums; /* Consistent number width */\n\n  @media print {\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n"])));
var DateText = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-weight: var(--resume-weight-normal, 400);\n"], ["\n  font-weight: var(--resume-weight-normal, 400);\n"])));
var Separator = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  /* En dash with narrow no-break spaces for proper typography */\n  margin: 0;\n  padding: 0;\n"], ["\n  /* En dash with narrow no-break spaces for proper typography */\n  margin: 0;\n  padding: 0;\n"])));
/**
 * TimelineInline
 * Compact inline date range with proper typographic separator
 * Uses en dash (–) with narrow no-break spaces for professional appearance
 */
function TimelineInline(_a) {
    var startDate = _a.startDate, endDate = _a.endDate, _b = _a.format, format = _b === void 0 ? 'short' : _b, _c = _a.locale, locale = _c === void 0 ? 'en-US' : _c, presentLabel = _a.presentLabel, numberingSystem = _a.numberingSystem, _d = _a.useEnDash, useEnDash = _d === void 0 ? true : _d, className = _a.className;
    if (!startDate)
        return null;
    var start = formatSingleDate(startDate, format, locale, numberingSystem, presentLabel);
    var end = formatSingleDate(endDate, format, locale, numberingSystem, presentLabel);
    // Use en dash with narrow no-break spaces for proper typography
    var separator = useEnDash
        ? "".concat(NARROW_NO_BREAK_SPACE).concat(EN_DASH).concat(NARROW_NO_BREAK_SPACE)
        : ' - ';
    return (<InlineContainer className={"resume-timeline-inline ".concat(className || '').trim()}>
      <DateText>{start}</DateText>
      <Separator>{separator}</Separator>
      <DateText>{end}</DateText>
    </InlineContainer>);
}
exports.default = TimelineInline;
var templateObject_1, templateObject_2, templateObject_3;
