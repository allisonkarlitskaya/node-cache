"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _RemoveButton = _interopRequireDefault(require("./RemoveButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

it('calls preventDefault on click', function () {
  var preventDefault = jest.fn();
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_RemoveButton["default"], null));
  view.find('a').simulate('click', {
    preventDefault: preventDefault
  });
  expect(preventDefault).toBeCalled();
});
it('handles onRemoveClick having a falsy value', function () {
  var preventDefault = jest.fn();
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_RemoveButton["default"], {
    onRemoveClick: null
  }));
  expect(function () {
    view.find('a').simulate('click', {
      preventDefault: preventDefault
    });
    expect(preventDefault).toBeCalled();
  }).not.toThrow();
});
it('spreads additional props and className to icon', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_RemoveButton["default"], {
    id: "id",
    another: "another",
    className: "additional classes"
  }));
  expect(view).toMatchSnapshot('Icon has correct props.');
});