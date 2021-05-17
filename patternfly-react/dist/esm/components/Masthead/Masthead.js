function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { noop } from '../../common/helpers';
import MastheadCollapse from './MastheadCollapse';
import MastheadDropdown from './MastheadDropdown';
/**
 * Masthead
 */

const Masthead = (_ref) => {
  let {
    className,
    title,
    titleImg,
    iconImg,
    href,
    onTitleClick,
    navToggle,
    onNavToggleClick,
    middleContent,
    thin,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "title", "titleImg", "iconImg", "href", "onTitleClick", "navToggle", "onNavToggleClick", "middleContent", "thin", "children"]);

  const mastheadClasses = classNames({
    navbar: true,
    'navbar-default': thin,
    'navbar-pf': thin,
    'navbar-pf-vertical': !thin
  }, className);

  const handleTitleClick = e => {
    if (onTitleClick !== noop) {
      if (e) {
        e.preventDefault();
      }

      onTitleClick();
    }
  };

  return React.createElement("nav", _extends({
    className: mastheadClasses
  }, props), React.createElement("div", {
    className: "navbar-header"
  }, navToggle && React.createElement("button", {
    className: "navbar-toggle",
    onClick: onNavToggleClick
  }, React.createElement("span", {
    className: "sr-only"
  }, "Toggle navigation"), React.createElement("span", {
    "aria-hidden": "true",
    className: "icon-bar"
  }), React.createElement("span", {
    "aria-hidden": "true",
    className: "icon-bar"
  }), React.createElement("span", {
    "aria-hidden": "true",
    className: "icon-bar"
  })), React.createElement("a", {
    href: href,
    role: "button",
    className: "navbar-brand",
    onClick: handleTitleClick
  }, iconImg && React.createElement("img", {
    className: "navbar-brand-icon",
    src: iconImg,
    alt: ""
  }), titleImg && React.createElement("img", {
    className: "navbar-brand-name",
    src: titleImg,
    alt: title
  }), !titleImg && title), middleContent), children);
};

Masthead.propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,

  /** Title of the application (use either this or titleImg) */
  title: PropTypes.string,

  /** URL of an image for the app's title (use either this or title) */
  titleImg: PropTypes.string,

  /** URL of an image for the app's icon */
  iconImg: PropTypes.string,

  /** URL of the application's homepage if the title should be a link */
  href: PropTypes.string,

  /** Alternative to href, callback to call when the brand link is clicked */
  onTitleClick: PropTypes.func,

  /** Option to have the nav toggle (hamburger), default is true */
  navToggle: PropTypes.bool,

  /** Option to have the fit nav, default is false */
  thin: PropTypes.bool,

  /** Callback when the nav toggle (hamburger) is clicked */
  onNavToggleClick: PropTypes.func,

  /** Content for the center area of the masthead (context selector) */
  middleContent: PropTypes.node,

  /** Children (typically MastheadCollapse) */
  children: PropTypes.node
};
Masthead.defaultProps = {
  className: '',
  title: '',
  titleImg: '',
  iconImg: '',
  href: '#',
  onTitleClick: noop,
  navToggle: true,
  thin: false,
  onNavToggleClick: noop,
  middleContent: null,
  children: null
};
Masthead.Collapse = MastheadCollapse;
Masthead.Dropdown = MastheadDropdown;
export default Masthead;