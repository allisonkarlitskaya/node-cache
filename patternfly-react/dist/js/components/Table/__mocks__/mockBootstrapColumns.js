"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockPatternflyColumns = exports.mockBootstrapColumns = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var headerFormat = function headerFormat(value) {
  return _react["default"].createElement(_index.Table.Heading, null, value);
};

var cellFormat = function cellFormat(value) {
  return _react["default"].createElement(_index.Table.Cell, null, value);
};

var mockBootstrapColumns = [{
  header: {
    label: '#',
    formatters: [headerFormat]
  },
  cell: {
    formatters: [cellFormat]
  },
  property: 'id'
}, {
  header: {
    label: 'First Name',
    formatters: [headerFormat]
  },
  cell: {
    formatters: [cellFormat]
  },
  property: 'first_name'
}, {
  header: {
    label: 'Last Name',
    formatters: [headerFormat]
  },
  cell: {
    formatters: [cellFormat]
  },
  property: 'last_name'
}, {
  header: {
    label: 'Username',
    formatters: [headerFormat]
  },
  cell: {
    formatters: [cellFormat]
  },
  property: 'username'
}];
exports.mockBootstrapColumns = mockBootstrapColumns;

var headerFormatRightAlign = function headerFormatRightAlign(value) {
  return _react["default"].createElement(_index.Table.Heading, {
    align: "right"
  }, value);
};

var cellFormatRightAlign = function cellFormatRightAlign(value) {
  return _react["default"].createElement(_index.Table.Cell, {
    align: "right"
  }, value);
};

var mockPatternflyColumns = [{
  header: {
    label: 'First Name',
    formatters: [headerFormat]
  },
  cell: {
    formatters: [cellFormat]
  },
  property: 'first_name'
}, {
  header: {
    label: 'Last Name',
    formatters: [headerFormat]
  },
  cell: {
    formatters: [cellFormat]
  },
  property: 'last_name'
}, {
  header: {
    label: 'Username',
    formatters: [headerFormat]
  },
  cell: {
    formatters: [cellFormat]
  },
  property: 'username'
}, {
  header: {
    label: 'Commits',
    formatters: [headerFormatRightAlign]
  },
  cell: {
    formatters: [cellFormatRightAlign]
  },
  property: 'commits'
}, {
  header: {
    label: 'Additions',
    formatters: [headerFormatRightAlign]
  },
  cell: {
    formatters: [cellFormatRightAlign]
  },
  property: 'additions'
}, {
  header: {
    label: 'Location',
    formatters: [function (value) {
      return _react["default"].createElement(_index.Table.Heading, {
        align: "center"
      }, value);
    }]
  },
  cell: {
    formatters: [function (value) {
      return _react["default"].createElement(_index.Table.Cell, {
        align: "center"
      }, value);
    }]
  },
  property: 'location'
}, {
  header: {
    label: 'Gender',
    formatters: [headerFormat]
  },
  cell: {
    formatters: [cellFormat]
  },
  property: 'gender'
}];
exports.mockPatternflyColumns = mockPatternflyColumns;