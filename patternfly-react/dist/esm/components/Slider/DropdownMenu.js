import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../Dropdown';
import { MenuItem } from '../MenuItem';

const DropdownMenu = props => {
  const {
    dropup,
    dropdownList,
    onFormatChange,
    title
  } = props;
  const menuItems = dropdownList.map((item, index) => React.createElement(MenuItem, {
    bsClass: "slider_menuitem",
    onClick: event => onFormatChange(event.target.text),
    key: index,
    value: item
  }, item));
  return React.createElement(Dropdown, {
    id: "slider_dropdown",
    dropup: dropup,
    pullRight: true
  }, React.createElement(Dropdown.Toggle, null, React.createElement("span", null, title || dropdownList[0])), React.createElement(Dropdown.Menu, null, menuItems));
};

DropdownMenu.propTypes = {
  dropup: PropTypes.bool,
  dropdownList: PropTypes.array,
  onFormatChange: PropTypes.func,
  title: PropTypes.string
};
DropdownMenu.defaultProps = {
  dropup: false,
  dropdownList: null,
  onFormatChange: null,
  title: null
};
export default DropdownMenu;