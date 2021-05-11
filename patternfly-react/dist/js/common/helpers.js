"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.helpers = exports.KEYS = exports.KEY_CODES = exports.noop = exports.nullValues = exports.hasDisplayName = exports.propsChanged = exports.findChild = exports.filterChildren = exports.childrenToArray = exports.excludeKeys = exports.filterKeys = exports.selectKeys = exports.propOrState = exports.propExists = exports.debounce = exports.bindMethods = void 0;

var _react = _interopRequireDefault(require("react"));

var _Timer = _interopRequireDefault(require("./Timer"));

var _closestPolyfill = require("./closestPolyfill");

var _controlled = _interopRequireDefault(require("./controlled"));

var _patternfly = require("./patternfly");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** Equivalent to calling `this.someMethod = this.someMethod.bind(this)` for every method name in the methods array. */
var bindMethods = function bindMethods(context, methods) {
  // eslint-disable-next-line no-console
  console.warn("\n   bindMethods usage is deprecated in favor of class methods.\n   bindMethods will be removed in the next major release\n   ");
  methods.forEach(function (method) {
    context[method] = context[method].bind(context);
  });
};
/** Implementation of the debounce function */


exports.bindMethods = bindMethods;

var debounce = function debounce(func, wait) {
  var timeout;

  function innerFunc() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      return func.apply(context, args);
    }, wait);
  }

  return innerFunc;
};
/** Returns true if propName is a non-null, defined property of the props object (can be any object, not just React props). */


exports.debounce = debounce;

var propExists = function propExists(props, propName) {
  return props && props.hasOwnProperty(propName) && props[propName] != null;
};
/** Given two objects (props and state), returns the value of propName from props if present, or from state otherwise. */


exports.propExists = propExists;

var propOrState = function propOrState(props, state, propName) {
  return propExists(props, propName) ? props[propName] : state[propName];
};
/** Returns a subset of the given object including only the given keys, with values optionally replaced by a fn. */


exports.propOrState = propOrState;

var selectKeys = function selectKeys(obj, keys) {
  var fn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (val) {
    return val;
  };
  return keys.reduce(function (values, key) {
    return _objectSpread({}, values, _defineProperty({}, key, fn(obj[key])));
  }, {});
};
/** Returns a subset of the given object with a validator function applied to its keys. */


exports.selectKeys = selectKeys;

var filterKeys = function filterKeys(obj, validator) {
  return selectKeys(obj, Object.keys(obj).filter(validator));
};
/** Returns a subset of the given object with the given keys left out. */


exports.filterKeys = filterKeys;

var excludeKeys = function excludeKeys(obj, keys) {
  return filterKeys(obj, function (key) {
    return !keys.includes(key);
  });
};
/** Returns the given React children prop as a regular array of React nodes. */


exports.excludeKeys = excludeKeys;

var childrenToArray = function childrenToArray(children) {
  return children && _react["default"].Children.count(children) > 0 && _react["default"].Children.toArray(children);
};
/** Filters the given React children prop with the given validator function. Returns an array of nodes. */


exports.childrenToArray = childrenToArray;

var filterChildren = function filterChildren(children, validator) {
  var array = childrenToArray(children);
  return array && array.filter(validator);
};
/** Given a React children prop, finds the first child node to pass the validator function. */


exports.filterChildren = filterChildren;

var findChild = function findChild(children, validator) {
  var array = childrenToArray(children);
  return array && array.find(validator);
};
/** Returns true if there is at least one of propNames with a different value in newProps than in oldProps. */


exports.findChild = findChild;

var propsChanged = function propsChanged(propNames, oldProps, newProps) {
  return propNames.some(function (propName) {
    return oldProps[propName] !== newProps[propName];
  });
};
/** Returns true if the component has the desired displayName value */


exports.propsChanged = propsChanged;

var hasDisplayName = function hasDisplayName(component, displayName) {
  return component && component.type && component.type.displayName === displayName;
};
/** Returns an object with the same keys as the given one, but all null values. */


exports.hasDisplayName = hasDisplayName;

var nullValues = function nullValues(obj) {
  return selectKeys(obj, Object.keys(obj), function () {
    return null;
  });
};

exports.nullValues = nullValues;
var noop = Function.prototype;
exports.noop = noop;
var KEY_CODES = {
  TAB_KEY: 9,
  ENTER_KEY: 13,
  ESCAPE_KEY: 27,
  SHIFT: 16,
  A: 65,
  Z: 90,
  NUMPAD: {
    0: 97
  },
  F11: 122
};
exports.KEY_CODES = KEY_CODES;
var KEYS = {
  ENTER: 'Enter',
  CAPSLOCK: 'CapsLock',
  SPACE: ' ',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_DOWN: 'ArrowDown',
  ARROW_UP: 'ArrowUp',
  HOME: 'Home',
  END: 'End'
};
exports.KEYS = KEYS;
var helpers = {
  Timer: _Timer["default"],
  closestPolyfill: _closestPolyfill.closest,
  controlled: _controlled["default"],
  patternfly: _patternfly.patternfly,
  c3ChartDefaults: _patternfly.c3ChartDefaults,
  layout: _patternfly.layout,
  debounce: debounce,
  propExists: propExists,
  propOrState: propOrState,
  selectKeys: selectKeys,
  filterKeys: filterKeys,
  excludeKeys: excludeKeys,
  childrenToArray: childrenToArray,
  filterChildren: filterChildren,
  findChild: findChild,
  propsChanged: propsChanged,
  hasDisplayName: hasDisplayName,
  nullValues: nullValues,
  noop: noop,
  KEY_CODES: KEY_CODES,
  KEYS: KEYS
};
exports.helpers = helpers;
var _default = helpers;
exports["default"] = _default;