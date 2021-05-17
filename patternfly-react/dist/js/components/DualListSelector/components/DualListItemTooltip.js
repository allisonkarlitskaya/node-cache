"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DualListItemTooltip = function DualListItemTooltip(_ref) {
  var id = _ref.id,
      text = _ref.text,
      children = _ref.children;

  var tooltip = _react["default"].createElement(_index.Tooltip, {
    id: id
  }, text);

  return _react["default"].createElement(_index.OverlayTrigger, {
    overlay: tooltip,
    placement: "top",
    trigger: ['hover', 'focus'],
    delayShow: 150
  }, children);
};

DualListItemTooltip.propTypes = {
  /** unique tooltip ID */
  id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /** text to be shown on the tooltip */
  text: _propTypes["default"].string,

  /** children nodes */
  children: _propTypes["default"].node
};
DualListItemTooltip.defaultProps = {
  id: null,
  text: null,
  children: null
};
var _default = DualListItemTooltip;
exports["default"] = _default;