"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basicExampleSource = exports.MockModelessManager = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = require("../../Button");

var _Modal = require("../../Modal");

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

var MockModelessManager = /*#__PURE__*/function (_React$Component) {
  _inherits(MockModelessManager, _React$Component);

  function MockModelessManager() {
    var _this;

    _classCallCheck(this, MockModelessManager);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MockModelessManager).call(this));

    _defineProperty(_assertThisInitialized(_this), "close", function () {
      _this.setState({
        showOverlay: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleOpen", function () {
      _this.setState({
        showOverlay: !_this.state.showOverlay
      });
    });

    _this.state = {
      showOverlay: false
    };
    return _this;
  }

  _createClass(MockModelessManager, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          size = _this$props.size;

      var defaultBody = _react["default"].createElement("form", {
        className: "form-horizontal"
      }, _react["default"].createElement("div", {
        className: "form-group"
      }, _react["default"].createElement("label", {
        className: "col-sm-3 control-label",
        htmlFor: "textInput"
      }, "Field One"), _react["default"].createElement("div", {
        className: "col-sm-9"
      }, _react["default"].createElement("input", {
        type: "text",
        id: "textInput",
        className: "form-control"
      }))), _react["default"].createElement("div", {
        className: "form-group"
      }, _react["default"].createElement("label", {
        className: "col-sm-3 control-label",
        htmlFor: "textInput2"
      }, "Field Two"), _react["default"].createElement("div", {
        className: "col-sm-9"
      }, _react["default"].createElement("input", {
        type: "text",
        id: "textInput2",
        className: "form-control"
      }))), _react["default"].createElement("div", {
        className: "form-group"
      }, _react["default"].createElement("label", {
        className: "col-sm-3 control-label",
        htmlFor: "textInput3"
      }, "Field Three"), _react["default"].createElement("div", {
        className: "col-sm-9"
      }, _react["default"].createElement("input", {
        type: "text",
        id: "textInput3",
        className: "form-control"
      }))), _react["default"].createElement("div", {
        className: "form-group"
      }, _react["default"].createElement("label", {
        className: "col-sm-3 control-label",
        htmlFor: "textInput4"
      }, "Field Four"), _react["default"].createElement("div", {
        className: "col-sm-9"
      }, _react["default"].createElement("input", {
        type: "text",
        id: "textInput3",
        className: "form-control"
      }))), _react["default"].createElement("div", {
        className: "form-group"
      }, _react["default"].createElement("label", {
        className: "col-sm-3 control-label",
        htmlFor: "textInput5"
      }, "Field Five"), _react["default"].createElement("div", {
        className: "col-sm-9"
      }, _react["default"].createElement("input", {
        type: "text",
        id: "textInput3",
        className: "form-control"
      }))), _react["default"].createElement("div", {
        className: "form-group"
      }, _react["default"].createElement("label", {
        className: "col-sm-3 control-label",
        htmlFor: "textInput6"
      }, "Field Six"), _react["default"].createElement("div", {
        className: "col-sm-9"
      }, _react["default"].createElement("input", {
        type: "text",
        id: "textInput3",
        className: "form-control"
      }))));

      return _react["default"].createElement("div", null, _react["default"].createElement(_Button.Button, {
        bsStyle: "primary",
        bsSize: "large",
        onClick: this.toggleOpen
      }, this.state.showOverlay ? 'Close Modeless Overlay' : 'Open Modeless Overlay'), _react["default"].createElement(_index.ModelessOverlay, {
        show: this.state.showOverlay,
        bsSize: size !== 'default' ? size : null
      }, _react["default"].createElement(_Modal.Modal.Header, null, _react["default"].createElement(_Modal.Modal.CloseButton, {
        onClick: this.close
      }), _react["default"].createElement(_Modal.Modal.Title, null, "Modal Overlay Title")), _react["default"].createElement(_Modal.Modal.Body, null, children || defaultBody), _react["default"].createElement(_Modal.Modal.Footer, null, _react["default"].createElement(_Button.Button, {
        bsStyle: "default",
        className: "btn-cancel",
        onClick: this.close
      }, "Cancel"), _react["default"].createElement(_Button.Button, {
        bsStyle: "primary",
        onClick: this.close
      }, "Save"))));
    }
  }]);

  return MockModelessManager;
}(_react["default"].Component);

exports.MockModelessManager = MockModelessManager;
MockModelessManager.propTypes = {
  children: _propTypes["default"].node,
  size: _propTypes["default"].string
};
MockModelessManager.defaultProps = {
  children: null,
  size: 'default'
};
var basicExampleSource = "\nimport React from 'react';\nimport PropTypes from 'prop-types';\nimport { Button } from '../../Button';\nimport { Modal } from '../../Modal';\nimport { ModelessOverlay } from '../index';\n\nexport class MockModelessManager extends React.Component {\n  constructor() {\n    super();\n    this.state = { showOverlay: false };\n  }\n  close = () => {\n    this.setState({ showOverlay: false });\n  };\n  toggleOpen = () => {\n    this.setState({ showOverlay: !this.state.showOverlay });\n  };\n  render() {\n    const { children, size } = this.props;\n    const defaultBody = (\n      <form className=\"form-horizontal\">\n        <div className=\"form-group\">\n          <label className=\"col-sm-3 control-label\" htmlFor=\"textInput\">\n            Field One\n          </label>\n          <div className=\"col-sm-9\">\n            <input type=\"text\" id=\"textInput\" className=\"form-control\" />\n          </div>\n        </div>\n        <div className=\"form-group\">\n          <label className=\"col-sm-3 control-label\" htmlFor=\"textInput2\">\n            Field Two\n          </label>\n          <div className=\"col-sm-9\">\n            <input type=\"text\" id=\"textInput2\" className=\"form-control\" />\n          </div>\n        </div>\n        <div className=\"form-group\">\n          <label className=\"col-sm-3 control-label\" htmlFor=\"textInput3\">\n            Field Three\n          </label>\n          <div className=\"col-sm-9\">\n            <input type=\"text\" id=\"textInput3\" className=\"form-control\" />\n          </div>\n        </div>\n      </form>\n    );\n\n    return (\n      <div>\n        <Button bsStyle=\"primary\" bsSize=\"large\" onClick={this.toggleOpen}>\n          {this.state.showOverlay ? 'Close Modeless Overlay' : 'Open Modeless Overlay'}\n        </Button>\n\n        <ModelessOverlay show={this.state.showOverlay} bsSize={size !== 'default' ? size : null}>\n          <Modal.Header>\n            <Modal.CloseButton onClick={this.close} />\n            <Modal.Title>Modal Overlay Title</Modal.Title>\n          </Modal.Header>\n          <Modal.Body>{children || defaultBody}</Modal.Body>\n          <Modal.Footer>\n            <Button bsStyle=\"default\" className=\"btn-cancel\" onClick={this.close}>\n              Cancel\n            </Button>\n            <Button bsStyle=\"primary\" onClick={this.close}>\n              Save\n            </Button>\n          </Modal.Footer>\n        </ModelessOverlay>\n      </div>\n    );\n  }\n}\n\nMockModelessManager.propTypes = {\n  children: PropTypes.node,\n  size: PropTypes.string\n};\n\nMockModelessManager.defaultProps = {\n  children: null,\n  size: 'default'\n};\n";
exports.basicExampleSource = basicExampleSource;