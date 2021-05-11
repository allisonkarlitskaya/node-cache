function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from '../../../Alert';
import { noop } from '../../../../common/helpers';

class LoginPageAlert extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      show: this.props.show
    });

    _defineProperty(this, "closeAlert", e => {
      this.props.onDismiss(e);

      if (!this.state.show) {
        return;
      }

      this.setState({
        show: false
      });
    });
  }

  render() {
    const {
      type,
      message
    } = this.props;
    return this.state.show ? React.createElement(Alert, {
      type: type,
      onDismiss: e => this.closeAlert(e)
    }, message) : null;
  }

}

LoginPageAlert.propTypes = {
  type: PropTypes.string,
  onDismiss: PropTypes.func,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  show: PropTypes.bool
};
LoginPageAlert.defaultProps = {
  type: 'warning',
  onDismiss: noop,
  message: null,
  show: false
};
export default LoginPageAlert;