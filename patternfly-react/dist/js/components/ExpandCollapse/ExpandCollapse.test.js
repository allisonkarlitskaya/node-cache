"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ExpandCollapse = _interopRequireDefault(require("./ExpandCollapse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('ExpandCollapse with content', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_ExpandCollapse["default"], null, _react["default"].createElement("div", {
    id: "content"
  }, "My text")));
  expect(view.find('#content')).toHaveLength(0);
  expect(view.find('span.fa-angle-right')).toHaveLength(1);
  expect(view.find('span.fa-angle-down')).toHaveLength(0);
  expect(view.find('.btn-link').text()).toEqual('Show Advanced Options');
  var button = view.find('.btn-link');
  expect(button).toHaveLength(1);
  button.simulate('click');
  expect(view.find('#content')).toHaveLength(1);
  expect(view.find('span.fa-angle-right')).toHaveLength(0);
  expect(view.find('span.fa-angle-down')).toHaveLength(1);
  expect(view.find('.btn-link').text()).toEqual('Hide Advanced Options');
  button.simulate('click');
  expect(view.find('#content')).toHaveLength(0);
  expect(view.find('span.fa-angle-right')).toHaveLength(1);
  expect(view.find('span.fa-angle-down')).toHaveLength(0);
  expect(view.find('.btn-link').text()).toEqual('Show Advanced Options');
});
test('localized ExpandCollapse', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_ExpandCollapse["default"], {
    textCollapsed: "Click to expand",
    textExpanded: "Click to collapse"
  }, _react["default"].createElement("div", {
    id: "content"
  }, "My text")));
  expect(view).toMatchSnapshot();
  view.find('.btn-link').simulate('click');
  expect(view).toMatchSnapshot();
});
test('aligned ExpandCollapse', function () {
  var def = (0, _enzyme.render)(_react["default"].createElement(_ExpandCollapse["default"], null, _react["default"].createElement("div", {
    id: "content"
  }, "My text")));
  expect(def.find('.expand-collapse-pf-separator')).toHaveLength(1);
  var left = (0, _enzyme.render)(_react["default"].createElement(_ExpandCollapse["default"], {
    align: _ExpandCollapse["default"].ALIGN_LEFT
  }, _react["default"].createElement("div", {
    id: "content"
  }, "My text")));
  expect(left.find('.expand-collapse-pf-separator')).toHaveLength(1);
  var center = (0, _enzyme.render)(_react["default"].createElement(_ExpandCollapse["default"], {
    align: _ExpandCollapse["default"].ALIGN_CENTER
  }, _react["default"].createElement("div", {
    id: "content"
  }, "My text")));
  expect(center.find('.expand-collapse-pf-separator')).toHaveLength(2);
});
test('ExpandCollapse with separator', function () {
  var def = (0, _enzyme.render)(_react["default"].createElement(_ExpandCollapse["default"], null, _react["default"].createElement("div", {
    id: "content"
  }, "My text")));
  expect(def.find('.expand-collapse-pf-separator.bordered')).toHaveLength(1);
  var noSep = (0, _enzyme.render)(_react["default"].createElement(_ExpandCollapse["default"], {
    bordered: false
  }, _react["default"].createElement("div", {
    id: "content"
  }, "My text")));
  expect(noSep.find('.expand-collapse-pf-separator')).toHaveLength(1);
  expect(noSep.find('.expand-collapse-pf-separator.bordered')).toHaveLength(0);
  var center = (0, _enzyme.render)(_react["default"].createElement(_ExpandCollapse["default"], {
    align: _ExpandCollapse["default"].ALIGN_CENTER
  }, _react["default"].createElement("div", {
    id: "content"
  }, "My text")));
  expect(center.find('.expand-collapse-pf-separator.bordered')).toHaveLength(2);
  var centerNoSep = (0, _enzyme.render)(_react["default"].createElement(_ExpandCollapse["default"], {
    align: _ExpandCollapse["default"].ALIGN_CENTER,
    bordered: false
  }, _react["default"].createElement("div", {
    id: "content"
  }, "My text")));
  expect(centerNoSep.find('.expand-collapse-pf-separator')).toHaveLength(2);
  expect(centerNoSep.find('.expand-collapse-pf-separator.bordered')).toHaveLength(0);
});
test('ExpandCollapse with explicit override prop', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_ExpandCollapse["default"], {
    expanded: true
  }, _react["default"].createElement("div", {
    id: "content"
  }, "My text")));
  expect(view.find('#content')).toHaveLength(1);
  expect(view.find('span.fa-angle-right')).toHaveLength(0);
  expect(view.find('span.fa-angle-down')).toHaveLength(1);
  expect(view.find('.btn-link').text()).toEqual('Hide Advanced Options');
});
test('ExpandCollapse with explicit onToggle callback', function () {
  var callback = jest.fn();
  var view = (0, _enzyme.mount)(_react["default"].createElement(_ExpandCollapse["default"], {
    onToggle: callback
  }, _react["default"].createElement("div", {
    id: "content"
  }, "My text")));
  var button = view.find('.btn-link');
  button.simulate('click');
  expect(callback).toBeCalled();
});