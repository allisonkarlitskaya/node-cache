function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Timer from '../../common/Timer';
import { excludeKeys } from '../../common/helpers';

class ModelessOverlay extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "updateForTransitions", () => {
      this.setState({
        isIn: this.props.show
      });
    });

    this.state = {
      isIn: false
    };
    this.inTimer = new Timer(this.updateForTransitions, 150);
  }

  componentWillUnmount() {
    this.inTimer.clearTimer();
  }

  render() {
    const _this$props = this.props,
          {
      children,
      className,
      bsSize,
      show
    } = _this$props,
          otherProps = _objectWithoutProperties(_this$props, ["children", "className", "bsSize", "show"]);

    const {
      isIn
    } = this.state;
    const classes = classNames('modal modeless-pf fade right-side-modal-pf', {
      shown: show || isIn,
      in: show && isIn
    }, className);

    if (isIn !== show) {
      this.inTimer.clearTimer();
      this.inTimer.startTimer();
    }

    const dialogClasses = classNames('modal-dialog', {
      'modal-sm': bsSize === 'sm' || bsSize === 'small',
      'modal-lg': bsSize === 'lg' || bsSize === 'large'
    });
    return React.createElement("div", _extends({
      role: "dialog",
      tabIndex: -1,
      className: classes
    }, excludeKeys(otherProps, ['show'])), React.createElement("div", {
      className: dialogClasses
    }, React.createElement("div", {
      className: "modal-content"
    }, children)));
  }

}

ModelessOverlay.propTypes = {
  /** Children */
  children: PropTypes.node,

  /** Additional css classes */
  className: PropTypes.string,

  /** When true, the dialog is shown */
  show: PropTypes.bool,

  /** Component size variations (effects dialog width). */
  bsSize: PropTypes.oneOf(['lg', 'large', 'sm', 'small', 'default'])
};
ModelessOverlay.defaultProps = {
  children: null,
  className: '',
  show: false,
  bsSize: 'default'
};
export default ModelessOverlay;