"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _CompoundLabel = _interopRequireDefault(require("./CompoundLabel"));

var _helpers = require("../../common/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var tag = {
  id: 1,
  label: 'Food - category with very long description',
  values: [{
    id: 11,
    label: 'Cake'
  }, {
    id: 12,
    label: 'Bloody Steak from the famous Purple Cow'
  }, {
    id: 13,
    label: 'Pineapple Pizza'
  }]
};
test('snapshot test', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_CompoundLabel["default"], {
    key: tag.id,
    category: {
      id: tag.id,
      label: tag.label
    },
    values: tag.values,
    onDeleteClick: _helpers.noop
  }));
  expect(view).toMatchSnapshot();
});