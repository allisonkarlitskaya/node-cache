import React from 'react';
import { mount } from 'enzyme';
import Alert from './Alert';
import { ALERT_TYPES, DEPRECATED_ALERT_TYPES } from './AlertConstants';
const ALL_ALERT_TYPES = [...ALERT_TYPES, ...DEPRECATED_ALERT_TYPES];

const testAlertSnapshot = (type, onDismiss) => {
  const component = mount(React.createElement(Alert, {
    type: type,
    onDismiss: onDismiss
  }, React.createElement("span", null, "Alert Message!")));
  expect(component.render()).toMatchSnapshot();
};

ALL_ALERT_TYPES.forEach(type => {
  beforeAll(() => jest.spyOn(console, 'warn').mockImplementation(() => {}));
  test(`Alert ${type} renders properly`, () => {
    testAlertSnapshot(type);
  });
  test(`Alert ${type} renders properly with dismiss button`, () => {
    testAlertSnapshot(type, jest.fn());
  });
});
test('Alert correctly throws error given unsupported type', () => {
  jest.spyOn(console, 'error').mockImplementation(() => {});

  const invalidType = function test() {
    mount(React.createElement(Alert, {
      type: "foo"
    }));
  };

  expect(invalidType).toThrowErrorMatchingSnapshot();
});