"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LoginPageHeader = function LoginPageHeader(_ref) {
  var logoSrc = _ref.logoSrc,
      logoTitle = _ref.logoTitle,
      caption = _ref.caption;
  return _react["default"].createElement("header", {
    className: "login-pf-page-header"
  }, _react["default"].createElement("img", {
    className: "login-pf-brand",
    src: logoSrc,
    title: logoTitle,
    alt: "logo"
  }), _react["default"].createElement("div", {
    className: "login-pf-caption"
  }, caption));
};

LoginPageHeader.propTypes = {
  logoSrc: _propTypes["default"].string,
  logoTitle: _propTypes["default"].string,
  caption: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node])
};
LoginPageHeader.defaultProps = {
  logoSrc: null,
  logoTitle: null,
  caption: null
};
var _default = LoginPageHeader;
exports["default"] = _default;