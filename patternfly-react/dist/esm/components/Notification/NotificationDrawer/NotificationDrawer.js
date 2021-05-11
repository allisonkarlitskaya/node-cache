function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import NotificationDrawerTitle from './NotificationDrawerTitle';
import NotificationDrawerAccordion from './NotificationDrawerAccordion/NotificationDrawerAccordion';
import NotificationDrawerPanel from './NotificationDrawerAccordion/NotificationDrawerPanel';
import NotificationDrawerPanelAction from './NotificationDrawerAccordion/NotificationDrawerPanelAction';
import NotificationDrawerPanelActionLink from './NotificationDrawerAccordion/NotificationDrawerPanelActionLink';
import NotificationDrawerPanelBody from './NotificationDrawerAccordion/NotificationDrawerPanelBody';
import NotificationDrawerPanelCollapse from './NotificationDrawerAccordion/NotificationDrawerPanelCollapse';
import NotificationDrawerPanelCounter from './NotificationDrawerAccordion/NotificationDrawerPanelCounter';
import NotificationDrawerPanelHeading from './NotificationDrawerAccordion/NotificationDrawerPanelHeading';
import NotificationDrawerPanelTitle from './NotificationDrawerAccordion/NotificationDrawerPanelTitle';
import NotificationDrawerDropDown from './NotificationDrawerAccordion/NotificationDrawerDropDown';
import NotificationDrawerToggle from './NotificationDrawerToggle';
import NotificationDrawerEmptyState from './NotificationDrawerEmptyState';

const NotificationDrawer = (_ref) => {
  let {
    hide,
    expanded,
    children,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["hide", "expanded", "children", "className"]);

  const classes = classNames('drawer-pf drawer-alt-pf drawer-pf-notifications', {
    'drawer-pf-expanded': expanded
  }, {
    hide
  }, className);
  return React.createElement("div", _extends({
    className: classes
  }, props), children);
};

NotificationDrawer.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,

  /** Additional element css classes */
  className: PropTypes.string,

  /** Expanded bool */
  expanded: PropTypes.bool,

  /** Hide Bool */
  hide: PropTypes.bool
};
NotificationDrawer.defaultProps = {
  className: '',
  expanded: false,
  hide: false
};
NotificationDrawer.Accordion = NotificationDrawerAccordion;
NotificationDrawer.Panel = NotificationDrawerPanel;
NotificationDrawer.PanelAction = NotificationDrawerPanelAction;
NotificationDrawer.PanelActionLink = NotificationDrawerPanelActionLink;
NotificationDrawer.PanelBody = NotificationDrawerPanelBody;
NotificationDrawer.PanelCollapse = NotificationDrawerPanelCollapse;
NotificationDrawer.PanelCounter = NotificationDrawerPanelCounter;
NotificationDrawer.PanelHeading = NotificationDrawerPanelHeading;
NotificationDrawer.PanelTitle = NotificationDrawerPanelTitle;
NotificationDrawer.Title = NotificationDrawerTitle;
NotificationDrawer.Dropdown = NotificationDrawerDropDown;
NotificationDrawer.Toggle = NotificationDrawerToggle;
NotificationDrawer.EmptyState = NotificationDrawerEmptyState;
export default NotificationDrawer;