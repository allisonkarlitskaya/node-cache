function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { DropdownButton } from '../Button';
import { MenuItem } from '../MenuItem';
import { noop } from '../../common/helpers';

const SortTypeSelector = (_ref) => {
  let {
    className,
    id,
    sortTypes,
    currentSortType,
    onSortTypeSelected
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "id", "sortTypes", "currentSortType", "onSortTypeSelected"]);

  let menuId = 'sortTypeMenu';
  menuId += id ? `_${id}` : '';

  if (sortTypes && sortTypes.length > 1) {
    let title;

    if (currentSortType) {
      title = currentSortType.title || currentSortType;
    } else {
      title = sortTypes[0].title || sortTypes[0];
    }

    return React.createElement(DropdownButton, _extends({
      className: className,
      title: title,
      id: menuId
    }, props), sortTypes.map((item, index) => {
      const classes = {
        selected: item === currentSortType
      };
      return React.createElement(MenuItem, {
        className: classes,
        key: item.id || index,
        onSelect: () => onSortTypeSelected && onSortTypeSelected(item)
      }, item.title || item);
    }));
  }

  return null;
};

SortTypeSelector.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,

  /** ID for the sort component, necessary for accessibility if there are sort filters on a page */
  id: PropTypes.string,

  /** Array of sort types, can be a string or an object with a 'title' field */
  sortTypes: PropTypes.array.isRequired,

  /** Current selected sort type */
  currentSortType: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

  /** function(field, value) - Callback to call when a sort type is selected */
  onSortTypeSelected: PropTypes.func
};
SortTypeSelector.defaultProps = {
  className: '',
  id: '',
  currentSortType: null,
  onSortTypeSelected: noop
};
export default SortTypeSelector;