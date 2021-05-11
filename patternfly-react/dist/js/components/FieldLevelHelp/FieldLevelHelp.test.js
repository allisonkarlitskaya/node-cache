"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _FieldLevelHelp = _interopRequireDefault(require("./FieldLevelHelp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('FieldLevelHelp renders properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_FieldLevelHelp["default"], {
    id: "fieldlevelname1"
  }, "Port Number"));
  expect(component).toMatchSnapshot();
});
test('FieldLevelHelp allows to specify mode content and close', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement("div", null, _react["default"].createElement("label", null, "Port Number"), _react["default"].createElement(_FieldLevelHelp["default"], {
    id: "fieldlevelname1",
    mode: "popover",
    content: "Enter Port number between the 4000-5000 range",
    rootClose: true,
    close: true,
    placement: "top",
    buttonClass: "additionl-button-class"
  })));
  expect(component).toMatchSnapshot();
});