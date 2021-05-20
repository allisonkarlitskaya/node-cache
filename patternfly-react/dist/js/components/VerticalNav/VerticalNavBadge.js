"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _OverlayTrigger = require("../OverlayTrigger");

var _Tooltip = require("../Tooltip");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var VerticalNavBadge = function VerticalNavBadge(props) {
  var badgeClass = props.badgeClass,
      iconClass = props.iconClass,
      tooltip = props.tooltip,
      count = props.count;
  var key = badgeClass || iconClass || count;

  var badgeDiv = _react["default"].createElement("div", {
    className: (0, _classnames["default"])('badge', badgeClass)
  }, count && iconClass && _react["default"].createElement("span", {
    className: iconClass
  }), count && _react["default"].createElement("span", null, count));

  return !tooltip ? badgeDiv : _react["default"].createElement(_OverlayTrigger.OverlayTrigger, {
    key: key,
    placement: "right",
    overlay: _react["default"].createElement(_Tooltip.Tooltip, {
      id: key
    }, tooltip)
  }, badgeDiv);
};

VerticalNavBadge.propTypes = {
  badgeClass: _propTypes["default"].string,
  iconClass: _propTypes["default"].string,
  tooltip: _propTypes["default"].string,
  count: _propTypes["default"].number
};
VerticalNavBadge.defaultProps = {
  badgeClass: '',
  iconClass: '',
  tooltip: '',
  count: undefined
};
VerticalNavBadge.displayName = 'VerticalNav.Badge';
var _default = VerticalNavBadge;
exports["default"] = _default;