function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import { NotificationDrawer } from '../NotificationDrawer/index';
import { StatefulNotificationDrawerWrapper } from './index';

class StatefulToggleNotificationDrawerWrapper extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "toggleDrawer", () => {
      this.setState(prevState => ({
        isDrawerOpen: !prevState.isDrawerOpen
      }));
    });

    _defineProperty(this, "updateUnreadCount", bool => {
      if (bool) {
        this.setState({
          hasUnreadMessages: true
        });
      } else {
        this.setState({
          hasUnreadMessages: false
        });
      }
    });

    this.state = {
      panels: props.panels,
      isDrawerOpen: props.isDrawerOpen,
      hasUnreadMessages: props.hasUnreadMessages
    };
  }

  render() {
    return React.createElement("ul", {
      className: "nav navbar-nav navbar-right navbar-iconic"
    }, React.createElement(NotificationDrawer.Toggle, {
      hasUnreadMessages: this.state.hasUnreadMessages,
      onClick: this.toggleDrawer
    }), this.state.isDrawerOpen && React.createElement(StatefulNotificationDrawerWrapper, {
      panels: this.state.panels,
      maxPanelHeight: this.props.maxPanelHeight,
      isDrawerOpen: true,
      isExpandable: this.props.isExpandable,
      hasUnreadMessages: true,
      updateUnreadCount: this.updateUnreadCount,
      toggleDrawer: this.toggleDrawer
    }));
  }

}

StatefulToggleNotificationDrawerWrapper.propTypes = {
  /** Notification Panels Array */
  panels: PropTypes.array,

  /** Is Drawer Open Bool */
  isDrawerOpen: PropTypes.bool,

  /** has Unread Messages Bool */
  hasUnreadMessages: PropTypes.bool,

  /** is Drawer Expandable */
  isExpandable: PropTypes.bool,

  /** Max Panel Height */
  maxPanelHeight: PropTypes.string
};
StatefulToggleNotificationDrawerWrapper.defaultProps = {
  panels: null,
  isDrawerOpen: false,
  hasUnreadMessages: false,
  isExpandable: true,
  maxPanelHeight: null
};
export default StatefulToggleNotificationDrawerWrapper;