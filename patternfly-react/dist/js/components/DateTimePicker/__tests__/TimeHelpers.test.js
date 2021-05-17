"use strict";

var _TimeHelpers = require("../TimeHelpers");

describe('getDateFromTime', function () {
  test('creates a date object with time only', function () {
    expect((0, _TimeHelpers.getDateFromTime)('2:30').getHours()).toEqual(2);
    expect((0, _TimeHelpers.getDateFromTime)('2:30').getMinutes()).toEqual(30);
  });
  test('creates a date object with time and date', function () {
    expect((0, _TimeHelpers.getDateFromTime)('2/2/2 2:30').getHours()).toEqual(2);
    expect((0, _TimeHelpers.getDateFromTime)('2/2/2 2:30').getMinutes()).toEqual(30);
  });
  test('doesnt creates a date object with ivalid string', function () {
    expect((0, _TimeHelpers.getDateFromTime)('time')).toEqual('time');
  });
});
describe('formatTime', function () {
  test('parsed a valid time', function () {
    expect((0, _TimeHelpers.formatTime)('2:30')).toEqual('2:30 AM');
  });
  test('parsed a valid time and date', function () {
    expect((0, _TimeHelpers.formatTime)('2/2/2 2:30')).toEqual('2:30 AM');
  });
  test('parsed a non valid time', function () {
    expect((0, _TimeHelpers.formatTime)('time')).toEqual('time');
  });
});