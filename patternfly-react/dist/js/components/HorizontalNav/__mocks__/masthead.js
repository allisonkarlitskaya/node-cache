"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mastheadMock = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mastheadMock = function mastheadMock(props) {
  return _react["default"].createElement(_index.Masthead, props, _react["default"].createElement(_index.Masthead.Collapse, null, _react["default"].createElement(_index.Masthead.Dropdown, {
    id: "app-help-dropdown",
    title: _react["default"].createElement("span", {
      title: "Help",
      className: "pficon pficon-help"
    }),
    noCaret: true
  }, _react["default"].createElement(_index.MenuItem, {
    eventKey: "1"
  }, "Help"), _react["default"].createElement(_index.MenuItem, {
    eventKey: "2"
  }, "About")), _react["default"].createElement(_index.Masthead.Dropdown, {
    id: "app-user-dropdown",
    title: _react["default"].createElement("span", null, _react["default"].createElement("span", {
      title: "Help",
      className: "pficon pficon-user"
    }), _react["default"].createElement("span", {
      className: "dropdown-title"
    }, " Brian Johnson"))
  }, _react["default"].createElement(_index.MenuItem, {
    eventKey: "1"
  }, "User Preferences"), _react["default"].createElement(_index.MenuItem, {
    eventKey: "2"
  }, "Logout"))));
};

exports.mastheadMock = mastheadMock;