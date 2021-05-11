import React from 'react';
import PropTypes from 'prop-types';

const LoginPageContainer = ({
  backgroundUrl,
  className,
  children
}) => {
  const style = backgroundUrl ? {
    backgroundImage: `url(${backgroundUrl})`
  } : {};
  return React.createElement("div", {
    className: "login-pf",
    style: style
  }, React.createElement("div", {
    className: `login-pf-page ${className}`
  }, children));
};

LoginPageContainer.propTypes = {
  children: PropTypes.node,
  backgroundUrl: PropTypes.string,
  className: PropTypes.string
};
LoginPageContainer.defaultProps = {
  children: null,
  backgroundUrl: null,
  className: ''
};
export default LoginPageContainer;