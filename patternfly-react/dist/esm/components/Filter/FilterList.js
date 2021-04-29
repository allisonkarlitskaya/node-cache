function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const FilterList = (_ref) => {
  let {
    children,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "className"]);

  if (!children) {
    return null;
  }

  const classes = classNames('list-inline', className);
  return React.createElement("ul", {
    className: classes
  }, children);
};

FilterList.propTypes = {
  /** Children nodes */
  children: PropTypes.node,

  /** Additional css classes */
  className: PropTypes.string
};
FilterList.defaultProps = {
  children: null,
  className: ''
};
export default FilterList;