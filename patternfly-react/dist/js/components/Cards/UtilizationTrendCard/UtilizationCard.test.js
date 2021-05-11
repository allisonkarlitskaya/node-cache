"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = require("../index");

var _index2 = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('Utilization Card is working properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index2.UtilizationCard, null, _react["default"].createElement(_index.CardTitle, null, "Card Title")));
  expect(component.render()).toMatchSnapshot();
});
test('Utilization Card Details is working properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index2.UtilizationCardDetails, null, _react["default"].createElement(_index2.UtilizationCardDetailsCount, null, "200"), _react["default"].createElement(_index2.UtilizationCardDetailsDesc, null, _react["default"].createElement(_index2.UtilizationCardDetailsLine1, null, "Available"), _react["default"].createElement(_index2.UtilizationCardDetailsLine2, null, "of 1300 Gbps"))));
  expect(component.render()).toMatchSnapshot();
});
test('Utilization Card Details Description is working properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index2.UtilizationCardDetailsDesc, null, _react["default"].createElement(_index2.UtilizationCardDetailsLine1, null, "Available"), _react["default"].createElement(_index2.UtilizationCardDetailsLine2, null, "of 1300 Gbps")));
  expect(component.render()).toMatchSnapshot();
});
test('Utilization Card Details Line1,2 is working properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement("div", null, _react["default"].createElement(_index2.UtilizationCardDetailsLine1, null, "Available"), _react["default"].createElement(_index2.UtilizationCardDetailsLine2, null, "of 1300 Gbps")));
  expect(component.render()).toMatchSnapshot();
});