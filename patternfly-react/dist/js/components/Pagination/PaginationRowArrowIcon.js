"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = require("../Icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * PaginationRowArrowIcon component for Patternfly React
 */
var PaginationRowArrowIcon = function PaginationRowArrowIcon(_ref) {
  var name = _ref.name,
      props = _objectWithoutProperties(_ref, ["name"]);

  var iconName = "angle-".concat(name);
  return _react["default"].createElement(_Icon.Icon, {
    type: "fa",
    name: iconName,
    className: "i"
  });
};

PaginationRowArrowIcon.propTypes = {
  /** icon name */
  name: _propTypes["default"].oneOf(['left', 'double-left', 'right', 'double-right']).isRequired
};
var _default = PaginationRowArrowIcon;
exports["default"] = _default;