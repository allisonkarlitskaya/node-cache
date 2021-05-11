"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.twoLevel = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var twoLevel = _react["default"].createElement(_index.HorizontalNavMenu, {
  twoLevels: true
}, _react["default"].createElement(_index.HorizontalNavMenuItem, {
  id: "first",
  title: "First Link"
}), _react["default"].createElement(_index.HorizontalNavMenuItem, {
  id: "another",
  title: "Another Link",
  active: true
}, _react["default"].createElement(_index.HorizontalNavMenuItem, {
  id: "link",
  title: "Link"
}), _react["default"].createElement(_index.HorizontalNavMenuItem, {
  id: "another-link",
  title: "Another Link",
  active: true
}), _react["default"].createElement(_index.HorizontalNavMenuItem, {
  id: "something-else",
  title: "Something Else Here"
}), _react["default"].createElement(_index.HorizontalNavMenuItem, {
  id: "remember",
  title: "Remembering to keep"
}), _react["default"].createElement(_index.HorizontalNavMenuItem, {
  id: "between-5-7",
  title: "It between five and seven"
}), _react["default"].createElement(_index.HorizontalNavMenuItem, {
  id: "more",
  title: "More options"
})), _react["default"].createElement(_index.HorizontalNavMenuItem, {
  id: "and-another",
  title: "And Another"
}), _react["default"].createElement(_index.HorizontalNavMenuItem, {
  id: "general-rule",
  title: "As a General Rule"
}), _react["default"].createElement(_index.HorizontalNavMenuItem, {
  id: "five-to-seven",
  title: "Five to Seven Links"
}), _react["default"].createElement(_index.HorizontalNavMenuItem, {
  id: "is-good",
  title: "Is Good"
}));

exports.twoLevel = twoLevel;