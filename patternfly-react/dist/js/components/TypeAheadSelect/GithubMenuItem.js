"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var GithubMenuItem = function GithubMenuItem(props) {
  return _react["default"].createElement("div", {
    key: props.option.id
  }, _react["default"].createElement("img", {
    alt: "avatar",
    height: "20px",
    src: props.option.avatar_url,
    style: {
      borderRadius: '10px',
      margin: '5px'
    }
  }), _react["default"].createElement(_index.TypeAheadSelect.Highlighter, {
    search: props.text
  }, props.option.login));
};

GithubMenuItem.propTypes = {
  option: _propTypes["default"].object.isRequired,
  text: _propTypes["default"].string
};
GithubMenuItem.defaultProps = {
  text: null
};
var _default = GithubMenuItem;
exports["default"] = _default;