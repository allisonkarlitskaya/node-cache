import React from 'react';
import PropTypes from 'prop-types';
import Link from '../LoginPageComponents/LoginPageLink';

const LoginFooterLinks = ({
  links
}) => {
  const listItems = links.map((link, index) => React.createElement("li", {
    key: index
  }, React.createElement(Link, {
    className: "login-pf-page-footer-link",
    href: link.href,
    onClick: e => link.onClick(e)
  }, link.children)));
  return React.createElement("ul", {
    className: "login-pf-page-footer-links list-unstyled"
  }, listItems);
};

LoginFooterLinks.propTypes = {
  links: PropTypes.array
};
LoginFooterLinks.defaultProps = {
  links: []
};
export default LoginFooterLinks;