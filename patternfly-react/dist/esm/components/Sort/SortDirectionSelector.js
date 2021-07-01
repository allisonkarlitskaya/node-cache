function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { Icon } from '../Icon';

const SortDirectionSelector = (_ref) => {
  let {
    className,
    isNumeric,
    isAscending
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "isNumeric", "isAscending"]);

  let directionName;

  if (isNumeric) {
    directionName = isAscending ? 'sort-numeric-asc' : 'sort-numeric-desc';
  } else {
    directionName = isAscending ? 'sort-alpha-asc' : 'sort-alpha-desc';
  }

  return React.createElement(Button, _extends({
    bsStyle: "link",
    className: className
  }, props), React.createElement(Icon, {
    type: "fa",
    className: "sort-direction",
    name: directionName
  }));
};

SortDirectionSelector.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,

  /** Boolean if current sort type is numeric */
  isNumeric: PropTypes.bool,

  /** Boolean if current sort direction is ascending */
  isAscending: PropTypes.bool
};
SortDirectionSelector.defaultProps = {
  className: '',
  isNumeric: true,
  isAscending: true
};
export default SortDirectionSelector;