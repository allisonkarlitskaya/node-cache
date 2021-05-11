function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import NotificationInfoRight from './NotificationInfoRight';
import NotificationInfoLeft from './NotificationInfoLeft';

const NotificationInfo = (_ref) => {
  let {
    rightText,
    leftText,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["rightText", "leftText", "className"]);

  const classes = classNames('drawer-pf-notification-info', className);
  return React.createElement("div", {
    className: classes
  }, React.createElement(NotificationInfoLeft, {
    text: leftText
  }), React.createElement(NotificationInfoRight, {
    text: rightText
  }));
};

NotificationInfo.propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,

  /** leftText and rightText Strings */
  leftText: PropTypes.string,
  rightText: PropTypes.string
};
NotificationInfo.defaultProps = {
  className: '',
  leftText: '',
  rightText: ''
};
export default NotificationInfo;