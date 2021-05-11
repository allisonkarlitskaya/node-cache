function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import WizardPattern from './WizardPattern';
import { wizardStepShape } from './WizardPatternConstants';
import { noop, propOrState, excludeKeys } from '../../../index';
/**
 * StatefulWizardPattern - the Stateful Wizard Pattern component.
 */

class StatefulWizardPattern extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      activeStepIndex: propOrState(nextProps, prevState, 'activeStepIndex')
    };
  }

  constructor(props) {
    super(props);

    _defineProperty(this, "onStepChanged", newStepIndex => {
      const {
        shouldPreventStepChange,
        steps
      } = this.props;
      const {
        activeStepIndex
      } = this.state;
      const {
        shouldPreventExit
      } = steps[activeStepIndex];
      const {
        shouldPreventEnter
      } = steps[newStepIndex];

      if (shouldPreventStepChange(activeStepIndex, newStepIndex) || shouldPreventExit && shouldPreventExit(newStepIndex) || shouldPreventEnter && shouldPreventEnter(activeStepIndex)) {
        return;
      }

      this.setState({
        activeStepIndex: newStepIndex
      });
    });

    this.state = {
      activeStepIndex: 0
    };
  }

  render() {
    const _this$props = this.props,
          {
      shouldDisableNextStep,
      shouldDisablePreviousStep,
      shouldDisableCancelButton
    } = _this$props,
          otherProps = _objectWithoutProperties(_this$props, ["shouldDisableNextStep", "shouldDisablePreviousStep", "shouldDisableCancelButton"]);

    const {
      activeStepIndex
    } = this.state; // NOTE: the steps array is passed down with ...otherProps, including any shouldPreventEnter or shouldPreventExit functions inside it.
    // These functions are for StatefulWizardPattern only and should not be used in WizardPattern despite being passed down here.

    return React.createElement(WizardPattern, _extends({
      nextStepDisabled: shouldDisableNextStep(activeStepIndex),
      previousStepDisabled: shouldDisablePreviousStep(activeStepIndex),
      cancelButtonDisabled: shouldDisableCancelButton(activeStepIndex)
    }, excludeKeys(otherProps, ['shouldPreventStepChange']), {
      activeStepIndex: activeStepIndex // Value from state, as set by getDerivedStateFromProps
      ,
      onStepChanged: this.onStepChanged
    }));
  }

}

StatefulWizardPattern.propTypes = _objectSpread({}, excludeKeys(WizardPattern.propTypes, ['activeStepIndex', 'nextStepDisabled', 'previousStepDisabled', 'cancelButtonDisabled']), {
  steps: PropTypes.arrayOf(PropTypes.shape(_objectSpread({}, wizardStepShape, {
    shouldPreventEnter: PropTypes.func,
    shouldPreventExit: PropTypes.func
  }))),
  shouldDisableNextStep: PropTypes.func,
  shouldDisablePreviousStep: PropTypes.func,
  shouldDisableCancelButton: PropTypes.func,
  shouldPreventStepChange: PropTypes.func
});
StatefulWizardPattern.defaultProps = _objectSpread({}, excludeKeys(WizardPattern.defaultProps, ['activeStepIndex', 'nextStepDisabled', 'previousStepDisabled', 'cancelButtonDisabled']), {
  shouldDisableNextStep: noop,
  shouldDisablePreviousStep: noop,
  shouldDisableCancelButton: noop,
  shouldPreventStepChange: noop
});
StatefulWizardPattern.displayName = 'StatefulWizardPattern';
export default StatefulWizardPattern;