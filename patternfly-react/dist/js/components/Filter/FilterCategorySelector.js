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

var FilterCategorySelector = function FilterCategorySelector(_ref) {
  var children = _ref.children,
      className = _ref.className,
      id = _ref.id,
      filterCategories = _ref.filterCategories,
      currentCategory = _ref.currentCategory,
      placeholder = _ref.placeholder,
      onFilterCategorySelected = _ref.onFilterCategorySelected,
      props = _objectWithoutProperties(_ref, ["children", "className", "id", "filterCategories", "currentCategory", "placeholder", "onFilterCategorySelected"]);

  var classes = (0, _classnames["default"])('filter-pf-category-select', className);

  if (placeholder || filterCategories && filterCategories.length > 1) {
    var title;

    if (currentCategory) {
      title = currentCategory.title || currentCategory;
    } else {
      title = placeholder || filterCategories[0].title || filterCategories[0];
    }

    var menuId = 'filterCategoryMenu';
    menuId += id ? "_".concat(id) : '';
    var dropdownClasses = (0, _classnames["default"])('filter-pf-select-dropdown', {
      'filter-selected': title !== placeholder
    });
    return _react["default"].createElement("div", _extends({
      className: classes
    }, props), _react["default"].createElement("div", {
      className: "filter-pf-select"
    }, _react["default"].createElement(_Button.DropdownButton, {
      title: title,
      id: menuId,
      className: dropdownClasses
    }, filterCategories && filterCategories.map(function (item, index) {
      var menuItemClasses = {
        selected: item === currentCategory
      };
      return _react["default"].createElement(_MenuItem.MenuItem, {
        className: menuItemClasses,
        key: item.id || index,
        onSelect: function onSelect() {
          return onFilterCategorySelected(item);
        }
      }, item.title || item);
    }))), children);
  }

  return null;
};

FilterCategorySelector.propTypes = {
  /** Children nodes */
  children: _propTypes["default"].node,

  /** Additional css classes */
  className: _propTypes["default"].string,

  /** ID for the component, necessary for accessibility if there are multiple filters on a page */
  id: _propTypes["default"].string,

  /** Array of filter categories, each can be a string or an object with a 'title' field */
  filterCategories: _propTypes["default"].array.isRequired,

  /** Current selected category */
  currentCategory: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),

  /** Placeholder text when no category is selected */
  placeholder: _propTypes["default"].string,

  /** function(field, value) - Callback to call when a category is added */
  onFilterCategorySelected: _propTypes["default"].func
};
FilterCategorySelector.defaultProps = {
  children: null,
  className: '',
  id: '',
  currentCategory: '',
  placeholder: '',
  onFilterCategorySelected: _helpers.noop
};
var _default = FilterCategorySelector;
exports["default"] = _default;