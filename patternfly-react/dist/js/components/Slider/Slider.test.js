"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _bootstrapSliderWithoutJquery = _interopRequireDefault(require("bootstrap-slider-without-jquery"));

var _Slider = _interopRequireDefault(require("./Slider"));

var _BootstrapSlider = _interopRequireDefault(require("./BootstrapSlider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

jest.mock('bootstrap-slider-without-jquery');
beforeEach(function () {
  _bootstrapSliderWithoutJquery["default"].mockClear();
});
var props = {
  id: 'slider-pf',
  label: 'Size',
  value: 50,
  min: 0,
  max: 100,
  tooltip: 'show',
  inputFormat: 'MB',
  dropdownList: ['MB', 'GB']
};
test('listens for slide', function () {
  (0, _enzyme.shallow)(_react["default"].createElement(_BootstrapSlider["default"], props));
  expect(_bootstrapSliderWithoutJquery["default"].mock.instances[0].on).toBeCalledWith('slide', expect.any(Function));
});
test('listens for slideStop', function () {
  (0, _enzyme.shallow)(_react["default"].createElement(_BootstrapSlider["default"], props));
  expect(_bootstrapSliderWithoutJquery["default"].mock.instances[0].on).toBeCalledWith('slideStop', expect.any(Function));
});
test('listens for input change', function () {
  var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_Slider["default"], _extends({
    dropup: true,
    input: true,
    showBoundaries: true
  }, props)));
  var inputValue = 5;
  wrapper.find('.slider-input-pf').at(0).simulate('change', {
    target: {
      value: inputValue
    }
  });

  var _wrapper$state = wrapper.state(),
      value = _wrapper$state.value;

  expect(value).toEqual(inputValue);
});
test('listens for dropdown change', function () {
  var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_Slider["default"], _extends({
    dropup: true,
    input: true,
    showBoundaries: true
  }, props)));
  var formatValue = 'ZB';
  wrapper.find('a[role="menuitem"]').at(0).simulate('click', {
    target: {
      text: formatValue
    }
  });

  var _wrapper$state2 = wrapper.state(),
      tooltipFormat = _wrapper$state2.tooltipFormat;

  expect(tooltipFormat).toEqual(formatValue);
});
test('Slider match snapshot', function () {
  var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_Slider["default"], props));
  expect(wrapper).toMatchSnapshot();
});