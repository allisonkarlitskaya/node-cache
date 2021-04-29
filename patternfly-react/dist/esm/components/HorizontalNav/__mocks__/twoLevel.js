import React from 'react';
import { HorizontalNavMenu, HorizontalNavMenuItem } from '../index';
export const twoLevel = React.createElement(HorizontalNavMenu, {
  twoLevels: true
}, React.createElement(HorizontalNavMenuItem, {
  id: "first",
  title: "First Link"
}), React.createElement(HorizontalNavMenuItem, {
  id: "another",
  title: "Another Link",
  active: true
}, React.createElement(HorizontalNavMenuItem, {
  id: "link",
  title: "Link"
}), React.createElement(HorizontalNavMenuItem, {
  id: "another-link",
  title: "Another Link",
  active: true
}), React.createElement(HorizontalNavMenuItem, {
  id: "something-else",
  title: "Something Else Here"
}), React.createElement(HorizontalNavMenuItem, {
  id: "remember",
  title: "Remembering to keep"
}), React.createElement(HorizontalNavMenuItem, {
  id: "between-5-7",
  title: "It between five and seven"
}), React.createElement(HorizontalNavMenuItem, {
  id: "more",
  title: "More options"
})), React.createElement(HorizontalNavMenuItem, {
  id: "and-another",
  title: "And Another"
}), React.createElement(HorizontalNavMenuItem, {
  id: "general-rule",
  title: "As a General Rule"
}), React.createElement(HorizontalNavMenuItem, {
  id: "five-to-seven",
  title: "Five to Seven Links"
}), React.createElement(HorizontalNavMenuItem, {
  id: "is-good",
  title: "Is Good"
}));