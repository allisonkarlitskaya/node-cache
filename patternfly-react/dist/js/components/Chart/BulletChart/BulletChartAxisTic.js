"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BulletChartAxisTic = function BulletChartAxisTic(_ref) {
  var className = _ref.className,
      text = _ref.text,
      vertical = _ref.vertical,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, ["className", "text", "vertical", "value"]);

  var bulletChartAxisTicClass = (0, _classnames["default"])('bullet-chart-pf-axis-tic', className);
  var ticStyle;

  if (vertical) {
    ticStyle = {
      bottom: "calc(".concat(value, "% - 10px)")
    };
  } else {
    ticStyle = {
      left: "calc(".concat(value, "% - 15px)")
    };
  }

  return _react["default"].createElement("span", {
    className: bulletChartAxisTicClass,
    style: ticStyle
  }, text || value);
};

BulletChartAxisTic.propTypes = {
  /** Additional css classes */
  className: _propTypes["default"].string,

  /** Vertical axis, default false */
  vertical: _propTypes["default"].bool,

  /** Value for the tic mark */
  value: _propTypes["default"].number.isRequired,

  /** Text for the tic mark, default is the value */
  text: _propTypes["default"].string
};
BulletChartAxisTic.defaultProps = {
  className: '',
  vertical: false,
  text: undefined
};
var _default = BulletChartAxisTic;
exports["default"] = _default;