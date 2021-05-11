"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LoginPageLink = _interopRequireDefault(require("../LoginPageComponents/LoginPageLink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LoginFooterLinks = function LoginFooterLinks(_ref) {
  var links = _ref.links;
  var listItems = links.map(function (link, index) {
    return _react["default"].createElement("li", {
      key: index
    }, _react["default"].createElement(_LoginPageLink["default"], {
      className: "login-pf-page-footer-link",
      href: link.href,
      onClick: function onClick(e) {
        return link.onClick(e);
      }
    }, link.children));
  });
  return _react["default"].createElement("ul", {
    className: "login-pf-page-footer-links list-unstyled"
  }, listItems);
};

LoginFooterLinks.propTypes = {
  links: _propTypes["default"].array
};
LoginFooterLinks.defaultProps = {
  links: []
};
var _default = LoginFooterLinks;
exports["default"] = _default;