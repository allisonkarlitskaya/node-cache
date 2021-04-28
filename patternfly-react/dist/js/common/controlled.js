"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

/*
  controlled(stateTypes, defaults)(WrappedComponent)

  *** NOTE / BEWARE! *******************************************************************************
  This is already deprecated, even as new as it is, because we now have getDerivedStateFromProps!
  It remains here for now because of its additional "persist" feature, which we should factor out.
  **************************************************************************************************

  This Higher Order Component provides the controlled component pattern on a prop-by-prop basis.
  It's a nice way for components to implement internal state so they "just work" out of the box,
  but also give users the option of lifting some or all of that state up into their application.

  controlled() takes arguments as an object with three options:
   * types - an object of PropTypes for the state that will be contained here
   * defaults - an optional object with default values for stateTypes
   * persist - an optional array of names from stateTypes which will be persisted to sessionStorage

  The WrappedComponent will be rendered with special props:
   * setControlledState - a reference to this state wrapper's this.setState.
   * Props for all the stateTypes, from this.props if present or from this.state otherwise.
   * All other props passed to the controlled component HoC.

  The idea is that the values in stateTypes could be stored in state, or passed in via props.
  The WrappedComponent doesn't have to care which is being used, and can manage the state
  contained here. When present, props are used instead. If you provide these special props,
  be sure to also provide corresponding callbacks/handlers to keep them updated.

  If you are using the persist option, you can optionally pass a sessionKey prop to the component
  to ensure multiple instances of the component store their data separately. If you don't pass
  a sessionKey, a stringified list of the persisted keys will be used (not unique to the instance).
*/
var controlled = function controlled(_ref) {
  var types = _ref.types,
      _ref$defaults = _ref.defaults,
      defaults = _ref$defaults === void 0 ? {} : _ref$defaults,
      persist = _ref.persist;
  return function (WrappedComponent) {
    var ControlledComponent = /*#__PURE__*/function (_React$Component) {
      _inherits(ControlledComponent, _React$Component);

      function ControlledComponent() {
        var _getPrototypeOf2;

        var _this;

        _classCallCheck(this, ControlledComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ControlledComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _defineProperty(_assertThisInitialized(_this), "state", _objectSpread({}, (0, _helpers.nullValues)(types), {}, defaults));

        _defineProperty(_assertThisInitialized(_this), "setControlledState", function (updater) {
          _this.setState(updater);
        });

        _defineProperty(_assertThisInitialized(_this), "loadPersistent", function () {
          if (persist && persist.length > 0) {
            var fromPersisted = window && window.sessionStorage && window.sessionStorage.getItem(_this.sessionKey());
            fromPersisted && _this.setState(JSON.parse(fromPersisted));
          }
        });

        _defineProperty(_assertThisInitialized(_this), "savePersistent", function () {
          if (persist && persist.length > 0) {
            var toPersist = (0, _helpers.selectKeys)(_this.state, persist);
            window && window.sessionStorage && window.sessionStorage.setItem(_this.sessionKey(), JSON.stringify(toPersist));
          }
        });

        _defineProperty(_assertThisInitialized(_this), "sessionKey", function () {
          return _this.props.sessionKey || JSON.stringify(persist);
        });

        return _this;
      }

      _createClass(ControlledComponent, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.loadPersistent();
          window && window.addEventListener && window.addEventListener('beforeunload', this.savePersistent);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.savePersistent();
          window && window.removeEventListener && window.removeEventListener('beforeunload', this.savePersistent);
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;

          var controlledStateProps = (0, _helpers.filterKeys)(this.props, function (key) {
            return types.hasOwnProperty(key) && _this2.props[key] !== null;
          });
          var otherProps = (0, _helpers.filterKeys)(this.props, function (key) {
            return !types.hasOwnProperty(key);
          });
          return _react["default"].createElement(WrappedComponent, _extends({
            setControlledState: this.setControlledState
          }, this.state, controlledStateProps, otherProps));
        }
      }]);

      return ControlledComponent;
    }(_react["default"].Component);

    ControlledComponent.displayName = WrappedComponent.displayName;
    ControlledComponent.propTypes = _objectSpread({}, WrappedComponent.propTypes, {}, types, {
      sessionKey: _propTypes["default"].string
    });
    ControlledComponent.defaultProps = _objectSpread({}, WrappedComponent.defaultProps);
    return ControlledComponent; // TODO use recompose withState or withStateHandlers here instead of component state above
  };
};

var _default = controlled;
exports["default"] = _default;