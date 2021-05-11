function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from '../ListGroup';
import { noop } from '../../common/helpers';
/**
 * WizardReviewStep component for Patternfly React
 */

const WizardReviewStep = (_ref) => {
  let {
    children,
    onClick,
    title,
    collapsed
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "onClick", "title", "collapsed"]);

  return React.createElement(ListGroupItem, _extends({
    listItem: true
  }, props), React.createElement("a", {
    href: "#",
    onClick: onClick,
    className: collapsed ? 'collapsed' : ''
  }, title), children);
};

WizardReviewStep.propTypes = {
  /** Children nodes */
  children: PropTypes.node,

  /** Click handler */
  onClick: PropTypes.func,

  /** Step title */
  title: PropTypes.string,

  /** Step collapsed */
  collapsed: PropTypes.bool
};
WizardReviewStep.defaultProps = {
  children: null,
  onClick: noop,
  title: '',
  collapsed: false
};
export default WizardReviewStep;