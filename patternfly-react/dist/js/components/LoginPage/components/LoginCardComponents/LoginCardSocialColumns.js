"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _index = require("../../../../index");

var _LoginCardSocialLink = _interopRequireDefault(require("./LoginCardSocialLink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var LoginCardSocialColumns = /*#__PURE__*/function (_React$Component) {
  _inherits(LoginCardSocialColumns, _React$Component);

  function LoginCardSocialColumns() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LoginCardSocialColumns);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LoginCardSocialColumns)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      expend: false,
      width: window.innerWidth
    });

    _defineProperty(_assertThisInitialized(_this), "updateWindowWidth", function () {
      _this.setState({
        width: window.innerWidth
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getListItems", function () {
      _this.hiddenLinks = [];
      var _this$props = _this.props,
          links = _this$props.links,
          numberOfButtonsToShow = _this$props.numberOfButtonsToShow;
      return links && links.map(function (link, index) {
        if (index >= numberOfButtonsToShow) {
          _this.hiddenLinks.push(link);

          return true;
        }

        return _react["default"].createElement(_LoginCardSocialLink["default"], {
          link: link,
          key: link.key || index
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getHiddenListItems", function () {
      var numberOfButtonsToShow = _this.props.numberOfButtonsToShow;
      return _this.hiddenLinks && _this.hiddenLinks.map(function (link, index) {
        return _react["default"].createElement(_LoginCardSocialLink["default"], {
          link: link,
          key: link.key || index + numberOfButtonsToShow
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleExpend", function () {
      _this.setState({
        expend: !_this.state.expend
      });
    });

    return _this;
  }

  _createClass(LoginCardSocialColumns, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.updateWindowWidth);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowWidth);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          links = _this$props2.links,
          numberOfButtonsToShow = _this$props2.numberOfButtonsToShow;

      if (!links) {
        return null;
      }

      var _this$state = this.state,
          expend = _this$state.expend,
          width = _this$state.width;

      var expendButton = width > 768 && links.length > numberOfButtonsToShow && _react["default"].createElement(_index.Button, {
        bsStyle: "link",
        bsClass: "btn btn-link login-pf-social-toggle",
        onClick: this.toggleExpend
      }, expend ? 'Less' : 'More', " \xA0", _react["default"].createElement(_index.Icon, {
        name: "angle-".concat(expend ? 'up' : 'down')
      }));

      var doubleColumn = links.length > 4 ? 'login-pf-social-double-col' : '';
      var moreItems = expend || width < 768 ? this.getHiddenListItems() : null;
      return _react["default"].createElement("div", null, _react["default"].createElement("ul", {
        className: (0, _classnames["default"])('login-pf-social list-unstyled', doubleColumn)
      }, this.getListItems(), moreItems), expendButton);
    }
  }]);

  return LoginCardSocialColumns;
}(_react["default"].Component);

LoginCardSocialColumns.propTypes = {
  /** Array of social links to generate. */
  links: _propTypes["default"].arrayOf(_propTypes["default"].shape(_objectSpread({}, _LoginCardSocialLink["default"].propTypes))),

  /** The amount of buttons to show. Above this number, the buttons would be hidden */
  numberOfButtonsToShow: _propTypes["default"].number
};
LoginCardSocialColumns.defaultProps = {
  links: [],
  numberOfButtonsToShow: 8
};
var _default = LoginCardSocialColumns;
exports["default"] = _default;