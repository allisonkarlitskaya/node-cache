"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _DisposableLabel = _interopRequireDefault(require("./DisposableLabel"));

var _Label = _interopRequireDefault(require("./Label"));

var _helpers = require("../../common/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('defaults props', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_DisposableLabel["default"], null));
  expect(view).toMatchSnapshot();
  expect(view.find(_Label["default"]).props().onRemoveClick).toBe(_helpers.noop);
});
test('onRemoveClick is passed to the Label', function () {
  var onRemoveClick = jest.fn();
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_DisposableLabel["default"], {
    onRemoveClick: onRemoveClick
  }));
  expect(component.find(_Label["default"]).props().onRemoveClick).toBe(onRemoveClick);
});