function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
/**
 * ListViewInfoItem renders contents of individual Info item
 */

const ListViewInfoItem = (_ref) => {
  let {
    children,
    className,
    stacked
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "className", "stacked"]);

  const classes = classNames({
    'list-view-pf-additional-info-item-stacked': stacked
  }, 'list-view-pf-additional-info-item', className);
  return React.createElement("div", _extends({
    className: classes,
    onClick: e => e.stopPropagation()
  }, props), children);
};

ListViewInfoItem.propTypes = {
  /** Child node - contents of the additional info item */
  children: PropTypes.node,

  /** Additional css classes */
  className: PropTypes.string,

  /** Toggle the InfoItem contents stacking */
  stacked: PropTypes.bool
};
ListViewInfoItem.defaultProps = {
  children: null,
  className: '',
  stacked: false
};
export default ListViewInfoItem;