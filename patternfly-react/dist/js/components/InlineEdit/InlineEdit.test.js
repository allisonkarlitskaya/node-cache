"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

describe('InlineEdit', function () {
  var inlineEdit = function inlineEdit(label) {
    return function (value, additionalData) {
      return _react["default"].createElement("div", null, label, ": ", value, _react["default"].createElement("br", null), "additionalData: ", JSON.stringify(additionalData));
    };
  };

  var baseProps = {
    value: 'VALUE',
    additionalData: {
      some: 'data'
    },
    renderValue: inlineEdit('value'),
    renderEdit: inlineEdit('edit')
  };
  test('it renders value', function () {
    var component = (0, _enzyme.render)(_react["default"].createElement(_index.InlineEdit, _extends({}, baseProps, {
      isEditing: function isEditing() {
        return false;
      }
    })));
    expect(component).toMatchSnapshot();
  });
  test('it renders edit input', function () {
    var component = (0, _enzyme.render)(_react["default"].createElement(_index.InlineEdit, _extends({}, baseProps, {
      isEditing: function isEditing() {
        return true;
      }
    })));
    expect(component).toMatchSnapshot();
  });
});