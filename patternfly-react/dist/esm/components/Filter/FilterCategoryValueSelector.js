function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { DropdownButton } from '../Button';
import { MenuItem } from '../MenuItem';
import { noop } from '../../common/helpers';

const FilterCategoryValueSelector = (_ref) => {
  let {
    className,
    id,
    categoryValues,
    currentValue,
    placeholder,
    onCategoryValueSelected
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "id", "categoryValues", "currentValue", "placeholder", "onCategoryValueSelected"]);

  const classes = classNames('filter-pf-select', className);

  if (placeholder || categoryValues && categoryValues.length > 1) {
    let title;

    if (currentValue) {
      title = currentValue.title || currentValue;
    } else {
      title = placeholder || categoryValues[0].title || categoryValues[0];
    }

    let menuId = 'filterCategoryMenu';
    menuId += id ? `_${id}` : '';
    const dropdownClasses = classNames('filter-pf-category-select-value', 'filter-pf-select-dropdown', {
      'filter-selected': title !== placeholder
    });
    return React.createElement("div", _extends({
      className: classes
    }, props), React.createElement(DropdownButton, {
      className: dropdownClasses,
      title: title,
      id: menuId
    }, categoryValues && categoryValues.map((item, index) => {
      const menuItemClasses = {
        selected: item === currentValue
      };
      return React.createElement(MenuItem, {
        className: menuItemClasses,
        key: item.id || index,
        onSelect: () => onCategoryValueSelected(item)
      }, item.title || item);
    })));
  }

  return null;
};

FilterCategoryValueSelector.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,

  /** ID for the filter component, necessary for accessibility if there are multiple filters on a page */
  id: PropTypes.string,

  /** Array of valid values for the category to select from, each can be a string or an object with a 'title' field */
  categoryValues: PropTypes.array,

  /** Currently selected category value */
  currentValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

  /** Placeholder text when no category value is selected */
  placeholder: PropTypes.string,

  /** function(field, value) - Callback to call when a category value is selected */
  onCategoryValueSelected: PropTypes.func
};
FilterCategoryValueSelector.defaultProps = {
  className: '',
  id: '',
  categoryValues: null,
  currentValue: '',
  placeholder: '',
  onCategoryValueSelected: noop
};
export default FilterCategoryValueSelector;