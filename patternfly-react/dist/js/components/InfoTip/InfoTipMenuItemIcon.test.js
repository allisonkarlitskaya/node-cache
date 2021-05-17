"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _InfoTipMenuItemIcon = _interopRequireDefault(require("./InfoTipMenuItemIcon"));

var _Icon = require("../Icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('defaults props', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_InfoTipMenuItemIcon["default"], null));
  expect(view).toMatchSnapshot('props are defaulted to expected values.');
});
test('adds classname to the Icon', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_InfoTipMenuItemIcon["default"], {
    className: "extra-classname"
  }));
  expect(view.find(_Icon.Icon).props().className).toMatchSnapshot('Icon className includes additional className from props.');
});
test('passes additional props through', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_InfoTipMenuItemIcon["default"], {
    id: "id"
  }));
  expect(view).toMatchSnapshot('additional props are passed through.');
});