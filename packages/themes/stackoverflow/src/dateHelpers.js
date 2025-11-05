"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DMY = exports.Y = exports.MY = void 0;
var moment_1 = require("moment");
var MY = function (date) {
    return (0, moment_1.default)(date, ['YYYY-MM-DD']).format('MMM YYYY');
};
exports.MY = MY;
var Y = function (date) { return (0, moment_1.default)(date, ['YYYY-MM-DD']).format('YYYY'); };
exports.Y = Y;
var DMY = function (date) {
    return (0, moment_1.default)(date, ['YYYY-MM-DD']).format('D MMM YYYY');
};
exports.DMY = DMY;
