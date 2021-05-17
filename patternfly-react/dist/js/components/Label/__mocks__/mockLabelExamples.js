"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockLabelRemoveSource = exports.MockLabelRemove = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MockLabelRemove = /*#__PURE__*/function (_React$Component) {
  _inherits(MockLabelRemove, _React$Component);

  function MockLabelRemove(props) {
    var _this;

    _classCallCheck(this, MockLabelRemove);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MockLabelRemove).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "removeMe", function (index) {
      _this.setState(_this.state.types.splice(index, 1));
    });

    _this.state = {
      types: [{
        value: 'default',
        text: 'Some'
      }, {
        value: 'primary',
        text: 'Title'
      }, {
        value: 'success',
        text: 'Value: is'
      }, {
        value: 'warning',
        text: 'long title inside label'
      }, {
        value: 'danger',
        text: 'I am danger and I am relatively long lable'
      }]
    };
    return _this;
  }

  _createClass(MockLabelRemove, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react["default"].createElement("div", null, this.state.types.map(function (type, index) {
        return _react["default"].createElement(_index.Label, {
          key: index,
          style: {
            margin: '0 5px 0 0'
          },
          type: type.value,
          onRemoveClick: function onRemoveClick() {
            return _this2.removeMe(index);
          }
        }, type.text);
      }), ' ');
    }
  }]);

  return MockLabelRemove;
}(_react["default"].Component);

exports.MockLabelRemove = MockLabelRemove;
var mockLabelRemoveSource = "\n  import React from 'react';\n  import { Label } from '../index';\n\n  export class MockLabelRemove extends React.Component {\n    constructor(props) {\n      super(props);\n      this.state = {\n        types: [\n          { value: 'default', text: 'Some' },\n          { value: 'primary', text: 'Title' },\n          { value: 'success', text: 'Value: is' },\n          { value: 'warning', text: 'long title inside label' },\n          { value: 'danger', text: 'I am danger and I am relatively long lable' }\n        ]\n      };\n    }\n    removeMe = index => {\n      this.setState(this.state.types.splice(index, 1));\n    };\n\n    render() {\n      return (\n        <div>\n          {this.state.types.map((type, index) => (\n            <Label\n              key={index}\n              style={{ margin: '0 5px 0 0' }}\n              type={type.value}\n              onRemoveClick={() => this.removeMe(index)}\n            >\n              {type.text}\n            </Label>\n          ))}{' '}\n        </div>\n      )\n    }\n  }\n";
exports.mockLabelRemoveSource = mockLabelRemoveSource;