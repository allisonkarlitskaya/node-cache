function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ListGroupItem } from '../ListGroup';
import { noop } from '../../common/helpers';
/**
 * WizardSidebarGroupItem component for Patternfly React
 */

const WizardSidebarGroupItem = (_ref) => {
  let {
    stepIndex,
    subStepIndex,
    className,
    subStep,
    label,
    title,
    activeSubStep,
    onClick
  } = _ref,
      props = _objectWithoutProperties(_ref, ["stepIndex", "subStepIndex", "className", "subStep", "label", "title", "activeSubStep", "onClick"]);

  const classes = classNames({
    active: `${subStep}` === `${activeSubStep}`
  }, className);
  return React.createElement(ListGroupItem, _extends({
    className: classes,
    listItem: true
  }, props), React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onClick(stepIndex, subStepIndex);
    }
  }, React.createElement("span", {
    className: "wizard-pf-substep-number"
  }, label), React.createElement("span", {
    className: "wizard-pf-substep-title"
  }, title)));
};

WizardSidebarGroupItem.propTypes = {
  /** The wizard parent step index */
  stepIndex: PropTypes.number.isRequired,

  /** The wizard sub step index */
  subStepIndex: PropTypes.number.isRequired,

  /** Additional css classes */
  className: PropTypes.string,

  /** This wizard sub step name */
  subStep: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** This wizard sub step label */
  label: PropTypes.string,

  /** This wizard sub step title */
  title: PropTypes.string,

  /** The currently active wizard substep */
  activeSubStep: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Sidebar group item click handler */
  onClick: PropTypes.func
};
WizardSidebarGroupItem.defaultProps = {
  className: '',
  subStep: '',
  label: '',
  title: '',
  activeSubStep: '',
  onClick: noop
};
export default WizardSidebarGroupItem;