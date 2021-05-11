"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _InfoTipMenuFooter = _interopRequireDefault(require("./InfoTipMenuFooter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('adds classname to the root element', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_InfoTipMenuFooter["default"], {
    className: "extra-classname"
  }, "children"));
  expect(view.first().props().className).toMatchSnapshot('root has className from props');
});