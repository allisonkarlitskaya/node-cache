"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _NotificationInfoRight = _interopRequireDefault(require("./NotificationInfoRight"));

var _NotificationInfoLeft = _interopRequireDefault(require("./NotificationInfoLeft"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var NotificationInfo = function NotificationInfo(_ref) {
  var rightText = _ref.rightText,
      leftText = _ref.leftText,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["rightText", "leftText", "className"]);

  var classes = (0, _classnames["default"])('drawer-pf-notification-info', className);
  return _react["default"].createElement("div", {
    className: classes
  }, _react["default"].createElement(_NotificationInfoLeft["default"], {
    text: leftText
  }), _react["default"].createElement(_NotificationInfoRight["default"], {
    text: rightText
  }));
};

NotificationInfo.propTypes = {
  /** Additional element css classes */
  className: _propTypes["default"].string,

  /** leftText and rightText Strings */
  leftText: _propTypes["default"].string,
  rightText: _propTypes["default"].string
};
NotificationInfo.defaultProps = {
  className: '',
  leftText: '',
  rightText: ''
};
var _default = NotificationInfo;
exports["default"] = _default;