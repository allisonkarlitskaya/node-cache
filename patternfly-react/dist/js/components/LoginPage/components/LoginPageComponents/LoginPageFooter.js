"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LoginFooterLinks = _interopRequireDefault(require("./LoginFooterLinks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LoginPageFooter = function LoginPageFooter(_ref) {
  var links = _ref.links;
  return _react["default"].createElement("footer", {
    className: "login-pf-page-footer"
  }, _react["default"].createElement(_LoginFooterLinks["default"], {
    links: links
  }));
};

LoginPageFooter.propTypes = {
  links: _propTypes["default"].array
};
LoginPageFooter.defaultProps = {
  links: _LoginFooterLinks["default"].defaultProps.links
};
var _default = LoginPageFooter;
exports["default"] = _default;