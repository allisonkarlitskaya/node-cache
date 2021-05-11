"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ApplicationLauncherWrapper = _interopRequireDefault(require("./ApplicationLauncherWrapper"));

var _StatefulApplicationLauncherWrapper = _interopRequireDefault(require("./StatefulApplicationLauncherWrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var handleClick = function handleClick(e) {
  e.preventDefault();
};

var Apps = [{
  title: 'Ipsum',
  icon: 'pficon pficon-home',
  tooltip: 'Tooltip!',
  onClick: function onClick(e) {
    handleClick(e);
  }
}, {
  title: 'Royal',
  icon: 'pficon pficon-virtual-machine',
  tooltip: 'Tooltip!',
  onClick: function onClick(e) {
    handleClick(e);
  }
}, {
  title: 'Lemon',
  icon: 'pficon pficon-storage-domain',
  tooltip: 'Tooltip!',
  onClick: function onClick(e) {
    handleClick(e);
  }
}, {
  title: 'Domain',
  icon: 'pficon pficon-domain',
  tooltip: 'Tooltip!',
  onClick: function onClick(e) {
    handleClick(e);
  }
}];
test('ApplicationLauncherWrapper is working properly as Grid', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_ApplicationLauncherWrapper["default"], {
    apps: Apps,
    grid: true,
    open: false
  }));
  expect(component.render()).toMatchSnapshot();
});
test('ApplicationLauncherWrapper is working properly as List with no Icons', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_ApplicationLauncherWrapper["default"], {
    apps: Apps,
    noIcons: true,
    open: false
  }));
  expect(component.render()).toMatchSnapshot();
});
test('ApplicationLauncherWrapper is working properly as Grid when open', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_ApplicationLauncherWrapper["default"], {
    apps: Apps,
    grid: true,
    open: true
  }));
  expect(component.render()).toMatchSnapshot();
});
test('ApplicationLauncherWrapper is working properly as List with no Icons when open', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_ApplicationLauncherWrapper["default"], {
    apps: Apps,
    noIcons: true,
    open: true
  }));
  expect(component.render()).toMatchSnapshot();
});
test('StatefulApplicationLauncherWrapper is working properly as Grid', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_StatefulApplicationLauncherWrapper["default"], {
    grid: true,
    apps: Apps
  }));
  expect(component.render()).toMatchSnapshot();
});