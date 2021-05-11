"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Card = _interopRequireDefault(require("../Card"));

var _UtilizationCardDetails = _interopRequireDefault(require("./UtilizationCardDetails"));

var _UtilizationCardDetailsCount = _interopRequireDefault(require("./UtilizationCardDetailsCount"));

var _UtilizationCardDetailsDesc = _interopRequireDefault(require("./UtilizationCardDetailsDesc"));

var _UtilizationCardDetailsLine = _interopRequireDefault(require("./UtilizationCardDetailsLine1"));

var _UtilizationCardDetailsLine2 = _interopRequireDefault(require("./UtilizationCardDetailsLine2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var UtilizationCard = function UtilizationCard(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "className"]);

  var classes = (0, _classnames["default"])('card-pf-utilization', className);
  return _react["default"].createElement(_Card["default"], _extends({
    className: classes
  }, props), children);
};

UtilizationCard.propTypes = {
  /** Child node - contents of the element */
  children: _propTypes["default"].node.isRequired,

  /** Additional element css classes */
  className: _propTypes["default"].string
};
UtilizationCard.defaultProps = {
  className: ''
};
UtilizationCard.Details = _UtilizationCardDetails["default"];
UtilizationCard.DetailsCount = _UtilizationCardDetailsCount["default"];
UtilizationCard.DetailsDesc = _UtilizationCardDetailsDesc["default"];
UtilizationCard.DetailsLine1 = _UtilizationCardDetailsLine["default"];
UtilizationCard.DetailsLine2 = _UtilizationCardDetailsLine2["default"];
var _default = UtilizationCard;
exports["default"] = _default;