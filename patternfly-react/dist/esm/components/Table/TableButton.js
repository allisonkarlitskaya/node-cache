function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from '../Button';
import { BUTTON_BS_STYLES } from '../Button/ButtonConstants';
import { noop } from '../../common/helpers';
/**
 * TableButton component for Patternfly React
 */

const TableButton = (_ref) => {
  let {
    children,
    className,
    onClick
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "className", "onClick"]);

  const classes = classNames('table-view-pf-btn', className);

  const {
    bsStyle
  } = props,
        otherProps = _objectWithoutProperties(props, ["bsStyle"]);

  return React.createElement("div", _extends({
    className: classes
  }, otherProps), React.createElement(Button, {
    onClick: onClick,
    bsStyle: bsStyle
  }, children));
};

TableButton.propTypes = {
  /** Children nodes  */
  children: PropTypes.node,

  /** Additional css classes */
  className: PropTypes.string,

  /** onClick callback for button */
  onClick: PropTypes.func,
  bsStyle: PropTypes.oneOf(BUTTON_BS_STYLES)
};
TableButton.defaultProps = {
  children: null,
  className: '',
  onClick: noop,
  bsStyle: 'default'
};
TableButton.BUTTON_BS_STYLES = BUTTON_BS_STYLES;
export default TableButton;