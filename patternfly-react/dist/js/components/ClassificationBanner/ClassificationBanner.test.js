"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ClassificationBanner = _interopRequireDefault(require("./ClassificationBanner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var testClassificationBannerSnapshot = function testClassificationBannerSnapshot(props) {
  return _react["default"].createElement(_ClassificationBanner["default"], _extends({
    closed: true
  }, props), _react["default"].createElement("br", null), _react["default"].createElement("p", null, "This is the main body of a web page."), _react["default"].createElement("p", null, "Scroll down to see the bottom banner."));
};

test('ClassificationBanner renders properly', function () {
  var component = (0, _enzyme.mount)(testClassificationBannerSnapshot()).getElement();
  expect(component).toMatchSnapshot();
});
test('ClassificationBanner expectedly executes mouse click and is dismissed', function () {
  var component = (0, _enzyme.mount)(testClassificationBannerSnapshot({
    closeButton: true,
    closed: false
  }));
  var closeButton = component.find('button');
  closeButton.simulate('click');
  expect(component.state('closed')).toBe(true);
});