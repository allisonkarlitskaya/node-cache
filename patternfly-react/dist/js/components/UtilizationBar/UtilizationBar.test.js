"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _UtilizationBar = _interopRequireDefault(require("./UtilizationBar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('basic UtilizationBar renders properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_UtilizationBar["default"], {
    now: 60
  }));
  expect(component.render()).toMatchSnapshot();
});
test('UtilizationBar with custom tooltips renders properly', function () {
  var overriddenTooltip = function overriddenTooltip() {
    return _react["default"].createElement("strong", null, "This tooltip is overridden.");
  };

  var component = (0, _enzyme.mount)(_react["default"].createElement(_UtilizationBar["default"], {
    now: 60,
    availableTooltipFunction: overriddenTooltip,
    usedTooltipFunction: overriddenTooltip
  }));
  expect(component.render()).toMatchSnapshot();
});
test('UtilizationBar with thresholds renders properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_UtilizationBar["default"], {
    now: 60,
    thresholdWarning: 10,
    thresholdError: 40
  }));
  expect(component.render()).toMatchSnapshot();
});