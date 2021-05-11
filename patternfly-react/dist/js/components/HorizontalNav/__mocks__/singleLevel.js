"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.singleLevel = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var singleLevel = _react["default"].createElement(_index.HorizontalNavMenu, null, _react["default"].createElement(_index.HorizontalNavMenuItem, {
  id: "first",
  title: "First Link"
}), _react["default"].createElement(_index.HorizontalNavMenuItem, {
  id: "another",
  title: "Another Link"
}), _react["default"].createElement(_index.HorizontalNavMenuItem, {
  id: "and-another",
  title: "And Another"
}));

exports.singleLevel = singleLevel;