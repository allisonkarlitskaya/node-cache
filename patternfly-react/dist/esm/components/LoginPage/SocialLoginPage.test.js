function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { mount } from 'enzyme';
import englishMessages from './mocks/messages.en';
import frenchMessages from './mocks/messages.fr';
import { SocialLoginPage } from './index';
const mockFunction = jest.fn();
const logoList = [{
  src: './test.jpg',
  alt: 'Google',
  text: 'Google',
  onClick: mockFunction
}, {
  src: './test.jpg',
  alt: 'Facebook',
  text: 'Facebook',
  onClick: mockFunction
}, {
  src: './test.jpg',
  alt: 'Linkedin',
  text: 'Linkedin',
  onClick: mockFunction
}, {
  src: './test.jpg',
  alt: 'Github',
  text: 'Github',
  onClick: mockFunction
}, {
  src: './test.jpg',
  alt: 'Instagram',
  text: 'Instagram',
  onClick: mockFunction
}, {
  src: './test.jpg',
  alt: 'Git',
  text: 'Git',
  onClick: mockFunction
}, {
  src: './test.jpg',
  alt: 'OpenID',
  text: 'OpenID',
  onClick: mockFunction
}, {
  src: './test.jpg',
  alt: 'Dropbox',
  text: 'Dropbox',
  onClick: mockFunction
}, {
  src: './test.jpg',
  alt: 'Fedora',
  text: 'Fedora',
  onClick: mockFunction
}, {
  src: './test.jpg',
  alt: 'Skype',
  text: 'Skype',
  onClick: mockFunction
}, {
  src: './test.jpg',
  alt: 'Twitter',
  text: 'Twitter',
  onClick: mockFunction
}, {
  src: './test.jpg',
  alt: 'StackExchange',
  text: 'StackExchange',
  onClick: mockFunction
}];

const createProps = () => {
  const {
    header,
    footerLinks,
    card
  } = englishMessages;
  return {
    container: {
      backgroundUrl: '/some-background',
      translations: {
        en: englishMessages,
        fr: frenchMessages
      },
      className: '',
      alert: {
        message: header.alert,
        onDismiss: mockFunction,
        show: true
      }
    },
    header: {
      logoTitle: header.logo,
      caption: header.caption
    },
    footerLinks,
    card: {
      title: card.header.title,
      selectedLanguage: card.header.selectedLanguage,
      availableLanguages: card.header.availableLanguages,
      signUp: {
        label: card.signUp.label,
        link: {
          children: card.signUp.link.label,
          href: '#',
          onClick: mockFunction
        }
      },
      form: {
        validate: true,
        submitError: card.form.error,
        showError: true,
        usernameField: {
          id: 'card_email',
          type: 'email',
          placeholder: card.usernameField.placeholder,
          errors: card.usernameField.errors,
          error: card.usernameField.errors.invalid,
          showError: true
        },
        passwordField: {
          id: 'card_password',
          type: 'password',
          placeholder: card.passwordField.placeholder,
          minLength: 8,
          errors: card.passwordField.errors,
          warnings: card.passwordField.warnings,
          warning: card.passwordField.warnings.capsLock,
          showWarning: true
        },
        rememberMe: {
          label: card.rememberMe,
          onClick: mockFunction
        },
        forgotPassword: {
          label: card.forgotPassword,
          href: '#',
          onClick: mockFunction
        },
        submitText: card.form.submitText,
        onSubmit: mockFunction
      },
      social: {
        links: logoList
      }
    }
  };
};

afterEach(() => mockFunction.mockClear());
test('Component matches snapshot', () => {
  const props = _objectSpread({}, createProps());

  props.card.social.links = [];
  const component = mount(React.createElement(SocialLoginPage, props));
  expect(component.render()).toMatchSnapshot();
});
test('Click on social link triggers mock function', () => {
  const component = mount(React.createElement(SocialLoginPage, createProps()));
  component.find('.login-pf-social-link').at(0).find('a').simulate('click');
  expect(mockFunction).toHaveBeenCalled();
});
test('Click on the "More" button will expend the list and the button will change to "Less"', () => {
  const component = mount(React.createElement(SocialLoginPage, createProps()));
  const toggleBtn = component.find('.login-pf-social-toggle');
  toggleBtn.simulate('click');
  expect(toggleBtn.text()).toEqual(expect.stringMatching('Less'));
  expect(component.find('.ReactCollapse--collapse > ul > li')).toBeTruthy();
});
test("While the social list has 4 or less links, it won't have the 'double-col' class and the expend button won't exist", () => {
  const props = _objectSpread({}, createProps());

  props.card.social.links = [...logoList].splice(0, 4);
  const component = mount(React.createElement(SocialLoginPage, props));
  const socialList = component.find('ul.login-pf-social');
  expect(socialList.hasClass('login-pf-social-double-col')).toBeFalsy();
  const toggleBtn = component.find('.login-pf-social-toggle');
  expect(toggleBtn.exists()).toBeFalsy();
});