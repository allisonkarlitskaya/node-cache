function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { Button } from '../Button';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const defaultColors = {
  'pf-red': 1,
  'pf-blue': 1,
  'pf-green': 1,
  'pf-orange': 1,
  'pf-yellow': 1
};
/**
 * ClassificationBanner Component for PatternFly React
 */

class ClassificationBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      closed: props.closed
    };
    this.onClose = this.onClose.bind(this);
  }

  onClose(e) {
    this.setState({
      closed: !this.state.closed
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.closed !== this.state.closed) {
      this.setState({
        closed: nextProps.closed
      });
    }
  }

  render() {
    const _this$props = this.props,
          {
      children,
      bottomBanner,
      hostName,
      userName,
      closeButton,
      userNamePosition,
      hostNamePosition,
      bannerColor,
      title
    } = _this$props,
          props = _objectWithoutProperties(_this$props, ["children", "bottomBanner", "hostName", "userName", "closeButton", "userNamePosition", "hostNamePosition", "bannerColor", "title"]);

    const classificationBannerClasses = {
      top: classNames('classification-banner-pf-banner', 'classification-banner-pf-banner-top', defaultColors[bannerColor] ? `classification-banner-${bannerColor}` : ''),
      bottom: classNames('classification-banner-pf-banner', defaultColors[bannerColor] ? `classification-banner-${bannerColor}` : '', 'classification-banner-pf-banner-bottom'),
      closeButton: classNames({
        'classification-banner-pf-close pficon-error-circle-o': closeButton
      }),
      children: classNames({
        'classification-banner-pf-children-no-bottom': !this.state.closed && !bottomBanner,
        'classification-banner-pf-children': !this.state.closed && bottomBanner
      })
    };
    const leftLabels = [hostNamePosition === 'left' ? React.createElement("span", null, hostName) : null, userNamePosition === 'left' ? React.createElement("span", null, userName) : null];
    const rightLabels = [hostNamePosition === 'right' ? React.createElement("span", null, hostName) : null, userNamePosition === 'right' ? React.createElement("span", null, userName) : null];
    const bannerBackgroundStyle = defaultColors[bannerColor] ? {} : {
      background: bannerColor
    };
    return React.createElement("div", props, !this.state.closed && React.createElement("nav", {
      style: bannerBackgroundStyle,
      className: classificationBannerClasses.top
    }, React.createElement("div", {
      className: "classification-banner-pf-banner-left"
    }, leftLabels[0], leftLabels[1]), React.createElement("div", {
      className: "classification-banner-pf-classification-level"
    }, title), React.createElement("div", {
      className: "classification-banner-pf-banner-right"
    }, closeButton && React.createElement(Button, {
      className: classificationBannerClasses.closeButton,
      bsStyle: "link",
      bsSize: "small",
      "data-toggle": "tooltip",
      "data-placement": "bottom",
      title: "Close",
      onClick: e => this.onClose(e)
    }), rightLabels[0], rightLabels[1])), React.createElement("div", {
      className: classificationBannerClasses.children
    }, children), !this.state.closed && bottomBanner && React.createElement("footer", {
      style: bannerBackgroundStyle,
      className: classificationBannerClasses.bottom
    }, React.createElement("div", {
      className: "classification-banner-pf-classification-level"
    }, title)));
  }

}

ClassificationBanner.propTypes = {
  /** Child nodes */
  children: PropTypes.node,

  /** Option to display system hostname that user has logged into */
  hostName: PropTypes.string,

  /** Option to display user login */
  userName: PropTypes.string,

  /** Option to close classification banner */
  closeButton: PropTypes.bool,

  /** Option to enable or disable classification banner across bottom screen */
  bottomBanner: PropTypes.bool,

  /** Whether banner's state is closed or not */
  closed: PropTypes.bool,

  /** Option to configure location of user login on the banner */
  userNamePosition: PropTypes.string,

  /** Option to configure location of hostname on the banner */
  hostNamePosition: PropTypes.string,

  /** Option to configure banner color. Hex code is supported e.g. #39a5dc */
  bannerColor: PropTypes.string,

  /** Classification level or custom text to display in top and bottom banner */
  title: PropTypes.string
};
ClassificationBanner.defaultProps = {
  children: null,
  hostName: '',
  userName: '',
  closeButton: false,
  bottomBanner: true,
  closed: false,
  userNamePosition: 'right',
  hostNamePosition: 'left',
  bannerColor: '',
  title: ''
};
export default ClassificationBanner;