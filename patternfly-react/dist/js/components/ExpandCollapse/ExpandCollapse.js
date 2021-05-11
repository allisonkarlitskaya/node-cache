"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Button = require("../Button");

var _Icon = require("../Icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ALIGN_LEFT = 'left';
var ALIGN_CENTER = 'center';
var ALIGN_TYPES = [ALIGN_LEFT, ALIGN_CENTER];

var ExpandCollapse = /*#__PURE__*/function (_React$Component) {
  _inherits(ExpandCollapse, _React$Component);

  function ExpandCollapse() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ExpandCollapse);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ExpandCollapse)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      expanded: false,
      mirroredExpanded: false
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", function () {
      if (_this.props.onToggle) {
        _this.props.onToggle();
      } else {
        _this.setState(function (prevState) {
          return {
            expanded: !prevState.expanded
          };
        });
      }
    });

    return _this;
  }

  _createClass(ExpandCollapse, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          textCollapsed = _this$props.textCollapsed,
          textExpanded = _this$props.textExpanded,
          align = _this$props.align,
          className = _this$props.className,
          bordered = _this$props.bordered;
      var expanded = this.state.expanded;
      var separatorClass = (0, _classnames["default"])('expand-collapse-pf-separator', {
        bordered: bordered
      });
      return _react["default"].createElement("div", {
        className: (0, _classnames["default"])('expand-collapse-pf', className)
      }, _react["default"].createElement("div", {
        className: "expand-collapse-pf-link-container"
      }, align === ALIGN_CENTER && _react["default"].createElement("span", {
        className: separatorClass
      }), _react["default"].createElement(_Button.Button, {
        bsStyle: "link",
        onClick: this.onClick
      }, _react["default"].createElement(_Icon.Icon, {
        type: "fa",
        name: expanded ? 'angle-down' : 'angle-right'
      }), expanded ? textExpanded : textCollapsed), _react["default"].createElement("span", {
        className: separatorClass
      })), this.state.expanded && children);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (prevState.mirroredExpanded !== nextProps.expanded) {
        return {
          expanded: nextProps.expanded,
          mirroredExpanded: nextProps.expanded
        };
      }

      return null;
    }
  }]);

  return ExpandCollapse;
}(_react["default"].Component);

ExpandCollapse.propTypes = {
  children: _propTypes["default"].any.isRequired,

  /** Top-level custom class */
  className: _propTypes["default"].string,

  /** Text for the link in collapsed state */
  textCollapsed: _propTypes["default"].string,

  /** Text for the link in expanded state */
  textExpanded: _propTypes["default"].string,

  /** Align the link to the left or center. */
  align: _propTypes["default"].oneOf(ALIGN_TYPES),

  /** Flag to show a separation border line */
  bordered: _propTypes["default"].bool,

  /** Flag to control expansion state */
  expanded: _propTypes["default"].bool,
  // eslint-disable-line react/no-unused-prop-types

  /** Callback function to control externally stored expansion state */
  onToggle: _propTypes["default"].func
};
ExpandCollapse.defaultProps = {
  className: '',
  textCollapsed: 'Show Advanced Options',
  textExpanded: 'Hide Advanced Options',
  align: ALIGN_LEFT,
  bordered: true,
  expanded: false,
  onToggle: undefined
};
ExpandCollapse.ALIGN_LEFT = ALIGN_LEFT;
ExpandCollapse.ALIGN_CENTER = ALIGN_CENTER;
ExpandCollapse.ALIGN_TYPES = ALIGN_TYPES;
var _default = ExpandCollapse;
exports["default"] = _default;