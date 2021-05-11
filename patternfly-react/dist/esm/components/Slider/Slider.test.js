function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { shallow, mount } from 'enzyme';
import BSSlider from 'bootstrap-slider-without-jquery';
import Slider from './Slider';
import BSSliderWrapper from './BootstrapSlider';
jest.mock('bootstrap-slider-without-jquery');
beforeEach(() => {
  BSSlider.mockClear();
});
const props = {
  id: 'slider-pf',
  label: 'Size',
  value: 50,
  min: 0,
  max: 100,
  tooltip: 'show',
  inputFormat: 'MB',
  dropdownList: ['MB', 'GB']
};
test('listens for slide', () => {
  shallow(React.createElement(BSSliderWrapper, props));
  expect(BSSlider.mock.instances[0].on).toBeCalledWith('slide', expect.any(Function));
});
test('listens for slideStop', () => {
  shallow(React.createElement(BSSliderWrapper, props));
  expect(BSSlider.mock.instances[0].on).toBeCalledWith('slideStop', expect.any(Function));
});
test('listens for input change', () => {
  const wrapper = mount(React.createElement(Slider, _extends({
    dropup: true,
    input: true,
    showBoundaries: true
  }, props)));
  const inputValue = 5;
  wrapper.find('.slider-input-pf').at(0).simulate('change', {
    target: {
      value: inputValue
    }
  });
  const {
    value
  } = wrapper.state();
  expect(value).toEqual(inputValue);
});
test('listens for dropdown change', () => {
  const wrapper = mount(React.createElement(Slider, _extends({
    dropup: true,
    input: true,
    showBoundaries: true
  }, props)));
  const formatValue = 'ZB';
  wrapper.find('a[role="menuitem"]').at(0).simulate('click', {
    target: {
      text: formatValue
    }
  });
  const {
    tooltipFormat
  } = wrapper.state();
  expect(tooltipFormat).toEqual(formatValue);
});
test('Slider match snapshot', () => {
  const wrapper = shallow(React.createElement(Slider, props));
  expect(wrapper).toMatchSnapshot();
});