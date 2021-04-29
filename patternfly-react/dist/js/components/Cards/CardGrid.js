"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _CardHeightMatching = _interopRequireDefault(require("./CardHeightMatching"));

var _Grid = require("../Grid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CardGrid = function CardGrid(_ref) {
  var matchHeight = _ref.matchHeight,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["matchHeight", "children", "className"]);

  var classes = (0, _classnames["default"])('container-cards-pf', className);
  var cardSelector = ['.card-pf-match-height'];

  if (matchHeight) {
    return _react["default"].createElement(_Grid.Grid, _extends({
      className: classes
    }, props), _react["default"].createElement(_CardHeightMatching["default"], {
      selector: cardSelector
    }, children));
  }

  return _react["default"].createElement(_Grid.Grid, _extends({
    className: classes
  }, props), children);
};

CardGrid.propTypes = {
  /** Child node - contents of the element */
  children: _propTypes["default"].node.isRequired,

  /** Additional element css classes */
  className: _propTypes["default"].string,

  /** Match Height bool */
  matchHeight: _propTypes["default"].bool
};
CardGrid.defaultProps = {
  className: '',
  matchHeight: false
};
CardGrid.Row = _Grid.Row;
CardGrid.Col = _Grid.Col;
CardGrid.Clearfix = _Grid.Clearfix;
var _default = CardGrid;
exports["default"] = _default;