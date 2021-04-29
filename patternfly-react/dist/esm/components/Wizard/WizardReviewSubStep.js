function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from '../ListGroup';
import { noop } from '../../common/helpers';
/**
 * WizardReviewSubStep component for Patternfly React
 */

const WizardReviewSubStep = (_ref) => {
  let {
    children,
    onClick,
    label,
    title,
    collapsed
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "onClick", "label", "title", "collapsed"]);

  return React.createElement(ListGroupItem, _extends({
    listItem: true
  }, props), React.createElement("a", {
    href: "#",
    onClick: onClick,
    className: collapsed ? 'collapsed' : ''
  }, React.createElement("span", {
    className: "wizard-pf-substep-number"
  }, label), React.createElement("span", {
    className: "wizard-pf-substep-title"
  }, title)), children);
};

WizardReviewSubStep.propTypes = {
  /** Children nodes */
  children: PropTypes.node,

  /** Click handler */
  onClick: PropTypes.func,

  /** Review step label */
  label: PropTypes.string,

  /** Review step title */
  title: PropTypes.string,

  /** Step collapsed */
  collapsed: PropTypes.bool
};
WizardReviewSubStep.defaultProps = {
  children: null,
  onClick: noop,
  label: '',
  title: '',
  collapsed: false
};
export default WizardReviewSubStep;