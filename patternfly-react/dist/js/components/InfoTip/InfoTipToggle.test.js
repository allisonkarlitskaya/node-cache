"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _InfoTipToggle = _interopRequireDefault(require("./InfoTipToggle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('defaults props', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_InfoTipToggle["default"], {
    bsRole: "bsRole",
    bsClass: "bsClass"
  }));
  expect(view).toMatchSnapshot('props are defaulted to expected values');
});
test('removes bs props', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_InfoTipToggle["default"], {
    bsRole: "bsRole",
    bsClass: "bsClass"
  }));
  expect(view.first().props().bsClass).toBeUndefined();
  expect(view.first().props().bsRole).toBeUndefined();
});
test('sets aria-expanded to true if open = true', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_InfoTipToggle["default"], {
    open: true
  }));
  expect(view.first().props()['aria-expanded']).toBe(true);
});
test('sets aria-expanded to false if open = false', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_InfoTipToggle["default"], {
    open: false
  }));
  expect(view.first().props()['aria-expanded']).toBe(false);
});
test('passes extra props to the root element', function () {
  var id = 'id';
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_InfoTipToggle["default"], {
    id: id
  }));
  expect(view.first().props().id).toBe(id);
});
test('uses classsName from props', function () {
  var className = 'className';
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_InfoTipToggle["default"], {
    className: className
  }));
  expect(view.first().props().className).toBe(className);
});