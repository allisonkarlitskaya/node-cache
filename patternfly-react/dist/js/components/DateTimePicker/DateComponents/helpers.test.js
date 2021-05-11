"use strict";

var _helpers = require("./helpers");

describe('addDays ', function () {
  var date = new Date('2/21/2019, 2:22:31 PM');
  test('same month', function () {
    var newDate = (0, _helpers.addDays)(date, 2);
    expect(newDate).toEqual(new Date('2/23/2019, 2:22:31 PM'));
  });
  test('different month', function () {
    var newDate = (0, _helpers.addDays)(date, 20);
    expect(newDate).toEqual(new Date('3/13/2019, 2:22:31 PM'));
  });
  test('negative amount', function () {
    var newDate = (0, _helpers.addDays)(date, -2);
    expect(newDate).toEqual(new Date('2/19/2019, 2:22:31 PM'));
  });
});
describe('addMonths ', function () {
  var date = new Date('2/21/2019, 2:22:31 PM');
  test('same year', function () {
    var newDate = (0, _helpers.addMonths)(date, 2);
    expect(newDate).toEqual(new Date('4/21/2019, 2:22:31 PM'));
  });
  test('different year', function () {
    var newDate = (0, _helpers.addMonths)(date, 13);
    expect(newDate).toEqual(new Date('3/21/2020, 2:22:31 PM'));
  });
  test('negative amount', function () {
    var newDate = (0, _helpers.addMonths)(date, -1);
    expect(newDate).toEqual(new Date('1/21/2019, 2:22:31 PM'));
  });
});
describe('isEqualDate ', function () {
  var date = new Date('2/21/2019, 2:22:31 PM');
  test('equal', function () {
    var date2 = new Date('2/21/2019, 6:22:31 PM');
    expect((0, _helpers.isEqualDate)(date, date2)).toBeTruthy();
  });
  test('not equal', function () {
    var date2 = new Date('2/22/2019, 6:22:31 PM');
    expect((0, _helpers.isEqualDate)(date, date2)).toBeFalsy();
  });
});
describe('isWeekend ', function () {
  test('not weekend', function () {
    var date = new Date('2/21/2019, 6:22:31 PM');
    expect((0, _helpers.isWeekend)(date)).toBeFalsy();
  });
  test('is weekend', function () {
    var date = new Date('2/23/2019, 6:22:31 PM');
    expect((0, _helpers.isWeekend)(date)).toBeTruthy();
  });
});
describe('getMonthStart ', function () {
  test('already strart of the month', function () {
    var date = new Date('2/1/2019, 6:22:31 PM');
    expect((0, _helpers.getMonthStart)(date)).toEqual(new Date('2/1/2019, 6:22:31 PM'));
  });
  test('muidlle of the month', function () {
    var date = new Date('2/23/2019, 6:22:31 PM');
    expect((0, _helpers.getMonthStart)(date)).toEqual(new Date('2/1/2019, 6:22:31 PM'));
  });
});