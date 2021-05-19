"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TreeViewIndents = function TreeViewIndents(_ref) {
  var level = _ref.level;
  var indents = [];

  if (level === 1) {
    return null;
  }

  for (var i = 1; i <= (level - 1) * 4; i++) {
    indents.push(_react["default"].createElement("span", {
      className: "indent",
      key: i
    }));
  }

  return _react["default"].createElement(_react["default"].Fragment, null, indents);
};

TreeViewIndents.propTypes = {
  level: _propTypes["default"].number.isRequired
};
var _default = TreeViewIndents;
exports["default"] = _default;