import React from 'react';
import PropTypes from 'prop-types';
import { default as HorizontalNavMenu } from './HorizontalNavMenu';
import { default as HorizontalNavMenuItem } from './HorizontalNavMenuItem';

const HorizontalNav = props => {
  const {
    children
  } = props;
  return React.createElement("nav", {
    className: "navbar navbar-default navbar-pf"
  }, children);
};

HorizontalNav.propTypes = {
  children: PropTypes.node
};
HorizontalNav.defaultProps = {
  children: null
};
HorizontalNav.Menu = HorizontalNavMenu;
HorizontalNav.MenuItem = HorizontalNavMenuItem;
export default HorizontalNav;