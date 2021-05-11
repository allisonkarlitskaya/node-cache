import React from 'react';
import PropTypes from 'prop-types';
import LoginFooterLinks from './LoginFooterLinks';

const LoginPageFooter = ({
  links
}) => React.createElement("footer", {
  className: "login-pf-page-footer"
}, React.createElement(LoginFooterLinks, {
  links: links
}));

LoginPageFooter.propTypes = {
  links: PropTypes.array
};
LoginPageFooter.defaultProps = {
  links: LoginFooterLinks.defaultProps.links
};
export default LoginPageFooter;