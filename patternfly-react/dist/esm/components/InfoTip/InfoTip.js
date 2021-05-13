function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../Dropdown';
import { KEY_CODES } from '../../common/helpers';
import { default as InfoTipToggle } from './InfoTipToggle';
import { default as InfoTipMenu } from './InfoTipMenu';
import { default as InfoTipMenuFooter } from './InfoTipMenuFooter';
import { default as InfoTipMenuItemIcon } from './InfoTipMenuItemIcon';

class InfoTip extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      open: false,
      footerFocused: false
    });

    _defineProperty(this, "handleEnterKeyDown", event => {
      this.setState({
        open: !this.state.open
      });
      event.preventDefault();
    });

    _defineProperty(this, "handleTabKeyDown", event => {
      if (this.state.footerFocused) {
        this.setState({
          open: false,
          footerFocused: false
        });
      } else {
        this.setState({
          footerFocused: true
        });
      }

      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();
    });

    _defineProperty(this, "handleKeyDown", event => {
      if (event.shiftKey && event.keyCode) {
        return this.handleBackFocus();
      }

      switch (event.keyCode) {
        case KEY_CODES.ENTER_KEY:
          return this.handleEnterKeyDown(event);

        case KEY_CODES.TAB_KEY:
          return this.handleTabKeyDown(event);

        case KEY_CODES.ESCAPE_KEY:
          return this.setState({
            open: false
          });

        default:
          return null;
      }
    });

    _defineProperty(this, "handleBackFocus", () => {
      if (this.state.open) {
        this.setState({
          open: false
        });
      }
    });

    _defineProperty(this, "handleClick", event => {
      event.preventDefault();
      this.setState({
        open: !this.state.open
      });
    });

    _defineProperty(this, "handleBlur", event => {
      if (event && event.relatedTarget) {
        event.relatedTarget.click();
      }

      this.setState({
        open: false
      });
    });
  }

  render() {
    const _this$props = this.props,
          {
      children,
      onToggle
    } = _this$props,
          props = _objectWithoutProperties(_this$props, ["children", "onToggle"]);

    return React.createElement(Dropdown, _extends({
      componentClass: "li",
      onClick: this.handleClick,
      onKeyDown: this.handleKeyDown,
      onToggle: this.handleKeyDown,
      open: this.state.open,
      onBlur: this.handleBlur
    }, props), children);
  }

}

InfoTip.propTypes = _objectSpread({}, Dropdown.propTypes, {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired
});
InfoTip.Toggle = InfoTipToggle;
InfoTip.Menu = InfoTipMenu;
InfoTip.MenuItemIcon = InfoTipMenuItemIcon;
InfoTip.MenuFooter = InfoTipMenuFooter;
export default InfoTip;