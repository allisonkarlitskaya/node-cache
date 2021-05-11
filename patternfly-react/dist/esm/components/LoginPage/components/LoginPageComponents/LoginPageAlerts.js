function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import { isArray, isEmpty } from 'lodash';
import LoginPageAlert from './LoginPageAlert';

const LoginPageAlerts = ({
  alert
}) => {
  if (isEmpty(alert)) {
    return null;
  }

  if (isArray(alert)) {
    return alert.map((item, index) => React.createElement(LoginPageAlert, _extends({
      key: index
    }, item)));
  }

  return React.createElement(LoginPageAlert, alert);
};

LoginPageAlerts.propTypes = {
  alert: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};
LoginPageAlerts.defaultProps = {
  alert: null
};
export default LoginPageAlerts;