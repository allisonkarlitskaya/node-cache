function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Spinner = (_ref) => {
  let {
    loading,
    size,
    inline,
    children,
    inverse,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["loading", "size", "inline", "children", "inverse", "className"]);

  if (loading) {
    const classes = classNames(className, 'spinner', `spinner-${size}`, {
      'spinner-inline': inline,
      'spinner-inverse': inverse
    });
    return React.createElement("div", _extends({
      className: classes
    }, props));
  }

  return children || null;
};

Spinner.propTypes = {
  loading: PropTypes.bool,
  inline: PropTypes.bool,
  inverse: PropTypes.bool,
  size: PropTypes.oneOf(['lg', 'md', 'sm', 'xs']),
  children: PropTypes.node,
  className: PropTypes.string
};
Spinner.defaultProps = {
  loading: false,
  size: 'md',
  inline: false,
  inverse: false,
  children: null,
  className: ''
};
export default Spinner;