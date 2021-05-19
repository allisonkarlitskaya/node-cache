function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../Dropdown';
import CustomMastheadDropdown from './InnerComponents/CustomMastheadDropdown';
/**
 * Masthead
 */

const MastheadDropdown = (_ref) => {
  let {
    className,
    id,
    title,
    noCaret,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "id", "title", "noCaret", "children"]);

  return React.createElement(Dropdown, _extends({
    id: id,
    componentClass: CustomMastheadDropdown,
    className: className
  }, props), React.createElement(Dropdown.Toggle, {
    className: "nav-item-iconic",
    bsStyle: "link",
    noCaret: noCaret
  }, title), React.createElement(Dropdown.Menu, null, children));
};

MastheadDropdown.propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,

  /** ID of dropdown */
  id: PropTypes.string.isRequired,

  /** Title of dropdown */
  title: PropTypes.node,

  /** Children (likely MenuItem's) */
  children: PropTypes.node,

  /** Caret in Dropdown */
  noCaret: PropTypes.bool
};
MastheadDropdown.defaultProps = {
  className: '',
  title: null,
  children: null,
  noCaret: false
};
export default MastheadDropdown;