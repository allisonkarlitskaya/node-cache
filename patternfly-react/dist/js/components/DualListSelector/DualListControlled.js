"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = require("lodash");

var _index = require("./index");

var _helpers = require("./helpers");

var _helpers2 = require("../../common/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DualListControlled = /*#__PURE__*/function (_React$Component) {
  _inherits(DualListControlled, _React$Component);

  function DualListControlled(props) {
    var _this;

    _classCallCheck(this, DualListControlled);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DualListControlled).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onItemChange", function (_ref) {
      var side = _ref.side,
          items = _ref.items,
          selectCount = _ref.selectCount,
          isMainChecked = _ref.isMainChecked;
      var onItemChange = _this.props.onItemChange;

      _this.setState(_defineProperty({}, side, _objectSpread({}, _this.state[side], {
        items: items,
        selectCount: selectCount,
        isMainChecked: isMainChecked
      })), function () {
        return onItemChange(_this.state);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onMainCheckboxChange", function (_ref2) {
      var side = _ref2.side,
          checked = _ref2.checked,
          items = _ref2.items,
          selectCount = _ref2.selectCount;
      var onMainCheckboxChange = _this.props.onMainCheckboxChange;

      _this.setState(_defineProperty({}, side, _objectSpread({}, _this.state[side], {
        items: items,
        selectCount: selectCount,
        isMainChecked: checked
      })), function () {
        return onMainCheckboxChange(_this.state);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSortClick", function (_ref3) {
      var side = _ref3.side,
          items = _ref3.items,
          isSortAsc = _ref3.isSortAsc;
      var onSortClick = _this.props.onSortClick;

      _this.setState(_defineProperty({}, side, _objectSpread({}, _this.state[side], {
        items: items,
        isSortAsc: isSortAsc
      })), function () {
        return onSortClick(_this.state);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onFilterChange", function (_ref4) {
      var side = _ref4.side,
          filterTerm = _ref4.filterTerm,
          items = _ref4.items,
          isMainChecked = _ref4.isMainChecked;
      var onFilterChange = _this.props.onFilterChange;

      _this.setState(_defineProperty({}, side, _objectSpread({}, _this.state[side], {
        filterTerm: filterTerm,
        items: items,
        isMainChecked: isMainChecked
      })), function () {
        return onFilterChange(_this.state);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (_ref5) {
      var left = _ref5.left,
          right = _ref5.right;
      var onChange = _this.props.onChange;

      _this.setState({
        left: left,
        right: right
      }, function () {
        return onChange(_this.state);
      });
    });

    _this.state = _objectSpread({
      prevProps: props
    }, (0, _helpers.adjustProps)(props));
    return _this;
  }

  _createClass(DualListControlled, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var onComponentInit = this.props.onComponentInit;
      onComponentInit(this.state);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          left = _this$state.left,
          right = _this$state.right,
          allowHiddenInputs = _this$state.allowHiddenInputs;
      return _react["default"].createElement(_index.DualList, {
        left: _objectSpread({}, left),
        right: _objectSpread({}, right),
        onItemChange: this.onItemChange,
        onSortClick: this.onSortClick,
        onFilterChange: this.onFilterChange,
        onMainCheckboxChange: this.onMainCheckboxChange,
        onChange: this.onChange,
        allowHiddenInputs: allowHiddenInputs
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      return !(0, _lodash.isEqual)(nextProps, prevState.prevProps) ? _objectSpread({
        prevProps: nextProps
      }, (0, _helpers.adjustProps)(nextProps)) : null;
    }
  }]);

  return DualListControlled;
}(_react["default"].Component);

DualListControlled.propTypes = {
  /**
   * Function that runs after items have been moved between the lists.
   * Receives the updated state as a callback.
   */
  onChange: _propTypes["default"].func,

  /**
   * Function that runs after an item was clicked.
   * Receives the updated state as a callback.
   */
  onItemChange: _propTypes["default"].func,

  /**
   * Function that runs after the main checkbox was clicked.
   * Receives the updated state as a callback.
   */
  onMainCheckboxChange: _propTypes["default"].func,

  /**
   * Function that runs after the sort icon was clicked.
   * Receives the updated state as a callback.
   */
  onSortClick: _propTypes["default"].func,

  /**
   * Function that runs after the filter input has changed.
   * Receives the updated state as a callback.
   */
  onFilterChange: _propTypes["default"].func,

  /**
   * Function that runs after the component had mounted.
   * Receives the updated state as a callback.
   */
  onComponentInit: _propTypes["default"].func
};
DualListControlled.defaultProps = {
  onChange: _helpers2.noop,
  onItemChange: _helpers2.noop,
  onMainCheckboxChange: _helpers2.noop,
  onSortClick: _helpers2.noop,
  onFilterChange: _helpers2.noop,
  onComponentInit: _helpers2.noop
};
var _default = DualListControlled;
exports["default"] = _default;