"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _CardBody = _interopRequireDefault(require("./CardBody"));

var _CardDropdownButton = _interopRequireDefault(require("./CardDropdownButton"));

var _CardFooter = _interopRequireDefault(require("./CardFooter"));

var _CardGrid = _interopRequireDefault(require("./CardGrid"));

var _CardHeading = _interopRequireDefault(require("./CardHeading"));

var _CardHeightMatching = _interopRequireDefault(require("./CardHeightMatching"));

var _CardLink = _interopRequireDefault(require("./CardLink"));

var _CardTitle = _interopRequireDefault(require("./CardTitle"));

var _AggregateStatusCard = require("./AggregateStatusCard");

var _UtilizationTrendCard = require("./UtilizationTrendCard");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Card Component for PatternFly React
 */
var Card = function Card(_ref) {
  var children = _ref.children,
      className = _ref.className,
      accented = _ref.accented,
      aggregated = _ref.aggregated,
      aggregatedMini = _ref.aggregatedMini,
      matchHeight = _ref.matchHeight,
      cardRef = _ref.cardRef,
      props = _objectWithoutProperties(_ref, ["children", "className", "accented", "aggregated", "aggregatedMini", "matchHeight", "cardRef"]);

  var classes = (0, _classnames["default"])('card-pf', {
    'card-pf-accented': accented
  }, {
    'card-pf-aggregate-status': aggregated
  }, {
    'card-pf-aggregate-status card-pf-aggregate-status-mini': aggregatedMini
  }, {
    'card-pf-match-height': matchHeight
  }, className);
  return _react["default"].createElement("div", _extends({
    className: classes,
    ref: cardRef
  }, props), children);
};

Card.propTypes = {
  /** Child nodes */
  children: _propTypes["default"].node.isRequired,

  /** Additional element css classes */
  className: _propTypes["default"].string,

  /** Top Card Accent Bool */
  accented: _propTypes["default"].bool,

  /** Aggregate Card Bool */
  aggregated: _propTypes["default"].bool,

  /** Aggregate Mini Card Bool */
  aggregatedMini: _propTypes["default"].bool,

  /** Match Height Bool */
  matchHeight: _propTypes["default"].bool,

  /** Reference prop */
  cardRef: _propTypes["default"].func
};
Card.defaultProps = {
  className: '',
  accented: false,
  aggregated: false,
  aggregatedMini: false,
  matchHeight: false,
  cardRef: null
};
Card.Title = _CardTitle["default"];
Card.Body = _CardBody["default"];
Card.Heading = _CardHeading["default"];
Card.Footer = _CardFooter["default"];
Card.Link = _CardLink["default"];
Card.Grid = _CardGrid["default"];
Card.DropdownButton = _CardDropdownButton["default"];
Card.HeightMatching = _CardHeightMatching["default"];
Card.AggregateStatusCount = _AggregateStatusCard.AggregateStatusCount;
Card.AggregateStatusNotification = _AggregateStatusCard.AggregateStatusNotification;
Card.AggregateStatusNotifications = _AggregateStatusCard.AggregateStatusNotifications;
Card.UtilizationCard = _UtilizationTrendCard.UtilizationCard;
Card.UtilizationCardDetails = _UtilizationTrendCard.UtilizationCardDetails;
Card.UtilizationCardDetailsCount = _UtilizationTrendCard.UtilizationCardDetailsCount;
Card.UtilizationCardDetailsDesc = _UtilizationTrendCard.UtilizationCardDetailsDesc;
Card.UtilizationCardDetailsLine1 = _UtilizationTrendCard.UtilizationCardDetailsLine1;
Card.UtilizationCardDetailsLine2 = _UtilizationTrendCard.UtilizationCardDetailsLine2;
var _default = Card;
exports["default"] = _default;