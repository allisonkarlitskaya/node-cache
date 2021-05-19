"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = require("../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var testAboutModal = function testAboutModal(props) {
  return _react["default"].createElement(_index.AboutModal, _extends({
    show: false,
    onHide: jest.fn(),
    productTitle: "Product Title",
    altLogo: "Patternfly Logo",
    trademarkText: "Trademark and Copyright Information"
  }, props), _react["default"].createElement(_index.AboutModalVersions, null, _react["default"].createElement(_index.AboutModalVersionItem, {
    label: "Label",
    versionText: "Version"
  })));
};

test('AboutModal renders correctly when hidden', function () {
  var component = (0, _enzyme.mount)(testAboutModal());
  expect(component.render()).toMatchSnapshot();
  expect(component.props().show).toBeFalsy();
});
test('AboutModal renders correctly when shown', function () {
  var component = (0, _enzyme.mount)(testAboutModal({
    show: true
  }));
  expect(component.render()).toMatchSnapshot();
  expect(component.props().show).toBeTruthy();
});