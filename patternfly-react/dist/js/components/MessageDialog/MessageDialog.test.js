"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _MessageDialog = _interopRequireDefault(require("./MessageDialog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var onHide;
var primaryAction;
var primaryActionButtonContent;
var baseProps;
beforeEach(function () {
  onHide = jest.fn();
  primaryAction = jest.fn();
  primaryActionButtonContent = 'Ok';
  baseProps = {
    show: true,
    primaryActionButtonContent: primaryActionButtonContent
  };
});
describe('rendering with options', function () {
  test('renders secondary action button', function () {
    var secondaryActionButtonContent = 'Cancel';
    var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_MessageDialog["default"], _extends({}, baseProps, {
      onHide: onHide,
      primaryAction: primaryAction,
      secondaryActionButtonContent: secondaryActionButtonContent
    })));
    expect(wrapper.find('Button')).toHaveLength(2);
    expect(wrapper.find('Button').at(0).html().match(secondaryActionButtonContent)).toBeTruthy();
  });
  test('renders with the provided title', function () {
    var title = 'Modal Title';
    var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_MessageDialog["default"], _extends({}, baseProps, {
      onHide: onHide,
      primaryAction: primaryAction,
      title: title
    })));
    expect(wrapper.find('ModalTitle').html().match(title)).toBeTruthy();
  });
  test('renders with the provided primary text', function () {
    var primaryContent = _react["default"].createElement("h1", null, "Modal Heading");

    var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_MessageDialog["default"], _extends({}, baseProps, {
      onHide: onHide,
      primaryAction: primaryAction,
      primaryContent: primaryContent
    })));
    expect(wrapper.contains(primaryContent)).toBe(true);
  });
  test('renders with the provided secondary text', function () {
    var secondaryContent = _react["default"].createElement("div", null, "Modal Body");

    var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_MessageDialog["default"], _extends({}, baseProps, {
      onHide: onHide,
      primaryAction: primaryAction,
      secondaryContent: secondaryContent
    })));
    expect(wrapper.contains(secondaryContent)).toBe(true);
  });
  test('renders with a custom footer', function () {
    var footer = _react["default"].createElement("button", null, "Close");

    var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_MessageDialog["default"], {
      show: true,
      onHide: onHide,
      footer: footer
    }));
    expect(wrapper.contains(footer)).toBe(true);
  });
});
describe('button interactions', function () {
  var wrapper;
  var secondaryAction;
  beforeEach(function () {
    secondaryAction = jest.fn();
    wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_MessageDialog["default"], _extends({}, baseProps, {
      onHide: onHide,
      primaryAction: primaryAction,
      secondaryAction: secondaryAction,
      secondaryActionButtonContent: "Cancel"
    })));
  });
  test('clicking the cancel icon invokes onHide', function () {
    wrapper.find('ModalCloseButton').simulate('click');
    expect(onHide).toHaveBeenCalled();
  });
  test('clicking the secondary action button invokes secondaryAction', function () {
    wrapper.find('Button').at(0).simulate('click');
    expect(secondaryAction).toHaveBeenCalled();
  });
  test('clicking the primary action button invokes primaryAction', function () {
    wrapper.find('Button').at(1).simulate('click');
    expect(primaryAction).toHaveBeenCalled();
  });
});
describe('test primary action and footer props conflict', function () {
  var consoleErr = global.console.error;
  beforeEach(function () {
    global.console.error = jest.fn();
  });
  afterEach(function () {
    global.console.error = consoleErr;
  });
  test('check that props check fails if footer is null and primary action is not set', function () {
    (0, _enzyme.shallow)(_react["default"].createElement(_MessageDialog["default"], {
      show: true,
      onHide: jest.fn(),
      primaryActionButtonContent: "OK"
    }));
    expect(global.console.error).toBeCalledWith('Warning: Failed primaryAction type: The primaryAction `primaryAction` is marked as required in `MessageDialog`, but its value is `null`.');
  });
  test('check that props check fails if those props are not set', function () {
    (0, _enzyme.shallow)(_react["default"].createElement(_MessageDialog["default"], {
      show: true,
      onHide: jest.fn()
    }));
    expect(global.console.error).toBeCalledWith('Warning: Failed primaryActionButtonContent type: The primaryActionButtonContent `primaryActionButtonContent` is marked as required in `MessageDialog`, but its value is `null`.');
  });
  test('check that props check does not fail if footer is not null and primary action props are not set', function () {
    (0, _enzyme.shallow)(_react["default"].createElement(_MessageDialog["default"], {
      show: true,
      onHide: jest.fn(),
      footer: _react["default"].createElement("div", null, "This is my footer")
    }));
    expect(global.console.error).not.toBeCalled();
  });
});