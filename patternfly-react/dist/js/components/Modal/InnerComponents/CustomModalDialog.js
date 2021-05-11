"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var utils = _interopRequireWildcard(require("react-bootstrap/lib/utils"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var bsClass = utils.bootstrapUtils.bsClass;
var bsSizes = utils.bootstrapUtils.bsSizes;
var getClassSet = utils.bootstrapUtils.getClassSet;
var prefix = utils.bootstrapUtils.prefix;
var splitBsProps = utils.bootstrapUtils.splitBsProps; // React Bootstrap utils/StyleConfig Size is currently not exported

var Size = {
  LARGE: 'large',
  SMALL: 'small'
}; // eslint-disable-next-line react/prefer-stateless-function

var CustomModalDialog = /*#__PURE__*/function (_React$Component) {
  _inherits(CustomModalDialog, _React$Component);

  function CustomModalDialog() {
    _classCallCheck(this, CustomModalDialog);

    return _possibleConstructorReturn(this, _getPrototypeOf(CustomModalDialog).apply(this, arguments));
  }

  _createClass(CustomModalDialog, [{
    key: "render",
    value: function render() {
      var _objectSpread2;

      var _this$props = this.props,
          dialogClassName = _this$props.dialogClassName,
          contentClassName = _this$props.contentClassName,
          className = _this$props.className,
          style = _this$props.style,
          children = _this$props.children,
          onMouseDownDialog = _this$props.onMouseDownDialog,
          props = _objectWithoutProperties(_this$props, ["dialogClassName", "contentClassName", "className", "style", "children", "onMouseDownDialog"]);

      var _splitBsProps = splitBsProps(props),
          _splitBsProps2 = _slicedToArray(_splitBsProps, 2),
          bsProps = _splitBsProps2[0],
          elementProps = _splitBsProps2[1];

      var bsClassName = prefix(bsProps);

      var modalStyle = _objectSpread({
        display: 'block'
      }, style);

      var dialogClasses = _objectSpread({}, getClassSet(bsProps), (_objectSpread2 = {}, _defineProperty(_objectSpread2, bsClassName, false), _defineProperty(_objectSpread2, prefix(bsProps, 'dialog'), true), _objectSpread2));

      return _react["default"].createElement("div", _extends({}, elementProps, {
        tabIndex: "-1",
        role: "dialog",
        style: modalStyle,
        className: (0, _classnames["default"])(className, bsClassName)
      }), _react["default"].createElement("div", {
        className: (0, _classnames["default"])(dialogClassName, dialogClasses),
        onMouseDown: onMouseDownDialog
      }, _react["default"].createElement("div", {
        className: (0, _classnames["default"])(prefix(bsProps, 'content'), contentClassName),
        role: "document"
      }, children)));
    }
  }]);

  return CustomModalDialog;
}(_react["default"].Component);

CustomModalDialog.propTypes = {
  /** A css class to apply to the Modal dialog DOM node. */
  dialogClassName: _propTypes["default"].string,

  /** custom modal-content class added to the content DOM node */
  contentClassName: _propTypes["default"].string,

  /** base modal class name */
  className: _propTypes["default"].string,

  /** additional modal styles */
  style: _propTypes["default"].object,

  /** Children nodes */
  children: _propTypes["default"].node
};
CustomModalDialog.defaultProps = {
  dialogClassName: '',
  contentClassName: '',
  className: '',
  style: {},
  children: null
};

var _default = bsClass('modal', bsSizes([Size.LARGE, Size.SMALL], CustomModalDialog));

exports["default"] = _default;