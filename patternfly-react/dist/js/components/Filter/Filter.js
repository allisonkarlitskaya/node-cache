"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _recompose = require("recompose");

var _ToolbarConstants = require("../Toolbar/ToolbarConstants");

var _FilterTypeSelector = _interopRequireDefault(require("./FilterTypeSelector"));

var _FilterValueSelector = _interopRequireDefault(require("./FilterValueSelector"));

var _FilterCategorySelector = _interopRequireDefault(require("./FilterCategorySelector"));

var _FilterCategoryValueSelector = _interopRequireDefault(require("./FilterCategoryValueSelector"));

var _FilterActiveLabel = _interopRequireDefault(require("./FilterActiveLabel"));

var _FilterList = _interopRequireDefault(require("./FilterList"));

var _FilterItem = _interopRequireDefault(require("./FilterItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// Disabled eslint due to `isDescendantOfToolbar` being a context property we don't want passed by consumers
// eslint-disable-next-line react/prop-types
var ContextualFilter = function ContextualFilter(_ref) {
  var children = _ref.children,
      className = _ref.className,
      isDescendantOfToolbar = _ref.isDescendantOfToolbar,
      props = _objectWithoutProperties(_ref, ["children", "className", "isDescendantOfToolbar"]);

  var classes = (0, _classnames["default"])({
    'filter-pf form-group': true,
    'toolbar-pf-filter': isDescendantOfToolbar
  }, className);
  return _react["default"].createElement("div", _extends({
    className: classes
  }, props), _react["default"].createElement("div", {
    className: "filter-pf-fields"
  }, _react["default"].createElement("div", {
    className: "input-group"
  }, children)));
};

ContextualFilter.propTypes = {
  /** Children nodes */
  children: _propTypes["default"].node,

  /** Additional css classes */
  className: _propTypes["default"].string
};
ContextualFilter.defaultProps = {
  children: null,
  className: ''
};
var Filter = (0, _recompose.getContext)(_ToolbarConstants.toolbarContextTypes)(ContextualFilter);
Filter.TypeSelector = _FilterTypeSelector["default"];
Filter.ValueSelector = _FilterValueSelector["default"];
Filter.CategorySelector = _FilterCategorySelector["default"];
Filter.CategoryValueSelector = _FilterCategoryValueSelector["default"];
Filter.ActiveLabel = _FilterActiveLabel["default"];
Filter.List = _FilterList["default"];
Filter.Item = _FilterItem["default"];
var _default = Filter;
exports["default"] = _default;