function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { DropdownButton } from '../Button';
import { MenuItem } from '../MenuItem';
import { noop } from '../../common/helpers';

const FilterTypeSelector = (_ref) => {
  let {
    className,
    id,
    filterTypes,
    currentFilterType,
    placeholder,
    onFilterTypeSelected
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "id", "filterTypes", "currentFilterType", "placeholder", "onFilterTypeSelected"]);

  const classes = classNames('input-group-btn', className);

  if (placeholder || filterTypes && filterTypes.length > 1) {
    let title;

    if (currentFilterType) {
      title = currentFilterType.title || currentFilterType;
    } else {
      title = placeholder || filterTypes[0].title || filterTypes[0];
    }

    let menuId = 'filterFieldTypeMenu';
    menuId += id ? `_${id}` : '';
    return React.createElement("div", _extends({
      className: classes
    }, props), React.createElement(DropdownButton, {
      title: title,
      id: menuId
    }, placeholder && React.createElement(MenuItem, {
      title: placeholder,
      key: "Placeholder",
      onSelect: onFilterTypeSelected
    }, placeholder), filterTypes.map((item, index) => {
      const menuItemClasses = {
        selected: item === currentFilterType
      };
      return React.createElement(MenuItem, {
        className: menuItemClasses,
        key: item.id || index,
        onSelect: () => onFilterTypeSelected(item)
      }, item.title || item);
    })));
  }

  return null;
};

FilterTypeSelector.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,

  /** ID for the filter component, necessary for accessibility if there are multiple filters on a page */
  id: PropTypes.string,

  /** Array of filter types, can be a string or an object with a 'title' field */
  filterTypes: PropTypes.array.isRequired,

  /** Current selected filter type */
  currentFilterType: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

  /** Placeholder text when no filter type is selected */
  placeholder: PropTypes.string,

  /** function(field, value) - Callback to call when a filter type is selected */
  onFilterTypeSelected: PropTypes.func
};
FilterTypeSelector.defaultProps = {
  className: '',
  id: '',
  currentFilterType: '',
  placeholder: '',
  onFilterTypeSelected: noop
};
export default FilterTypeSelector;