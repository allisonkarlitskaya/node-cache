"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../../index");

var _helpers = require("../../../common/helpers");

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DualListArrows = function DualListArrows(_ref) {
  var right = _ref.right,
      left = _ref.left;
  return _react["default"].createElement("div", {
    className: "dual-list-pf-arrows"
  }, _react["default"].createElement(_index.Icon, {
    "aria-label": right.ariaLabel,
    name: "chevron-circle-down",
    size: "lg",
    tabIndex: "0",
    onClick: right.onClick,
    onKeyPress: right.onClick
  }), _react["default"].createElement(_index.Icon, {
    "aria-label": left.ariaLabel,
    name: "chevron-circle-up",
    size: "lg",
    tabIndex: "0",
    onClick: left.onClick,
    onKeyPress: left.onClick
  }));
};

DualListArrows.propTypes = {
  left: _propTypes["default"].shape({
    /** Determine what happens on left/up arrow click */
    onClick: _propTypes["default"].func,

    /** Set the left/up arrow aria-label */
    ariaLabel: _propTypes["default"].string
  }),
  right: _propTypes["default"].shape({
    onClick: _propTypes["default"].func,
    ariaLabel: _propTypes["default"].string
  })
};
DualListArrows.defaultProps = {
  left: {
    onClick: _helpers.noop,
    ariaLabel: _constants.LEFT_ARROW_ARIA_LABEL
  },
  right: {
    onClick: _helpers.noop,
    ariaLabel: _constants.RIGHT_ARROW_ARIA_LABEL
  }
};
var _default = DualListArrows;
exports["default"] = _default;