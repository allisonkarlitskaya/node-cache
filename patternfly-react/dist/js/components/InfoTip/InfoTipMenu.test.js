"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _InfoTipMenu = _interopRequireDefault(require("./InfoTipMenu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var props = {
  children: 'children'
};
test('forwards only valid props to the root element', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_InfoTipMenu["default"], _extends({}, props, {
    id: "id",
    bsRole: "bsRole",
    bsClass: "bsClass",
    pullRight: "pullRight",
    labelledBy: "labeledBy"
  })));
  expect(view).toMatchSnapshot('props are forwarded to root element');
});
test('adds classname to the root element', function () {
  var className = 'extra-classname';
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_InfoTipMenu["default"], _extends({}, props, {
    className: className
  })));
  var rootClassName = view.first().props().className;
  expect(rootClassName.includes(className)).toBe(true);
});