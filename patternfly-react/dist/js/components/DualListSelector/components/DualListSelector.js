"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _DualListHeading = _interopRequireDefault(require("./DualListHeading"));

var _DualListBody = _interopRequireDefault(require("./DualListBody"));

var _DualListFooter = _interopRequireDefault(require("./DualListFooter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DualListSelector = function DualListSelector(props) {
  return _react["default"].createElement("div", {
    className: "dual-list-pf-selector"
  }, _react["default"].createElement(_DualListHeading["default"], props), _react["default"].createElement(_DualListBody["default"], props), _react["default"].createElement(_DualListFooter["default"], props));
};

var _default = DualListSelector;
exports["default"] = _default;