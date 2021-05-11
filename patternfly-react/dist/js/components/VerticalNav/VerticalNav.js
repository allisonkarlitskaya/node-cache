"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ListGroup = require("../ListGroup");

var _VerticalNavItem = _interopRequireDefault(require("./VerticalNavItem"));

var _VerticalNavMasthead = _interopRequireDefault(require("./VerticalNavMasthead"));

var _helpers = require("../../common/helpers");

var _Timer = _interopRequireDefault(require("../../common/Timer"));

var _controlled = _interopRequireDefault(require("../../common/controlled"));

var _patternfly = require("../../common/patternfly");

var _VerticalNavConstants = require("./VerticalNavConstants");

var _VerticalNavSecondaryItem = _interopRequireDefault(require("./VerticalNavSecondaryItem"));

var _VerticalNavTertiaryItem = _interopRequireDefault(require("./VerticalNavTertiaryItem"));

var _VerticalNavBrand = _interopRequireDefault(require("./VerticalNavBrand"));

var _VerticalNavIconBar = _interopRequireDefault(require("./VerticalNavIconBar"));

var _VerticalNavBadge = _interopRequireDefault(require("./VerticalNavBadge"));

var _VerticalNavDividerItem = _interopRequireDefault(require("./VerticalNavDividerItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

/**
 * VerticalNav - The Vertical Navigation pattern
 * http://www.patternfly.org/pattern-library/navigation/vertical-navigation/
 */
var BaseVerticalNav = /*#__PURE__*/function (_React$Component) {
  _inherits(BaseVerticalNav, _React$Component);

  function BaseVerticalNav() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BaseVerticalNav);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BaseVerticalNav)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      forceHidden: false,
      // eslint-disable-line react/no-unused-state
      controlledActivePath: false,
      controlledHoverPath: false,
      controlledMobilePath: false,
      controlledPinnedPath: false
    });

    _defineProperty(_assertThisInitialized(_this), "onLayoutChange", function (newLayout) {
      var _this$props = _this.props,
          onLayoutChange = _this$props.onLayoutChange,
          setControlledState = _this$props.setControlledState;
      setControlledState({
        isMobile: newLayout === 'mobile'
      });
      onLayoutChange && onLayoutChange(newLayout);
    });

    _defineProperty(_assertThisInitialized(_this), "setActivePath", function (activePath) {
      if (!_this.state.controlledActivePath) {
        _this.props.setControlledState({
          activePath: activePath
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setControlledActivePath", function (controlledActivePath) {
      _this.setState({
        controlledActivePath: controlledActivePath
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setControlledHoverPath", function (controlledHoverPath) {
      _this.setState({
        controlledHoverPath: controlledHoverPath
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setControlledMobilePath", function (controlledMobilePath) {
      _this.setState({
        controlledMobilePath: controlledMobilePath
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setControlledPinnedPath", function (controlledPinnedPath) {
      _this.setState({
        controlledPinnedPath: controlledPinnedPath
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setHoverPath", function (hoverPath) {
      if (!_this.state.controlledHoverPath) {
        _this.props.setControlledState(_objectSpread({
          hoverPath: hoverPath
        }, hoverPath === null ? {
          showMobileNav: false
        } : {}));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setMobilePath", function (mobilePath) {
      if (!_this.state.controlledMobilePath) {
        _this.props.setControlledState({
          mobilePath: mobilePath
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setPinnedPath", function (pinnedPath) {
      if (!_this.state.controlledPinnedPath) {
        _this.props.setControlledState({
          pinnedPath: pinnedPath
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "hoverTimer", new _Timer["default"]());

    _defineProperty(_assertThisInitialized(_this), "clearBodyClasses", function () {
      if (_this.props.dynamicBodyClasses) {
        (0, _VerticalNavConstants.setBodyClassIf)(false, 'collapsed-nav');
        (0, _VerticalNavConstants.setBodyClassIf)(false, 'hidden-nav');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "collapseMenu", function () {
      var _this$props2 = _this.props,
          onCollapse = _this$props2.onCollapse,
          setControlledState = _this$props2.setControlledState;
      setControlledState({
        navCollapsed: true
      });
      onCollapse && onCollapse();
    });

    _defineProperty(_assertThisInitialized(_this), "expandMenu", function () {
      var _this$props3 = _this.props,
          onExpand = _this$props3.onExpand,
          setControlledState = _this$props3.setControlledState;
      setControlledState({
        navCollapsed: false
      });
      onExpand && onExpand();
    });

    _defineProperty(_assertThisInitialized(_this), "forceHideSecondaryMenu", function () {
      _this.setState({
        forceHidden: true
      }); // eslint-disable-line react/no-unused-state


      setTimeout(function () {
        _this.setState({
          forceHidden: false
        }); // eslint-disable-line react/no-unused-state

      }, 500);
    });

    _defineProperty(_assertThisInitialized(_this), "handleBodyClick", function () {
      // Clear hover state on body click. Helps especially when using blurDisabled prop.
      _this.setHoverPath(null);
    });

    _defineProperty(_assertThisInitialized(_this), "navigateToItem", function (item) {
      var onNavigate = _this.props.onNavigate;
      onNavigate(item); // Note: This should become router-aware later on.
    });

    _defineProperty(_assertThisInitialized(_this), "updateBodyClasses", function () {
      // Note: Updating the body element classes from here like this is a hacky, non-react-y pattern.
      // It's only here for consistency. See comments on getBodyContentElement in ./constants.js.
      var _this$props4 = _this.props,
          dynamicBodyClasses = _this$props4.dynamicBodyClasses,
          navCollapsed = _this$props4.navCollapsed,
          pinnedPath = _this$props4.pinnedPath,
          isMobile = _this$props4.isMobile;
      var collapsed = navCollapsed && pinnedPath === null;

      if (dynamicBodyClasses) {
        (0, _VerticalNavConstants.setBodyClassIf)(!isMobile && collapsed, 'collapsed-nav');
        (0, _VerticalNavConstants.setBodyClassIf)(isMobile, 'hidden-nav');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateNavOnItemBlur", function (primary, secondary, tertiary, idPath, parentPath, noDelay, callback) {
      var _this$props5 = _this.props,
          hoverPath = _this$props5.hoverPath,
          blurDelay = _this$props5.blurDelay,
          blurDisabled = _this$props5.blurDisabled,
          setControlledState = _this$props5.setControlledState;
      var item = (0, _VerticalNavConstants.deepestOf)(primary, secondary, tertiary);
      var hovered = hoverPath && hoverPath.startsWith(idPath);

      _this.hoverTimer.clearTimer();

      if (hovered) {
        var doBlur = function doBlur() {
          if (!blurDisabled) {
            // IMPORTANT: We reference this.props below for the hoverPath value when the timeout fires.
            // If we just use the hoverPath in scope from above, it is from when the timeout was set.
            if (idPath === _this.props.hoverPath) {
              // Only bump up the hover path if it's still set to the item we're blurring
              setControlledState({
                hoverPath: parentPath
              });
            }

            callback && callback(primary, secondary, tertiary);
          }
        };

        if (item.subItems && item.subItems.length > 0) {
          if (noDelay) {
            doBlur();
          } else {
            _this.hoverTimer.startTimer(doBlur, blurDelay);
          }
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateNavOnItemClick", function (primary, secondary, tertiary, idPath, parentPath) {
      var _this$props6 = _this.props,
          onItemClick = _this$props6.onItemClick,
          hoverPath = _this$props6.hoverPath,
          hoverDisabled = _this$props6.hoverDisabled,
          isMobile = _this$props6.isMobile;

      _this.hoverTimer.skipTimer();

      var item = (0, _VerticalNavConstants.deepestOf)(primary, secondary, tertiary);
      var isLeafItem = !item.subItems || item.subItems.length === 0;

      if (isMobile) {
        _this.setMobilePath(null);
      }

      if (isLeafItem) {
        _this.setHoverPath(null);
      } else if (hoverDisabled && hoverPath === idPath) {
        // Clicking the currently-"hovered" item in hoverDisabled un-"hovers" it.
        _this.setHoverPath(parentPath);
      }

      if (isLeafItem || !isMobile) {
        _this.navigateToItem(item);
      }

      onItemClick && onItemClick(primary, secondary, tertiary);
    });

    _defineProperty(_assertThisInitialized(_this), "updateNavOnItemHover", function (primary, secondary, tertiary, idPath, parentPath, callback) {
      var _this$props7 = _this.props,
          onItemHover = _this$props7.onItemHover,
          hoverPath = _this$props7.hoverPath,
          hoverDelay = _this$props7.hoverDelay,
          hoverDisabled = _this$props7.hoverDisabled,
          isMobile = _this$props7.isMobile;
      var item = (0, _VerticalNavConstants.deepestOf)(primary, secondary, tertiary);
      var hovered = hoverPath && hoverPath.startsWith(idPath);
      var targetPath = item.subItems && item.subItems.length > 0 ? idPath : parentPath;

      var that = _assertThisInitialized(_this);

      if (!isMobile) {
        _this.hoverTimer.clearTimer();

        if (!hovered) {
          _this.hoverTimer.startTimer(function (skipped) {
            if (skipped || !hoverDisabled) {
              that.setHoverPath(targetPath);
              callback && callback(primary, secondary, tertiary);
              onItemHover && onItemHover(primary, secondary, tertiary);
            }
          }, hoverDelay);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateNavOnMenuToggleClick", function () {
      var _this$props8 = _this.props,
          onMenuToggleClick = _this$props8.onMenuToggleClick,
          isMobile = _this$props8.isMobile,
          showMobileNav = _this$props8.showMobileNav,
          navCollapsed = _this$props8.navCollapsed,
          setControlledState = _this$props8.setControlledState;

      if (isMobile) {
        if (showMobileNav) {
          setControlledState({
            showMobileNav: false
          });
        } else {
          _this.setMobilePath(null);

          setControlledState({
            showMobileNav: true
          });
        }
      } else if (navCollapsed) {
        _this.expandMenu();
      } else {
        _this.collapseMenu();
      }

      onMenuToggleClick && onMenuToggleClick();
    });

    _defineProperty(_assertThisInitialized(_this), "updateNavOnMobileSelection", function (primary, secondary, tertiary) {
      var onMobileSelection = _this.props.onMobileSelection; // All the behavior here is handled by mobilePath and setMobilePath,
      // but we still make a callback available here.

      onMobileSelection && onMobileSelection(primary, secondary, tertiary);
    });

    _defineProperty(_assertThisInitialized(_this), "updateNavOnPin", function (item, depth, pinned) {
      var _this$props9 = _this.props,
          onItemPin = _this$props9.onItemPin,
          isMobile = _this$props9.isMobile;

      if (!isMobile) {
        onItemPin && onItemPin(item, depth, pinned);
      }
    });

    return _this;
  }

  _createClass(BaseVerticalNav, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateBodyClasses();

      _patternfly.layout.addChangeListener(this.onLayoutChange);

      (0, _VerticalNavConstants.addBodyEventListener)('mousedown', this.handleBodyClick);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps) {
      var bodyClassProps = ['navCollapsed', 'pinnedPath', 'showMobileNav', 'isMobile'];

      if ((0, _helpers.propsChanged)(bodyClassProps, oldProps, this.props)) {
        this.updateBodyClasses();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // Clear any timers so they don't trigger while the component is unmounted.
      this.hoverTimer.clearTimer();
      this.clearBodyClasses();

      _patternfly.layout.removeChangeListener(this.onLayoutChange);

      (0, _VerticalNavConstants.removeBodyEventListener)('mousedown', this.handleBodyClick);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props10 = this.props,
          items = _this$props10.items,
          children = _this$props10.children; // Nav items may be passed either as nested VerticalNavItem children, or as nested items in a prop.
      // The items prop will take priority, if present, and must be an array of item objects (not React components).
      // If the items prop is not present, items must be expressed as VerticalNavItem children instead.

      var itemsFromChildren = (0, _helpers.filterChildren)(children, function (child) {
        return (0, _helpers.hasDisplayName)(child, _VerticalNavItem["default"].displayName);
      });
      var itemsFromProps = items && items.length > 0 && items.map(function (primaryItem, i) {
        return _react["default"].createElement(_VerticalNavItem["default"], {
          item: primaryItem,
          key: "primary_".concat(primaryItem.title)
        }, primaryItem.subItems && primaryItem.subItems.map(function (secondaryItem) {
          return _react["default"].createElement(_VerticalNavSecondaryItem["default"], {
            id: secondaryItem.id,
            dataID: secondaryItem.dataID,
            isDivider: secondaryItem.isDivider,
            preventHref: secondaryItem.preventHref,
            preventUpdate: secondaryItem.preventUpdate,
            item: secondaryItem,
            key: "secondary_".concat(secondaryItem.title)
          }, secondaryItem.subItems && secondaryItem.subItems.map(function (tertiaryItem) {
            return _react["default"].createElement(_VerticalNavTertiaryItem["default"], {
              item: tertiaryItem,
              key: "tertiary_".concat(tertiaryItem.title)
            });
          }));
        }));
      });
      var itemComponents = itemsFromProps || itemsFromChildren || [];
      var _this$props11 = this.props,
          hiddenIcons = _this$props11.hiddenIcons,
          pinnableMenus = _this$props11.pinnableMenus,
          showBadges = _this$props11.showBadges,
          forceHidden = _this$props11.forceHidden,
          hideMasthead = _this$props11.hideMasthead,
          persistentSecondary = _this$props11.persistentSecondary,
          hoverDelay = _this$props11.hoverDelay,
          blurDelay = _this$props11.blurDelay,
          isMobile = _this$props11.isMobile,
          showMobileNav = _this$props11.showMobileNav,
          masthead = _this$props11.masthead,
          navCollapsed = _this$props11.navCollapsed,
          activePath = _this$props11.activePath,
          hoverPath = _this$props11.hoverPath,
          mobilePath = _this$props11.mobilePath,
          pinnedPath = _this$props11.pinnedPath;

      var mastheadElem = masthead || _react["default"].createElement("nav", {
        className: (0, _classnames["default"])('navbar navbar-pf-vertical')
      }, (0, _helpers.findChild)(children, function (child) {
        return (0, _helpers.hasDisplayName)(child, _VerticalNavMasthead["default"].displayName);
      }));

      var getPathDepth = function getPathDepth(path) {
        return path && path.split('/').filter(function (s) {
          return s !== '';
        }).length;
      };

      var mobileDepth = getPathDepth(mobilePath);
      var hoverDepth = getPathDepth(hoverPath);
      var pinnedDepth = getPathDepth(pinnedPath);
      var showMobileSecondary = isMobile && mobileDepth >= 1;
      var showMobileTertiary = isMobile && mobileDepth >= 2;
      var hoverSecondaryNav = hoverDepth >= 1;
      var hoverTertiaryNav = hoverDepth >= 2;
      var pinnedSecondaryNav = pinnedDepth >= 1;
      var pinnedTertiaryNav = pinnedDepth >= 2;
      return _react["default"].createElement(_VerticalNavConstants.NavContextProvider, {
        idPath: "/",
        updateNavOnMenuToggleClick: this.updateNavOnMenuToggleClick,
        updateNavOnItemHover: this.updateNavOnItemHover,
        updateNavOnItemBlur: this.updateNavOnItemBlur,
        updateNavOnItemClick: this.updateNavOnItemClick,
        updateNavOnMobileSelection: this.updateNavOnMobileSelection,
        setActivePath: this.setActivePath,
        setHoverPath: this.setHoverPath,
        setMobilePath: this.setMobilePath,
        setPinnedPath: this.setPinnedPath,
        setControlledActivePath: this.setControlledActivePath,
        setControlledHoverPath: this.setControlledHoverPath,
        setControlledMobilePath: this.setControlledMobilePath,
        setControlledPinnedPath: this.setControlledPinnedPath,
        activePath: activePath,
        hoverPath: hoverPath,
        mobilePath: mobilePath,
        pinnedPath: pinnedPath,
        hiddenIcons: hiddenIcons,
        pinnableMenus: pinnableMenus,
        isMobile: isMobile,
        showMobileSecondary: showMobileSecondary,
        showMobileTertiary: showMobileTertiary,
        showBadges: showBadges,
        navCollapsed: navCollapsed,
        updateNavOnPin: this.updateNavOnPin,
        forceHideSecondaryMenu: this.forceHideSecondaryMenu,
        hoverDelay: hoverDelay,
        blurDelay: blurDelay
      }, !hideMasthead && mastheadElem, _react["default"].createElement("div", {
        className: (0, _classnames["default"])('nav-pf-vertical nav-pf-vertical-with-sub-menus', {
          'nav-pf-vertical-collapsible-menus': pinnableMenus,
          'hidden-icons-pf': hiddenIcons,
          'nav-pf-vertical-with-badges': showBadges,
          'nav-pf-persistent-secondary': persistentSecondary,
          'show-mobile-secondary': showMobileSecondary,
          'show-mobile-tertiary': showMobileTertiary,
          'hover-secondary-nav-pf': hoverSecondaryNav,
          'hover-tertiary-nav-pf': hoverTertiaryNav,
          'collapsed-secondary-nav-pf': pinnableMenus && pinnedSecondaryNav,
          'collapsed-tertiary-nav-pf': pinnableMenus && pinnedTertiaryNav,
          hidden: isMobile,
          collapsed: !isMobile && navCollapsed,
          'force-hide-secondary-nav-pf': forceHidden,
          'show-mobile-nav': showMobileNav
        })
      }, _react["default"].createElement(_ListGroup.ListGroup, {
        componentClass: "ul"
      }, itemComponents)));
    }
  }]);

  return BaseVerticalNav;
}(_react["default"].Component);

var controlledState = {
  // NOTE: If you use any of these props, be sure to also use the corresponding callbacks/handlers.
  // These props override values of the same name set by setControlledState().
  types: {
    /** Use the mobile layout of the component. Corresponds to onLayoutChange callback. */
    isMobile: _propTypes["default"].bool,

    /** Display the nav in mobile mode */
    showMobileNav: _propTypes["default"].bool,

    /** Collapse the nav. Corresponds to onMenuToggleClick or onCollapse and onExpand callbacks. */
    navCollapsed: _propTypes["default"].bool,

    /** The idPath matching the currently active item. Corresponds to onItemClick callback. */
    activePath: _propTypes["default"].string,

    /** The idPath matching the currently hovered item. Corresponds to onItemHover and onItemBlur callbacks. */
    hoverPath: _propTypes["default"].string,

    /** The idPath matching the currently selected item on mobile. Corresponds to onMobileSelection callback. */
    mobilePath: _propTypes["default"].string,

    /** The idPath matching the currently pinned item. Corresponds to onItemPin callback. */
    pinnedPath: _propTypes["default"].string
  },
  defaults: {
    isMobile: _patternfly.layout.is('mobile'),
    showMobileNav: null,
    navCollapsed: null,
    activePath: null,
    hoverPath: null,
    mobilePath: null,
    pinnedPath: null
  }
};
BaseVerticalNav.propTypes = _objectSpread({}, controlledState.types, {
  /** Navigation items, passed as an array of objects (as opposed to JSX children w/ props) */
  items: _propTypes["default"].arrayOf(_propTypes["default"].shape(_VerticalNavConstants.itemObjectTypes)),

  /** Enables the pin buttons on the active submenu. */
  pinnableMenus: _propTypes["default"].bool,

  /** Automatically applies classes to the body element when the layout changes. */
  dynamicBodyClasses: _propTypes["default"].bool,

  /** Hide all icons */
  hiddenIcons: _propTypes["default"].bool,

  /** Show badges in nav items */
  showBadges: _propTypes["default"].bool,

  /** Don't show items on hover, require a click */
  hoverDisabled: _propTypes["default"].bool,

  /** Don't hide items on blur, require a click elsewhere */
  blurDisabled: _propTypes["default"].bool,

  /** Force the nav to be hidden temporarily. */
  forceHidden: _propTypes["default"].bool,

  /** Hide the masthead and notification drawer areas. */
  hideMasthead: _propTypes["default"].bool,

  /** Persist the secondary nav */
  persistentSecondary: _propTypes["default"].bool,

  /** Delay between mouse hover and menu show in ms */
  hoverDelay: _propTypes["default"].number,

  /** Delay between mouse blur and menu hide in ms */
  blurDelay: _propTypes["default"].number,

  /**  */
  masthead: _propTypes["default"].node,

  /** Optional callback for updating isMobile prop */
  onLayoutChange: _propTypes["default"].func,
  // eslint-disable-line react/require-default-props

  /** Optional callback for updating navCollapsed and showMobileNav props (option 1) */
  onMenuToggleClick: _propTypes["default"].func,

  /** Optional callback for updating navCollapsed and showMobileNav props (option 2) */
  onCollapse: _propTypes["default"].func,

  /** Optional callback for updating navCollapsed and showMobileNav props (option 2) */
  onExpand: _propTypes["default"].func,

  /** Optional callback for updating active props on items or activePath prop. Only called on leaf item click. */
  onNavigate: _propTypes["default"].func,

  /** Optional callback for updating active props on items or activePath prop. Called on any item click. */
  onItemClick: _propTypes["default"].func,

  /** Optional callback for updating hovered prop on items */
  onItemHover: _propTypes["default"].func,

  /** Optional callback for updating hovered prop on items */
  onItemBlur: _propTypes["default"].func,
  // eslint-disable-line react/no-unused-prop-types

  /** Optional callback for updating pinned props on items or pinnedPath prop. */
  onItemPin: _propTypes["default"].func,

  /** Optional callback for updating mobilePath prop */
  onMobileSelection: _propTypes["default"].func,
  // *

  /** Navigation items, passed as Item, SecondaryItem and TertiaryItem children. */
  children: _propTypes["default"].node,

  /** Helper injected by `controlled()` to manage controlledStateTypes values */
  setControlledState: _propTypes["default"].func // eslint-disable-line react/require-default-props

});
BaseVerticalNav.defaultProps = {
  items: null,
  pinnableMenus: false,
  dynamicBodyClasses: true,
  hiddenIcons: false,
  showBadges: false,
  hoverDisabled: false,
  blurDisabled: false,
  forceHidden: false,
  hideMasthead: false,
  persistentSecondary: true,
  hoverDelay: 500,
  blurDelay: 700,
  masthead: null,
  onMenuToggleClick: null,
  onCollapse: null,
  onExpand: null,
  onItemClick: null,
  onItemHover: null,
  onItemBlur: null,
  onItemPin: null,
  onMobileSelection: null,
  onNavigate: _helpers.noop,
  children: null
};
var NoPersist = (0, _controlled["default"])(controlledState)(BaseVerticalNav);
var WithPersist = (0, _controlled["default"])(_objectSpread({}, controlledState, {
  persist: ['navCollapsed', 'pinnedPath']
}))(BaseVerticalNav);

var VerticalNav = function VerticalNav(_ref) {
  var persist = _ref.persist,
      props = _objectWithoutProperties(_ref, ["persist"]);

  return persist ? _react["default"].createElement(WithPersist, props) : _react["default"].createElement(NoPersist, props);
};

VerticalNav.propTypes = _objectSpread({}, BaseVerticalNav.propTypes, {
  persist: _propTypes["default"].bool
});
VerticalNav.defaultProps = _objectSpread({}, BaseVerticalNav.defaultProps, {
  persist: true
});
VerticalNav.displayName = 'VerticalNav';
VerticalNav.NoPersist = NoPersist;
VerticalNav.WithPersist = WithPersist;
VerticalNav.Masthead = _VerticalNavMasthead["default"];
VerticalNav.Item = _VerticalNavItem["default"];
VerticalNav.SecondaryItem = _VerticalNavSecondaryItem["default"];
VerticalNav.TertiaryItem = _VerticalNavTertiaryItem["default"];
VerticalNav.Brand = _VerticalNavBrand["default"];
VerticalNav.IconBar = _VerticalNavIconBar["default"];
VerticalNav.Badge = _VerticalNavBadge["default"];
VerticalNav.Divider = _VerticalNavDividerItem["default"];
var _default = VerticalNav;
exports["default"] = _default;