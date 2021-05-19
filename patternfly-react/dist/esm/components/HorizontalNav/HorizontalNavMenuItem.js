function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Dropdown, ListGroup, ListGroupItem } from '../../index';

const HorizontalNavMenuItem = props => {
  const {
    children,
    onItemClick,
    title,
    active,
    dropdown,
    submenu,
    dropup,
    pullLeft
  } = props,
        otherProps = _objectWithoutProperties(props, ["children", "onItemClick", "title", "active", "dropdown", "submenu", "dropup", "pullLeft"]);

  const dropdownClasses = classNames({
    'dropdown-submenu': submenu,
    'pull-left': pullLeft
  });
  return dropdown ? React.createElement(Dropdown, _extends({
    componentClass: "li",
    className: dropdownClasses
  }, otherProps), React.createElement(Dropdown.Toggle, {
    useAnchor: true,
    noCaret: submenu
  }, title), React.createElement(Dropdown.Menu, {
    className: dropup ? 'dropup' : ''
  }, children)) : React.createElement(ListGroupItem, _extends({
    listItem: true,
    bsClass: "",
    active: active
  }, otherProps), React.createElement("a", {
    href: "#",
    onClick: onItemClick
  }, title), children && React.createElement(ListGroup, {
    componentClass: "ul",
    bsClass: "nav navbar-nav navbar-persistent"
  }, children));
};

HorizontalNavMenuItem.propTypes = {
  children: PropTypes.node,
  onItemClick: PropTypes.func,
  title: PropTypes.node,
  active: PropTypes.bool,
  dropdown: PropTypes.bool,
  submenu: PropTypes.bool,
  dropup: PropTypes.bool,
  pullLeft: PropTypes.bool
};
HorizontalNavMenuItem.defaultProps = {
  children: null,
  onItemClick: null,
  title: '',
  active: false,
  dropdown: false,
  submenu: false,
  dropup: false,
  pullLeft: false
};
export default HorizontalNavMenuItem;