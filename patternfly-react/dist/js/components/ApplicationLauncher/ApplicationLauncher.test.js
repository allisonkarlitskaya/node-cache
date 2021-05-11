"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var handleClick = function handleClick(e) {
  e.preventDefault();
};

test('ApplicationLauncher is working properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.ApplicationLauncher, {
    type: "grid",
    tooltipPlacement: "left"
  }, _react["default"].createElement(_index.ApplicationLauncherItem, {
    icon: "pficon pficon-storage-domain",
    title: "Recteque",
    tooltip: "Tooltip!",
    onClick: handleClick
  })));
  expect(component.render()).toMatchSnapshot();
});
test('ApplicationLauncherItem with tooltip is working properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.ApplicationLauncherItem, {
    icon: "pficon pficon-storage-domain",
    title: "Recteque",
    tooltip: "Tooltip!",
    onClick: handleClick
  }));
  expect(component.render()).toMatchSnapshot();
});
test('ApplicationLauncherItem without tooltip is working properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.ApplicationLauncherItem, {
    icon: "pficon pficon-storage-domain",
    title: "Recteque",
    onClick: handleClick
  }));
  expect(component.render()).toMatchSnapshot();
});
test('ApplicationLauncherToggle is working properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.ApplicationLauncherToggle, {
    tooltipPlacement: "left",
    onClick: handleClick,
    open: false
  }));
  expect(component.render()).toMatchSnapshot();
});
test('ApplicationLauncherToggle is working properly when open', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.ApplicationLauncherToggle, {
    tooltipPlacement: "left",
    onClick: handleClick,
    open: true
  }));
  expect(component.render()).toMatchSnapshot();
});