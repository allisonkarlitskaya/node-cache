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

var FilterValueSelector = function FilterValueSelector(_ref) {
  var className = _ref.className,
      id = _ref.id,
      filterValues = _ref.filterValues,
      currentValue = _ref.currentValue,
      placeholder = _ref.placeholder,
      onFilterValueSelected = _ref.onFilterValueSelected,
      props = _objectWithoutProperties(_ref, ["className", "id", "filterValues", "currentValue", "placeholder", "onFilterValueSelected"]);

  var classes = (0, _classnames["default"])('filter-pf-select', className);

  if (placeholder || filterValues && filterValues.length > 1) {
    var title;

    if (currentValue) {
      title = currentValue.title || currentValue;
    } else {
      title = placeholder || filterValues[0].title || filterValues[0];
    }

    var menuId = 'filterCategoryMenu';
    menuId += id ? "_".concat(id) : '';
    var dropdownClasses = (0, _classnames["default"])('filter-pf-select-dropdown', {
      'filter-selected': title !== placeholder
    });
    return _react["default"].createElement("div", _extends({
      className: classes
    }, props), _react["default"].createElement(_Button.DropdownButton, {
      title: title,
      id: menuId,
      className: dropdownClasses
    }, filterValues && filterValues.map(function (item, index) {
      var menuItemClasses = {
        selected: item === currentValue
      };
      return _react["default"].createElement(_MenuItem.MenuItem, {
        className: menuItemClasses,
        key: item.id || index,
        onSelect: function onSelect() {
          return onFilterValueSelected(item);
        }
      }, item.title || item);
    })));
  }

  return null;
};

FilterValueSelector.propTypes = {
  /** Additional css classes */
  className: _propTypes["default"].string,

  /** ID for the filter component, necessary for accessibility if there are multiple filters on a page */
  id: _propTypes["default"].string,

  /** Array of valid values to select from, each can be a string or an object with a 'title' field */
  filterValues: _propTypes["default"].array.isRequired,

  /** Currently selected value */
  currentValue: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),

  /** Placeholder text when no value is selected */
  placeholder: _propTypes["default"].string,

  /** function(field, value) - Callback to call when a value is selected */
  onFilterValueSelected: _propTypes["default"].func
};
FilterValueSelector.defaultProps = {
  className: '',
  id: '',
  currentValue: '',
  placeholder: '',
  onFilterValueSelected: _helpers.noop
};
var _default = FilterValueSelector;
exports["default"] = _default;