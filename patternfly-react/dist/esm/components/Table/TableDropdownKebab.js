function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup } from '../Button';
import { DropdownKebab } from '../DropdownKebab';
/**
 * TableDropdownKebab component for Patternfly React
 */

const TableDropdownKebab = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  const CustomButtonGroup = buttonProps => React.createElement(ButtonGroup, _extends({}, buttonProps, {
    bsClass: " "
  }));

  return React.createElement(DropdownKebab, _extends({
    componentClass: CustomButtonGroup,
    toggleStyle: "default"
  }, props), children);
};

TableDropdownKebab.propTypes = {
  /** children nodes */
  children: PropTypes.node
};
TableDropdownKebab.defaultProps = {
  children: null
};
export default TableDropdownKebab;