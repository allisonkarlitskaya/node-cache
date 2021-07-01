function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { DropdownButton } from '../Button';
import { MenuItem } from '../MenuItem';
import { noop } from '../../common/helpers';

const FilterCategorySelector = (_ref) => {
  let {
    children,
    className,
    id,
    filterCategories,
    currentCategory,
    placeholder,
    onFilterCategorySelected
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "className", "id", "filterCategories", "currentCategory", "placeholder", "onFilterCategorySelected"]);

  const classes = classNames('filter-pf-category-select', className);

  if (placeholder || filterCategories && filterCategories.length > 1) {
    let title;

    if (currentCategory) {
      title = currentCategory.title || currentCategory;
    } else {
      title = placeholder || filterCategories[0].title || filterCategories[0];
    }

    let menuId = 'filterCategoryMenu';
    menuId += id ? `_${id}` : '';
    const dropdownClasses = classNames('filter-pf-select-dropdown', {
      'filter-selected': title !== placeholder
    });
    return React.createElement("div", _extends({
      className: classes
    }, props), React.createElement("div", {
      className: "filter-pf-select"
    }, React.createElement(DropdownButton, {
      title: title,
      id: menuId,
      className: dropdownClasses
    }, filterCategories && filterCategories.map((item, index) => {
      const menuItemClasses = {
        selected: item === currentCategory
      };
      return React.createElement(MenuItem, {
        className: menuItemClasses,
        key: item.id || index,
        onSelect: () => onFilterCategorySelected(item)
      }, item.title || item);
    }))), children);
  }

  return null;
};

FilterCategorySelector.propTypes = {
  /** Children nodes */
  children: PropTypes.node,

  /** Additional css classes */
  className: PropTypes.string,

  /** ID for the component, necessary for accessibility if there are multiple filters on a page */
  id: PropTypes.string,

  /** Array of filter categories, each can be a string or an object with a 'title' field */
  filterCategories: PropTypes.array.isRequired,

  /** Current selected category */
  currentCategory: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

  /** Placeholder text when no category is selected */
  placeholder: PropTypes.string,

  /** function(field, value) - Callback to call when a category is added */
  onFilterCategorySelected: PropTypes.func
};
FilterCategorySelector.defaultProps = {
  children: null,
  className: '',
  id: '',
  currentCategory: '',
  placeholder: '',
  onFilterCategorySelected: noop
};
export default FilterCategorySelector;