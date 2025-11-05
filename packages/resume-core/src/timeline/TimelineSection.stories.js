"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Education = exports.WorkHistory = void 0;
var react_1 = require("react");
/**
 * TimelineSection Stories
 */
var TimelineSection_1 = require("./TimelineSection");
var TimelineItem_1 = require("./TimelineItem");
var meta = {
    title: 'Resume Core/Timeline/TimelineSection',
    component: TimelineSection_1.TimelineSection,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.WorkHistory = {
    render: function () { return (<TimelineSection_1.TimelineSection>
      <TimelineItem_1.TimelineItem title="Senior Software Engineer" meta="2020-Present">
        Leading development of cloud-native applications at Tech Corp
      </TimelineItem_1.TimelineItem>
      <TimelineItem_1.TimelineItem title="Software Engineer" meta="2018-2020">
        Full-stack development at StartupCo
      </TimelineItem_1.TimelineItem>
      <TimelineItem_1.TimelineItem title="Junior Developer" meta="2016-2018">
        Front-end development at WebAgency
      </TimelineItem_1.TimelineItem>
    </TimelineSection_1.TimelineSection>); },
};
exports.Education = {
    render: function () { return (<TimelineSection_1.TimelineSection>
      <TimelineItem_1.TimelineItem title="MS Computer Science" meta="2018">
        Stanford University - Focus: AI/ML
      </TimelineItem_1.TimelineItem>
      <TimelineItem_1.TimelineItem title="BS Computer Engineering" meta="2016">
        MIT - Summa Cum Laude
      </TimelineItem_1.TimelineItem>
    </TimelineSection_1.TimelineSection>); },
};
