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

var _Form = require("../Form");

var _helpers = require("../../common/helpers");

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

var ToolbarFind = /*#__PURE__*/function (_React$Component) {
  _inherits(ToolbarFind, _React$Component);

  function ToolbarFind() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ToolbarFind);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ToolbarFind)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      dropdownShown: false,
      currentValue: ''
    });

    _defineProperty(_assertThisInitialized(_this), "onValueKeyPress", function (keyEvent) {
      var onEnter = _this.props.onEnter;
      var currentValue = _this.state.currentValue;

      if (keyEvent.key === 'Enter' && onEnter) {
        onEnter(currentValue);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleFindNext", function () {
      var currentValue = _this.state.currentValue;
      var onFindNext = _this.props.onFindNext;

      if (onFindNext) {
        onFindNext(currentValue);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleFindPrevious", function () {
      var currentValue = _this.state.currentValue;
      var onFindPrevious = _this.props.onFindPrevious;

      if (onFindPrevious) {
        onFindPrevious(currentValue);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleValueChange", function (event) {
      var onChange = _this.props.onChange;

      _this.setState({
        currentValue: event.target.value
      });

      if (onChange) {
        onChange(event.target.value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "hideDropdown", function () {
      _this.setState({
        dropdownShown: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleDropdownShown", function () {
      _this.setState(function (prevState) {
        return {
          dropdownShown: !prevState.dropdownShown
        };
      });
    });

    return _this;
  }

  _createClass(ToolbarFind, [{
    key: "renderCounts",
    value: function renderCounts() {
      var currentValue = this.state.currentValue;
      var _this$props = this.props,
          currentIndex = _this$props.currentIndex,
          totalCount = _this$props.totalCount;

      if (currentValue && currentValue !== '') {
        return [_react["default"].createElement("span", {
          className: "find-pf-nums",
          key: "findCountText"
        }, currentIndex || 0, " of ", totalCount), _react["default"].createElement(_Button.Button, {
          bsStyle: "link",
          key: "findPrevious",
          onClick: this.handleFindPrevious
        }, _react["default"].createElement(_Icon.Icon, {
          type: "fa",
          name: "angle-up"
        })), _react["default"].createElement(_Button.Button, {
          bsStyle: "link",
          key: "findNext",
          onClick: this.handleFindNext
        }, _react["default"].createElement(_Icon.Icon, {
          type: "fa",
          name: "angle-down"
        }))];
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          dropdownShown = _this$state.dropdownShown,
          currentValue = _this$state.currentValue;
      var _this$props2 = this.props,
          className = _this$props2.className,
          placeholder = _this$props2.placeholder;
      var classes = (0, _classnames["default"])('form-group toolbar-pf-find', className);
      var dropdownClasses = (0, _classnames["default"])('find-pf-dropdown-container', {
        show: dropdownShown
      });
      return _react["default"].createElement("div", {
        className: classes
      }, _react["default"].createElement(_Button.Button, {
        bsStyle: "link",
        className: "btn-find",
        onClick: this.toggleDropdownShown
      }, _react["default"].createElement(_Icon.Icon, {
        type: "fa",
        name: "search"
      })), _react["default"].createElement("div", {
        className: dropdownClasses
      }, _react["default"].createElement(_Form.FormControl, {
        type: "text",
        id: "find",
        value: currentValue,
        placeholder: placeholder,
        onKeyPress: function onKeyPress(e) {
          return _this2.onValueKeyPress(e);
        },
        onChange: this.handleValueChange
      }), _react["default"].createElement("div", {
        className: "find-pf-buttons"
      }, this.renderCounts(), _react["default"].createElement(_Button.Button, {
        bsStyle: "link",
        className: "btn-find-close",
        onClick: this.hideDropdown
      }, _react["default"].createElement(_Icon.Icon, {
        type: "pf",
        name: "close"
      })))));
    }
  }]);

  return ToolbarFind;
}(_react["default"].Component);

ToolbarFind.propTypes = {
  /** Additional css classes */
  className: _propTypes["default"].string,

  /** index of current item */
  currentIndex: _propTypes["default"].number,

  /** total number of items */
  totalCount: _propTypes["default"].number.isRequired,

  /** Placeholder text when empty */
  placeholder: _propTypes["default"].string,

  /** Callback function when user hits the enter key */
  onEnter: _propTypes["default"].func,

  /** Callback function when the find value changes */
  onChange: _propTypes["default"].func,

  /** Callback function when the find next is selected */
  onFindNext: _propTypes["default"].func,

  /** Callback function when the find previous is selected */
  onFindPrevious: _propTypes["default"].func
};
ToolbarFind.defaultProps = {
  className: '',
  currentIndex: 0,
  placeholder: '',
  onEnter: _helpers.noop,
  onChange: _helpers.noop,
  onFindNext: _helpers.noop,
  onFindPrevious: _helpers.noop
};
var _default = ToolbarFind;
exports["default"] = _default;