"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('Breadcrumb icon renders properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Breadcrumb, null, _react["default"].createElement(_index.Breadcrumb.Item, {
    href: "#"
  }, "Home"), _react["default"].createElement(_index.Breadcrumb.Item, {
    href: "http://getbootstrap.com/components/#breadcrumbs"
  }, "Library"), _react["default"].createElement(_index.Breadcrumb.Item, {
    active: true
  }, "Data")));
  expect(component).toMatchSnapshot();
});
test('Breadcrum combined with page title', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Breadcrumb, {
    title: true
  }, _react["default"].createElement(_index.Breadcrumb.Item, {
    href: "#"
  }, "Home"), _react["default"].createElement(_index.Breadcrumb.Item, {
    href: "http://getbootstrap.com/components/#breadcrumbs"
  }, "Library"), _react["default"].createElement(_index.Breadcrumb.Item, {
    active: true
  }, "Data")));
  expect(component).toMatchSnapshot();
});