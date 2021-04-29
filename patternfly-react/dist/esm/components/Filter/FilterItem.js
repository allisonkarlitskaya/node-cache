function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../common/helpers';
import { DisposableLabel } from '../Label';

const FilterItem = (_ref) => {
  let {
    children,
    className,
    onRemove,
    filterData
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "className", "onRemove", "filterData"]);

  const classes = classNames(className);
  return React.createElement("li", _extends({
    className: classes
  }, props), React.createElement(DisposableLabel, {
    type: "info",
    onRemoveClick: () => onRemove(filterData)
  }, children));
};

FilterItem.propTypes = {
  /** Children nodes */
  children: PropTypes.node,

  /** additional filter item classes */
  className: PropTypes.string,

  /** callback when filter is removed  */
  onRemove: PropTypes.func,

  /** Data to pass to onRemove function */
  filterData: PropTypes.object
};
FilterItem.defaultProps = {
  children: null,
  className: '',
  onRemove: noop,
  filterData: {}
};
export default FilterItem;