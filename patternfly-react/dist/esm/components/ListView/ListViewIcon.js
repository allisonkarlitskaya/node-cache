function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';
/**
 * ListViewIcon used as a default content for ListViewLeft
 */

const ListViewIcon = (_ref) => {
  let {
    type,
    name,
    className,
    size
  } = _ref,
      props = _objectWithoutProperties(_ref, ["type", "name", "className", "size"]);

  return React.createElement(Icon, _extends({
    type: type,
    name: name,
    className: classNames(`list-view-pf-icon-${size}`, className)
  }, props));
};

ListViewIcon.propTypes = {
  /** Icon type (pf or fa) */
  type: PropTypes.string,

  /** Name of the icon font */
  name: PropTypes.string.isRequired,

  /** additional classes */
  className: PropTypes.string,

  /** Icon size (sm, md, lg), defaults to 'sm' */
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
};
ListViewIcon.defaultProps = {
  type: 'fa',
  size: 'sm',
  className: ''
};
export default ListViewIcon;