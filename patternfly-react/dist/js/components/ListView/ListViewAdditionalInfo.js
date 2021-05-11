"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * ListViewAdditionalInfo defines additional info section
 */
var ListViewAdditionalInfo = function ListViewAdditionalInfo(_ref) {
  var children = _ref.children;
  return _react["default"].createElement("div", {
    className: "list-view-pf-additional-info"
  }, children);
};

ListViewAdditionalInfo.propTypes = {
  /** Child nodes - an array of ListViewInfoItem instances */
  children: _propTypes["default"].arrayOf(_propTypes["default"].node)
};
ListViewAdditionalInfo.defaultProps = {
  children: null
};
var _default = ListViewAdditionalInfo;
exports["default"] = _default;