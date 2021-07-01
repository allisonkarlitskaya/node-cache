"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockCompoundLabelSource = exports.MockCompoundLabel = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MockCompoundLabel = /*#__PURE__*/function (_React$Component) {
  _inherits(MockCompoundLabel, _React$Component);

  function MockCompoundLabel(props) {
    var _this;

    _classCallCheck(this, MockCompoundLabel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MockCompoundLabel).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "removeMe", function (category, value) {
      var values = _this.state.tag.values.filter(function (val) {
        return val.id !== value.id;
      });

      var state = {
        tag: _objectSpread({}, _this.state.tag, {
          values: values
        })
      };

      _this.setState(state);
    });

    _this.state = {
      tag: {
        id: 1,
        label: 'Most delicious food you will ever eat',
        values: [{
          id: 11,
          label: 'Strawberries harvested under full moon light'
        }, {
          id: 12,
          label: 'Argentinian beef steak from hand massaged cow'
        }, {
          id: 13,
          label: 'Enchanted cookies baked by insane chef'
        }, {
          id: 14,
          label: 'Dumplings'
        }]
      }
    };
    return _this;
  }

  _createClass(MockCompoundLabel, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_index.CompoundLabel, {
        key: this.state.tag.id,
        category: {
          id: this.state.tag.id,
          label: this.state.tag.label
        },
        values: this.state.tag.values,
        onDeleteClick: this.removeMe
      });
    }
  }]);

  return MockCompoundLabel;
}(_react["default"].Component);

exports.MockCompoundLabel = MockCompoundLabel;
var mockCompoundLabelSource = "\nimport React from 'react';\nimport { CompoundLabel } from '../index';\n\nexport class MockCompoundLabel extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      tag: {\n        id: 1,\n        label: 'Most delicious food you will ever eat',\n        values: [\n          { id: 11, label: 'Strawberries harvested under full moon light' },\n          { id: 12, label: 'Argentinian beef steak from hand massaged cow' },\n          { id: 13, label: 'Enchanted cookies baked by insane chef' },\n          { id: 14, label: 'Dumplings' }\n        ]\n      }\n    };\n  }\n\n  removeMe = (category, value) => {\n    const values = this.state.tag.values.filter(val => val.id !== value.id);\n    const state = { tag: { ...this.state.tag, values } };\n    this.setState(state);\n  };\n\n  render() {\n    return (\n      <CompoundLabel\n        key={this.state.tag.id}\n        category={{ id: this.state.tag.id, label: this.state.tag.label }}\n        values={this.state.tag.values}\n        onDeleteClick={this.removeMe}\n      />\n    );\n  }\n}\n";
exports.mockCompoundLabelSource = mockCompoundLabelSource;