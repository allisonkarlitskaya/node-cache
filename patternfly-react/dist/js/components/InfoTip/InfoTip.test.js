"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _InfoTip = _interopRequireDefault(require("./InfoTip"));

var _helpers = require("../../common/helpers");

var _Dropdown = require("../Dropdown");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var props = {
  id: 'InfoTip',
  children: 'children'
};
test('renders Dropdown', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_InfoTip["default"], props));
  expect(view).toMatchSnapshot('dropdown is rendered');
});
test('removes onToggle from passed props', function () {
  var onToggle = jest.fn();
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_InfoTip["default"], _extends({}, props, {
    onToggle: onToggle
  })));
  expect(getDropdown(view).props().onToggle).not.toBe(onToggle);
});
test('toggles open and closed when keydown is enter', function () {
  var event = getMockKeyEvent(_helpers.KEY_CODES.ENTER_KEY);
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_InfoTip["default"], props));
  getDropdown(view).simulate('keydown', event);
  expect(getDropdown(view).props().open).toBe(true);
  getDropdown(view).simulate('keydown', event);
  expect(getDropdown(view).props().open).toBe(false);
  expect(event.preventDefault).toHaveBeenCalledTimes(2);
});
test('tab keydown focuses footer and closes if footer is focused', function () {
  var tabKeyEvent = getMockKeyEvent(_helpers.KEY_CODES.TAB_KEY);
  var enterKeyEvent = getMockKeyEvent(_helpers.KEY_CODES.ENTER_KEY);
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_InfoTip["default"], props));
  getDropdown(view).simulate('keydown', enterKeyEvent); // open dropdown

  getDropdown(view).simulate('keydown', tabKeyEvent); // focus footer

  expect(getDropdown(view).props().open).toBe(true);
  getDropdown(view).simulate('keydown', tabKeyEvent); // close and unfocus footer

  expect(getDropdown(view).props().open).toBe(false);
});
test('tab keydown calls stopPropagation and stopImmediatePropagation', function () {
  var event = getMockKeyEvent(_helpers.KEY_CODES.TAB_KEY);
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_InfoTip["default"], props));
  getDropdown(view).simulate('keydown', event); // focus footer

  expect(event.stopPropagation).toBeCalled();
  expect(event.nativeEvent.stopImmediatePropagation).toBeCalled();
});
test('closes on escape keydown', function () {
  var escKeyEvent = getMockKeyEvent(_helpers.KEY_CODES.ESCAPE_KEY);
  var enterKeyEvent = getMockKeyEvent(_helpers.KEY_CODES.ENTER_KEY);
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_InfoTip["default"], props));
  getDropdown(view).simulate('keydown', enterKeyEvent); // open dropdown

  getDropdown(view).simulate('keydown', escKeyEvent);
  expect(getDropdown(view).props().open).toBe(false);
});
test('closes if keydown includes shift key and a keycode', function () {
  var shiftKeyEvent = getMockKeyEvent(1, true);
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_InfoTip["default"], props));
  getDropdown(view).simulate('keydown', getMockKeyEvent(_helpers.KEY_CODES.ENTER_KEY)); // open dropdown

  getDropdown(view).simulate('keydown', shiftKeyEvent);
  expect(getDropdown(view).props().open).toBe(false);
  getDropdown(view).simulate('keydown', shiftKeyEvent);
  expect(getDropdown(view).props().open).toBe(false);
});
test('does not close if keydown includes shift key and does not have a keycode', function () {
  var shiftKeyEvent = getMockKeyEvent(null, true);
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_InfoTip["default"], props));
  getDropdown(view).simulate('keydown', getMockKeyEvent(_helpers.KEY_CODES.ENTER_KEY)); // open dropdown

  getDropdown(view).simulate('keydown', shiftKeyEvent);
  expect(getDropdown(view).props().open).toBe(true);
});
test('onClick toggles Dropdown open', function () {
  var preventDefault = jest.fn();
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_InfoTip["default"], props));
  getDropdown(view).simulate('click', {
    preventDefault: preventDefault
  });
  expect(getDropdown(view).props().open).toBe(true);
  getDropdown(view).simulate('click', {
    preventDefault: preventDefault
  });
  expect(getDropdown(view).props().open).toBe(false);
  expect(preventDefault).toHaveBeenCalledTimes(2);
});
test('onBlur closes Dropdown', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_InfoTip["default"], props));
  getDropdown(view).simulate('click', {
    preventDefault: jest.fn()
  }); // open dropdown

  getDropdown(view).simulate('blur');
  expect(getDropdown(view).props().open).toBe(false);
});
test('onBlur clicks related target', function () {
  var relatedTargetClick = jest.fn();
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_InfoTip["default"], props));
  getDropdown(view).simulate('blur', {
    relatedTarget: {
      click: relatedTargetClick
    }
  });
  expect(relatedTargetClick).toBeCalled();
});

function getDropdown(view) {
  return view.find(_Dropdown.Dropdown);
}

function getMockKeyEvent(keyCode) {
  var shiftKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return {
    keyCode: keyCode,
    shiftKey: shiftKey,
    preventDefault: jest.fn(),
    stopPropagation: jest.fn(),
    nativeEvent: {
      stopImmediatePropagation: jest.fn()
    }
  };
}