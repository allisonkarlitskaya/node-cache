"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _WizardPattern = _interopRequireDefault(require("./WizardPattern"));

var _WizardPatternConstants = require("./WizardPatternConstants");

var _index = require("../../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * StatefulWizardPattern - the Stateful Wizard Pattern component.
 */
var StatefulWizardPattern = /*#__PURE__*/function (_React$Component) {
  _inherits(StatefulWizardPattern, _React$Component);

  _createClass(StatefulWizardPattern, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      return {
        activeStepIndex: (0, _index.propOrState)(nextProps, prevState, 'activeStepIndex')
      };
    }
  }]);

  function StatefulWizardPattern(props) {
    var _this;

    _classCallCheck(this, StatefulWizardPattern);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StatefulWizardPattern).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onStepChanged", function (newStepIndex) {
      var _this$props = _this.props,
          shouldPreventStepChange = _this$props.shouldPreventStepChange,
          steps = _this$props.steps;
      var activeStepIndex = _this.state.activeStepIndex;
      var shouldPreventExit = steps[activeStepIndex].shouldPreventExit;
      var shouldPreventEnter = steps[newStepIndex].shouldPreventEnter;

      if (shouldPreventStepChange(activeStepIndex, newStepIndex) || shouldPreventExit && shouldPreventExit(newStepIndex) || shouldPreventEnter && shouldPreventEnter(activeStepIndex)) {
        return;
      }

      _this.setState({
        activeStepIndex: newStepIndex
      });
    });

    _this.state = {
      activeStepIndex: 0
    };
    return _this;
  }

  _createClass(StatefulWizardPattern, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          shouldDisableNextStep = _this$props2.shouldDisableNextStep,
          shouldDisablePreviousStep = _this$props2.shouldDisablePreviousStep,
          shouldDisableCancelButton = _this$props2.shouldDisableCancelButton,
          otherProps = _objectWithoutProperties(_this$props2, ["shouldDisableNextStep", "shouldDisablePreviousStep", "shouldDisableCancelButton"]);

      var activeStepIndex = this.state.activeStepIndex; // NOTE: the steps array is passed down with ...otherProps, including any shouldPreventEnter or shouldPreventExit functions inside it.
      // These functions are for StatefulWizardPattern only and should not be used in WizardPattern despite being passed down here.

      return _react["default"].createElement(_WizardPattern["default"], _extends({
        nextStepDisabled: shouldDisableNextStep(activeStepIndex),
        previousStepDisabled: shouldDisablePreviousStep(activeStepIndex),
        cancelButtonDisabled: shouldDisableCancelButton(activeStepIndex)
      }, (0, _index.excludeKeys)(otherProps, ['shouldPreventStepChange']), {
        activeStepIndex: activeStepIndex // Value from state, as set by getDerivedStateFromProps
        ,
        onStepChanged: this.onStepChanged
      }));
    }
  }]);

  return StatefulWizardPattern;
}(_react["default"].Component);

StatefulWizardPattern.propTypes = _objectSpread({}, (0, _index.excludeKeys)(_WizardPattern["default"].propTypes, ['activeStepIndex', 'nextStepDisabled', 'previousStepDisabled', 'cancelButtonDisabled']), {
  steps: _propTypes["default"].arrayOf(_propTypes["default"].shape(_objectSpread({}, _WizardPatternConstants.wizardStepShape, {
    shouldPreventEnter: _propTypes["default"].func,
    shouldPreventExit: _propTypes["default"].func
  }))),
  shouldDisableNextStep: _propTypes["default"].func,
  shouldDisablePreviousStep: _propTypes["default"].func,
  shouldDisableCancelButton: _propTypes["default"].func,
  shouldPreventStepChange: _propTypes["default"].func
});
StatefulWizardPattern.defaultProps = _objectSpread({}, (0, _index.excludeKeys)(_WizardPattern["default"].defaultProps, ['activeStepIndex', 'nextStepDisabled', 'previousStepDisabled', 'cancelButtonDisabled']), {
  shouldDisableNextStep: _index.noop,
  shouldDisablePreviousStep: _index.noop,
  shouldDisableCancelButton: _index.noop,
  shouldPreventStepChange: _index.noop
});
StatefulWizardPattern.displayName = 'StatefulWizardPattern';
var _default = StatefulWizardPattern;
exports["default"] = _default;