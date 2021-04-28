"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LoginPageContainer = function LoginPageContainer(_ref) {
  var backgroundUrl = _ref.backgroundUrl,
      className = _ref.className,
      children = _ref.children;
  var style = backgroundUrl ? {
    backgroundImage: "url(".concat(backgroundUrl, ")")
  } : {};
  return _react["default"].createElement("div", {
    className: "login-pf",
    style: style
  }, _react["default"].createElement("div", {
    className: "login-pf-page ".concat(className)
  }, children));
};

LoginPageContainer.propTypes = {
  children: _propTypes["default"].node,
  backgroundUrl: _propTypes["default"].string,
  className: _propTypes["default"].string
};
LoginPageContainer.defaultProps = {
  children: null,
  backgroundUrl: null,
  className: ''
};
var _default = LoginPageContainer;
exports["default"] = _default;