"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Button = require("../Button");

var _Modal = require("../Modal");

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('ModelessOverlay renders properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.ModelessOverlay, {
    id: "test-modeless-overlay-id",
    className: "test-modeless-overlay-class"
  }, _react["default"].createElement(_Modal.Modal.Header, null, _react["default"].createElement(_Modal.Modal.CloseButton, null), _react["default"].createElement(_Modal.Modal.Title, null, "Modal Overlay Title")), _react["default"].createElement(_Modal.Modal.Body, null, "test body text"), _react["default"].createElement(_Modal.Modal.Footer, null, _react["default"].createElement(_Button.Button, {
    bsStyle: "default",
    className: "btn-cancel"
  }, "Cancel"), _react["default"].createElement(_Button.Button, {
    bsStyle: "primary"
  }, "Save"))));
  expect(component.render()).toMatchSnapshot();
});
test('ModelessOverlay renders properly when setting size', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.ModelessOverlay, {
    id: "test-modeless-overlay-id",
    className: "test-modeless-overlay-class",
    bsSize: "sm"
  }, _react["default"].createElement(_Modal.Modal.Header, null, _react["default"].createElement(_Modal.Modal.CloseButton, null), _react["default"].createElement(_Modal.Modal.Title, null, "Modal Overlay Title")), _react["default"].createElement(_Modal.Modal.Body, null, "test body text"), _react["default"].createElement(_Modal.Modal.Footer, null, _react["default"].createElement(_Button.Button, {
    bsStyle: "default",
    className: "btn-cancel"
  }, "Cancel"), _react["default"].createElement(_Button.Button, {
    bsStyle: "primary"
  }, "Save"))));
  expect(component.render()).toMatchSnapshot();
});