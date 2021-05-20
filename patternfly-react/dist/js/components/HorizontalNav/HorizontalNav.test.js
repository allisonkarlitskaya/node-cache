"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = require("./index");

var _masthead = require("./__mocks__/masthead");

var _singleLevel = require("./__mocks__/singleLevel");

var _twoLevel = require("./__mocks__/twoLevel");

var _dropdownLevel = require("./__mocks__/dropdownLevel");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.warn = jest.fn(function () {}); // eslint-disable-line no-console

test('HorizontalNav renders properly with singleLevel', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.HorizontalNav, null, (0, _masthead.mastheadMock)({
    title: 'Patternfly React',
    navToggle: false,
    thin: true
  }), _singleLevel.singleLevel));
  expect(component.render()).toMatchSnapshot();
});
test('HorizontalNav renders properly with two Levels', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.HorizontalNav, null, (0, _masthead.mastheadMock)({
    title: 'Patternfly React',
    navToggle: false,
    thin: true
  }), _twoLevel.twoLevel));
  expect(component.render()).toMatchSnapshot();
});
test('HorizontalNav renders properly with dropdown Levels', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.HorizontalNav, null, (0, _masthead.mastheadMock)({
    title: 'Patternfly React',
    navToggle: false,
    thin: true
  }), _dropdownLevel.dropdownLevel));
  expect(component.render()).toMatchSnapshot();
});