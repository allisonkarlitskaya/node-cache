function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
/**
 * Masthead
 */

const MastheadCollapse = (_ref) => {
  let {
    className,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "children"]);

  const menusClasses = classNames('collapse', 'navbar-collapse', className);
  return React.createElement("nav", _extends({
    className: menusClasses
  }, props), React.createElement("ul", {
    className: "nav navbar-nav navbar-right navbar-iconic navbar-utility"
  }, children));
};

MastheadCollapse.propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,

  /** Children (likely MastheadDropdown's) */
  children: PropTypes.node
};
MastheadCollapse.defaultProps = {
  className: '',
  children: null
};
export default MastheadCollapse;