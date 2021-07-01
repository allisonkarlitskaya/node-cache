"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _recompose = require("recompose");

var _helpers = require("../../common/helpers");

var _Grid = require("../Grid");

var _ToolbarResults = _interopRequireDefault(require("./ToolbarResults"));

var _ToolbarRightContent = _interopRequireDefault(require("./ToolbarRightContent"));

var _ToolbarFind = _interopRequireDefault(require("./ToolbarFind"));

var _ToolbarViewSelector = _interopRequireDefault(require("./ToolbarViewSelector"));

var _ToolbarConstants = require("./ToolbarConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ContextualToolbar = function ContextualToolbar(_ref) {
  var children = _ref.children,
      className = _ref.className,
      preventSubmit = _ref.preventSubmit,
      props = _objectWithoutProperties(_ref, ["children", "className", "preventSubmit"]);

  var toolbarChildren = (0, _helpers.filterChildren)(children, function (child) {
    return !(0, _helpers.hasDisplayName)(child, _ToolbarResults["default"].displayName);
  });
  var resultsChildren = (0, _helpers.filterChildren)(children, function (child) {
    return (0, _helpers.hasDisplayName)(child, _ToolbarResults["default"].displayName);
  });
  return _react["default"].createElement(_ToolbarConstants.ToolbarContextProvider, {
    isDescendantOfToolbar: true
  }, _react["default"].createElement(_Grid.Grid, {
    fluid: true,
    className: className
  }, _react["default"].createElement(_Grid.Grid.Row, {
    className: "toolbar-pf"
  }, _react["default"].createElement(_Grid.Grid.Col, {
    sm: 12
  }, _react["default"].createElement("form", {
    className: "toolbar-pf-actions",
    onSubmit: function onSubmit(e) {
      if (preventSubmit) {
        e.preventDefault();
      }
    }
  }, toolbarChildren), resultsChildren))));
};

ContextualToolbar.propTypes = {
  /** Children nodes */
  children: _propTypes["default"].node,

  /** Additional css classes */
  className: _propTypes["default"].string,

  /** Prevent submission of toolbar children internal form */
  preventSubmit: _propTypes["default"].bool
};
ContextualToolbar.defaultProps = {
  children: null,
  className: '',
  preventSubmit: false
};
var Toolbar = (0, _recompose.withContext)(_ToolbarConstants.toolbarContextTypes, _ToolbarConstants.getToolbarContext)(ContextualToolbar);
Toolbar.Results = _ToolbarResults["default"];
Toolbar.RightContent = _ToolbarRightContent["default"];
Toolbar.Find = _ToolbarFind["default"];
Toolbar.ViewSelector = _ToolbarViewSelector["default"];
var _default = Toolbar;
exports["default"] = _default;