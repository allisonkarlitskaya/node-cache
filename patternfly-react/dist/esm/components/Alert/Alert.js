function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { getClassName, getIconName, warnIfDeprecatedType } from './helpers';
import { ALERT_TYPES, DEPRECATED_ALERT_TYPES, ALERT_TYPE_ERROR } from './AlertConstants';
/**
 * Alert Component for Patternfly React
 */

const Alert = (_ref) => {
  let {
    children,
    className,
    onDismiss,
    type
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "className", "onDismiss", "type"]);

  warnIfDeprecatedType(type);
  const alertClass = classNames('alert', className, getClassName(type), {
    'alert-dismissable': onDismiss
  });
  const iconName = getIconName(type);
  return React.createElement("div", _extends({
    className: alertClass
  }, props), onDismiss && React.createElement(Button, {
    bsClass: "close",
    "aria-hidden": "true",
    onClick: onDismiss
  }, React.createElement(Icon, {
    type: "pf",
    name: "close"
  })), React.createElement(Icon, {
    type: "pf",
    name: iconName
  }), children);
};

Alert.propTypes = {
  /** additional alert classes */
  className: PropTypes.string,

  /** callback when alert is dismissed  */
  onDismiss: PropTypes.func,

  /** the type of alert  */
  type: PropTypes.oneOf([...ALERT_TYPES, ...DEPRECATED_ALERT_TYPES]),

  /** children nodes  */
  children: PropTypes.node
};
Alert.defaultProps = {
  className: '',
  onDismiss: null,
  // we do not want to default noop b/c of conditional dismiss button
  type: ALERT_TYPE_ERROR,
  children: null
};
Alert.ALERT_TYPES = ALERT_TYPES;
export default Alert;