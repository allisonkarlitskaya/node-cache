function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { mount } from 'enzyme';
import { AboutModal, AboutModalVersions, AboutModalVersionItem } from '../../index';

const testAboutModal = props => React.createElement(AboutModal, _extends({
  show: false,
  onHide: jest.fn(),
  productTitle: "Product Title",
  altLogo: "Patternfly Logo",
  trademarkText: "Trademark and Copyright Information"
}, props), React.createElement(AboutModalVersions, null, React.createElement(AboutModalVersionItem, {
  label: "Label",
  versionText: "Version"
})));

test('AboutModal renders correctly when hidden', () => {
  const component = mount(testAboutModal());
  expect(component.render()).toMatchSnapshot();
  expect(component.props().show).toBeFalsy();
});
test('AboutModal renders correctly when shown', () => {
  const component = mount(testAboutModal({
    show: true
  }));
  expect(component.render()).toMatchSnapshot();
  expect(component.props().show).toBeTruthy();
});