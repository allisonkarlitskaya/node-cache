"use strict";

var _MenuItem = _interopRequireDefault(require("../MenuItem/MenuItem"));

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _DropdownKebab = _interopRequireDefault(require("./DropdownKebab"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('Kebab dropdown renders properly', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_DropdownKebab["default"], {
    id: "myKebab",
    title: "Kebab title"
  }, _react["default"].createElement(_MenuItem["default"], null, "Action"), _react["default"].createElement(_MenuItem["default"], null, "Another Action"), _react["default"].createElement(_MenuItem["default"], null, "Something else here"), _react["default"].createElement(_MenuItem["default"], {
    divider: true
  }), _react["default"].createElement(_MenuItem["default"], null, "Separated link")));
  expect(component).toMatchSnapshot();
});