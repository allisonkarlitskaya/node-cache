"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _TreeViewNode = _interopRequireDefault(require("./TreeViewNode"));

var _data = require("./__mocks__/data");

var _helpers = require("../../common/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var props = {
  node: _data.basicData[0],
  key: 1,
  index: 1,
  level: 1,
  focusedNodeId: '',
  setSize: _data.basicData.length
};
var e;
beforeEach(function () {
  e = {
    stopPropagation: jest.fn()
  };
});
describe('#onKeyPress', function () {
  test('hitting the enter or space key triggers the selectNode callback', function () {
    var selectNode = jest.fn();
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_TreeViewNode["default"], _extends({}, props, {
      selectNode: selectNode
    })));
    wrapper.instance().onKeyDown(_objectSpread({}, e, {
      key: 'Enter'
    }));
    wrapper.instance().onKeyDown(_objectSpread({}, e, {
      key: ' '
    }));
    expect(selectNode).toHaveBeenCalledTimes(2);
    expect(selectNode).toHaveBeenLastCalledWith(props.node);
  });
  test('hitting the ArrowRight key expands the node', function () {
    var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_TreeViewNode["default"], props));
    wrapper.instance().onKeyDown(_objectSpread({}, e, {
      key: _helpers.KEYS.ARROW_RIGHT
    }));
    expect(wrapper.state('expanded')).toBe(true);
  });
  test('hitting the LeftArrow key collapses the node', function () {
    var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_TreeViewNode["default"], props));
    wrapper.instance().onKeyDown(_objectSpread({}, e, {
      key: _helpers.KEYS.ARROW_LEFT
    }));
    expect(wrapper.state('expanded')).toBe(false);
  });
});
describe('#toggleExpandedState', function () {
  test('toggles the expanded state property', function () {
    var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_TreeViewNode["default"], props));
    wrapper.instance().toggleExpandedState();
    expect(wrapper.state('expanded')).toBe(true);
  });
});