"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = require("./index");

var _data = require("./__mocks__/data");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('TreeView renders properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.TreeView, {
    nodes: _data.basicData
  }));
  expect(component.render()).toMatchSnapshot();
});
describe('keyboard navigation', function () {
  var wrapper;
  var visibleNodes;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react["default"].createElement(_index.TreeView, {
      nodes: _data.basicData
    }));
    visibleNodes = wrapper.find('TreeViewNode').filterWhere(function (n) {
      return !n.find('li').first().hasClass('node-hidden');
    });
  });
  test('the arrow down key focuses the next visible node', function () {
    var firstNode = visibleNodes.at(0);
    var nextNode = visibleNodes.at(1).instance().nodeRef.current;
    var spy = jest.spyOn(nextNode, 'focus');
    firstNode.prop('onFocus')(firstNode.instance().nodeRef.current);
    wrapper.find({
      role: 'tree'
    }).simulate('keyDown', {
      key: 'ArrowDown'
    });
    expect(spy).toHaveBeenCalled();
  });
  test('the arrow up key focuses the previous visible node', function () {
    var firstNode = visibleNodes.at(1);
    var previousNode = visibleNodes.at(0).instance().nodeRef.current;
    var spy = jest.spyOn(previousNode, 'focus');
    firstNode.prop('onFocus')(firstNode.instance().nodeRef.current);
    wrapper.find({
      role: 'tree'
    }).simulate('keyDown', {
      key: 'ArrowUp'
    });
    expect(spy).toHaveBeenCalled();
  });
  test('pressing an alpha key moves focus to the next node whose text starts with that letter', function () {
    var firstNode = visibleNodes.at(0);
    var nextNode = visibleNodes.at(1).instance().nodeRef.current;
    var spy = jest.spyOn(nextNode, 'focus');
    firstNode.prop('onFocus')(firstNode.instance().nodeRef.current);
    wrapper.find({
      role: 'tree'
    }).simulate('keyPress', {
      key: 'P'
    });
    expect(spy).toHaveBeenCalled();
  });
  test('the home key focuses the first node', function () {
    var firstNode = visibleNodes.at(0).instance().nodeRef.current;
    var spy = jest.spyOn(firstNode, 'focus');
    wrapper.find({
      role: 'tree'
    }).simulate('keyDown', {
      key: 'Home'
    });
    expect(spy).toHaveBeenCalled();
  });
  test('the end key focuses the last visible node', function () {
    var lastNode = visibleNodes.last().instance().nodeRef.current;
    var spy = jest.spyOn(lastNode, 'focus');
    wrapper.find({
      role: 'tree'
    }).simulate('keyDown', {
      key: 'End'
    });
    expect(spy).toHaveBeenCalled();
  });
});
describe('clearExpandSiblings', function () {
  test('clears the expandSiblings state', function () {
    var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_index.TreeView, {
      nodes: _data.basicData
    }));
    wrapper.instance().clearExpandSiblings();
    expect(wrapper.state('expandSiblings')).toBe('');
  });
});