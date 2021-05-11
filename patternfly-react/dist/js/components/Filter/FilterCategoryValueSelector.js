"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Button = require("../Button");

var _MenuItem = require("../MenuItem");

var _helpers = require("../../common/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var FilterCategoryValueSelector = function FilterCategoryValueSelector(_ref) {
  var className = _ref.className,
      id = _ref.id,
      categoryValues = _ref.categoryValues,
      currentValue = _ref.currentValue,
      placeholder = _ref.placeholder,
      onCategoryValueSelected = _ref.onCategoryValueSelected,
      props = _objectWithoutProperties(_ref, ["className", "id", "categoryValues", "currentValue", "placeholder", "onCategoryValueSelected"]);

  var classes = (0, _classnames["default"])('filter-pf-select', className);

  if (placeholder || categoryValues && categoryValues.length > 1) {
    var title;

    if (currentValue) {
      title = currentValue.title || currentValue;
    } else {
      title = placeholder || categoryValues[0].title || categoryValues[0];
    }

    var menuId = 'filterCategoryMenu';
    menuId += id ? "_".concat(id) : '';
    var dropdownClasses = (0, _classnames["default"])('filter-pf-category-select-value', 'filter-pf-select-dropdown', {
      'filter-selected': title !== placeholder
    });
    return _react["default"].createElement("div", _extends({
      className: classes
    }, props), _react["default"].createElement(_Button.DropdownButton, {
      className: dropdownClasses,
      title: title,
      id: menuId
    }, categoryValues && categoryValues.map(function (item, index) {
      var menuItemClasses = {
        selected: item === currentValue
      };
      return _react["default"].createElement(_MenuItem.MenuItem, {
        className: menuItemClasses,
        key: item.id || index,
        onSelect: function onSelect() {
          return onCategoryValueSelected(item);
        }
      }, item.title || item);
    })));
  }

  return null;
};

FilterCategoryValueSelector.propTypes = {
  /** Additional css classes */
  className: _propTypes["default"].string,

  /** ID for the filter component, necessary for accessibility if there are multiple filters on a page */
  id: _propTypes["default"].string,

  /** Array of valid values for the category to select from, each can be a string or an object with a 'title' field */
  categoryValues: _propTypes["default"].array,

  /** Currently selected category value */
  currentValue: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),

  /** Placeholder text when no category value is selected */
  placeholder: _propTypes["default"].string,

  /** function(field, value) - Callback to call when a category value is selected */
  onCategoryValueSelected: _propTypes["default"].func
};
FilterCategoryValueSelector.defaultProps = {
  className: '',
  id: '',
  categoryValues: null,
  currentValue: '',
  placeholder: '',
  onCategoryValueSelected: _helpers.noop
};
var _default = FilterCategoryValueSelector;
exports["default"] = _default;