function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { VerticalNav } from '../../../index';
export const basicExample = (props, firstItemClass) => React.createElement(VerticalNav, _extends({}, props, {
  showBadges: true
}), React.createElement(VerticalNav.Masthead, {
  title: "Patternfly React"
}), React.createElement(VerticalNav.Item, {
  title: "Item 1",
  iconClass: "fa fa-home",
  initialActive: true,
  onClick: () => alert('Item 1!'),
  className: firstItemClass
}, React.createElement(VerticalNav.Badge, {
  count: 42
})), React.createElement(VerticalNav.Item, {
  title: "Item 2",
  iconClass: "fa fa-star"
}, React.createElement(VerticalNav.SecondaryItem, {
  title: "Item 2-A",
  onClick: () => alert('Item 2-A!')
}, React.createElement(VerticalNav.Badge, {
  count: 9999,
  tooltip: "Whoa, that's a lot"
})), React.createElement(VerticalNav.SecondaryItem, {
  title: "Item 2-B (external link)",
  href: "http://www.patternfly.org"
}), React.createElement(VerticalNav.SecondaryItem, {
  title: "Divider",
  isDivider: true
}), React.createElement(VerticalNav.SecondaryItem, {
  title: "Item 2-C"
})), React.createElement(VerticalNav.Item, {
  title: "Item 3",
  iconClass: "fa fa-info-circle"
}, React.createElement(VerticalNav.SecondaryItem, {
  title: "Item 3-A"
}), React.createElement(VerticalNav.SecondaryItem, {
  title: "Divider",
  isDivider: true
}), React.createElement(VerticalNav.SecondaryItem, {
  title: "Item 3-B"
}, React.createElement(VerticalNav.TertiaryItem, {
  title: "Item 3-B-i"
}), React.createElement(VerticalNav.TertiaryItem, {
  title: "Item 3-B-ii"
}), React.createElement(VerticalNav.TertiaryItem, {
  title: "Item 3-B-iii"
})), React.createElement(VerticalNav.SecondaryItem, {
  title: "Item 3-C"
})));