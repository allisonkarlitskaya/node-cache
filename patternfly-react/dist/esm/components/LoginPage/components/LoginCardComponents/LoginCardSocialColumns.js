function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button, Icon } from '../../../../index';
import LoginCardSocialLink from './LoginCardSocialLink';

class LoginCardSocialColumns extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      expend: false,
      width: window.innerWidth
    });

    _defineProperty(this, "updateWindowWidth", () => {
      this.setState({
        width: window.innerWidth
      });
    });

    _defineProperty(this, "getListItems", () => {
      this.hiddenLinks = [];
      const {
        links,
        numberOfButtonsToShow
      } = this.props;
      return links && links.map((link, index) => {
        if (index >= numberOfButtonsToShow) {
          this.hiddenLinks.push(link);
          return true;
        }

        return React.createElement(LoginCardSocialLink, {
          link: link,
          key: link.key || index
        });
      });
    });

    _defineProperty(this, "getHiddenListItems", () => {
      const {
        numberOfButtonsToShow
      } = this.props;
      return this.hiddenLinks && this.hiddenLinks.map((link, index) => React.createElement(LoginCardSocialLink, {
        link: link,
        key: link.key || index + numberOfButtonsToShow
      }));
    });

    _defineProperty(this, "toggleExpend", () => {
      this.setState({
        expend: !this.state.expend
      });
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowWidth);
  }

  render() {
    const {
      links,
      numberOfButtonsToShow
    } = this.props;

    if (!links) {
      return null;
    }

    const {
      expend,
      width
    } = this.state;
    const expendButton = width > 768 && links.length > numberOfButtonsToShow && React.createElement(Button, {
      bsStyle: "link",
      bsClass: "btn btn-link login-pf-social-toggle",
      onClick: this.toggleExpend
    }, expend ? 'Less' : 'More', " \xA0", React.createElement(Icon, {
      name: `angle-${expend ? 'up' : 'down'}`
    }));
    const doubleColumn = links.length > 4 ? 'login-pf-social-double-col' : '';
    const moreItems = expend || width < 768 ? this.getHiddenListItems() : null;
    return React.createElement("div", null, React.createElement("ul", {
      className: classNames('login-pf-social list-unstyled', doubleColumn)
    }, this.getListItems(), moreItems), expendButton);
  }

}

LoginCardSocialColumns.propTypes = {
  /** Array of social links to generate. */
  links: PropTypes.arrayOf(PropTypes.shape(_objectSpread({}, LoginCardSocialLink.propTypes))),

  /** The amount of buttons to show. Above this number, the buttons would be hidden */
  numberOfButtonsToShow: PropTypes.number
};
LoginCardSocialColumns.defaultProps = {
  links: [],
  numberOfButtonsToShow: 8
};
export default LoginCardSocialColumns;