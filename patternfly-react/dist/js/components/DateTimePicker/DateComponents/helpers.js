"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.helpers = exports.getWeekStart = exports.getMonthStart = exports.isWeekend = exports.isEqualDate = exports.addYears = exports.addMonths = exports.addDays = void 0;

var addDays = function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

exports.addDays = addDays;

var addMonths = function addMonths(date, months) {
  var result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
};

exports.addMonths = addMonths;

var addYears = function addYears(date, years) {
  var result = new Date(date);
  result.setYear(result.getFullYear() + years);
  return result;
};

exports.addYears = addYears;

var isEqualDate = function isEqualDate(date1, date2) {
  return date1.getYear() === date2.getYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
};

exports.isEqualDate = isEqualDate;

var isWeekend = function isWeekend(date) {
  return date.getDay() === 6 || date.getDay() === 5;
};

exports.isWeekend = isWeekend;

var getMonthStart = function getMonthStart(date) {
  date.setDate(1);
  return date;
};

exports.getMonthStart = getMonthStart;

var getWeekStart = function getWeekStart(date) {
  return addDays(date, (7 - date.getDay()) % 7);
};

exports.getWeekStart = getWeekStart;
var helpers = {
  addDays: addDays,
  addMonths: addMonths,
  isEqualDate: isEqualDate,
  isWeekend: isWeekend,
  getMonthStart: getMonthStart,
  getWeekStart: getWeekStart
};
exports.helpers = helpers;
var _default = helpers;
exports["default"] = _default;