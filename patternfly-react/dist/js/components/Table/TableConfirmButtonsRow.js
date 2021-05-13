"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = require("react-dom");

var _InlineEdit = require("../InlineEdit");

var _helpers = require("../../common/helpers");

require("../../common/closestPolyfill");

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

var TableConfirmButtonsRow = /*#__PURE__*/function (_React$Component) {
  _inherits(TableConfirmButtonsRow, _React$Component);

  function TableConfirmButtonsRow(props) {
    var _this;

    _classCallCheck(this, TableConfirmButtonsRow);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TableConfirmButtonsRow).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "saveRowDimensions", function (element) {
      if (element) {
        _this.element = element;
      }

      if (_this.element) {
        _this.setState({
          rowDimensions: _this.element.getBoundingClientRect()
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleScroll", function (event) {
      _this.saveRowDimensions();
    });

    _defineProperty(_assertThisInitialized(_this), "handleResize", function (event) {
      _this.fetchClientDimensions();

      _this.saveRowDimensions();
    });

    _this.state = {};
    _this.handleScroll = (0, _helpers.debounce)(_this.handleScroll, 100);
    _this.handleResize = (0, _helpers.debounce)(_this.handleResize, 100);
    return _this;
  }

  _createClass(TableConfirmButtonsRow, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchClientDimensions();
      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener('resize', this.handleResize);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('resize', this.handleResize);
    }
  }, {
    key: "fetchClientDimensions",
    value: function fetchClientDimensions() {
      this.setState({
        window: {
          width: document.documentElement.clientWidth,
          height: document.documentElement.clientHeight
        }
      });
    }
  }, {
    key: "renderConfirmButtons",
    value: function renderConfirmButtons() {
      var _this2 = this;

      var divStyle = this.state.rowDimensions ? this.props.buttonsPosition(this.state.window, this.element.getBoundingClientRect()) : {};
      var buttonsClass = "inline-edit-buttons ".concat(this.props.buttonsClassName);
      return _react["default"].createElement("div", {
        style: divStyle,
        className: buttonsClass,
        key: "confirmButtons"
      }, _react["default"].createElement(_InlineEdit.ConfirmButton, {
        bsStyle: "primary",
        key: "confirm",
        "aria-label": this.props.messages.confirmButtonLabel,
        onMouseUp: function onMouseUp() {
          return _this2.props.onConfirm();
        }
      }), _react["default"].createElement(_InlineEdit.CancelButton, {
        bsStyle: "default",
        key: "cancel",
        "aria-label": this.props.messages.cancelButtonLabel,
        onMouseUp: function onMouseUp() {
          return _this2.props.onCancel();
        }
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var editing = this.props.isEditing();
      var rowClass = editing ? 'editing' : '';
      var elements = [_react["default"].createElement("tr", {
        ref: this.saveRowDimensions,
        className: rowClass,
        key: "tableRow"
      }, this.props.children)];

      if (editing && (this.element || this.props.buttonsMountpoint)) {
        elements.push( // mount the confirm buttons below the table
        (0, _reactDom.createPortal)(this.renderConfirmButtons(), this.props.buttonsMountpoint || this.element.closest('table').parentNode));
      }

      return elements;
    }
  }]);

  return TableConfirmButtonsRow;
}(_react["default"].Component);

TableConfirmButtonsRow.shouldComponentUpdate = true;
TableConfirmButtonsRow.defaultProps = {
  isEditing: _helpers.noop,
  onConfirm: _helpers.noop,
  onCancel: _helpers.noop,
  buttonsPosition: _helpers.noop,
  buttonsClassName: '',
  children: [],
  messages: {
    confirmButtonLabel: 'Save',
    cancelButtonLabel: 'Cancel'
  },
  buttonsMountpoint: undefined
};
TableConfirmButtonsRow.propTypes = {
  /** Function that determines whether values or edit components should be rendered */
  isEditing: _propTypes["default"].func,

  /** Confirm edit callback */
  onConfirm: _propTypes["default"].func,

  /** Cancel edit callback */
  onCancel: _propTypes["default"].func,

  /** Inject confirm buttons positions */
  buttonsPosition: _propTypes["default"].func,

  /** Additional confirm buttons classes */
  buttonsClassName: _propTypes["default"].string,

  /** Row cells */
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]),

  /** Message text inputs for i18n */
  messages: _propTypes["default"].shape({
    confirmButtonLabel: _propTypes["default"].string,
    cancelButtonLabel: _propTypes["default"].string
  }),
  buttonsMountpoint: _propTypes["default"].any
};
var _default = TableConfirmButtonsRow;
exports["default"] = _default;