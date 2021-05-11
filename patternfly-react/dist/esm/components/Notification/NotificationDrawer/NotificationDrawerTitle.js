function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../Icon';

const NotificationDrawerTitle = (_ref) => {
  let {
    expandable,
    onCloseClick,
    onExpandClick,
    title,
    children,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["expandable", "onCloseClick", "onExpandClick", "title", "children", "className"]);

  const classes = classNames('drawer-pf-title', className);
  return React.createElement("div", _extends({
    className: classes
  }, props), expandable && React.createElement("a", {
    className: "drawer-pf-toggle-expand",
    onClick: onExpandClick
  }), React.createElement("a", {
    className: "drawer-pf-close",
    onClick: onCloseClick
  }, React.createElement(Icon, {
    name: "close"
  })), React.createElement("h3", {
    className: "text-center"
  }, title), children);
};

NotificationDrawerTitle.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node,

  /** Additional element css classes */
  className: PropTypes.string,

  /** Title prop */
  title: PropTypes.string,

  /** Close/Expand Functions */
  onCloseClick: PropTypes.func,
  onExpandClick: PropTypes.func,

  /** is the Drawer expandable prop */
  expandable: PropTypes.bool
};
NotificationDrawerTitle.defaultProps = {
  className: '',
  title: 'Notifications',
  onCloseClick: null,
  onExpandClick: null,
  children: null,
  expandable: true
};
export default NotificationDrawerTitle;