function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getContext } from 'recompose';
import { ListGroup, ListGroupItem } from '../ListGroup';
import { OverlayTrigger } from '../OverlayTrigger';
import { Tooltip } from '../Tooltip';
import VerticalNavBadge from './VerticalNavBadge';
import { filterChildren, hasDisplayName } from '../../common/helpers';
import VerticalNavDividerItem from './VerticalNavDividerItem';
import { NavContextProvider, getNextDepth, componentForDepth, isNavItem, getItemProps, itemObjectTypes, navContextTypes } from './VerticalNavConstants';

class BaseVerticalNavItemHelper extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onItemBlur", noDelay => {
      const {
        primary,
        secondary,
        tertiary
      } = this.getContextNavItems();
      const {
        updateNavOnItemBlur,
        idPath,
        onBlur
      } = this.props;
      updateNavOnItemBlur(primary, secondary, tertiary, this.idPath(), idPath, noDelay, onBlur);
    });

    _defineProperty(this, "onItemClick", event => {
      const {
        primary,
        secondary,
        tertiary
      } = this.getContextNavItems();
      const {
        isMobile,
        preventHref,
        updateNavOnItemClick,
        idPath,
        preventUpdate
      } = this.props;
      const {
        onClick
      } = this.navItem();

      if (preventUpdate(event)) {
        return;
      }

      if (preventHref && !!onClick) {
        event.preventDefault();
      }

      updateNavOnItemClick(primary, secondary, tertiary, this.idPath(), idPath); // Clears all mobile selections

      if (isMobile) {
        this.onMobileSelection(primary, secondary, tertiary); // Applies new mobile selection here
      }

      this.setActive();
      onClick && onClick(primary, secondary, tertiary);
    });

    _defineProperty(this, "onItemHover", () => {
      const {
        primary,
        secondary,
        tertiary
      } = this.getContextNavItems();
      const {
        updateNavOnItemHover,
        idPath,
        onHover
      } = this.props;
      updateNavOnItemHover(primary, secondary, tertiary, this.idPath(), idPath, onHover);
    });

    _defineProperty(this, "onMobileSelection", (primary, secondary, tertiary) => {
      const {
        setMobilePath,
        updateNavOnMobileSelection
      } = this.props;
      setMobilePath(this.idPath());
      updateNavOnMobileSelection(primary, secondary, tertiary);
    });

    _defineProperty(this, "getContextNavItems", () => {
      // We have primary, secondary, and tertiary items as props if they are part of the parent context,
      // but we also want to include the current item when calling handlers.
      const {
        depth,
        primaryItem,
        secondaryItem,
        tertiaryItem
      } = this.props;
      const navItem = this.navItem();
      return {
        primary: depth === 'primary' ? navItem : primaryItem,
        secondary: depth === 'secondary' ? navItem : secondaryItem,
        tertiary: depth === 'tertiary' ? navItem : tertiaryItem
      };
    });

    _defineProperty(this, "setActive", () => {
      this.props.setActivePath(this.idPath());
    });

    _defineProperty(this, "id", () => {
      const {
        id,
        title
      } = this.navItem(null, true); // Need to ignorePath here so we don't get an infinite call stack...

      return id || title || this.props.index;
    });

    _defineProperty(this, "idPath", () => `${this.props.idPath}${this.id()}/`);

    _defineProperty(this, "navItem", (oldProps, ignorePath) => {
      const props = oldProps || this.props; // Properties of the item object take priority over individual item props

      const item = _objectSpread({}, getItemProps(props), {}, props.item); // Automatically set the active, hovered, and selectedOnMobile properties based on current path...
      // ...But don't call idPath() when called from inside id(), or there will be an infinite loop.


      const valOrOnPath = (val, path) => val || (ignorePath ? null : path && path.startsWith(this.idPath()));

      return _objectSpread({}, item, {
        active: valOrOnPath(item.active, props.activePath),
        hovered: valOrOnPath(item.hovered, props.hoverPath),
        selectedOnMobile: valOrOnPath(item.selectedOnMobile, props.mobilePath),
        pinned: valOrOnPath(item.pinned, props.pinnedPath)
      });
    });

    _defineProperty(this, "pinNextDepth", () => {
      const {
        isMobile,
        depth,
        setMobilePath,
        forceHideSecondaryMenu,
        setPinnedPath,
        updateNavOnPin,
        idPath,
        pinnedPath
      } = this.props;
      const nextDepth = getNextDepth(depth);

      if (isMobile) {
        // On mobile, the pin buttons act as back buttons instead.
        if (depth === 'primary') {
          // Going back to primary nav clears all selection.
          setMobilePath(null);
        } else if (depth === 'secondary') {
          // Going back to secondary nav de-selects this item and re-selects the parent.
          setMobilePath(idPath); // idPath prop, which is parent's path, not this.idPath().
        }
      } else {
        setPinnedPath(!pinnedPath ? this.idPath() : null);

        if (pinnedPath) {
          forceHideSecondaryMenu();
          this.onItemBlur(true);
        }
      }

      updateNavOnPin(this.navItem(), nextDepth, !pinnedPath);
    });
  }

  componentDidMount() {
    if (this.props.active) {
      this.props.setControlledActivePath(true);
    }

    if (this.props.hovered) {
      this.props.setControlledHoverPath(true);
    }

    if (this.props.selectedOnMobile) {
      this.props.setControlledMobilePath(true);
    }

    if (this.props.pinned) {
      this.props.setControlledPinnedPath(true);
    }

    if (this.navItem().initialActive) {
      this.setActive();
    }
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    const {
      setControlledActivePath,
      setControlledHoverPath,
      setControlledMobilePath,
      setControlledPinnedPath
    } = this.props;

    if (!this.props.active && newProps.active) {
      // If the active prop is being added, make sure the activePath is in sync.
      if (newProps.activePath !== this.idPath()) {
        this.setActive();
      }

      setControlledActivePath(true);
    }

    if (!this.props.hovered && newProps.hovered) {
      // If the hovered prop is being added, make sure the hoverPath is in sync.
      if (newProps.hoverPath !== this.idPath()) {
        this.setHovered();
      }

      setControlledHoverPath(true);
    }

    if (!this.props.selectedOnMobile && newProps.selectedOnMobile) {
      // If the selectedOnMobile prop is being added, make sure the mobilePath is in sync.
      if (newProps.mobilePath !== this.idPath()) {
        this.setMobilePath(this.idPath());
      }

      setControlledMobilePath(true);
    }

    if (!this.props.pinned && newProps.pinned) {
      // If the pinned prop is being added, make sure the pinnedPath is in sync.
      if (newProps.pinnedPath !== this.idPath()) {
        this.setPinnedPath(this.idPath());
      }

      setControlledPinnedPath(true);
    }
  }

  setHovered() {
    this.props.setHoverPath(this.idPath());
  }

  render() {
    const {
      pinnableMenus,
      hiddenIcons,
      isDivider,
      navCollapsed,
      showMobileSecondary,
      showMobileTertiary,
      showBadges,
      children,
      isMobile,
      pinnedPath,
      id,
      dataID
    } = this.props; // The nav item can either be passed directly as one item object prop, or as individual props.

    const navItem = this.navItem();
    const {
      active,
      hovered,
      selectedOnMobile,
      pinned,
      title,
      iconClass,
      badges,
      subItems,
      href,
      onClick,
      className
    } = navItem;
    const depth = this.props.depth || 'primary';
    const nextDepth = getNextDepth(depth);
    const NextDepthItem = componentForDepth(nextDepth);
    const childItemComponents = filterChildren(children, isNavItem) || subItems && subItems.length > 0 && subItems.map(childItem => React.createElement(NextDepthItem, {
      item: childItem,
      key: childItem.title
    }));

    if (!childItemComponents && !href && !onClick) {
      // eslint-disable-next-line
      console.warn('Warning: Non-navigable item at', this.idPath(), '\nNav items should have one or more of: subItems, href, onClick.');
    }

    const childBadgeComponents = filterChildren(children, child => hasDisplayName(child, VerticalNavBadge.displayName)) || badges && badges.length > 0 && badges.map(badge => {
      const badgeKey = badge.badgeClass || badge.iconClass || badge.tooltip || badge.count;
      return React.createElement(VerticalNavBadge, _extends({}, badge, {
        key: badgeKey
      }));
    });
    const onPinnedPath = pinnedPath && pinnedPath.startsWith(this.idPath());
    const icon = iconClass && React.createElement("span", {
      className: classNames(iconClass, {
        hidden: hiddenIcons
      }),
      title: title
    });
    const item = React.createElement(ListGroupItem, {
      listItem: true // Renders as <li>. Other props can change this, see logic in react-bootstrap's ListGroupItem.
      ,
      className: classNames({
        [`${nextDepth}-nav-item-pf`]: depth !== 'tertiary' && childItemComponents && childItemComponents.length > 0,
        active: active || pinned && pinnableMenus,
        // This is the only class we have at the tertiary depth.
        'is-hover': pinnableMenus && onPinnedPath || depth !== 'tertiary' && hovered,
        // This class is present at primary and secondary depths if selectedOnMobile is true,
        // except for the primary depth, where it is only present if showMobileSecondary is also true.
        'mobile-nav-item-pf': selectedOnMobile && (depth === 'primary' && showMobileSecondary || depth === 'secondary'),
        // This class is confusingly named, but the logic is more readable.
        'mobile-secondary-item-pf': selectedOnMobile && depth === 'primary' && showMobileTertiary // I don't know, that's just how this stuff was in patternfly-ng...

      }, className),
      onMouseEnter: this.onItemHover // NOTE onItemBlur takes a boolean, we want to prevent it being passed a truthy event.
      ,
      onMouseLeave: e => this.onItemBlur(false)
    }, React.createElement("a", {
      id: id,
      "data-id": dataID,
      href: href || '#',
      onClick: this.onItemClick
    }, depth === 'primary' && icon && (!isMobile && navCollapsed ? React.createElement(OverlayTrigger, {
      placement: "bottom",
      overlay: React.createElement(Tooltip, {
        id: title
      }, title)
    }, icon) : icon), React.createElement("span", {
      className: "list-group-item-value"
    }, title), showBadges && childBadgeComponents && React.createElement("div", {
      className: "badge-container-pf"
    }, childBadgeComponents)), childItemComponents && childItemComponents.length > 0 && React.createElement("div", {
      className: `nav-pf-${nextDepth}-nav`
    }, React.createElement("div", {
      className: "nav-item-pf-header"
    }, (pinnableMenus || isMobile) && React.createElement("a", {
      className: classNames(`${nextDepth}-collapse-toggle-pf`, {
        collapsed: onPinnedPath
      }),
      onClick: this.pinNextDepth
    }), React.createElement("span", null, title)), React.createElement(NavContextProvider, _extends({}, this.props, {
      idPath: this.idPath(),
      item: navItem
    }), React.createElement(ListGroup, {
      componentClass: "ul"
    }, childItemComponents))));
    const divider = React.createElement(ListGroupItem, {
      listItem: true
    }, React.createElement(VerticalNavDividerItem, {
      title: title
    }));
    return isDivider ? divider : item;
  }

}

BaseVerticalNavItemHelper.propTypes = _objectSpread({}, itemObjectTypes, {}, navContextTypes, {
  /** Properties of the nav item, as an object. Can alternatively be passed as individual props. */
  item: PropTypes.shape(itemObjectTypes),

  /**
   * Sub-items, passed as JSX children (SecondaryItem, TertiaryItem).
   * Can alternatively pass subItems array as part of item or as its own prop.
   */
  children: PropTypes.node,
  title: PropTypes.string,

  /** Divider bool */
  isDivider: PropTypes.bool,

  /** should Prevent Href */
  preventHref: PropTypes.bool,

  /** anchor id */
  id: PropTypes.string,

  /** anchor data-id */
  dataID: PropTypes.string,
  preventUpdate: PropTypes.func
});
BaseVerticalNavItemHelper.defaultProps = {
  item: {},
  children: null,
  title: '',
  isDivider: false,
  preventHref: true,
  id: null,
  dataID: null,
  preventUpdate: event => false
};
const VerticalNavItemHelper = getContext(navContextTypes)(BaseVerticalNavItemHelper);
VerticalNavItemHelper.displayName = 'VerticalNavItemHelper';
VerticalNavItemHelper.propTypes = _objectSpread({}, BaseVerticalNavItemHelper.propTypes);
export default VerticalNavItemHelper;