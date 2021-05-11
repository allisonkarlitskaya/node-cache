"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _recompose = require("recompose");

var _Navbar = _interopRequireDefault(require("react-bootstrap/lib/Navbar"));

var _VerticalNavBrand = _interopRequireDefault(require("./VerticalNavBrand"));

var _VerticalNavConstants = require("./VerticalNavConstants");

var _helpers = require("../../common/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * VerticalNavMasthead - the first child of a VerticalNav component
 */
var BaseVerticalNavMasthead = function BaseVerticalNavMasthead(props) {
  var children = props.children,
      href = props.href,
      iconImg = props.iconImg,
      titleImg = props.titleImg,
      title = props.title;
  var brandChildren = (0, _helpers.filterChildren)(children, function (child) {
    return (0, _helpers.hasDisplayName)(child, _VerticalNavBrand["default"].displayName);
  });
  var otherChildren = (0, _helpers.filterChildren)(children, function (child) {
    return !(0, _helpers.hasDisplayName)(child, _VerticalNavBrand["default"].displayName);
  });
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Navbar["default"].Header, null, _react["default"].createElement(_Navbar["default"].Toggle, {
    onClick: props.updateNavOnMenuToggleClick
  }, _react["default"].createElement("span", {
    className: "sr-only"
  }, "Toggle navigation"), _react["default"].createElement("span", {
    className: "icon-bar"
  }), _react["default"].createElement("span", {
    className: "icon-bar"
  }), _react["default"].createElement("span", {
    className: "icon-bar"
  })), brandChildren && brandChildren.length > 0 ? brandChildren : _react["default"].createElement(_VerticalNavBrand["default"], {
    title: title,
    titleImg: titleImg,
    iconImg: iconImg,
    href: href
  })), otherChildren);
};

BaseVerticalNavMasthead.propTypes = _objectSpread({}, _VerticalNavConstants.navContextTypes, {
  /** See VerticalNavBrand.propTypes */
  title: _propTypes["default"].string,

  /** See VerticalNavBrand.propTypes */
  titleImg: _propTypes["default"].string,

  /** See VerticalNavBrand.propTypes */
  iconImg: _propTypes["default"].string,

  /** See VerticalNavBrand.propTypes */
  href: _propTypes["default"].string,

  /** See VerticalNavBrand.propTypes */
  updateNavOnMenuToggleClick: _propTypes["default"].func,

  /** If any non-Brand children are passed, they will be rendered after the .navbar-header */
  children: _propTypes["default"].node
});
BaseVerticalNavMasthead.defaultProps = {
  title: '',
  titleImg: '',
  iconImg: '',
  href: '',
  updateNavOnMenuToggleClick: _helpers.noop,
  children: null
};
var VerticalNavMasthead = (0, _recompose.getContext)(_VerticalNavConstants.navContextTypes)(BaseVerticalNavMasthead);
VerticalNavMasthead.propTypes = _objectSpread({}, BaseVerticalNavMasthead.propTypes);
VerticalNavMasthead.displayName = 'VerticalNav.Masthead';
var _default = VerticalNavMasthead;
exports["default"] = _default;