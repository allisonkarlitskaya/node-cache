function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner/Spinner';
import NotificationContent from './NotificationContent';
import NotificationInfo from './NotificationInfo';
import NotificationMessage from './NotificationMessage';
import NotificationInfoRight from './NotificationInfoRight';
import NotificationInfoLeft from './NotificationInfoLeft';

const Notification = (_ref) => {
  let {
    type,
    children,
    seen,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["type", "children", "seen", "className"]);

  const classes = classNames({
    'drawer-pf-notification': type === 'notification',
    'drawer-pf-loading text-center': type === 'loading'
  }, {
    unread: !seen
  }, className);
  return React.createElement("div", _extends({
    className: classes
  }, props), type === 'loading' ? [React.createElement(Spinner, {
    key: "notification_spinner",
    inline: true,
    loading: true,
    size: "xs"
  }), ' Loading More'] : children);
};

Notification.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node,

  /** Additional element css classes */
  className: PropTypes.string,

  /** seen Notification Bool */
  seen: PropTypes.bool,

  /** show Loading Notification */
  type: PropTypes.string
};
Notification.defaultProps = {
  children: null,
  className: '',
  seen: false,
  type: 'notification'
};
Notification.Content = NotificationContent;
Notification.Info = NotificationInfo;
Notification.InfoRight = NotificationInfoRight;
Notification.InfoLeft = NotificationInfoLeft;
Notification.Message = NotificationMessage;
export default Notification;