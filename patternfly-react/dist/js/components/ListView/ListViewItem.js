"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _helpers = require("../../common/helpers");

var _ListViewExpand = _interopRequireDefault(require("./ListViewExpand"));

var _ListViewGroupItem = _interopRequireDefault(require("./ListViewGroupItem"));

var _ListViewGroupItemContainer = _interopRequireDefault(require("./ListViewGroupItemContainer"));

var _ListViewGroupItemHeader = _interopRequireDefault(require("./ListViewGroupItemHeader"));

var _ListViewRow = _interopRequireDefault(require("./ListViewRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * ListViewItem - main ListViewItem component which handles the expansion logic.
 * ListViewItem is considered expandable if it has child props. In that case it
 * renders ListViewGroupItemHeader and ListViewGroupItemContainer
 */
var ListViewItem = /*#__PURE__*/function (_React$Component) {
  _inherits(ListViewItem, _React$Component);

  function ListViewItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ListViewItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ListViewItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      expanded: _this.props.initExpanded
    });

    _defineProperty(_assertThisInitialized(_this), "toggleExpanded", function () {
      var _this$props = _this.props,
          onExpand = _this$props.onExpand,
          onExpandClose = _this$props.onExpandClose;

      if (_this.state.expanded) {
        onExpandClose();
      } else {
        onExpand();
      }

      _this.setState(function (prevState) {
        return {
          expanded: !prevState.expanded
        };
      });
    });

    return _this;
  }

  _createClass(ListViewItem, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          stacked = _this$props2.stacked,
          onExpand = _this$props2.onExpand,
          onExpandClose = _this$props2.onExpandClose,
          actions = _this$props2.actions,
          additionalInfo = _this$props2.additionalInfo,
          description = _this$props2.description,
          heading = _this$props2.heading,
          leftContent = _this$props2.leftContent,
          checkboxInput = _this$props2.checkboxInput,
          hideCloseIcon = _this$props2.hideCloseIcon,
          compoundExpand = _this$props2.compoundExpand,
          compoundExpanded = _this$props2.compoundExpanded,
          onCloseCompoundExpand = _this$props2.onCloseCompoundExpand,
          initExpanded = _this$props2.initExpanded,
          other = _objectWithoutProperties(_this$props2, ["children", "stacked", "onExpand", "onExpandClose", "actions", "additionalInfo", "description", "heading", "leftContent", "checkboxInput", "hideCloseIcon", "compoundExpand", "compoundExpanded", "onCloseCompoundExpand", "initExpanded"]);

      var expanded = this.state.expanded;

      if (children) {
        if (compoundExpand) {
          return _react["default"].createElement(_ListViewGroupItem["default"], _extends({
            expanded: compoundExpanded,
            stacked: stacked
          }, other), _react["default"].createElement(_ListViewRow["default"], {
            checkboxInput: checkboxInput,
            leftContent: leftContent,
            heading: heading,
            description: description,
            additionalInfo: additionalInfo,
            actions: actions
          }), _react["default"].createElement(_ListViewGroupItemContainer["default"], {
            expanded: compoundExpanded,
            onClose: hideCloseIcon ? undefined : onCloseCompoundExpand
          }, children));
        }

        return _react["default"].createElement(_ListViewGroupItem["default"], _extends({
          expanded: expanded,
          stacked: stacked
        }, other), _react["default"].createElement(_ListViewGroupItemHeader["default"], {
          toggleExpanded: this.toggleExpanded
        }, _react["default"].createElement(_ListViewExpand["default"], {
          expanded: expanded,
          toggleExpanded: this.toggleExpanded
        }), _react["default"].createElement(_ListViewRow["default"], {
          checkboxInput: checkboxInput,
          leftContent: leftContent,
          heading: heading,
          description: description,
          additionalInfo: additionalInfo,
          actions: actions
        })), _react["default"].createElement(_ListViewGroupItemContainer["default"], {
          expanded: expanded,
          onClose: hideCloseIcon ? undefined : this.toggleExpanded
        }, children));
      }

      return _react["default"].createElement(_ListViewGroupItem["default"], _extends({
        stacked: stacked
      }, other), _react["default"].createElement(_ListViewRow["default"], {
        checkboxInput: checkboxInput,
        leftContent: leftContent,
        heading: heading,
        description: description,
        additionalInfo: additionalInfo,
        actions: actions
      }));
    }
  }]);

  return ListViewItem;
}(_react["default"].Component);

ListViewItem.propTypes = {
  /** Child node rendered as expanded content of the ListViewItem */
  children: _propTypes["default"].node,

  /** Display the ListViewItem stacked or not */
  stacked: _propTypes["default"].bool,

  /** Function triggered when expandable content is expanded */
  onExpand: _propTypes["default"].func,

  /** Function triggered when expandable content is closed */
  onExpandClose: _propTypes["default"].func,

  /** Node which renders right-positioned actions (e.g. Buttons, DropdownKebab...) */
  actions: _propTypes["default"].node,

  /** An array of ListViewInfoItem instances to render additional info items */
  additionalInfo: _propTypes["default"].arrayOf(_propTypes["default"].node),

  /** Contents of ListViewItem description section */
  description: _propTypes["default"].node,

  /** Contents of ListViewItem heading */
  heading: _propTypes["default"].node,

  /** Contents for left section of ListViewItem (usually ListViewIcon) */
  leftContent: _propTypes["default"].node,

  /** Checkbox form input component */
  checkboxInput: _propTypes["default"].node,

  /** Optionally hide the close icon in expanded content */
  hideCloseIcon: _propTypes["default"].bool,

  /** Flag to use compound expansion contents */
  compoundExpand: _propTypes["default"].bool,

  /** Flag to show compound expansion contents */
  compoundExpanded: _propTypes["default"].bool,

  /** Flag to initialize expanded state */
  initExpanded: _propTypes["default"].bool,

  /** Function triggered when compound expandable content is closed */
  onCloseCompoundExpand: _propTypes["default"].func
};
ListViewItem.defaultProps = {
  children: null,
  actions: null,
  additionalInfo: null,
  description: null,
  heading: null,
  leftContent: null,
  checkboxInput: null,
  compoundExpand: false,
  compoundExpanded: false,
  hideCloseIcon: false,
  onExpand: _helpers.noop,
  onExpandClose: _helpers.noop,
  initExpanded: false,
  onCloseCompoundExpand: _helpers.noop,
  stacked: false
};
var _default = ListViewItem;
exports["default"] = _default;