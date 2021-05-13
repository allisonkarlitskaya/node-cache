"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = require("../../index");

var _mockFilterExample = require("../Filter/__mocks__/mockFilterExample");

var _mockSortExample = require("../Sort/__mocks__/mockSortExample");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('Toolbar renders properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Toolbar, null, _react["default"].createElement(_index.Filter, null, _react["default"].createElement(_index.Filter.TypeSelector, {
    filterTypes: _mockFilterExample.mockFilterExampleFields,
    currentFilterType: _mockFilterExample.mockFilterExampleFields[0]
  }), _react["default"].createElement(_index.FormControl, {
    type: _mockFilterExample.mockFilterExampleFields[0].filterType,
    id: "filterInput",
    placeholder: "Filter by Name"
  })), _react["default"].createElement(_index.Sort, null, _react["default"].createElement(_index.Sort.TypeSelector, {
    sortTypes: _mockSortExample.mockSortFields,
    currentSortType: _mockSortExample.mockSortFields[0]
  }), _react["default"].createElement(_index.Sort.DirectionSelector, {
    isNumeric: _mockSortExample.mockSortFields[0].isNumeric,
    isAscending: true
  })), _react["default"].createElement("div", {
    className: "form-group"
  }, _react["default"].createElement(_index.Button, null, "Action 1"), _react["default"].createElement(_index.Button, null, "Action 2"), _react["default"].createElement(_index.DropdownKebab, {
    id: "toolbarActionKebab"
  }, _react["default"].createElement(_index.MenuItem, null, "Action"), _react["default"].createElement(_index.MenuItem, null, "Another Action"), _react["default"].createElement(_index.MenuItem, null, "Something Else Here"), _react["default"].createElement(_index.MenuItem, {
    role: "separator",
    className: "divider"
  }), _react["default"].createElement(_index.MenuItem, null, "Separated Link"))), _react["default"].createElement(_index.Toolbar.RightContent, null, _react["default"].createElement(_index.Toolbar.Find, {
    placeholder: "Find By Keyword...",
    currentIndex: 1,
    totalCount: 3
  }), _react["default"].createElement(_index.Toolbar.ViewSelector, null, _react["default"].createElement(_index.Button, {
    title: "List View",
    bsStyle: "link",
    className: "active"
  }, _react["default"].createElement(_index.Icon, {
    type: "fa",
    name: "th-list"
  })), _react["default"].createElement(_index.Button, {
    title: "Card View",
    bsStyle: "link"
  }, _react["default"].createElement(_index.Icon, {
    type: "fa",
    name: "th"
  })), _react["default"].createElement(_index.Button, {
    title: "Table View",
    bsStyle: "link"
  }, _react["default"].createElement(_index.Icon, {
    type: "fa",
    name: "table"
  })))), _react["default"].createElement(_index.Toolbar.Results, null, _react["default"].createElement("h5", null, "40 Results"), _react["default"].createElement(_index.Filter.ActiveLabel, {
    title: "Active Filters:"
  }), _react["default"].createElement(_index.Filter.List, null, _react["default"].createElement(_index.Filter.Item, {
    label: "Name: John"
  }), _react["default"].createElement(_index.Filter.Item, {
    label: "Address: Westford"
  })))));
  expect(component.render()).toMatchSnapshot();
});