"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Boundaries = function Boundaries(props) {
  var children = props.children,
      min = props.min,
      max = props.max,
      reversed = props.reversed,
      showBoundaries = props.showBoundaries,
      slider = props.slider;

  var minElement = _react["default"].createElement("b", null, min);

  var maxElement = _react["default"].createElement("b", null, max);

  var leftBoundary = null;
  var rightBoundary = null;

  if (showBoundaries) {
    if (reversed) {
      leftBoundary = maxElement;
      rightBoundary = minElement;
    } else {
      leftBoundary = minElement;
      rightBoundary = maxElement;
    }
  }

  return _react["default"].createElement("div", {
    className: "slider-pf"
  }, leftBoundary, slider, rightBoundary, children);
};

Boundaries.propTypes = {
  children: _propTypes["default"].array,
  min: _propTypes["default"].number,
  max: _propTypes["default"].number,
  reversed: _propTypes["default"].bool,
  showBoundaries: _propTypes["default"].bool,
  slider: _propTypes["default"].object.isRequired
};
Boundaries.defaultProps = {
  children: [],
  min: 0,
  max: 100,
  reversed: false,
  showBoundaries: false
};
var _default = Boundaries;
exports["default"] = _default;