"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * ListViewCheckbox wraps the input provided as child prop. The input depends
 * on the form solution the consuming application uses (e.g. Field component
 * in case of redux-form)
 */
var ListViewCheckbox = function ListViewCheckbox(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return _react["default"].createElement("div", {
    className: (0, _classnames["default"])('list-view-pf-checkbox', className)
  }, children);
};

ListViewCheckbox.propTypes = {
  /** Child node - form input component */
  children: _propTypes["default"].node.isRequired,

  /** Additional css classes */
  className: _propTypes["default"].string
};
ListViewCheckbox.defaultProps = {
  className: ''
};
var _default = ListViewCheckbox;
exports["default"] = _default;