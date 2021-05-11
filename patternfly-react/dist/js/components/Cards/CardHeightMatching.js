"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _cssElementQueries = require("css-element-queries");

var _helpers = require("../../common/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CardHeightMatching = /*#__PURE__*/function (_React$Component) {
  _inherits(CardHeightMatching, _React$Component);

  function CardHeightMatching(props) {
    var _this;

    _classCallCheck(this, CardHeightMatching);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CardHeightMatching).call(this, props));
    _this._selectors = Array.isArray(props.selector) ? props.selector : [props.selector];
    _this._resizeSensors = [];
    return _this;
  }

  _createClass(CardHeightMatching, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // schedule the initial height matching
      this._matchHeights();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this2 = this;

      // if the container got updated, let's match heights again
      setTimeout(function () {
        _this2._matchHeights();
      }, 0);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._removeSensors();
    }
  }, {
    key: "_addSensors",
    value: function _addSensors() {
      var _this3 = this;

      // setup the event listening on '_container' for our height matching selectors
      this._selectors.forEach(function (selector) {
        var elements = _this3._container.querySelectorAll(selector);

        _this3._resizeSensors.push(new _cssElementQueries.ResizeSensor(elements, (0, _helpers.debounce)(function () {
          return _this3._matchHeights([selector]);
        }, 200)));
      });
    }
  }, {
    key: "_removeSensors",
    value: function _removeSensors() {
      this._resizeSensors.forEach(function (sensor) {
        sensor.detach();
      });

      this._resizeSensors = [];
    }
  }, {
    key: "_matchHeights",
    value: function _matchHeights() {
      var _this4 = this;

      var selectors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._selectors;

      if (!this._container) {
        return;
      } // Remove any existing sensors so they do not detect changes made here


      this._removeSensors();

      var arrayMap = function arrayMap(elements) {
        return Array.prototype.map.call(elements, function (el) {
          return el.scrollHeight;
        }).reduce(function (pre, cur) {
          return Math.max(pre, cur);
        }, -Infinity);
      };

      selectors.forEach(function (selector) {
        var elements = _this4._container.querySelectorAll(selector);

        elements.forEach(function (el) {
          el.style.height = null;
        });
        var maxHeight = arrayMap(elements);
        elements.forEach(function (el) {
          el.style.height = "".concat(maxHeight, "px");
        });
      }); // Add resize sensors to watch for resizes

      this._addSensors();
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      return _react["default"].createElement("div", {
        className: this.props.className,
        ref: function ref(node) {
          _this5._container = node;
        }
      }, this.props.children);
    }
  }]);

  return CardHeightMatching;
}(_react["default"].Component);

CardHeightMatching.propTypes = {
  children: _propTypes["default"].node.isRequired,
  className: _propTypes["default"].string,
  selector: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]).isRequired
};
CardHeightMatching.defaultProps = {
  className: ''
};
var _default = CardHeightMatching;
exports["default"] = _default;