import React from 'react';
import { HorizontalNavMenu, HorizontalNavMenuItem } from '../index';
export const singleLevel = React.createElement(HorizontalNavMenu, null, React.createElement(HorizontalNavMenuItem, {
  id: "first",
  title: "First Link"
}), React.createElement(HorizontalNavMenuItem, {
  id: "another",
  title: "Another Link"
}), React.createElement(HorizontalNavMenuItem, {
  id: "and-another",
  title: "And Another"
}));