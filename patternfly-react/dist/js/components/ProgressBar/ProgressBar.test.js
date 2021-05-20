"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ProgressBar = _interopRequireDefault(require("./ProgressBar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('ProgressBar renders properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_ProgressBar["default"], {
    now: 60
  }));
  expect(component.render()).toMatchSnapshot();
});