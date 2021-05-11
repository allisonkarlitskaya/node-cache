"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('Button renders properly', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_Button["default"], {
    id: "button1"
  }, "Default button")).getElement();
  expect(component).toMatchSnapshot();
});
test('Button allows to specify size and style', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_Button["default"], {
    id: "button1",
    bsStyle: "primary",
    bsSize: "large"
  }, "Large Primary button")).getElement();
  expect(component).toMatchSnapshot();
});