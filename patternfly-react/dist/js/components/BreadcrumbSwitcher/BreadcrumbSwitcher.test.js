"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _BreadcrumbSwitcher = _interopRequireDefault(require("./BreadcrumbSwitcher"));

var _BreadcrumbSwitcher2 = require("./BreadcrumbSwitcher.fixtures");

var _BreadcrumbSwitcherHelper = require("./BreadcrumbSwitcherHelper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

test('BreadcrumbSwitcher renders properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_BreadcrumbSwitcher["default"], _BreadcrumbSwitcher2.switcherProps)).getElement();
  expect(component).toMatchSnapshot();
});
test('BreadcrumbSwitcher functionality', function () {
  var toggleClicked = jest.fn();
  var searchClear = jest.fn();
  var nextPage = jest.fn();
  var prevPage = jest.fn();
  var component = (0, _enzyme.mount)(_react["default"].createElement(_BreadcrumbSwitcher["default"], _extends({}, _BreadcrumbSwitcher2.switcherProps, {
    open: true,
    onSearchClear: searchClear,
    onPrevPageClick: prevPage,
    onNextPageClick: nextPage,
    onTogglerClick: toggleClicked
  })));
  component.find('.fa-close').simulate('click');
  expect(searchClear).toHaveBeenCalled();
  component.find('button#switcher').simulate('click');
  expect(toggleClicked).toHaveBeenCalled();
  component.find('.next>a').simulate('click');
  expect(nextPage).toHaveBeenCalled();
  component.find('.previous>a').simulate('click');
  expect(prevPage).toHaveBeenCalled();
});
test('BreadcrumbSwitcher helper tests', function () {
  var pathWithSlash = 'example.com/';
  var pathWithoutSlash = 'example.com';
  expect((0, _BreadcrumbSwitcherHelper.removeLastSlashFromPath)(pathWithSlash)).toBe('example.com');
  expect((0, _BreadcrumbSwitcherHelper.removeLastSlashFromPath)(pathWithoutSlash)).toBe('example.com');
});