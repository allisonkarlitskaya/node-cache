"use strict";

var _DateHelpers = require("../DateHelpers");

describe('formatTime', function () {
  test('parsed a valid date', function () {
    expect((0, _DateHelpers.formatDate)('1/1/1')).toEqual('1/1/2001');
  });
  test('parsed a valid date and date', function () {
    expect((0, _DateHelpers.formatDate)('2/2/2 2:30')).toEqual('2/2/2002');
  });
  test('parsed a non valid date', function () {
    expect((0, _DateHelpers.formatDate)('date')).toEqual('date');
  });
});