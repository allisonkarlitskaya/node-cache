"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * ListViewInfoItem renders contents of individual Info item
 */
var ListViewInfoItem = function ListViewInfoItem(_ref) {
  var children = _ref.children,
      className = _ref.className,
      stacked = _ref.stacked,
      props = _objectWithoutProperties(_ref, ["children", "className", "stacked"]);

  var classes = (0, _classnames["default"])({
    'list-view-pf-additional-info-item-stacked': stacked
  }, 'list-view-pf-additional-info-item', className);
  return _react["default"].createElement("div", _extends({
    className: classes,
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, props), children);
};

ListViewInfoItem.propTypes = {
  /** Child node - contents of the additional info item */
  children: _propTypes["default"].node,

  /** Additional css classes */
  className: _propTypes["default"].string,

  /** Toggle the InfoItem contents stacking */
  stacked: _propTypes["default"].bool
};
ListViewInfoItem.defaultProps = {
  children: null,
  className: '',
  stacked: false
};
var _default = ListViewInfoItem;
exports["default"] = _default;