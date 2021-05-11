import React from 'react';
import { shallow } from 'enzyme';
import { MenuItem } from '../../index';
import { Masthead } from './index';
import CustomMastheadDropdown from './InnerComponents/CustomMastheadDropdown';
test('Masthead renders properly', () => {
  const onNavToggleMock = jest.fn();
  const onTitleClickMock = jest.fn();
  const pfLogo = 'Fake Logo';
  const pfBrand = 'Fake Brand';
  const component = shallow(React.createElement(Masthead, {
    iconImg: pfLogo,
    titleImg: pfBrand,
    title: "Patternfly React",
    onNavToggleClick: onNavToggleMock,
    onTitleClick: onTitleClickMock
  }, React.createElement(Masthead.Collapse, null, React.createElement(Masthead.Dropdown, {
    id: "app-help-dropdown",
    title: React.createElement("span", {
      title: "Help",
      className: "pficon pficon-help"
    })
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
  }, "Preferences"), React.createElement(MenuItem, {
    eventKey: "2"
  }, "Logout")))));
  component.find('.navbar-toggle').simulate('click');
  expect(onNavToggleMock).toBeCalled();
  component.find('.navbar-brand').simulate('click');
  expect(onTitleClickMock).toBeCalled();
  expect(component).toMatchSnapshot('Masthead snapshot');
});
test('Masthead without nav toggle renders properly', () => {
  const onTitleClickMock = jest.fn();
  const pfLogo = 'Fake Logo';
  const pfBrand = 'Fake Brand';
  const component = shallow(React.createElement(Masthead, {
    iconImg: pfLogo,
    titleImg: pfBrand,
    title: "Patternfly React",
    navToggle: false,
    onTitleClick: onTitleClickMock
  }, React.createElement(Masthead.Collapse, null, React.createElement(Masthead.Dropdown, {
    id: "app-help-dropdown",
    title: React.createElement("span", {
      title: "Help",
      className: "pficon pficon-help"
    })
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
  }, "Preferences"), React.createElement(MenuItem, {
    eventKey: "2"
  }, "Logout")))));
  component.find('.navbar-brand').simulate('click');
  expect(onTitleClickMock).toBeCalled();
  expect(component).toMatchSnapshot('Masthead without nav toggle snapshot');
});
test('MastheadCollapse renders properly', () => {
  const component = shallow(React.createElement(Masthead.Collapse, null, React.createElement(Masthead.Dropdown, {
    id: "app-help-dropdown",
    title: React.createElement("span", {
      title: "Help",
      className: "pficon pficon-help"
    })
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
  }, "Preferences"), React.createElement(MenuItem, {
    eventKey: "2"
  }, "Logout"))));
  expect(component).toMatchSnapshot('MastheadCollapse snapshot');
});
test('MastheadDropdown renders properly', () => {
  const component = shallow(React.createElement(Masthead.Dropdown, {
    id: "app-help-dropdown",
    title: React.createElement("span", {
      title: "Help",
      className: "pficon pficon-help"
    })
  }, React.createElement(MenuItem, {
    eventKey: "1"
  }, "Help"), React.createElement(MenuItem, {
    eventKey: "2"
  }, "About")));
  expect(component).toMatchSnapshot('MastheadDropdown snapshot');
});
test('CustomMastheadDropdown renders properly', () => {
  const component = shallow(React.createElement(CustomMastheadDropdown, {
    className: "dropdown"
  }, "children"));
  expect(component).toMatchSnapshot('CustomMastheadDropdown snapshot');
});