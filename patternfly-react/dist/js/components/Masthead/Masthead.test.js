"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = require("../../index");

var _index2 = require("./index");

var _CustomMastheadDropdown = _interopRequireDefault(require("./InnerComponents/CustomMastheadDropdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('Masthead renders properly', function () {
  var onNavToggleMock = jest.fn();
  var onTitleClickMock = jest.fn();
  var pfLogo = 'Fake Logo';
  var pfBrand = 'Fake Brand';
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_index2.Masthead, {
    iconImg: pfLogo,
    titleImg: pfBrand,
    title: "Patternfly React",
    onNavToggleClick: onNavToggleMock,
    onTitleClick: onTitleClickMock
  }, _react["default"].createElement(_index2.Masthead.Collapse, null, _react["default"].createElement(_index2.Masthead.Dropdown, {
    id: "app-help-dropdown",
    title: _react["default"].createElement("span", {
      title: "Help",
      className: "pficon pficon-help"
    })
  }, _react["default"].createElement(_index.MenuItem, {
    eventKey: "1"
  }, "Help"), _react["default"].createElement(_index.MenuItem, {
    eventKey: "2"
  }, "About")), _react["default"].createElement(_index2.Masthead.Dropdown, {
    id: "app-user-dropdown",
    title: _react["default"].createElement("span", null, _react["default"].createElement("span", {
      title: "Help",
      className: "pficon pficon-user"
    }), _react["default"].createElement("span", {
      className: "dropdown-title"
    }, " Brian Johnson"))
  }, _react["default"].createElement(_index.MenuItem, {
    eventKey: "1"
  }, "Preferences"), _react["default"].createElement(_index.MenuItem, {
    eventKey: "2"
  }, "Logout")))));
  component.find('.navbar-toggle').simulate('click');
  expect(onNavToggleMock).toBeCalled();
  component.find('.navbar-brand').simulate('click');
  expect(onTitleClickMock).toBeCalled();
  expect(component).toMatchSnapshot('Masthead snapshot');
});
test('Masthead without nav toggle renders properly', function () {
  var onTitleClickMock = jest.fn();
  var pfLogo = 'Fake Logo';
  var pfBrand = 'Fake Brand';
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_index2.Masthead, {
    iconImg: pfLogo,
    titleImg: pfBrand,
    title: "Patternfly React",
    navToggle: false,
    onTitleClick: onTitleClickMock
  }, _react["default"].createElement(_index2.Masthead.Collapse, null, _react["default"].createElement(_index2.Masthead.Dropdown, {
    id: "app-help-dropdown",
    title: _react["default"].createElement("span", {
      title: "Help",
      className: "pficon pficon-help"
    })
  }, _react["default"].createElement(_index.MenuItem, {
    eventKey: "1"
  }, "Help"), _react["default"].createElement(_index.MenuItem, {
    eventKey: "2"
  }, "About")), _react["default"].createElement(_index2.Masthead.Dropdown, {
    id: "app-user-dropdown",
    title: _react["default"].createElement("span", null, _react["default"].createElement("span", {
      title: "Help",
      className: "pficon pficon-user"
    }), _react["default"].createElement("span", {
      className: "dropdown-title"
    }, " Brian Johnson"))
  }, _react["default"].createElement(_index.MenuItem, {
    eventKey: "1"
  }, "Preferences"), _react["default"].createElement(_index.MenuItem, {
    eventKey: "2"
  }, "Logout")))));
  component.find('.navbar-brand').simulate('click');
  expect(onTitleClickMock).toBeCalled();
  expect(component).toMatchSnapshot('Masthead without nav toggle snapshot');
});
test('MastheadCollapse renders properly', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_index2.Masthead.Collapse, null, _react["default"].createElement(_index2.Masthead.Dropdown, {
    id: "app-help-dropdown",
    title: _react["default"].createElement("span", {
      title: "Help",
      className: "pficon pficon-help"
    })
  }, _react["default"].createElement(_index.MenuItem, {
    eventKey: "1"
  }, "Help"), _react["default"].createElement(_index.MenuItem, {
    eventKey: "2"
  }, "About")), _react["default"].createElement(_index2.Masthead.Dropdown, {
    id: "app-user-dropdown",
    title: _react["default"].createElement("span", null, _react["default"].createElement("span", {
      title: "Help",
      className: "pficon pficon-user"
    }), _react["default"].createElement("span", {
      className: "dropdown-title"
    }, " Brian Johnson"))
  }, _react["default"].createElement(_index.MenuItem, {
    eventKey: "1"
  }, "Preferences"), _react["default"].createElement(_index.MenuItem, {
    eventKey: "2"
  }, "Logout"))));
  expect(component).toMatchSnapshot('MastheadCollapse snapshot');
});
test('MastheadDropdown renders properly', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_index2.Masthead.Dropdown, {
    id: "app-help-dropdown",
    title: _react["default"].createElement("span", {
      title: "Help",
      className: "pficon pficon-help"
    })
  }, _react["default"].createElement(_index.MenuItem, {
    eventKey: "1"
  }, "Help"), _react["default"].createElement(_index.MenuItem, {
    eventKey: "2"
  }, "About")));
  expect(component).toMatchSnapshot('MastheadDropdown snapshot');
});
test('CustomMastheadDropdown renders properly', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_CustomMastheadDropdown["default"], {
    className: "dropdown"
  }, "children"));
  expect(component).toMatchSnapshot('CustomMastheadDropdown snapshot');
});