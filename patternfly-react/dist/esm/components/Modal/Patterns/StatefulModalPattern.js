function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import ModalPattern from './ModalPattern';
import { propOrState, excludeKeys } from '../../../index';
/**
 * Stateful Modal Pattern component.
 */

class StatefulModalPattern extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      show: propOrState(nextProps, prevState, 'show')
    };
  }

  constructor(props) {
    super(props);

    _defineProperty(this, "open", () => {
      this.setState({
        show: true
      });
    });

    _defineProperty(this, "close", () => {
      this.setState({
        show: false
      });
    });

    _defineProperty(this, "getModalPatternProps", () => this.props);

    this.state = {
      show: false
    };
  }

  render() {
    return React.createElement(ModalPattern, _extends({}, this.getModalPatternProps(), {
      show: this.state.show,
      onClose: this.close
    }));
  }

}

StatefulModalPattern.propTypes = _objectSpread({}, excludeKeys(ModalPattern.propTypes, ['onClose']));
StatefulModalPattern.defaultProps = _objectSpread({}, excludeKeys(ModalPattern.defaultProps, ['onClose', 'show']));
StatefulModalPattern.displayName = 'StatefulModalPattern';
export default StatefulModalPattern;