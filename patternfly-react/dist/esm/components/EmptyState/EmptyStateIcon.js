function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';
/**
 * EmptyStateIcon renders element
 */

const EmptyStateIcon = (_ref) => {
  let {
    className,
    type,
    name
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "type", "name"]);

  const classes = classNames('blank-slate-pf-icon', className);
  return React.createElement("div", {
    className: classes
  }, React.createElement(Icon, _extends({
    type: type,
    name: name
  }, props)));
};

EmptyStateIcon.propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,

  /** Icon type (pf or fa) */
  type: PropTypes.string,

  /** Name of the icon font */
  name: PropTypes.string
};
EmptyStateIcon.defaultProps = {
  type: 'pf',
  name: 'add-circle-o',
  className: ''
};
export default EmptyStateIcon;