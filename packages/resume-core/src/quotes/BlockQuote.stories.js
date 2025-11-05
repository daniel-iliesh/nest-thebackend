"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
var react_1 = require("react");
/**
 * BlockQuote Stories
 */
var BlockQuote_1 = require("./BlockQuote");
var meta = {
    title: 'Resume Core/Quotes/BlockQuote',
    component: BlockQuote_1.BlockQuote,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    render: function () { return (<BlockQuote_1.BlockQuote cite="Sarah Johnson, Senior Manager">
      Sarah is an exceptional engineer who consistently delivers high-quality
      work. Her technical expertise and leadership skills have been instrumental
      in our team's success.
    </BlockQuote_1.BlockQuote>); },
};
exports.Example = {
    render: function () { return (<BlockQuote_1.BlockQuote cite="Michael Chen, CTO at Tech Corp" highlight={true}>
      One of the most talented developers I've worked with. Sarah's ability to
      solve complex problems and mentor junior team members is outstanding.
    </BlockQuote_1.BlockQuote>); },
};
