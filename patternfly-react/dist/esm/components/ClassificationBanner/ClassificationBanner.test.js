function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { mount } from 'enzyme';
import ClassificationBanner from './ClassificationBanner';

const testClassificationBannerSnapshot = props => React.createElement(ClassificationBanner, _extends({
  closed: true
}, props), React.createElement("br", null), React.createElement("p", null, "This is the main body of a web page."), React.createElement("p", null, "Scroll down to see the bottom banner."));

test('ClassificationBanner renders properly', () => {
  const component = mount(testClassificationBannerSnapshot()).getElement();
  expect(component).toMatchSnapshot();
});
test('ClassificationBanner expectedly executes mouse click and is dismissed', () => {
  const component = mount(testClassificationBannerSnapshot({
    closeButton: true,
    closed: false
  }));
  const closeButton = component.find('button');
  closeButton.simulate('click');
  expect(component.state('closed')).toBe(true);
});