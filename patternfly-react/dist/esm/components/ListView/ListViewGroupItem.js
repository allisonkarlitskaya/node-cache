function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
/**
 * ListViewGroupItem is a root node of each ListViewItem
 */

const ListViewGroupItem = (_ref) => {
  let {
    children,
    className,
    stacked,
    expanded
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "className", "stacked", "expanded"]);

  const classes = classNames('list-group-item', {
    'list-view-pf-expand-active': expanded,
    'list-view-pf-stacked': stacked
  }, className);
  return React.createElement("div", _extends({
    className: classes
  }, props), children);
};

ListViewGroupItem.propTypes = {
  /** Children nodes */
  children: PropTypes.node,

  /** Additional css classes */
  className: PropTypes.string,

  /** Toggles the item expanded */
  expanded: PropTypes.bool,

  /** Toggles the item stacked */
  stacked: PropTypes.bool
};
ListViewGroupItem.defaultProps = {
  children: null,
  expanded: false,
  stacked: false,
  className: ''
};
export default ListViewGroupItem;