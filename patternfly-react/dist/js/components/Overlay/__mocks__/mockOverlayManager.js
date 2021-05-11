"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basicExampleSource = exports.MockOverlayManager = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = require("../../Button");

var _Popover = require("../../Popover");

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

var MockOverlayManager = /*#__PURE__*/function (_React$Component) {
  _inherits(MockOverlayManager, _React$Component);

  function MockOverlayManager(props) {
    var _this;

    _classCallCheck(this, MockOverlayManager);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MockOverlayManager).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "toggleOverlay", function () {
      var showOverlay = _this.state.showOverlay;

      _this.setState({
        showOverlay: !showOverlay
      });
    });

    _this.buttonRef = _react["default"].createRef();
    _this.state = {
      showOverlay: false
    };
    return _this;
  }

  _createClass(MockOverlayManager, [{
    key: "render",
    value: function render() {
      var placement = this.props.placement;
      var showOverlay = this.state.showOverlay;
      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Button.Button, {
        bsStyle: "primary",
        bsSize: "large",
        onClick: this.toggleOverlay,
        ref: this.buttonRef
      }, "Click Here"), _react["default"].createElement(_index.Overlay, {
        target: this.buttonRef.current,
        container: this,
        show: showOverlay,
        placement: placement
      }, _react["default"].createElement(_Popover.Popover, {
        id: "my-overlay"
      }, _react["default"].createElement("strong", null, "Holy guacamole!"), " Check this info.")));
    }
  }]);

  return MockOverlayManager;
}(_react["default"].Component);

exports.MockOverlayManager = MockOverlayManager;
MockOverlayManager.propTypes = {
  placement: _propTypes["default"].oneOf(['top', 'bottom', 'right', 'left'])
};
MockOverlayManager.defaultProps = {
  placement: 'top'
};
var basicExampleSource = "\n/* eslint-disable react/no-find-dom-node */\nimport React from 'react';\nimport PropTypes from 'prop-types';\nimport { Button } from '../../Button';\nimport { Popover } from '../../Popover';\nimport { Overlay } from '../index';\n\nexport class MockOverlayManager extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.buttonRef = React.createRef();\n    this.state = { showOverlay: false };\n  }\n  toggleOverlay = () => {\n    const { showOverlay } = this.state;\n    this.setState({ showOverlay: !showOverlay });\n  };\n  render() {\n    const { placement } = this.props;\n    const { showOverlay } = this.state;\n\n    return (\n      <React.Fragment>\n        <Button bsStyle=\"primary\" bsSize=\"large\" onClick={this.toggleOverlay} ref={this.buttonRef}>\n          Click Here\n        </Button>\n        <Overlay target={this.buttonRef.current} container={this} show={showOverlay} placement={placement}>\n          <Popover id=\"my-overlay\">\n            <strong>Holy guacamole!</strong> Check this info.\n          </Popover>\n        </Overlay>\n      </React.Fragment>\n    );\n  }\n}\n\nMockOverlayManager.propTypes = {\n  placement: PropTypes.oneOf(['top', 'bottom', 'right', 'left'])\n};\n\nMockOverlayManager.defaultProps = {\n  placement: 'top'\n};\n";
exports.basicExampleSource = basicExampleSource;