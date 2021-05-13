"use strict";

var _Timer = _interopRequireDefault(require("./Timer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

jest.useFakeTimers();
jest.spyOn(global, 'clearTimeout');
jest.spyOn(global, 'setTimeout');
beforeEach(function () {
  global.clearTimeout.mockClear();
  global.setTimeout.mockClear();
});
describe('clearTimer', function () {
  test('checkes for timer before trying to clear it', function () {
    var timer = new _Timer["default"](jest.fn(), 100);
    timer.clearTimer();
    expect(global.clearTimeout).not.toBeCalled();
  });
  test('clears the started timer', function () {
    var timer = new _Timer["default"](jest.fn(), 100);
    timer.startTimer();
    timer.clearTimer();
    expect(global.clearTimeout).toBeCalled();
    expect(timer.timer).toBe(null);
  });
});
describe('startTimer', function () {
  test('uses function and delay from constructor', function () {
    var fn = jest.fn();
    var delay = 100;
    var timer = new _Timer["default"](fn, delay);
    timer.startTimer();
    expect(global.setTimeout).toBeCalledWith(fn, delay);
  });
  test('uses the function passed to startTimer', function () {
    var fn = jest.fn();
    var delay = 100;
    var timer = new _Timer["default"](jest.fn(), delay);
    timer.startTimer(fn);
    expect(global.setTimeout).toBeCalledWith(fn, delay);
  });
  test('uses the delay passed to startTimer', function () {
    var fn = jest.fn();
    var delay = 100;
    var timer = new _Timer["default"](fn, 50);
    timer.startTimer(undefined, delay);
    expect(global.setTimeout).toBeCalledWith(fn, delay);
  });
});
describe('skipTimer', function () {
  test('executes the function and clears the timer', function () {
    var fn = jest.fn();
    var timer = new _Timer["default"](fn, 100);
    timer.startTimer();
    timer.skipTimer();
    expect(fn).toBeCalledWith(true);
    expect(global.clearTimeout).toBeCalled();
  });
  test('does not execute the function if the timer has not started', function () {
    var fn = jest.fn();
    var timer = new _Timer["default"](fn, 100);
    timer.skipTimer();
    expect(fn).not.toBeCalled();
    expect(global.clearTimeout).not.toBeCalled();
  });
});