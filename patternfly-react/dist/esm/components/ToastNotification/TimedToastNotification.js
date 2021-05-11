function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import Timer from '../../common/Timer';
import ToastNotification from './ToastNotification';
import { Alert } from '../Alert';
/**
 * TimedToastNotification Component for Patternfly React
 */

class TimedToastNotification extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onMouseEnter", () => {
      const {
        onMouseEnter
      } = this.props;
      onMouseEnter && onMouseEnter();
    });

    _defineProperty(this, "onMouseLeave", () => {
      const {
        onMouseLeave
      } = this.props;
      onMouseLeave && onMouseLeave();
    });
  }

  componentDidMount() {
    const {
      paused,
      persistent,
      onDismiss,
      timerdelay
    } = this.props;

    if (!persistent) {
      this.timer = new Timer(onDismiss, timerdelay);
      this.timer.startTimer();
    }
    /** if we are paused on mount, then clear the timer
     * after having initialized with the correct delay */


    if (paused) {
      this.timer && this.timer.clearTimer();
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    /**
     * If paused prop changes, update our timer
     */
    if (nextProps.paused !== this.props.paused) {
      if (nextProps.paused) {
        this.timer && this.timer.clearTimer();
      } else {
        this.timer && this.timer.startTimer();
      }
    }
  }

  componentWillUnmount() {
    this.timer && this.timer.clearTimer();
  }

  render() {
    const {
      children,
      className,
      type,
      onDismiss
    } = this.props;
    const {
      onMouseEnter,
      onMouseLeave
    } = this;
    const toastProps = {
      className,
      type,
      onDismiss,
      onMouseEnter,
      onMouseLeave
    };
    return React.createElement(ToastNotification, toastProps, children);
  }

} // WARNING: This should be kept consistent with ToastNotification.propTypes


TimedToastNotification.propTypes = _objectSpread({}, Alert.propTypes, {
  /** pauses notification from dismissing */
  paused: PropTypes.bool,

  /** persistent keeps the notification up endlessly until closed */
  persistent: PropTypes.bool,

  /** timer delay until dismiss */
  timerdelay: PropTypes.number,

  /** onMouseEnter callback */
  onMouseEnter: PropTypes.func,

  /** onMouseLeave callback */
  onMouseLeave: PropTypes.func
}); // WARNING: This should be kept consistent with ToastNotification.defaultProps

TimedToastNotification.defaultProps = _objectSpread({}, Alert.defaultProps, {
  paused: false,
  timerdelay: 8000
});
TimedToastNotification.TOAST_NOTIFICATION_TYPES = [...Alert.ALERT_TYPES];
TimedToastNotification.displayName = 'TimedToastNotification';
export default TimedToastNotification;