"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Grid = require("../Grid");

var _index = require("./index");

var _mockListItems = require("./__mocks__/mockListItems");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('ListView renders properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.ListView, null, _mockListItems.mockListItems.map(function (item, index) {
    return _react["default"].createElement(_index.ListView.Item, {
      key: index,
      actions: (0, _mockListItems.renderActions)(item.actions),
      checkboxInput: _react["default"].createElement("input", {
        type: "checkbox"
      }),
      leftContent: _react["default"].createElement(_index.ListView.Icon, {
        name: "plane"
      }),
      additionalInfo: (0, _mockListItems.renderAdditionalInfoItems)(item.properties),
      heading: item.title,
      description: item.description,
      stacked: true
    }, _react["default"].createElement(_Grid.Row, null, _react["default"].createElement(_Grid.Col, {
      sm: 11
    }, item.expandedContentText)));
  })));
  expect(component.render()).toMatchSnapshot();
});