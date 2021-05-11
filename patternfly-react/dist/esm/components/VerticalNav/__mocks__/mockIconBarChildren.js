import React from 'react';
import { Icon, Dropdown, MenuItem } from '../../../index';
export const MockIconBarChildren = props => React.createElement(React.Fragment, null, React.createElement("li", {
  className: "drawer-pf-trigger"
}, React.createElement("a", {
  className: "nav-item-iconic"
}, React.createElement(Icon, {
  name: "bell"
}))), React.createElement(Dropdown, {
  componentClass: "li",
  id: "help"
}, React.createElement(Dropdown.Toggle, {
  useAnchor: true,
  className: "nav-item-iconic"
}, React.createElement(Icon, {
  type: "pf",
  name: "help"
})), React.createElement(Dropdown.Menu, null, React.createElement(MenuItem, null, "Help"), React.createElement(MenuItem, null, "About"))), React.createElement(Dropdown, {
  componentClass: "li",
  id: "user"
}, React.createElement(Dropdown.Toggle, {
  useAnchor: true,
  className: "nav-item-iconic"
}, React.createElement(Icon, {
  type: "pf",
  name: "user"
}), " Brian Johnson"), React.createElement(Dropdown.Menu, null, React.createElement(MenuItem, null, "Preferences"), React.createElement(MenuItem, null, "Logout"))));