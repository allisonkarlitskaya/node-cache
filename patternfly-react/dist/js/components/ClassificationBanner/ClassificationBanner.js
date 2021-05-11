"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = require("../Button");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var defaultColors = {
  'pf-red': 1,
  'pf-blue': 1,
  'pf-green': 1,
  'pf-orange': 1,
  'pf-yellow': 1
};
/**
 * ClassificationBanner Component for PatternFly React
 */

var ClassificationBanner = /*#__PURE__*/function (_React$Component) {
  _inherits(ClassificationBanner, _React$Component);

  function ClassificationBanner(props) {
    var _this;

    _classCallCheck(this, ClassificationBanner);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ClassificationBanner).call(this, props));
    _this.state = {
      closed: props.closed
    };
    _this.onClose = _this.onClose.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ClassificationBanner, [{
    key: "onClose",
    value: function onClose(e) {
      this.setState({
        closed: !this.state.closed
      });
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.closed !== this.state.closed) {
        this.setState({
          closed: nextProps.closed
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          bottomBanner = _this$props.bottomBanner,
          hostName = _this$props.hostName,
          userName = _this$props.userName,
          closeButton = _this$props.closeButton,
          userNamePosition = _this$props.userNamePosition,
          hostNamePosition = _this$props.hostNamePosition,
          bannerColor = _this$props.bannerColor,
          title = _this$props.title,
          props = _objectWithoutProperties(_this$props, ["children", "bottomBanner", "hostName", "userName", "closeButton", "userNamePosition", "hostNamePosition", "bannerColor", "title"]);

      var classificationBannerClasses = {
        top: (0, _classnames["default"])('classification-banner-pf-banner', 'classification-banner-pf-banner-top', defaultColors[bannerColor] ? "classification-banner-".concat(bannerColor) : ''),
        bottom: (0, _classnames["default"])('classification-banner-pf-banner', defaultColors[bannerColor] ? "classification-banner-".concat(bannerColor) : '', 'classification-banner-pf-banner-bottom'),
        closeButton: (0, _classnames["default"])({
          'classification-banner-pf-close pficon-error-circle-o': closeButton
        }),
        children: (0, _classnames["default"])({
          'classification-banner-pf-children-no-bottom': !this.state.closed && !bottomBanner,
          'classification-banner-pf-children': !this.state.closed && bottomBanner
        })
      };
      var leftLabels = [hostNamePosition === 'left' ? _react["default"].createElement("span", null, hostName) : null, userNamePosition === 'left' ? _react["default"].createElement("span", null, userName) : null];
      var rightLabels = [hostNamePosition === 'right' ? _react["default"].createElement("span", null, hostName) : null, userNamePosition === 'right' ? _react["default"].createElement("span", null, userName) : null];
      var bannerBackgroundStyle = defaultColors[bannerColor] ? {} : {
        background: bannerColor
      };
      return _react["default"].createElement("div", props, !this.state.closed && _react["default"].createElement("nav", {
        style: bannerBackgroundStyle,
        className: classificationBannerClasses.top
      }, _react["default"].createElement("div", {
        className: "classification-banner-pf-banner-left"
      }, leftLabels[0], leftLabels[1]), _react["default"].createElement("div", {
        className: "classification-banner-pf-classification-level"
      }, title), _react["default"].createElement("div", {
        className: "classification-banner-pf-banner-right"
      }, closeButton && _react["default"].createElement(_Button.Button, {
        className: classificationBannerClasses.closeButton,
        bsStyle: "link",
        bsSize: "small",
        "data-toggle": "tooltip",
        "data-placement": "bottom",
        title: "Close",
        onClick: function onClick(e) {
          return _this2.onClose(e);
        }
      }), rightLabels[0], rightLabels[1])), _react["default"].createElement("div", {
        className: classificationBannerClasses.children
      }, children), !this.state.closed && bottomBanner && _react["default"].createElement("footer", {
        style: bannerBackgroundStyle,
        className: classificationBannerClasses.bottom
      }, _react["default"].createElement("div", {
        className: "classification-banner-pf-classification-level"
      }, title)));
    }
  }]);

  return ClassificationBanner;
}(_react["default"].Component);

ClassificationBanner.propTypes = {
  /** Child nodes */
  children: _propTypes["default"].node,

  /** Option to display system hostname that user has logged into */
  hostName: _propTypes["default"].string,

  /** Option to display user login */
  userName: _propTypes["default"].string,

  /** Option to close classification banner */
  closeButton: _propTypes["default"].bool,

  /** Option to enable or disable classification banner across bottom screen */
  bottomBanner: _propTypes["default"].bool,

  /** Whether banner's state is closed or not */
  closed: _propTypes["default"].bool,

  /** Option to configure location of user login on the banner */
  userNamePosition: _propTypes["default"].string,

  /** Option to configure location of hostname on the banner */
  hostNamePosition: _propTypes["default"].string,

  /** Option to configure banner color. Hex code is supported e.g. #39a5dc */
  bannerColor: _propTypes["default"].string,

  /** Classification level or custom text to display in top and bottom banner */
  title: _propTypes["default"].string
};
ClassificationBanner.defaultProps = {
  children: null,
  hostName: '',
  userName: '',
  closeButton: false,
  bottomBanner: true,
  closed: false,
  userNamePosition: 'right',
  hostNamePosition: 'left',
  bannerColor: '',
  title: ''
};
var _default = ClassificationBanner;
exports["default"] = _default;