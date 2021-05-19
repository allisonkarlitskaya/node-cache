"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _MenuItem = require("../MenuItem");

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('Card is working properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Card, {
    accented: true,
    aggregatedMini: true
  }, "Card Content"));
  expect(component.render()).toMatchSnapshot();
});
test('Card Title is working properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.CardTitle, null, "Card Title"));
  expect(component.render()).toMatchSnapshot();
});
test('Card Footer is working properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.CardFooter, null, "This is a Card Footer"));
  expect(component.render()).toMatchSnapshot();
});
test('Card Grid is working properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.CardGrid, null, "Grid Content"));
  expect(component.render()).toMatchSnapshot();
});
test('Card Header is working properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.CardHeading, null, "Card Content"));
  expect(component.render()).toMatchSnapshot();
});
test('Card Body is working properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.CardBody, null, "This is a Card Body"));
  expect(component.render()).toMatchSnapshot();
});
test('Card Link is working properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.CardLink, {
    disabled: true,
    href: "https://github.com/patternfly/patternfly-react/pull/203"
  }, "Card Content"));
  expect(component.render()).toMatchSnapshot();
});
test('Card Drop Down Button is working properly', function () {
  var onClick = jest.fn();
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.CardDropdownButton, {
    id: "cardDropdownButton1",
    title: "Last 30 Days",
    onClick: onClick
  }, _react["default"].createElement(_MenuItem.MenuItem, {
    eventKey: "1",
    active: true
  }, "Last 30 Days")));
  component.find('button').simulate('click');
  expect(onClick).toHaveBeenCalled();
  expect(component.render()).toMatchSnapshot();
});