function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import { getContext } from 'recompose';
import Navbar from "react-bootstrap/es/Navbar";
import VerticalNavBrand from './VerticalNavBrand';
import { navContextTypes } from './VerticalNavConstants';
import { noop, hasDisplayName, filterChildren } from '../../common/helpers';
/**
 * VerticalNavMasthead - the first child of a VerticalNav component
 */

const BaseVerticalNavMasthead = props => {
  const {
    children,
    href,
    iconImg,
    titleImg,
    title
  } = props;
  const brandChildren = filterChildren(children, child => hasDisplayName(child, VerticalNavBrand.displayName));
  const otherChildren = filterChildren(children, child => !hasDisplayName(child, VerticalNavBrand.displayName));
  return React.createElement(React.Fragment, null, React.createElement(Navbar.Header, null, React.createElement(Navbar.Toggle, {
    onClick: props.updateNavOnMenuToggleClick
  }, React.createElement("span", {
    className: "sr-only"
  }, "Toggle navigation"), React.createElement("span", {
    className: "icon-bar"
  }), React.createElement("span", {
    className: "icon-bar"
  }), React.createElement("span", {
    className: "icon-bar"
  })), brandChildren && brandChildren.length > 0 ? brandChildren : React.createElement(VerticalNavBrand, {
    title: title,
    titleImg: titleImg,
    iconImg: iconImg,
    href: href
  })), otherChildren);
};

BaseVerticalNavMasthead.propTypes = _objectSpread({}, navContextTypes, {
  /** See VerticalNavBrand.propTypes */
  title: PropTypes.string,

  /** See VerticalNavBrand.propTypes */
  titleImg: PropTypes.string,

  /** See VerticalNavBrand.propTypes */
  iconImg: PropTypes.string,

  /** See VerticalNavBrand.propTypes */
  href: PropTypes.string,

  /** See VerticalNavBrand.propTypes */
  updateNavOnMenuToggleClick: PropTypes.func,

  /** If any non-Brand children are passed, they will be rendered after the .navbar-header */
  children: PropTypes.node
});
BaseVerticalNavMasthead.defaultProps = {
  title: '',
  titleImg: '',
  iconImg: '',
  href: '',
  updateNavOnMenuToggleClick: noop,
  children: null
};
const VerticalNavMasthead = getContext(navContextTypes)(BaseVerticalNavMasthead);
VerticalNavMasthead.propTypes = _objectSpread({}, BaseVerticalNavMasthead.propTypes);
VerticalNavMasthead.displayName = 'VerticalNav.Masthead';
export default VerticalNavMasthead;