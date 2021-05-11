"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = require("./index");

var _Masthead = require("../Masthead");

var _mockNavItems = require("./__mocks__/mockNavItems");

var _mockIconBarChildren = require("./__mocks__/mockIconBarChildren");

var _basicExample = require("./__mocks__/basicExample");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Masthead = _index.VerticalNav.Masthead,
    Brand = _index.VerticalNav.Brand,
    IconBar = _index.VerticalNav.IconBar;
console.warn = jest.fn(function () {}); // eslint-disable-line no-console

test('VerticalNav renders properly with item children', function () {
  var component = (0, _enzyme.mount)((0, _basicExample.basicExample)());
  expect(component.render()).toMatchSnapshot();
});
test('VerticalNav renders properly in mobile mode', function () {
  var component = (0, _enzyme.mount)((0, _basicExample.basicExample)({
    isMobile: true
  }));
  expect(component.render()).toMatchSnapshot();
});
test('VerticalNav renders without errors with persistence on', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_index.VerticalNav, {
    persist: true
  }));
  expect(component.find(_index.VerticalNav.WithPersist).exists()).toBe(true);
});
test('VerticalNav renders without errors with persistence off', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_index.VerticalNav, {
    persist: false
  }));
  expect(component.find(_index.VerticalNav.NoPersist).exists()).toBe(true);
});
test('VerticalNav renders properly with a custom className on a nav item', function () {
  var component = (0, _enzyme.mount)((0, _basicExample.basicExample)(null, 'my-custom-item'));
  expect(component.render()).toMatchSnapshot();
});
test('VerticalNav renders properly with item objects', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.VerticalNav, {
    items: _mockNavItems.mockNavItems,
    pinnableMenus: true
  }, _react["default"].createElement(Masthead, null, _react["default"].createElement(Brand, {
    iconImg: "../../../storybook/img/logo-alt.svg",
    titleImg: "../../../storybook/img/brand-alt.svg"
  }), _react["default"].createElement(IconBar, null, _react["default"].createElement(_mockIconBarChildren.MockIconBarChildren, null)))));
  expect(component.render()).toMatchSnapshot();
});
test('VerticalNav renders properly with masthead PF component', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.VerticalNav, {
    items: _mockNavItems.mockNavItems,
    masthead: _react["default"].createElement(_Masthead.Masthead, null)
  }));
  expect(component.render()).toMatchSnapshot();
}); // Note: in the future it would be nice to unit test all those component class methods too...