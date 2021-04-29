import React from 'react';
import { mount } from 'enzyme';
import { ApplicationLauncher, ApplicationLauncherItem, ApplicationLauncherToggle } from './index';

const handleClick = e => {
  e.preventDefault();
};

test('ApplicationLauncher is working properly', () => {
  const component = mount(React.createElement(ApplicationLauncher, {
    type: "grid",
    tooltipPlacement: "left"
  }, React.createElement(ApplicationLauncherItem, {
    icon: "pficon pficon-storage-domain",
    title: "Recteque",
    tooltip: "Tooltip!",
    onClick: handleClick
  })));
  expect(component.render()).toMatchSnapshot();
});
test('ApplicationLauncherItem with tooltip is working properly', () => {
  const component = mount(React.createElement(ApplicationLauncherItem, {
    icon: "pficon pficon-storage-domain",
    title: "Recteque",
    tooltip: "Tooltip!",
    onClick: handleClick
  }));
  expect(component.render()).toMatchSnapshot();
});
test('ApplicationLauncherItem without tooltip is working properly', () => {
  const component = mount(React.createElement(ApplicationLauncherItem, {
    icon: "pficon pficon-storage-domain",
    title: "Recteque",
    onClick: handleClick
  }));
  expect(component.render()).toMatchSnapshot();
});
test('ApplicationLauncherToggle is working properly', () => {
  const component = mount(React.createElement(ApplicationLauncherToggle, {
    tooltipPlacement: "left",
    onClick: handleClick,
    open: false
  }));
  expect(component.render()).toMatchSnapshot();
});
test('ApplicationLauncherToggle is working properly when open', () => {
  const component = mount(React.createElement(ApplicationLauncherToggle, {
    tooltipPlacement: "left",
    onClick: handleClick,
    open: true
  }));
  expect(component.render()).toMatchSnapshot();
});