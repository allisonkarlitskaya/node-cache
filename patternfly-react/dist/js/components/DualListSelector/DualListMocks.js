"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dropdownItems = exports.items = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var items = {
  left: [{
    value: 'Ann Little',
    label: 'Ann Little',
    disabled: true,
    tooltipText: 'Permission Denied'
  }, {
    value: 'Daniel Nguyen',
    label: 'Daniel Nguyen'
  }, {
    value: 'Heather Davis',
    label: 'Heather Davis'
  }, {
    value: 'Brittany Turner',
    label: 'Brittany Turner',
    children: [{
      value: 'zzz',
      label: 'zzz'
    }, {
      value: 'ppp',
      label: 'ppp'
    }]
  }, {
    value: 'George Bell',
    label: 'George Bell'
  }, {
    value: 'Anna Lane',
    label: 'Anna Lane'
  }, {
    value: 'Stephen Evans',
    label: 'Stephen Evans'
  }, {
    value: 'Howard Patel',
    label: 'Howard Patel'
  }, {
    value: 'Albert Watkins',
    label: 'Albert Watkins'
  }],
  right: [{
    value: 'Donald Trump',
    label: 'Donald Trump'
  }, {
    value: 'Barack Obama',
    label: 'Barack Obama'
  }, {
    value: 'George Walker Bush',
    label: 'George Walker Bush'
  }]
};
exports.items = items;
var dropdownItems = [_react["default"].createElement(_index.MenuItem, {
  key: 1
}, "Action"), _react["default"].createElement(_index.MenuItem, {
  key: 2
}, "Another Action"), _react["default"].createElement(_index.MenuItem, {
  key: 3
}, "Something else here"), _react["default"].createElement(_index.MenuItem, {
  key: 4,
  divider: true
}), _react["default"].createElement(_index.MenuItem, {
  key: 5
}, "Separated link")];
exports.dropdownItems = dropdownItems;