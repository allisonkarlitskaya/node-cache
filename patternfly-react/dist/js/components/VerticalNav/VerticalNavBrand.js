"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var VerticalNavBrand = function VerticalNavBrand(props) {
  var title = props.title,
      href = props.href,
      onClick = props.onClick,
      iconImg = props.iconImg,
      children = props.children; // The img prop is just a shorthand for the titleImg prop.
  // When also using iconImg, it is less confusing to pass titleImg instead of img.

  var titleImg = props.titleImg || props.img;

  var brandChildren = children || _react["default"].createElement("span", null, iconImg && _react["default"].createElement("img", {
    className: "navbar-brand-icon",
    src: iconImg,
    alt: title
  }), titleImg && _react["default"].createElement("img", {
    className: "navbar-brand-name",
    src: titleImg,
    alt: title
  }), !titleImg && title && _react["default"].createElement("span", {
    className: "navbar-brand-txt"
  }, title));

  return href || onClick ? _react["default"].createElement("a", {
    href: href,
    onClick: onClick,
    className: "navbar-brand"
  }, brandChildren) : _react["default"].createElement("span", {
    className: "navbar-brand"
  }, brandChildren);
};

VerticalNavBrand.propTypes = {
  /** Title of the application (use either this or titleImg) */
  title: _propTypes["default"].string,

  /** URL of an image for the app's title (use either this or title) */
  titleImg: _propTypes["default"].string,

  /** Alias for titleImg */
  img: _propTypes["default"].string,

  /** URL of an image for the app's icon */
  iconImg: _propTypes["default"].string,

  /** URL of the application's homepage if the title should be a link */
  href: _propTypes["default"].string,

  /** Alternative to href, callback to call when the brand link is clicked */
  onClick: _propTypes["default"].func,

  /** Custom children components to render instead. If passed, above props are ignored. */
  children: _propTypes["default"].node
};
VerticalNavBrand.defaultProps = {
  title: '',
  titleImg: '',
  img: '',
  iconImg: '',
  href: '',
  onClick: null,
  // noop should not be used b/c onClick differentiates render
  children: null
};
VerticalNavBrand.displayName = 'VerticalNav.Brand';
var _default = VerticalNavBrand;
exports["default"] = _default;