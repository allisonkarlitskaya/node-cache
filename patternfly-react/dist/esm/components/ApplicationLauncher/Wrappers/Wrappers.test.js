import React from 'react';
import { mount } from 'enzyme';
import ApplicationLauncherWrapper from './ApplicationLauncherWrapper';
import StatefulApplicationLauncherWrapper from './StatefulApplicationLauncherWrapper';

const handleClick = e => {
  e.preventDefault();
};

const Apps = [{
  title: 'Ipsum',
  icon: 'pficon pficon-home',
  tooltip: 'Tooltip!',
  onClick: e => {
    handleClick(e);
  }
}, {
  title: 'Royal',
  icon: 'pficon pficon-virtual-machine',
  tooltip: 'Tooltip!',
  onClick: e => {
    handleClick(e);
  }
}, {
  title: 'Lemon',
  icon: 'pficon pficon-storage-domain',
  tooltip: 'Tooltip!',
  onClick: e => {
    handleClick(e);
  }
}, {
  title: 'Domain',
  icon: 'pficon pficon-domain',
  tooltip: 'Tooltip!',
  onClick: e => {
    handleClick(e);
  }
}];
test('ApplicationLauncherWrapper is working properly as Grid', () => {
  const component = mount(React.createElement(ApplicationLauncherWrapper, {
    apps: Apps,
    grid: true,
    open: false
  }));
  expect(component.render()).toMatchSnapshot();
});
test('ApplicationLauncherWrapper is working properly as List with no Icons', () => {
  const component = mount(React.createElement(ApplicationLauncherWrapper, {
    apps: Apps,
    noIcons: true,
    open: false
  }));
  expect(component.render()).toMatchSnapshot();
});
test('ApplicationLauncherWrapper is working properly as Grid when open', () => {
  const component = mount(React.createElement(ApplicationLauncherWrapper, {
    apps: Apps,
    grid: true,
    open: true
  }));
  expect(component.render()).toMatchSnapshot();
});
test('ApplicationLauncherWrapper is working properly as List with no Icons when open', () => {
  const component = mount(React.createElement(ApplicationLauncherWrapper, {
    apps: Apps,
    noIcons: true,
    open: true
  }));
  expect(component.render()).toMatchSnapshot();
});
test('StatefulApplicationLauncherWrapper is working properly as Grid', () => {
  const component = mount(React.createElement(StatefulApplicationLauncherWrapper, {
    grid: true,
    apps: Apps
  }));
  expect(component.render()).toMatchSnapshot();
});