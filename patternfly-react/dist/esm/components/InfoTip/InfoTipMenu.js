function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types'; // This must be a class component react-bootstrap passes a ref to it.
// eslint-disable-next-line react/prefer-stateless-function

class InfoTipMenu extends React.Component {
  render() {
    const _this$props = this.props,
          {
      children,
      className,
      bsRole,
      rootCloseEvent,
      labelledBy,
      // eslint-disable-line react/prop-types
      pullRight,
      // eslint-disable-line react/prop-types
      bsClass
    } = _this$props,
          props = _objectWithoutProperties(_this$props, ["children", "className", "bsRole", "rootCloseEvent", "labelledBy", "pullRight", "bsClass"]);

    const infoTipMenuClass = classNames('dropdown-menu', 'infotip', 'bottom-right', className);
    return React.createElement("div", _extends({
      className: infoTipMenuClass,
      style: {
        padding: ''
      }
    }, props), React.createElement("div", {
      className: "arrow"
    }), children);
  }

}

_defineProperty(InfoTipMenu, "propTypes", {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  bsRole: PropTypes.string,
  rootCloseEvent: PropTypes.oneOf(['click', 'mousedown'])
});

_defineProperty(InfoTipMenu, "defaultProps", {
  bsRole: 'menu',
  className: '',
  rootCloseEvent: 'click'
});

export default InfoTipMenu;