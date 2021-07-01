"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeBodyEventListener = exports.addBodyEventListener = exports.setBodyClassIf = exports.NavContextProvider = exports.navContextTypes = exports.itemObjectTypes = exports.getItemProps = exports.isNavItem = exports.correctDepth = exports.wrongDepth = exports.componentForDepth = exports.deepestOf = exports.getNextDepth = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _recompose = require("recompose");

var _helpers = require("../../common/helpers");

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Properties of the nav item object, which can also be passed as
// props directly to Item, SecondaryItem and TertiaryItem components.
var itemObjectTypes = {
  /** Title of the nav item */
  title: _propTypes["default"].string,

  /** Class applied to the item for icons */
  iconClass: _propTypes["default"].string,

  /** Badges rendered on the item */
  badges: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    badgeClass: _propTypes["default"].string,
    tooltip: _propTypes["default"].string,
    count: _propTypes["default"].number,
    iconClass: _propTypes["default"].string
  })),

  /** Sub-items, either can be passed as objects here or as JSX children */
  subItems: _propTypes["default"].array,

  /** Is this the current active item? (used only if tracking this in app) */
  active: _propTypes["default"].bool,

  /** Is this the current hovered item? (used only if tracking this in app) */
  hovered: _propTypes["default"].bool,

  /** Is this the last item we tapped on mobile? (used only if tracking this in app) */
  selectedOnMobile: _propTypes["default"].bool,

  /** Is this item pinned? (used only if tracking this in app) */
  pinned: _propTypes["default"].bool,

  /** Set the activePath to this item initially, but allow that state to change. */
  initialActive: _propTypes["default"].bool,

  /** If this item is a link, what URL it should go to. */
  href: _propTypes["default"].string,

  /** Optional callback for updating hovered prop */
  onHover: _propTypes["default"].func,

  /** Optional callback for updating hovered prop */
  onBlur: _propTypes["default"].func,

  /** Optional callback for updating active prop */
  onClick: _propTypes["default"].func,

  /** Optional additional className(s) to be applied to the item */
  className: _propTypes["default"].string
}; // Props that can be passed to a NavContextProvider

exports.itemObjectTypes = itemObjectTypes;
var navContextTypes = {
  /** The path down the item tree so far (made up of each item's idPath() joined by '/') */
  idPath: _propTypes["default"].string,

  /** The depth down the item tree so far. Assume 'primary' if undefined. */
  depth: _propTypes["default"].oneOf(['primary', 'secondary', 'tertiary']),

  /** The nav item object of the ancestor at primary depth, for secondary and tertiary items. */
  primaryItem: _propTypes["default"].shape(itemObjectTypes),
  // *

  /** The nav item object of the ancestor at secondary depth, for tertiary items. */
  secondaryItem: _propTypes["default"].shape(itemObjectTypes),
  // *

  /** See VerticalNav.propTypes */
  activePath: _propTypes["default"].string,

  /** See VerticalNav.propTypes */
  hoverPath: _propTypes["default"].string,

  /** See VerticalNav.propTypes */
  mobilePath: _propTypes["default"].string,

  /** See VerticalNav.propTypes */
  pinnedPath: _propTypes["default"].string,

  /** See VerticalNav.propTypes */
  hiddenIcons: _propTypes["default"].bool,

  /** See VerticalNav.propTypes */
  pinnableMenus: _propTypes["default"].bool,

  /** See VerticalNav.propTypes */
  isMobile: _propTypes["default"].bool,

  /** See VerticalNav.propTypes */
  navCollapsed: _propTypes["default"].bool,

  /** See VerticalNav.propTypes */
  hoverDelay: _propTypes["default"].number,

  /** See VerticalNav.propTypes */
  blurDelay: _propTypes["default"].number,

  /** See VerticalNav.propTypes */
  showBadges: _propTypes["default"].bool,

  /** Reference to method of the same name in the VerticalNav container. */
  updateNavOnMenuToggleClick: _propTypes["default"].func,

  /** Reference to method of the same name in the VerticalNav container. */
  updateNavOnItemHover: _propTypes["default"].func,

  /** Reference to method of the same name in the VerticalNav container. */
  updateNavOnItemBlur: _propTypes["default"].func,

  /** Reference to method of the same name in the VerticalNav container. */
  updateNavOnItemClick: _propTypes["default"].func,

  /** Reference to method of the same name in the VerticalNav container. */
  updateNavOnPin: _propTypes["default"].func,

  /** Reference to method of the same name in the VerticalNav container. */
  updateNavOnMobileSelection: _propTypes["default"].func,

  /** Reference to method of the same name in the VerticalNav container. */
  setActivePath: _propTypes["default"].func,

  /** Reference to method of the same name in the VerticalNav container. */
  setHoverPath: _propTypes["default"].func,

  /** Reference to method of the same name in the VerticalNav container. */
  setMobilePath: _propTypes["default"].func,

  /** Reference to method of the same name in the VerticalNav container. */
  setPinnedPath: _propTypes["default"].func,

  /** Notifies the main component that an item has used the active prop. */
  setControlledActivePath: _propTypes["default"].func,

  /** Notifies the main component that an item has used the hovered prop. */
  setControlledHoverPath: _propTypes["default"].func,

  /** Notifies the main component that an item has used the selectedOnMobile prop. */
  setControlledMobilePath: _propTypes["default"].func,

  /** Notifies the main component that an item has used the selectedOnMobile prop. */
  setControlledPinnedPath: _propTypes["default"].func,

  /** Reference to method of the same name in the VerticalNav container. */
  forceHideSecondaryMenu: _propTypes["default"].func,

  /** (Internal helper value) */
  showMobileSecondary: _propTypes["default"].bool,

  /** (Internal helper value) */
  showMobileTertiary: _propTypes["default"].bool
};
exports.navContextTypes = navContextTypes;

var getNextDepth = function getNextDepth(depth) {
  return depth === 'primary' && 'secondary' || depth === 'secondary' && 'tertiary' || 'primary';
};

exports.getNextDepth = getNextDepth;

var deepestOf = function deepestOf(pri, sec, ter) {
  return pri && sec && ter || pri && sec || pri;
};

exports.deepestOf = deepestOf;

var componentForDepth = function componentForDepth(depth) {
  if (depth === 'primary') {
    return _index.VerticalNavItem;
  }

  if (depth === 'secondary') {
    return _index.VerticalNavSecondaryItem;
  }

  if (depth === 'tertiary') {
    return _index.VerticalNavTertiaryItem;
  }

  return null;
};

exports.componentForDepth = componentForDepth;

var wrongDepth = function wrongDepth(props, expectedDepth) {
  if (props.depth !== expectedDepth) {
    var componentUsed = componentForDepth(expectedDepth).displayName; // eslint-disable-next-line no-console

    console.warn("Warning: ".concat(componentUsed, " was used at ").concat(props.depth, " depth, but it is for ").concat(expectedDepth, " items."));
  }
};

exports.wrongDepth = wrongDepth;

var correctDepth = function correctDepth(props) {
  var Component = componentForDepth(props.depth); // eslint-disable-next-line no-console

  console.warn("Rendering with ".concat(Component.displayName, " instead."));
  return _react["default"].createElement(Component, props);
};

exports.correctDepth = correctDepth;
correctDepth.propTypes = {
  depth: _propTypes["default"].string
};
correctDepth.defaultProps = {
  depth: 'primary'
};

var isNavItem = function isNavItem(node) {
  return node && node.type && node.type.displayName && node.type.displayName.includes('VerticalNav') && node.type.displayName.includes('Item');
};

exports.isNavItem = isNavItem;

var getItemProps = function getItemProps(props) {
  var itemChildren = (0, _helpers.filterChildren)(props.children, isNavItem);
  return _objectSpread({}, (0, _helpers.selectKeys)(props, Object.keys(itemObjectTypes)), {
    subItems: itemChildren && itemChildren.map(function (child) {
      return getItemProps(child.props);
    })
  });
};

exports.getItemProps = getItemProps;
var NavContextProvider = (0, _recompose.withContext)(navContextTypes, function (providerProps) {
  // The item prop doesn't get included in context, but must be passed to the provider
  // In order to properly include primaryItem and secondaryItem in context.
  var item = providerProps.item,
      primaryItem = providerProps.primaryItem,
      secondaryItem = providerProps.secondaryItem;
  var nextDepth = getNextDepth(providerProps.depth);
  return _objectSpread({}, (0, _helpers.selectKeys)(providerProps, Object.keys(navContextTypes)), {
    depth: nextDepth,
    primaryItem: nextDepth === 'secondary' ? item : primaryItem,
    secondaryItem: nextDepth === 'tertiary' ? item : secondaryItem // We don't need a tertiaryItem in context (see VerticalNavItem.getContextNavItems)

  });
})(function (props) {
  return _react["default"].createElement(_react["default"].Fragment, null, props.children);
}); // WARNING: HACK! HAAAACK HACK HACK HACK WARNING THIS IS A HACK.
// We only use this to apply magic body classes when the prop `dynamicBodyClasses` is used.
// And only for consistency-- the better solution is to manage these classes yourself in the application.

exports.NavContextProvider = NavContextProvider;

var getBodyContentElement = function getBodyContentElement() {
  return document.querySelector('.container-pf-nav-pf-vertical');
};

var setBodyClassIf = function setBodyClassIf(condition, className) {
  var body = getBodyContentElement();

  if (condition) {
    body && body.classList.add(className);
  } else {
    body && body.classList.remove(className);
  }
};

exports.setBodyClassIf = setBodyClassIf;

var addBodyEventListener = function addBodyEventListener(eventName, handler) {
  var body = getBodyContentElement();
  body && body.addEventListener(eventName, handler);
};

exports.addBodyEventListener = addBodyEventListener;

var removeBodyEventListener = function removeBodyEventListener(eventName, handler) {
  var body = getBodyContentElement();
  body && body.removeEventListener(eventName, handler);
};

exports.removeBodyEventListener = removeBodyEventListener;