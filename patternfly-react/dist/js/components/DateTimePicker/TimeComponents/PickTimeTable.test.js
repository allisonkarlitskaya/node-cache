"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _PickTimeTable = _interopRequireDefault(require("./PickTimeTable"));

var _TimeConstants = require("./TimeConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('PickTimeTable is working properly for Minute', function () {
  var time = new Date('2019-01-04 14:22:31');
  var setSelected = jest.fn();
  var component = (0, _enzyme.mount)(_react["default"].createElement(_PickTimeTable["default"], {
    time: time,
    type: _TimeConstants.MINUTE,
    setSelected: setSelected
  }));
  expect(component.render()).toMatchSnapshot();
  component.find('.minute').first().simulate('click');
  expect(setSelected).toBeCalledWith(new Date('2019-01-04 14:00:31'));
});
test('PickTimeTable is working properly for Hour', function () {
  var time = new Date('2019-01-04 14:22:31');
  var setSelected = jest.fn();
  var component = (0, _enzyme.mount)(_react["default"].createElement(_PickTimeTable["default"], {
    time: time,
    type: _TimeConstants.HOUR,
    setSelected: setSelected
  }));
  expect(component.render()).toMatchSnapshot();
  component.find('.hour').first().simulate('click');
  expect(setSelected).toBeCalledWith(new Date('2019-01-04 12:22:31'));
});