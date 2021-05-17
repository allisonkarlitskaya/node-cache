function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';
/**
 * PaginationRowArrowIcon component for Patternfly React
 */

const PaginationRowArrowIcon = (_ref) => {
  let {
    name
  } = _ref,
      props = _objectWithoutProperties(_ref, ["name"]);

  const iconName = `angle-${name}`;
  return React.createElement(Icon, {
    type: "fa",
    name: iconName,
    className: "i"
  });
};

PaginationRowArrowIcon.propTypes = {
  /** icon name */
  name: PropTypes.oneOf(['left', 'double-left', 'right', 'double-right']).isRequired
};
export default PaginationRowArrowIcon;