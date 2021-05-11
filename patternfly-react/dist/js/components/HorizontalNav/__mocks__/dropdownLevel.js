"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dropdownLevel = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../index");

var _index2 = require("../../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var dropdownLevel = _react["default"].createElement(_index.HorizontalNavMenu, null, _react["default"].createElement(_index.HorizontalNavMenuItem, {
  id: "dropdown",
  title: "Dropdown",
  dropdown: true
}, _react["default"].createElement(_index2.MenuItem, null, "Link"), _react["default"].createElement(_index2.MenuItem, null, "Another link"), _react["default"].createElement(_index2.MenuItem, {
  divider: true
}), _react["default"].createElement(_index2.MenuItem, null, "Separated link"), _react["default"].createElement(_index2.MenuItem, {
  divider: true
}), _react["default"].createElement(_index2.MenuItem, null, "One more separated link")), _react["default"].createElement(_index.HorizontalNavMenuItem, {
  id: "dropdown-with-submenu",
  title: "Dropdown with Submenu",
  dropdown: true
}, _react["default"].createElement(_index2.MenuItem, null, "Link"), _react["default"].createElement(_index2.MenuItem, null, "Another link"), _react["default"].createElement(_index2.MenuItem, {
  divider: true
}), _react["default"].createElement(_index2.MenuItem, null, "Separated link"), _react["default"].createElement(_index2.MenuItem, {
  divider: true
}), _react["default"].createElement(_index2.MenuItem, null, "One more separated link"), _react["default"].createElement(_index.HorizontalNavMenuItem, {
  id: "more-options",
  title: "More options",
  dropdown: true,
  submenu: true
}, _react["default"].createElement(_index2.MenuItem, null, "Link"), _react["default"].createElement(_index2.MenuItem, null, "Another link"), _react["default"].createElement(_index2.MenuItem, {
  divider: true
}), _react["default"].createElement(_index2.MenuItem, null, "Separated link"), _react["default"].createElement(_index2.MenuItem, {
  divider: true
}), _react["default"].createElement(_index2.MenuItem, null, "One more separated link"))), _react["default"].createElement(_index.HorizontalNavMenuItem, {
  id: "dropup-submenu",
  title: "Dropdown with Dropup Submenu",
  dropdown: true,
  dropup: true
}, _react["default"].createElement(_index2.MenuItem, null, "Link"), _react["default"].createElement(_index2.MenuItem, null, "Another link"), _react["default"].createElement(_index2.MenuItem, {
  divider: true
}), _react["default"].createElement(_index2.MenuItem, null, "Separated link"), _react["default"].createElement(_index2.MenuItem, {
  divider: true
}), _react["default"].createElement(_index2.MenuItem, null, "One more separated link"), _react["default"].createElement(_index.HorizontalNavMenuItem, {
  id: "more-options",
  title: "More options",
  dropdown: true,
  submenu: true
}, _react["default"].createElement(_index2.MenuItem, null, "Link"), _react["default"].createElement(_index2.MenuItem, null, "Another link"), _react["default"].createElement(_index2.MenuItem, {
  divider: true
}), _react["default"].createElement(_index2.MenuItem, null, "Separated link"), _react["default"].createElement(_index2.MenuItem, {
  divider: true
}), _react["default"].createElement(_index2.MenuItem, null, "One more separated link"))), _react["default"].createElement(_index.HorizontalNavMenuItem, {
  id: "pull-left",
  title: "Dropdown with Pull-left Submenu",
  dropdown: true
}, _react["default"].createElement(_index2.MenuItem, null, "Link"), _react["default"].createElement(_index2.MenuItem, null, "Another link"), _react["default"].createElement(_index2.MenuItem, {
  divider: true
}), _react["default"].createElement(_index2.MenuItem, null, "Separated link"), _react["default"].createElement(_index2.MenuItem, {
  divider: true
}), _react["default"].createElement(_index2.MenuItem, null, "One more separated link"), _react["default"].createElement(_index.HorizontalNavMenuItem, {
  id: "left-more-options",
  title: "More options",
  dropdown: true,
  submenu: true,
  pullLeft: true
}, _react["default"].createElement(_index2.MenuItem, null, "Link"), _react["default"].createElement(_index2.MenuItem, null, "Another link"), _react["default"].createElement(_index2.MenuItem, {
  divider: true
}), _react["default"].createElement(_index2.MenuItem, null, "Separated link"), _react["default"].createElement(_index2.MenuItem, {
  divider: true
}), _react["default"].createElement(_index2.MenuItem, null, "One more separated link"))), _react["default"].createElement(_index.HorizontalNavMenuItem, {
  id: "no-dropdown",
  title: "No Dropdown"
}));

exports.dropdownLevel = dropdownLevel;