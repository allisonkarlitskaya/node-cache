"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MockIconBarChildren = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MockIconBarChildren = function MockIconBarChildren(props) {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("li", {
    className: "drawer-pf-trigger"
  }, _react["default"].createElement("a", {
    className: "nav-item-iconic"
  }, _react["default"].createElement(_index.Icon, {
    name: "bell"
  }))), _react["default"].createElement(_index.Dropdown, {
    componentClass: "li",
    id: "help"
  }, _react["default"].createElement(_index.Dropdown.Toggle, {
    useAnchor: true,
    className: "nav-item-iconic"
  }, _react["default"].createElement(_index.Icon, {
    type: "pf",
    name: "help"
  })), _react["default"].createElement(_index.Dropdown.Menu, null, _react["default"].createElement(_index.MenuItem, null, "Help"), _react["default"].createElement(_index.MenuItem, null, "About"))), _react["default"].createElement(_index.Dropdown, {
    componentClass: "li",
    id: "user"
  }, _react["default"].createElement(_index.Dropdown.Toggle, {
    useAnchor: true,
    className: "nav-item-iconic"
  }, _react["default"].createElement(_index.Icon, {
    type: "pf",
    name: "user"
  }), " Brian Johnson"), _react["default"].createElement(_index.Dropdown.Menu, null, _react["default"].createElement(_index.MenuItem, null, "Preferences"), _react["default"].createElement(_index.MenuItem, null, "Logout"))));
};

exports.MockIconBarChildren = MockIconBarChildren;