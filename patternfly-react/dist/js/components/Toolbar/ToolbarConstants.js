"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolbarContextProvider = exports.getToolbarContext = exports.toolbarContextTypes = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _recompose = require("recompose");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var toolbarContextTypes = {
  isDescendantOfToolbar: _propTypes["default"].bool
};
exports.toolbarContextTypes = toolbarContextTypes;

var getToolbarContext = function getToolbarContext(props) {
  return {
    isDescendantOfToolbar: props.isDescendantOfToolbar
  };
};

exports.getToolbarContext = getToolbarContext;
var provideToolbarContext = (0, _recompose.withContext)(toolbarContextTypes, getToolbarContext);
var ToolbarContextProvider = provideToolbarContext(function (props) {
  return _react["default"].createElement(_react["default"].Fragment, null, props.children);
});
exports.ToolbarContextProvider = ToolbarContextProvider;