"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _helpers = require("../../common/helpers");

var _MastheadCollapse = _interopRequireDefault(require("./MastheadCollapse"));

var _MastheadDropdown = _interopRequireDefault(require("./MastheadDropdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Masthead
 */
var Masthead = function Masthead(_ref) {
  var className = _ref.className,
      title = _ref.title,
      titleImg = _ref.titleImg,
      iconImg = _ref.iconImg,
      href = _ref.href,
      onTitleClick = _ref.onTitleClick,
      navToggle = _ref.navToggle,
      onNavToggleClick = _ref.onNavToggleClick,
      middleContent = _ref.middleContent,
      thin = _ref.thin,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "title", "titleImg", "iconImg", "href", "onTitleClick", "navToggle", "onNavToggleClick", "middleContent", "thin", "children"]);

  var mastheadClasses = (0, _classnames["default"])({
    navbar: true,
    'navbar-default': thin,
    'navbar-pf': thin,
    'navbar-pf-vertical': !thin
  }, className);

  var handleTitleClick = function handleTitleClick(e) {
    if (onTitleClick !== _helpers.noop) {
      if (e) {
        e.preventDefault();
      }

      onTitleClick();
    }
  };

  return _react["default"].createElement("nav", _extends({
    className: mastheadClasses
  }, props), _react["default"].createElement("div", {
    className: "navbar-header"
  }, navToggle && _react["default"].createElement("button", {
    className: "navbar-toggle",
    onClick: onNavToggleClick
  }, _react["default"].createElement("span", {
    className: "sr-only"
  }, "Toggle navigation"), _react["default"].createElement("span", {
    "aria-hidden": "true",
    className: "icon-bar"
  }), _react["default"].createElement("span", {
    "aria-hidden": "true",
    className: "icon-bar"
  }), _react["default"].createElement("span", {
    "aria-hidden": "true",
    className: "icon-bar"
  })), _react["default"].createElement("a", {
    href: href,
    role: "button",
    className: "navbar-brand",
    onClick: handleTitleClick
  }, iconImg && _react["default"].createElement("img", {
    className: "navbar-brand-icon",
    src: iconImg,
    alt: ""
  }), titleImg && _react["default"].createElement("img", {
    className: "navbar-brand-name",
    src: titleImg,
    alt: title
  }), !titleImg && title), middleContent), children);
};

Masthead.propTypes = {
  /** Additional element css classes */
  className: _propTypes["default"].string,

  /** Title of the application (use either this or titleImg) */
  title: _propTypes["default"].string,

  /** URL of an image for the app's title (use either this or title) */
  titleImg: _propTypes["default"].string,

  /** URL of an image for the app's icon */
  iconImg: _propTypes["default"].string,

  /** URL of the application's homepage if the title should be a link */
  href: _propTypes["default"].string,

  /** Alternative to href, callback to call when the brand link is clicked */
  onTitleClick: _propTypes["default"].func,

  /** Option to have the nav toggle (hamburger), default is true */
  navToggle: _propTypes["default"].bool,

  /** Option to have the fit nav, default is false */
  thin: _propTypes["default"].bool,

  /** Callback when the nav toggle (hamburger) is clicked */
  onNavToggleClick: _propTypes["default"].func,

  /** Content for the center area of the masthead (context selector) */
  middleContent: _propTypes["default"].node,

  /** Children (typically MastheadCollapse) */
  children: _propTypes["default"].node
};
Masthead.defaultProps = {
  className: '',
  title: '',
  titleImg: '',
  iconImg: '',
  href: '#',
  onTitleClick: _helpers.noop,
  navToggle: true,
  thin: false,
  onNavToggleClick: _helpers.noop,
  middleContent: null,
  children: null
};
Masthead.Collapse = _MastheadCollapse["default"];
Masthead.Dropdown = _MastheadDropdown["default"];
var _default = Masthead;
exports["default"] = _default;