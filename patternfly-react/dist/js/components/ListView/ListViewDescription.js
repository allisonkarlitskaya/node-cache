"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * ListViewDescription wraps Heading and Text
 */
var ListViewDescription = function ListViewDescription(_ref) {
  var children = _ref.children;
  return _react["default"].createElement("div", {
    className: "list-view-pf-description"
  }, children);
};

ListViewDescription.propTypes = {
  /** Child nodes - ListViewDescriptionHeading or ListViewDescriptionText instances */
  children: _propTypes["default"].node
};
ListViewDescription.defaultProps = {
  children: null
};
var _default = ListViewDescription;
exports["default"] = _default;