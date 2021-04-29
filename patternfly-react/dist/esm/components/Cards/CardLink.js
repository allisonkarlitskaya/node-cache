function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const CardLink = (_ref) => {
  let {
    disabled,
    children,
    className,
    icon
  } = _ref,
      props = _objectWithoutProperties(_ref, ["disabled", "children", "className", "icon"]);

  const classes = classNames({
    'card-pf-link-with-icon': icon,
    disabled
  }, className);
  return React.createElement("p", null, React.createElement("a", _extends({
    className: classes
  }, props), icon, children));
};

CardLink.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,

  /** Additional element css classes */
  className: PropTypes.string,

  /** card link icon node */
  icon: PropTypes.node,

  /** href prop */
  href: PropTypes.string,

  /** is link prop */
  disabled: PropTypes.bool
};
CardLink.defaultProps = {
  className: '',
  icon: null,
  href: null,
  disabled: false
};
export default CardLink;