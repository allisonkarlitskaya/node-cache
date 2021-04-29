import React from 'react';
import { Masthead, MenuItem } from '../../../index';
export const mastheadMock = props => React.createElement(Masthead, props, React.createElement(Masthead.Collapse, null, React.createElement(Masthead.Dropdown, {
  id: "app-help-dropdown",
  title: React.createElement("span", {
    title: "Help",
    className: "pficon pficon-help"
  }),
  noCaret: true
}, React.createElement(MenuItem, {
  eventKey: "1"
}, "Help"), React.createElement(MenuItem, {
  eventKey: "2"
}, "About")), React.createElement(Masthead.Dropdown, {
  id: "app-user-dropdown",
  title: React.createElement("span", null, React.createElement("span", {
    title: "Help",
    className: "pficon pficon-user"
  }), React.createElement("span", {
    className: "dropdown-title"
  }, " Brian Johnson"))
}, React.createElement(MenuItem, {
  eventKey: "1"
}, "User Preferences"), React.createElement(MenuItem, {
  eventKey: "2"
}, "Logout"))));