"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Multiple = exports.CustomMarker = exports.WithoutLine = exports.Default = void 0;
var react_1 = require("react");
/**
 * TimelineItem Stories
 */
var TimelineItem_1 = require("./TimelineItem");
var meta = {
    title: 'Resume Core/Timeline/TimelineItem',
    component: TimelineItem_1.TimelineItem,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        title: 'Senior Software Engineer at Tech Corp',
        meta: '2020 - Present',
    },
};
exports.WithoutLine = {
    args: {
        title: 'Project Lead',
        meta: '2019',
        showLine: false,
        children: 'Led team of 5 developers',
    },
};
exports.CustomMarker = {
    args: {
        title: 'Achievement',
        meta: 'Q2 2023',
        markerColor: '#28a745',
        markerSize: '20px',
        children: 'Awarded Employee of the Quarter',
    },
};
exports.Multiple = {
    render: function () { return (<div>
      <TimelineItem_1.TimelineItem title="Current Role" meta="2020-Present" markerColor="#007bff">
        Senior Software Engineer at Tech Corp
      </TimelineItem_1.TimelineItem>
      <TimelineItem_1.TimelineItem title="Previous Role" meta="2018-2020" markerColor="#28a745">
        Software Engineer at StartupCo
      </TimelineItem_1.TimelineItem>
      <TimelineItem_1.TimelineItem title="First Role" meta="2016-2018" markerColor="#ffc107">
        Junior Developer at WebAgency
      </TimelineItem_1.TimelineItem>
    </div>); },
};
