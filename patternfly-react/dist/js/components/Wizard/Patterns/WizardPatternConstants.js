"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wizardStepShape = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var wizardStepShape = {
  title: _propTypes["default"].string,
  render: _propTypes["default"].func,
  onNext: _propTypes["default"].func,
  isInvalid: _propTypes["default"].bool,
  preventEnter: _propTypes["default"].bool,
  preventExit: _propTypes["default"].bool
};
exports.wizardStepShape = wizardStepShape;