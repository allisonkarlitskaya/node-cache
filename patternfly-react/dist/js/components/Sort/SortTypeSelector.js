"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = require("../Button");

var _MenuItem = require("../MenuItem");

var _helpers = require("../../common/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SortTypeSelector = function SortTypeSelector(_ref) {
  var className = _ref.className,
      id = _ref.id,
      sortTypes = _ref.sortTypes,
      currentSortType = _ref.currentSortType,
      onSortTypeSelected = _ref.onSortTypeSelected,
      props = _objectWithoutProperties(_ref, ["className", "id", "sortTypes", "currentSortType", "onSortTypeSelected"]);

  var menuId = 'sortTypeMenu';
  menuId += id ? "_".concat(id) : '';

  if (sortTypes && sortTypes.length > 1) {
    var title;

    if (currentSortType) {
      title = currentSortType.title || currentSortType;
    } else {
      title = sortTypes[0].title || sortTypes[0];
    }

    return _react["default"].createElement(_Button.DropdownButton, _extends({
      className: className,
      title: title,
      id: menuId
    }, props), sortTypes.map(function (item, index) {
      var classes = {
        selected: item === currentSortType
      };
      return _react["default"].createElement(_MenuItem.MenuItem, {
        className: classes,
        key: item.id || index,
        onSelect: function onSelect() {
          return onSortTypeSelected && onSortTypeSelected(item);
        }
      }, item.title || item);
    }));
  }

  return null;
};

SortTypeSelector.propTypes = {
  /** Additional css classes */
  className: _propTypes["default"].string,

  /** ID for the sort component, necessary for accessibility if there are sort filters on a page */
  id: _propTypes["default"].string,

  /** Array of sort types, can be a string or an object with a 'title' field */
  sortTypes: _propTypes["default"].array.isRequired,

  /** Current selected sort type */
  currentSortType: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),

  /** function(field, value) - Callback to call when a sort type is selected */
  onSortTypeSelected: _propTypes["default"].func
};
SortTypeSelector.defaultProps = {
  className: '',
  id: '',
  currentSortType: null,
  onSortTypeSelected: _helpers.noop
};
var _default = SortTypeSelector;
exports["default"] = _default;