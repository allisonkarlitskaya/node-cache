import React from 'react';
import { HorizontalNavMenu, HorizontalNavMenuItem } from '../index';
import { MenuItem } from '../../../index';
export const dropdownLevel = React.createElement(HorizontalNavMenu, null, React.createElement(HorizontalNavMenuItem, {
  id: "dropdown",
  title: "Dropdown",
  dropdown: true
}, React.createElement(MenuItem, null, "Link"), React.createElement(MenuItem, null, "Another link"), React.createElement(MenuItem, {
  divider: true
}), React.createElement(MenuItem, null, "Separated link"), React.createElement(MenuItem, {
  divider: true
}), React.createElement(MenuItem, null, "One more separated link")), React.createElement(HorizontalNavMenuItem, {
  id: "dropdown-with-submenu",
  title: "Dropdown with Submenu",
  dropdown: true
}, React.createElement(MenuItem, null, "Link"), React.createElement(MenuItem, null, "Another link"), React.createElement(MenuItem, {
  divider: true
}), React.createElement(MenuItem, null, "Separated link"), React.createElement(MenuItem, {
  divider: true
}), React.createElement(MenuItem, null, "One more separated link"), React.createElement(HorizontalNavMenuItem, {
  id: "more-options",
  title: "More options",
  dropdown: true,
  submenu: true
}, React.createElement(MenuItem, null, "Link"), React.createElement(MenuItem, null, "Another link"), React.createElement(MenuItem, {
  divider: true
}), React.createElement(MenuItem, null, "Separated link"), React.createElement(MenuItem, {
  divider: true
}), React.createElement(MenuItem, null, "One more separated link"))), React.createElement(HorizontalNavMenuItem, {
  id: "dropup-submenu",
  title: "Dropdown with Dropup Submenu",
  dropdown: true,
  dropup: true
}, React.createElement(MenuItem, null, "Link"), React.createElement(MenuItem, null, "Another link"), React.createElement(MenuItem, {
  divider: true
}), React.createElement(MenuItem, null, "Separated link"), React.createElement(MenuItem, {
  divider: true
}), React.createElement(MenuItem, null, "One more separated link"), React.createElement(HorizontalNavMenuItem, {
  id: "more-options",
  title: "More options",
  dropdown: true,
  submenu: true
}, React.createElement(MenuItem, null, "Link"), React.createElement(MenuItem, null, "Another link"), React.createElement(MenuItem, {
  divider: true
}), React.createElement(MenuItem, null, "Separated link"), React.createElement(MenuItem, {
  divider: true
}), React.createElement(MenuItem, null, "One more separated link"))), React.createElement(HorizontalNavMenuItem, {
  id: "pull-left",
  title: "Dropdown with Pull-left Submenu",
  dropdown: true
}, React.createElement(MenuItem, null, "Link"), React.createElement(MenuItem, null, "Another link"), React.createElement(MenuItem, {
  divider: true
}), React.createElement(MenuItem, null, "Separated link"), React.createElement(MenuItem, {
  divider: true
}), React.createElement(MenuItem, null, "One more separated link"), React.createElement(HorizontalNavMenuItem, {
  id: "left-more-options",
  title: "More options",
  dropdown: true,
  submenu: true,
  pullLeft: true
}, React.createElement(MenuItem, null, "Link"), React.createElement(MenuItem, null, "Another link"), React.createElement(MenuItem, {
  divider: true
}), React.createElement(MenuItem, null, "Separated link"), React.createElement(MenuItem, {
  divider: true
}), React.createElement(MenuItem, null, "One more separated link"))), React.createElement(HorizontalNavMenuItem, {
  id: "no-dropdown",
  title: "No Dropdown"
}));