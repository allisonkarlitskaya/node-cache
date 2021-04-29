function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../common/helpers';
import { Modal } from '../Modal';
import WizardBody from './WizardBody';
import WizardContents from './WizardContents';
import WizardFooter from './WizardFooter';
import WizardHeader from './WizardHeader';
import WizardMain from './WizardMain';
import WizardReviewContent from './WizardReviewContent';
import WizardReviewItem from './WizardReviewItem';
import WizardReviewStep from './WizardReviewStep';
import WizardReviewSteps from './WizardReviewSteps';
import WizardReviewSubStep from './WizardReviewSubStep';
import WizardReviewSubSteps from './WizardReviewSubSteps';
import WizardRow from './WizardRow';
import WizardSidebar from './WizardSidebar';
import WizardSidebarGroup from './WizardSidebarGroup';
import WizardSidebarGroupItem from './WizardSidebarGroupItem';
import WizardStep from './WizardStep';
import WizardSteps from './WizardSteps';
import WizardSubStep from './WizardSubStep';
import WizardPattern from './Patterns/WizardPattern';
import WizardPatternBody from './Patterns/WizardPatternBody';
import StatefulWizardPattern from './Patterns/StatefulWizardPattern';
/**
 * Wizard - main Wizard component.
 */

const Wizard = (_ref) => {
  let {
    children,
    className,
    dialogClassName,
    show,
    onClose,
    onExited
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "className", "dialogClassName", "show", "onClose", "onExited"]);

  return React.createElement(Modal, _extends({
    show: show,
    onHide: onClose,
    onExited: onExited,
    dialogClassName: dialogClassName || 'modal-lg wizard-pf'
  }, rest), React.createElement("div", {
    className: className
  }, children));
};

Wizard.propTypes = {
  /** Children nodes */
  children: PropTypes.node,

  /** Additional css classes */
  className: PropTypes.string,

  /** Wizard dialog class */
  dialogClassName: PropTypes.string,

  /** show modal */
  show: PropTypes.bool,

  /** on close callback */
  onClose: PropTypes.func,

  /** on exited callback */
  onExited: PropTypes.func
};
Wizard.defaultProps = {
  children: null,
  className: '',
  dialogClassName: '',
  show: false,
  onClose: noop,
  onExited: noop
};
Wizard.Body = WizardBody;
Wizard.Contents = WizardContents;
Wizard.Footer = WizardFooter;
Wizard.Header = WizardHeader;
Wizard.Main = WizardMain;
Wizard.ReviewContent = WizardReviewContent;
Wizard.ReviewItem = WizardReviewItem;
Wizard.ReviewStep = WizardReviewStep;
Wizard.ReviewSteps = WizardReviewSteps;
Wizard.ReviewSubStep = WizardReviewSubStep;
Wizard.ReviewSubSteps = WizardReviewSubSteps;
Wizard.Row = WizardRow;
Wizard.Sidebar = WizardSidebar;
Wizard.SidebarGroup = WizardSidebarGroup;
Wizard.SidebarGroupItem = WizardSidebarGroupItem;
Wizard.Step = WizardStep;
Wizard.Steps = WizardSteps;
Wizard.SubStep = WizardSubStep;
Wizard.Pattern = WizardPattern;
Wizard.Pattern.Body = WizardPatternBody;
Wizard.Pattern.Stateful = StatefulWizardPattern;
export default Wizard;