"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _helpers = require("../../common/helpers");

var _Modal = require("../Modal");

var _WizardBody = _interopRequireDefault(require("./WizardBody"));

var _WizardContents = _interopRequireDefault(require("./WizardContents"));

var _WizardFooter = _interopRequireDefault(require("./WizardFooter"));

var _WizardHeader = _interopRequireDefault(require("./WizardHeader"));

var _WizardMain = _interopRequireDefault(require("./WizardMain"));

var _WizardReviewContent = _interopRequireDefault(require("./WizardReviewContent"));

var _WizardReviewItem = _interopRequireDefault(require("./WizardReviewItem"));

var _WizardReviewStep = _interopRequireDefault(require("./WizardReviewStep"));

var _WizardReviewSteps = _interopRequireDefault(require("./WizardReviewSteps"));

var _WizardReviewSubStep = _interopRequireDefault(require("./WizardReviewSubStep"));

var _WizardReviewSubSteps = _interopRequireDefault(require("./WizardReviewSubSteps"));

var _WizardRow = _interopRequireDefault(require("./WizardRow"));

var _WizardSidebar = _interopRequireDefault(require("./WizardSidebar"));

var _WizardSidebarGroup = _interopRequireDefault(require("./WizardSidebarGroup"));

var _WizardSidebarGroupItem = _interopRequireDefault(require("./WizardSidebarGroupItem"));

var _WizardStep = _interopRequireDefault(require("./WizardStep"));

var _WizardSteps = _interopRequireDefault(require("./WizardSteps"));

var _WizardSubStep = _interopRequireDefault(require("./WizardSubStep"));

var _WizardPattern = _interopRequireDefault(require("./Patterns/WizardPattern"));

var _WizardPatternBody = _interopRequireDefault(require("./Patterns/WizardPatternBody"));

var _StatefulWizardPattern = _interopRequireDefault(require("./Patterns/StatefulWizardPattern"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Wizard - main Wizard component.
 */
var Wizard = function Wizard(_ref) {
  var children = _ref.children,
      className = _ref.className,
      dialogClassName = _ref.dialogClassName,
      show = _ref.show,
      onClose = _ref.onClose,
      onExited = _ref.onExited,
      rest = _objectWithoutProperties(_ref, ["children", "className", "dialogClassName", "show", "onClose", "onExited"]);

  return _react["default"].createElement(_Modal.Modal, _extends({
    show: show,
    onHide: onClose,
    onExited: onExited,
    dialogClassName: dialogClassName || 'modal-lg wizard-pf'
  }, rest), _react["default"].createElement("div", {
    className: className
  }, children));
};

Wizard.propTypes = {
  /** Children nodes */
  children: _propTypes["default"].node,

  /** Additional css classes */
  className: _propTypes["default"].string,

  /** Wizard dialog class */
  dialogClassName: _propTypes["default"].string,

  /** show modal */
  show: _propTypes["default"].bool,

  /** on close callback */
  onClose: _propTypes["default"].func,

  /** on exited callback */
  onExited: _propTypes["default"].func
};
Wizard.defaultProps = {
  children: null,
  className: '',
  dialogClassName: '',
  show: false,
  onClose: _helpers.noop,
  onExited: _helpers.noop
};
Wizard.Body = _WizardBody["default"];
Wizard.Contents = _WizardContents["default"];
Wizard.Footer = _WizardFooter["default"];
Wizard.Header = _WizardHeader["default"];
Wizard.Main = _WizardMain["default"];
Wizard.ReviewContent = _WizardReviewContent["default"];
Wizard.ReviewItem = _WizardReviewItem["default"];
Wizard.ReviewStep = _WizardReviewStep["default"];
Wizard.ReviewSteps = _WizardReviewSteps["default"];
Wizard.ReviewSubStep = _WizardReviewSubStep["default"];
Wizard.ReviewSubSteps = _WizardReviewSubSteps["default"];
Wizard.Row = _WizardRow["default"];
Wizard.Sidebar = _WizardSidebar["default"];
Wizard.SidebarGroup = _WizardSidebarGroup["default"];
Wizard.SidebarGroupItem = _WizardSidebarGroupItem["default"];
Wizard.Step = _WizardStep["default"];
Wizard.Steps = _WizardSteps["default"];
Wizard.SubStep = _WizardSubStep["default"];
Wizard.Pattern = _WizardPattern["default"];
Wizard.Pattern.Body = _WizardPatternBody["default"];
Wizard.Pattern.Stateful = _StatefulWizardPattern["default"];
var _default = Wizard;
exports["default"] = _default;