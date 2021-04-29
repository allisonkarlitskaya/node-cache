function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
/**
 * PaginationRowItems component for Patternfly React
 */

const PaginationRowItems = (_ref) => {
  let {
    itemCount,
    itemsStart,
    itemsEnd,
    messagesOf
  } = _ref,
      props = _objectWithoutProperties(_ref, ["itemCount", "itemsStart", "itemsEnd", "messagesOf"]);

  return React.createElement("span", props, React.createElement("span", {
    className: "pagination-pf-items-current"
  }, itemsStart, "-", itemsEnd), "\xA0", messagesOf, "\xA0", React.createElement("span", {
    className: "pagination-pf-items-total"
  }, itemCount));
};

PaginationRowItems.propTypes = {
  /** calculated number of rows */
  itemCount: PropTypes.number.isRequired,

  /** calculated items start */
  itemsStart: PropTypes.number.isRequired,

  /** calculated items end */
  itemsEnd: PropTypes.number.isRequired,

  /** messages Of */
  messagesOf: PropTypes.string.isRequired
};
export default PaginationRowItems;