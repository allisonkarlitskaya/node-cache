"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basicExampleSource = exports.MockModalManager = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = require("../../Button");

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

var MockModalManager = /*#__PURE__*/function (_React$Component) {
  _inherits(MockModalManager, _React$Component);

  function MockModalManager() {
    var _this;

    _classCallCheck(this, MockModalManager);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MockModalManager).call(this));
    _this.state = {
      showModal: false
    };
    _this.open = _this.open.bind(_assertThisInitialized(_this));
    _this.close = _this.close.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MockModalManager, [{
    key: "close",
    value: function close() {
      this.setState({
        showModal: false
      });
    }
  }, {
    key: "open",
    value: function open() {
      this.setState({
        showModal: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          rightSide = _this$props.rightSide;

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
        onClick: this.open
      }, "Launch Modal"), _react["default"].createElement(_index.Modal, {
        show: this.state.showModal,
        onHide: this.close,
        className: rightSide ? 'right-side-modal-pf' : ''
      }, _react["default"].createElement(_index.Modal.Header, null, _react["default"].createElement(_index.Modal.CloseButton, {
        onClick: this.close
      }), _react["default"].createElement(_index.Modal.Title, null, "Modal Overlay Title")), _react["default"].createElement(_index.Modal.Body, null, children || defaultBody), _react["default"].createElement(_index.Modal.Footer, null, _react["default"].createElement(_Button.Button, {
        bsStyle: "default",
        className: "btn-cancel",
        onClick: this.close
      }, "Cancel"), _react["default"].createElement(_Button.Button, {
        bsStyle: "primary",
        onClick: this.close
      }, "Save"))));
    }
  }]);

  return MockModalManager;
}(_react["default"].Component);

exports.MockModalManager = MockModalManager;
MockModalManager.propTypes = {
  children: _propTypes["default"].node,
  rightSide: _propTypes["default"].bool
};
MockModalManager.defaultProps = {
  children: null,
  rightSide: false
};
var basicExampleSource = "\n  <Button bsStyle=\"primary\" bsSize=\"large\" onClick={this.open}>\n  Launch basic modal\n  </Button>\n\n  <Modal show={this.state.showModal} onHide={this.close}>\n    <Modal.Header>\n      <button\n        className=\"close\"\n        onClick={this.close}\n        aria-hidden=\"true\"\n        aria-label=\"Close\"\n      >\n        <Icon type=\"pf\" name=\"close\" />\n      </button>\n      <Modal.Title>Modal Overlay Title</Modal.Title>\n    </Modal.Header>\n    <Modal.Body>\n      <form className=\"form-horizontal\">\n        <div className=\"form-group\">\n          <label className=\"col-sm-3 control-label\" htmlFor=\"textInput\">\n            Field One\n          </label>\n          <div className=\"col-sm-9\">\n            <input type=\"text\" id=\"textInput\" className=\"form-control\" />\n          </div>\n        </div>\n        <div className=\"form-group\">\n          <label className=\"col-sm-3 control-label\" htmlFor=\"textInput2\">\n            Field Two\n          </label>\n          <div className=\"col-sm-9\">\n            <input type=\"text\" id=\"textInput2\" className=\"form-control\" />\n          </div>\n        </div>\n        <div className=\"form-group\">\n          <label className=\"col-sm-3 control-label\" htmlFor=\"textInput3\">\n            Field Three\n          </label>\n          <div className=\"col-sm-9\">\n            <input type=\"text\" id=\"textInput3\" className=\"form-control\" />\n          </div>\n        </div>\n      </form>\n    </Modal.Body>\n    <Modal.Footer>\n      <Button\n        bsStyle=\"default\"\n        className=\"btn-cancel\"\n        onClick={this.close}\n      >\n        Cancel\n      </Button>\n      <Button bsStyle=\"primary\" onClick={this.close}>\n        Save\n      </Button>\n    </Modal.Footer>\n  </Modal>\n";
exports.basicExampleSource = basicExampleSource;