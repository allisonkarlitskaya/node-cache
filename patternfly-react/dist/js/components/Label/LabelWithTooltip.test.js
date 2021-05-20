"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _LabelWithTooltip = _interopRequireDefault(require("./LabelWithTooltip"));

var _helpers = require("../../common/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('snapshot test', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_LabelWithTooltip["default"], {
    key: 11,
    category: {
      label: 'food',
      id: 1
    },
    value: {
      label: 'Salad',
      id: 11
    },
    onDeleteClick: _helpers.noop,
    truncate: _helpers.noop
  }));
  expect(view).toMatchSnapshot();
});