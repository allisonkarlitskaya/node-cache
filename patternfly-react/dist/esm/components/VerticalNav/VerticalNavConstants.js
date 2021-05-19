function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import { withContext } from 'recompose';
import { selectKeys, filterChildren } from '../../common/helpers';
import { VerticalNavItem, VerticalNavSecondaryItem, VerticalNavTertiaryItem } from './index'; // Properties of the nav item object, which can also be passed as
// props directly to Item, SecondaryItem and TertiaryItem components.

const itemObjectTypes = {
  /** Title of the nav item */
  title: PropTypes.string,

  /** Class applied to the item for icons */
  iconClass: PropTypes.string,

  /** Badges rendered on the item */
  badges: PropTypes.arrayOf(PropTypes.shape({
    badgeClass: PropTypes.string,
    tooltip: PropTypes.string,
    count: PropTypes.number,
    iconClass: PropTypes.string
  })),

  /** Sub-items, either can be passed as objects here or as JSX children */
  subItems: PropTypes.array,

  /** Is this the current active item? (used only if tracking this in app) */
  active: PropTypes.bool,

  /** Is this the current hovered item? (used only if tracking this in app) */
  hovered: PropTypes.bool,

  /** Is this the last item we tapped on mobile? (used only if tracking this in app) */
  selectedOnMobile: PropTypes.bool,

  /** Is this item pinned? (used only if tracking this in app) */
  pinned: PropTypes.bool,

  /** Set the activePath to this item initially, but allow that state to change. */
  initialActive: PropTypes.bool,

  /** If this item is a link, what URL it should go to. */
  href: PropTypes.string,

  /** Optional callback for updating hovered prop */
  onHover: PropTypes.func,

  /** Optional callback for updating hovered prop */
  onBlur: PropTypes.func,

  /** Optional callback for updating active prop */
  onClick: PropTypes.func,

  /** Optional additional className(s) to be applied to the item */
  className: PropTypes.string
}; // Props that can be passed to a NavContextProvider

const navContextTypes = {
  /** The path down the item tree so far (made up of each item's idPath() joined by '/') */
  idPath: PropTypes.string,

  /** The depth down the item tree so far. Assume 'primary' if undefined. */
  depth: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),

  /** The nav item object of the ancestor at primary depth, for secondary and tertiary items. */
  primaryItem: PropTypes.shape(itemObjectTypes),
  // *

  /** The nav item object of the ancestor at secondary depth, for tertiary items. */
  secondaryItem: PropTypes.shape(itemObjectTypes),
  // *

  /** See VerticalNav.propTypes */
  activePath: PropTypes.string,

  /** See VerticalNav.propTypes */
  hoverPath: PropTypes.string,

  /** See VerticalNav.propTypes */
  mobilePath: PropTypes.string,

  /** See VerticalNav.propTypes */
  pinnedPath: PropTypes.string,

  /** See VerticalNav.propTypes */
  hiddenIcons: PropTypes.bool,

  /** See VerticalNav.propTypes */
  pinnableMenus: PropTypes.bool,

  /** See VerticalNav.propTypes */
  isMobile: PropTypes.bool,

  /** See VerticalNav.propTypes */
  navCollapsed: PropTypes.bool,

  /** See VerticalNav.propTypes */
  hoverDelay: PropTypes.number,

  /** See VerticalNav.propTypes */
  blurDelay: PropTypes.number,

  /** See VerticalNav.propTypes */
  showBadges: PropTypes.bool,

  /** Reference to method of the same name in the VerticalNav container. */
  updateNavOnMenuToggleClick: PropTypes.func,

  /** Reference to method of the same name in the VerticalNav container. */
  updateNavOnItemHover: PropTypes.func,

  /** Reference to method of the same name in the VerticalNav container. */
  updateNavOnItemBlur: PropTypes.func,

  /** Reference to method of the same name in the VerticalNav container. */
  updateNavOnItemClick: PropTypes.func,

  /** Reference to method of the same name in the VerticalNav container. */
  updateNavOnPin: PropTypes.func,

  /** Reference to method of the same name in the VerticalNav container. */
  updateNavOnMobileSelection: PropTypes.func,

  /** Reference to method of the same name in the VerticalNav container. */
  setActivePath: PropTypes.func,

  /** Reference to method of the same name in the VerticalNav container. */
  setHoverPath: PropTypes.func,

  /** Reference to method of the same name in the VerticalNav container. */
  setMobilePath: PropTypes.func,

  /** Reference to method of the same name in the VerticalNav container. */
  setPinnedPath: PropTypes.func,

  /** Notifies the main component that an item has used the active prop. */
  setControlledActivePath: PropTypes.func,

  /** Notifies the main component that an item has used the hovered prop. */
  setControlledHoverPath: PropTypes.func,

  /** Notifies the main component that an item has used the selectedOnMobile prop. */
  setControlledMobilePath: PropTypes.func,

  /** Notifies the main component that an item has used the selectedOnMobile prop. */
  setControlledPinnedPath: PropTypes.func,

  /** Reference to method of the same name in the VerticalNav container. */
  forceHideSecondaryMenu: PropTypes.func,

  /** (Internal helper value) */
  showMobileSecondary: PropTypes.bool,

  /** (Internal helper value) */
  showMobileTertiary: PropTypes.bool
};

const getNextDepth = depth => depth === 'primary' && 'secondary' || depth === 'secondary' && 'tertiary' || 'primary';

const deepestOf = (pri, sec, ter) => pri && sec && ter || pri && sec || pri;

const componentForDepth = depth => {
  if (depth === 'primary') {
    return VerticalNavItem;
  }

  if (depth === 'secondary') {
    return VerticalNavSecondaryItem;
  }

  if (depth === 'tertiary') {
    return VerticalNavTertiaryItem;
  }

  return null;
};

const wrongDepth = (props, expectedDepth) => {
  if (props.depth !== expectedDepth) {
    const componentUsed = componentForDepth(expectedDepth).displayName; // eslint-disable-next-line no-console

    console.warn(`Warning: ${componentUsed} was used at ${props.depth} depth, but it is for ${expectedDepth} items.`);
  }
};

const correctDepth = props => {
  const Component = componentForDepth(props.depth); // eslint-disable-next-line no-console

  console.warn(`Rendering with ${Component.displayName} instead.`);
  return React.createElement(Component, props);
};

correctDepth.propTypes = {
  depth: PropTypes.string
};
correctDepth.defaultProps = {
  depth: 'primary'
};

const isNavItem = node => node && node.type && node.type.displayName && node.type.displayName.includes('VerticalNav') && node.type.displayName.includes('Item');

const getItemProps = props => {
  const itemChildren = filterChildren(props.children, isNavItem);
  return _objectSpread({}, selectKeys(props, Object.keys(itemObjectTypes)), {
    subItems: itemChildren && itemChildren.map(child => getItemProps(child.props))
  });
};

const NavContextProvider = withContext(navContextTypes, providerProps => {
  // The item prop doesn't get included in context, but must be passed to the provider
  // In order to properly include primaryItem and secondaryItem in context.
  const {
    item,
    primaryItem,
    secondaryItem
  } = providerProps;
  const nextDepth = getNextDepth(providerProps.depth);
  return _objectSpread({}, selectKeys(providerProps, Object.keys(navContextTypes)), {
    depth: nextDepth,
    primaryItem: nextDepth === 'secondary' ? item : primaryItem,
    secondaryItem: nextDepth === 'tertiary' ? item : secondaryItem // We don't need a tertiaryItem in context (see VerticalNavItem.getContextNavItems)

  });
})(props => React.createElement(React.Fragment, null, props.children)); // WARNING: HACK! HAAAACK HACK HACK HACK WARNING THIS IS A HACK.
// We only use this to apply magic body classes when the prop `dynamicBodyClasses` is used.
// And only for consistency-- the better solution is to manage these classes yourself in the application.

const getBodyContentElement = () => document.querySelector('.container-pf-nav-pf-vertical');

const setBodyClassIf = (condition, className) => {
  const body = getBodyContentElement();

  if (condition) {
    body && body.classList.add(className);
  } else {
    body && body.classList.remove(className);
  }
};

const addBodyEventListener = (eventName, handler) => {
  const body = getBodyContentElement();
  body && body.addEventListener(eventName, handler);
};

const removeBodyEventListener = (eventName, handler) => {
  const body = getBodyContentElement();
  body && body.removeEventListener(eventName, handler);
};

export { getNextDepth, deepestOf, componentForDepth, wrongDepth, correctDepth, isNavItem, getItemProps, itemObjectTypes, navContextTypes, NavContextProvider, setBodyClassIf, addBodyEventListener, removeBodyEventListener };