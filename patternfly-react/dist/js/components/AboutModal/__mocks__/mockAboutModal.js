"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MockAboutModalSource = exports.MockAboutModal = void 0;

var _react = _interopRequireDefault(require("react"));

var _logoAlt = _interopRequireDefault(require("patternfly/dist/img/logo-alt.svg"));

var _brandAlt = _interopRequireDefault(require("patternfly/dist/img/brand-alt.svg"));

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

var MockAboutModal = /*#__PURE__*/function (_React$Component) {
  _inherits(MockAboutModal, _React$Component);

  function MockAboutModal() {
    var _this;

    _classCallCheck(this, MockAboutModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MockAboutModal).call(this));
    _this.state = {
      showModal: false
    };
    _this.open = _this.open.bind(_assertThisInitialized(_this));
    _this.close = _this.close.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MockAboutModal, [{
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
      return _react["default"].createElement("div", null, _react["default"].createElement(_Button.Button, {
        bsStyle: "primary",
        bsSize: "large",
        onClick: this.open
      }, "Launch About Modal"), _react["default"].createElement(_index.AboutModal, {
        show: this.state.showModal,
        onHide: this.close,
        productTitle: _react["default"].createElement("img", {
          src: _brandAlt["default"],
          alt: "Product Title"
        }),
        logo: _logoAlt["default"],
        altLogo: "Patternfly Logo",
        trademarkText: "Trademark and Copyright Information"
      }, _react["default"].createElement(_index.AboutModal.Versions, null, _react["default"].createElement(_index.AboutModal.VersionItem, {
        label: "Label",
        versionText: "Version"
      }), _react["default"].createElement(_index.AboutModal.VersionItem, {
        label: "Label",
        versionText: "Version"
      }), _react["default"].createElement(_index.AboutModal.VersionItem, {
        label: "Label",
        versionText: "Version"
      }), _react["default"].createElement(_index.AboutModal.VersionItem, {
        label: "Label",
        versionText: "Version"
      }))));
    }
  }]);

  return MockAboutModal;
}(_react["default"].Component);

exports.MockAboutModal = MockAboutModal;
var MockAboutModalSource = "\nimport React from 'react';\nimport { Button } from '../../Button';\nimport { AboutModal } from '../index';\nimport logo from 'patternfly/dist/img/logo-alt.svg';\n\nexport class MockAboutModal extends React.Component {\n  constructor() {\n    super();\n    this.state = { showModal: false };\n    this.open = this.open.bind(this);\n    this.close = this.close.bind(this);\n  }\n  open() {\n    this.setState({ showModal: true });\n  }\n  close() {\n    this.setState({ showModal: false });\n  }\n  render() {\n    return (\n      <div>\n        <Button bsStyle=\"primary\" bsSize=\"large\" onClick={this.open}>\n          Launch About Modal\n        </Button>\n\n        <AboutModal\n          show={this.state.showModal}\n          onHide={this.close}\n          productTitle=\"Product Title\"\n          logo={logo}\n          altLogo=\"Patternfly Logo\"\n          trademarkText=\"Trademark and Copyright Information\"\n        >\n          <AboutModal.Versions>\n            <AboutModal.VersionItem label=\"Label\" versionText=\"Version\" />\n          </AboutModal.Versions>\n        </AboutModal>\n      </div>\n    );\n  }\n}\n";
exports.MockAboutModalSource = MockAboutModalSource;