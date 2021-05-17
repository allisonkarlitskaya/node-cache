"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Tooltip = require("../Tooltip");

var _OverlayTrigger = require("../OverlayTrigger");

var _LabelWithTooltip = _interopRequireDefault(require("./LabelWithTooltip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CompoundLabel = /*#__PURE__*/function (_React$Component) {
  _inherits(CompoundLabel, _React$Component);

  function CompoundLabel() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CompoundLabel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CompoundLabel)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "generateTag", function (value) {
      return _react["default"].createElement(_LabelWithTooltip["default"], {
        key: value.id,
        category: _this.props.category,
        value: value,
        onDeleteClick: _this.props.onDeleteClick,
        truncate: _this.props.valueTruncate,
        bsStyle: _this.props.bsStyle,
        className: _this.props.innerClassName,
        overlayPlacement: _this.props.overlayPlacement
      });
    });

    return _this;
  }

  _createClass(CompoundLabel, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var values = _toConsumableArray(this.props.values);

      if (values.length === 0) {
        return null;
      }

      var categoryTooltip = _react["default"].createElement(_Tooltip.Tooltip, {
        id: "tooltip"
      }, this.props.category.label);

      return _react["default"].createElement("span", {
        className: "label label-primary compound-label-pf"
      }, _react["default"].createElement(_OverlayTrigger.OverlayTrigger, {
        placement: this.props.overlayPlacement,
        overlay: categoryTooltip
      }, _react["default"].createElement("span", {
        className: "category-label-pf"
      }, this.props.categoryTruncate(this.props.category.label))), _react["default"].createElement("ul", {
        className: "list-inline ".concat(this.props.className)
      }, values.sort(function (a, b) {
        return a.label < b.label ? -1 : 1;
      }).map(function (tagValue) {
        return _this2.generateTag(tagValue);
      })));
    }
  }]);

  return CompoundLabel;
}(_react["default"].Component);

CompoundLabel.propTypes = {
  /** Category in CATEGORY: value(s) pair */

  /**  Parent of label, it does not get displayed in this component */
  category: _propTypes["default"].shape({
    id: _propTypes["default"].any.isRequired,
    label: _propTypes["default"].string.isRequired
  }).isRequired,

  /** Array of Values in Category:VALUE(S) pair  */

  /** id uniquily identify value within its category, label is text which is displayed */
  values: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].any.isRequired,
    label: _propTypes["default"].string.isRequired
  }).isRequired).isRequired,

  /** Fuction callback called when X button is clicked */
  onDeleteClick: _propTypes["default"].func.isRequired,

  /** Function used to truncate category label */
  categoryTruncate: _propTypes["default"].func,

  /** Function used to truncate value label */
  valueTruncate: _propTypes["default"].func,

  /** Name of CSS class(es) which are set to outer label */
  className: _propTypes["default"].string,

  /** Bootstrap style which is set to label */
  bsStyle: _propTypes["default"].string,

  /** Name of CSS class(es) which are set to inner label(s) */
  innerClassName: _propTypes["default"].string,

  /** Placement of the overlay */
  overlayPlacement: _propTypes["default"].oneOf(['top', 'right', 'bottom', 'left'])
};
CompoundLabel.defaultProps = {
  categoryTruncate: function categoryTruncate(str) {
    return str.length > 18 ? "".concat(str.substring(0, 18), "...") : str;
  },
  valueTruncate: function valueTruncate(str) {
    return str.length > 18 ? "".concat(str.substring(0, 18), "...") : str;
  },
  className: '',
  bsStyle: 'primary',
  innerClassName: '',
  overlayPlacement: 'bottom'
};
var _default = CompoundLabel;
exports["default"] = _default;