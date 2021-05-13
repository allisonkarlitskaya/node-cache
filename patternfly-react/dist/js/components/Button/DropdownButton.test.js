"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _DropdownButton = _interopRequireDefault(require("./DropdownButton"));

var _MenuItem = require("../MenuItem");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('DropdownButton should renders properly', function () {
  _DropdownButton["default"].BUTTON_BS_STYLES.forEach(function (bsStyle) {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_DropdownButton["default"], {
      title: bsStyle,
      id: "dropdown-button-test-".concat(bsStyle)
    }, _react["default"].createElement(_MenuItem.MenuItem, {
      eventKey: "1"
    }, "Action"), _react["default"].createElement(_MenuItem.MenuItem, {
      eventKey: "2"
    }, "Another action"), _react["default"].createElement(_MenuItem.MenuItem, {
      eventKey: "3",
      active: true
    }, "Active Item"), _react["default"].createElement(_MenuItem.MenuItem, {
      divider: true
    }), _react["default"].createElement(_MenuItem.MenuItem, {
      eventKey: "4"
    }, "Separated link")));
    expect(component).toMatchSnapshot();
  });
});