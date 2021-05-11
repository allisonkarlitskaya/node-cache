function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { DropdownButton } from '../Button';
import { MenuItem } from '../MenuItem';
import { noop } from '../../common/helpers';

const FilterValueSelector = (_ref) => {
  let {
    className,
    id,
    filterValues,
    currentValue,
    placeholder,
    onFilterValueSelected
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "id", "filterValues", "currentValue", "placeholder", "onFilterValueSelected"]);

  const classes = classNames('filter-pf-select', className);

  if (placeholder || filterValues && filterValues.length > 1) {
    let title;

    if (currentValue) {
      title = currentValue.title || currentValue;
    } else {
      title = placeholder || filterValues[0].title || filterValues[0];
    }

    let menuId = 'filterCategoryMenu';
    menuId += id ? `_${id}` : '';
    const dropdownClasses = classNames('filter-pf-select-dropdown', {
      'filter-selected': title !== placeholder
    });
    return React.createElement("div", _extends({
      className: classes
    }, props), React.createElement(DropdownButton, {
      title: title,
      id: menuId,
      className: dropdownClasses
    }, filterValues && filterValues.map((item, index) => {
      const menuItemClasses = {
        selected: item === currentValue
      };
      return React.createElement(MenuItem, {
        className: menuItemClasses,
        key: item.id || index,
        onSelect: () => onFilterValueSelected(item)
      }, item.title || item);
    })));
  }

  return null;
};

FilterValueSelector.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,

  /** ID for the filter component, necessary for accessibility if there are multiple filters on a page */
  id: PropTypes.string,

  /** Array of valid values to select from, each can be a string or an object with a 'title' field */
  filterValues: PropTypes.array.isRequired,

  /** Currently selected value */
  currentValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

  /** Placeholder text when no value is selected */
  placeholder: PropTypes.string,

  /** function(field, value) - Callback to call when a value is selected */
  onFilterValueSelected: PropTypes.func
};
FilterValueSelector.defaultProps = {
  className: '',
  id: '',
  currentValue: '',
  placeholder: '',
  onFilterValueSelected: noop
};
export default FilterValueSelector;