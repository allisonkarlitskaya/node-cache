"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactFontawesome = _interopRequireDefault(require("react-fontawesome"));

var _PatternflyIcon = _interopRequireDefault(require("./InnerComponents/PatternflyIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Icon = function Icon(_ref) {
  var type = _ref.type,
      props = _objectWithoutProperties(_ref, ["type"]);

  var IconComponent = type === 'fa' && _reactFontawesome["default"] || type === 'pf' && _PatternflyIcon["default"];

  if (IconComponent) {
    return _react["default"].createElement(IconComponent, props);
  }

  throw new Error("Unsupported prop type=".concat(type));
};

Icon.propTypes = {
  /** Icon type can be 'fa' or 'pf'.
   'fa' is the default type. */
  type: _propTypes["default"].oneOf(['fa', 'pf']),

  /** Icon name is the pf-name or fa-name without the prefix.
   e.g.: As for 'pf-ok' name will be 'ok' */
  name: _propTypes["default"].string.isRequired
};
Icon.defaultProps = {
  type: 'fa'
};
var _default = Icon;
exports["default"] = _default;