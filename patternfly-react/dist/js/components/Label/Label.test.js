"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Label = _interopRequireDefault(require("react-bootstrap/lib/Label"));

var _Label2 = _interopRequireDefault(require("./Label"));

var _RemoveButton = _interopRequireDefault(require("./RemoveButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

it('sets bsStyle to type', function () {
  var type = 'primary';
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_Label2["default"], {
    type: type
  }));
  expect(view.find(_Label["default"]).props().bsStyle).toBe(type);
});
it('spreads additional props to Bootstrap Label', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_Label2["default"], {
    id: "id",
    another: "another"
  }));
  expect(view.find(_Label["default"]).props()).toMatchSnapshot('Bootstrap label has correct props.');
});
it('does not render RemoveButton if onRemoveClick is not present', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_Label2["default"], null));
  expect(view.find(_RemoveButton["default"]).exists()).toBe(false);
});
it('renders RemoveButton if onRemoveClick is present', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_Label2["default"], {
    onRemoveClick: jest.fn()
  }));
  expect(view.find(_RemoveButton["default"]).exists()).toBe(true);
});