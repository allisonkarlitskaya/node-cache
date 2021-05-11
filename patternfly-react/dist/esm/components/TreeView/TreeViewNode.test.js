function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { shallow, mount } from 'enzyme';
import TreeViewNode from './TreeViewNode';
import { basicData } from './__mocks__/data';
import { KEYS } from '../../common/helpers';
const props = {
  node: basicData[0],
  key: 1,
  index: 1,
  level: 1,
  focusedNodeId: '',
  setSize: basicData.length
};
let e;
beforeEach(() => {
  e = {
    stopPropagation: jest.fn()
  };
});
describe('#onKeyPress', () => {
  test('hitting the enter or space key triggers the selectNode callback', () => {
    const selectNode = jest.fn();
    const wrapper = mount(React.createElement(TreeViewNode, _extends({}, props, {
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
  test('hitting the ArrowRight key expands the node', () => {
    const wrapper = shallow(React.createElement(TreeViewNode, props));
    wrapper.instance().onKeyDown(_objectSpread({}, e, {
      key: KEYS.ARROW_RIGHT
    }));
    expect(wrapper.state('expanded')).toBe(true);
  });
  test('hitting the LeftArrow key collapses the node', () => {
    const wrapper = shallow(React.createElement(TreeViewNode, props));
    wrapper.instance().onKeyDown(_objectSpread({}, e, {
      key: KEYS.ARROW_LEFT
    }));
    expect(wrapper.state('expanded')).toBe(false);
  });
});
describe('#toggleExpandedState', () => {
  test('toggles the expanded state property', () => {
    const wrapper = shallow(React.createElement(TreeViewNode, props));
    wrapper.instance().toggleExpandedState();
    expect(wrapper.state('expanded')).toBe(true);
  });
});