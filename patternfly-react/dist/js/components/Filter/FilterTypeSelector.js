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

var FilterTypeSelector = function FilterTypeSelector(_ref) {
  var className = _ref.className,
      id = _ref.id,
      filterTypes = _ref.filterTypes,
      currentFilterType = _ref.currentFilterType,
      placeholder = _ref.placeholder,
      onFilterTypeSelected = _ref.onFilterTypeSelected,
      props = _objectWithoutProperties(_ref, ["className", "id", "filterTypes", "currentFilterType", "placeholder", "onFilterTypeSelected"]);

  var classes = (0, _classnames["default"])('input-group-btn', className);

  if (placeholder || filterTypes && filterTypes.length > 1) {
    var title;

    if (currentFilterType) {
      title = currentFilterType.title || currentFilterType;
    } else {
      title = placeholder || filterTypes[0].title || filterTypes[0];
    }

    var menuId = 'filterFieldTypeMenu';
    menuId += id ? "_".concat(id) : '';
    return _react["default"].createElement("div", _extends({
      className: classes
    }, props), _react["default"].createElement(_Button.DropdownButton, {
      title: title,
      id: menuId
    }, placeholder && _react["default"].createElement(_MenuItem.MenuItem, {
      title: placeholder,
      key: "Placeholder",
      onSelect: onFilterTypeSelected
    }, placeholder), filterTypes.map(function (item, index) {
      var menuItemClasses = {
        selected: item === currentFilterType
      };
      return _react["default"].createElement(_MenuItem.MenuItem, {
        className: menuItemClasses,
        key: item.id || index,
        onSelect: function onSelect() {
          return onFilterTypeSelected(item);
        }
      }, item.title || item);
    })));
  }

  return null;
};

FilterTypeSelector.propTypes = {
  /** Additional css classes */
  className: _propTypes["default"].string,

  /** ID for the filter component, necessary for accessibility if there are multiple filters on a page */
  id: _propTypes["default"].string,

  /** Array of filter types, can be a string or an object with a 'title' field */
  filterTypes: _propTypes["default"].array.isRequired,

  /** Current selected filter type */
  currentFilterType: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),

  /** Placeholder text when no filter type is selected */
  placeholder: _propTypes["default"].string,

  /** function(field, value) - Callback to call when a filter type is selected */
  onFilterTypeSelected: _propTypes["default"].func
};
FilterTypeSelector.defaultProps = {
  className: '',
  id: '',
  currentFilterType: '',
  placeholder: '',
  onFilterTypeSelected: _helpers.noop
};
var _default = FilterTypeSelector;
exports["default"] = _default;