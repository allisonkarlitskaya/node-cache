function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import Link from '../LoginPageComponents/LoginPageLink';

const LoginCardSocialLink = ({
  link
}) => link && React.createElement("li", {
  className: "login-pf-social-link"
}, React.createElement(Link, {
  href: link.href,
  onClick: link.onClick
}, React.createElement("img", {
  src: link.src,
  alt: link.alt
}), link.text));

LoginCardSocialLink.propTypes = {
  /** the link element props. */
  link: PropTypes.shape(_objectSpread({}, Link.propTypes, {
    /** The image source */
    src: PropTypes.string.isRequired,

    /** The image alt description */
    alt: PropTypes.string,

    /** The link text */
    text: PropTypes.string
  }))
};
LoginCardSocialLink.defaultProps = {
  link: _objectSpread({}, Link.defaultProps, {
    src: null,
    alt: null,
    text: null
  })
};
export default LoginCardSocialLink;