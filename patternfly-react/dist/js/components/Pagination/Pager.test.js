"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var testPagerSnapshot = function testPagerSnapshot(props) {
  return _react["default"].createElement(_index.Pager, props);
};

test('Pager default renders properly', function () {
  var component = (0, _enzyme.mount)(testPagerSnapshot(_index.Pager));
  expect(component.render()).toMatchSnapshot();
});
test('Pager mini size renders properly', function () {
  var component = (0, _enzyme.mount)(testPagerSnapshot({
    className: 'pager-sm',
    messages: {
      nextPage: 'The Next Page',
      previousPage: 'The Previous Page'
    },
    disableNext: true,
    disablePrevious: true
  }));
  expect(component.render()).toMatchSnapshot();
});
test('Pager buttons fire when enabled', function () {
  var eventCount = 0;
  var component = (0, _enzyme.mount)(testPagerSnapshot({
    onPreviousPage: function onPreviousPage() {
      return eventCount++;
    },
    onNextPage: function onNextPage() {
      return eventCount++;
    }
  }));
  component.find('a').first().simulate('click');
  component.find('a').last().simulate('click');
  expect(eventCount).toBe(2);
});
test('Pager buttons do not fire when disabled', function () {
  var eventCount = 0;
  var component = (0, _enzyme.mount)(testPagerSnapshot({
    onPreviousPage: function onPreviousPage() {
      return eventCount++;
    },
    onNextPage: function onNextPage() {
      return eventCount++;
    },
    disableNext: true,
    disablePrevious: true
  }));
  component.find('a').first().simulate('click');
  component.find('a').last().simulate('click');
  expect(eventCount).toBe(0);
});