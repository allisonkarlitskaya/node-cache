"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _DropdownButton = _interopRequireDefault(require("react-bootstrap/lib/DropdownButton"));

var _messages = _interopRequireDefault(require("./mocks/messages.en"));

var _messages2 = _interopRequireDefault(require("./mocks/messages.fr"));

var _index = require("./index");

var _helpers = require("../../common/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _LoginPage$Card = _index.LoginPage.Card,
    Input = _LoginPage$Card.Input,
    ForgotPassword = _LoginPage$Card.ForgotPassword,
    SignUp = _LoginPage$Card.SignUp;
var FooterLinks = _index.LoginPage.FooterLinks;
var mockFunction = jest.fn();

var createProps = function createProps() {
  var header = _messages["default"].header,
      card = _messages["default"].card;
  return {
    container: {
      backgroundUrl: '/some-background',
      translations: {
        en: _messages["default"],
        fr: _messages2["default"]
      },
      alert: {
        message: header.alert,
        show: true
      }
    },
    header: {
      logoTitle: header.logo,
      caption: header.caption
    },
    footerLinks: [{
      children: 'Terms of Use',
      href: '#',
      onClick: mockFunction
    }, {
      children: 'Help',
      href: '#',
      onClick: mockFunction
    }, {
      children: 'Privacy Policy',
      href: '#',
      onClick: mockFunction
    }],
    card: {
      title: card.header.title,
      selectedLanguage: card.header.selectedLanguage,
      availableLanguages: card.header.availableLanguages,
      signUp: {
        label: card.signUp.label,
        link: {
          label: card.signUp.link.label,
          href: '#',
          onClick: mockFunction
        }
      },
      form: {
        error: card.form.error,
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
          errors: card.passwordField.errors,
          minLength: 8,
          warnings: card.passwordField.warnings,
          warning: card.passwordField.warnings.capsLock,
          showWarning: true
        },
        rememberMe: {
          label: card.rememberMe,
          onChange: mockFunction
        },
        forgotPassword: {
          label: card.forgotPassword,
          href: '#',
          onClick: mockFunction
        },
        submitText: card.form.submitText
      }
    }
  };
};

afterEach(function () {
  return mockFunction.mockClear();
});
test('Component matches snapshot', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.LoginPage, createProps()));
  expect(component.render()).toMatchSnapshot();
});
test('Alert closes succesfully', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.LoginPage, createProps()));
  component.find('div.alert button').at(0).simulate('click');
  expect(component.find('div.alert button').at(0).exists()).toEqual(false);
});
test('Dropdown updates succesfully', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.LoginPage, createProps()));
  component.find('ul.dropdown-menu li a').at(1).simulate('click');
  expect(component.find(_DropdownButton["default"]).at(0).props().title).toEqual(_messages2["default"].card.header.selectedLanguage);
});
test('Toggle Caps lock warning in password field by the events: focus, blur and mouseEnter', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.LoginPage, createProps()));
  var passwordElement = component.find('input[type="password"]').at(0);
  passwordElement.simulate('focus').simulate('keypress', {
    keyCode: _helpers.KEY_CODES.A,
    shiftKey: false
  });
  expect(component.find(Input).at(1).props().warning).toEqual(_messages["default"].card.passwordField.warnings.capsLock);
  expect(component.find(Input).at(1).props().showWarning).toEqual(true);
  passwordElement.simulate('blur').simulate('keypress', {
    keyCode: _helpers.KEY_CODES.A,
    shiftKey: false
  });
  expect(component.find(Input).at(1).props().showWarning).toEqual(false);
  passwordElement.simulate('keypress', {
    keyCode: _helpers.KEY_CODES.A,
    shiftKey: false
  }).simulate('focus');
  expect(component.find(Input).at(1).props().showWarning).toEqual(true);
});
test('Toggle CapsLock cause warning to show under password field when focused', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.LoginPage, createProps()));
  component.find('input[type="password"]').simulate('change', {
    target: {
      value: 'test'
    }
  });
  component.find(_index.LoginCardWithValidation).instance().toggleCapsLock({
    key: 'CapsLock'
  });
  component.find('input[type="password"]').simulate('focus');
  expect(component.find(Input).at(1).props().showWarning).toBeTruthy();
});
test('Submit while inputs are empty cause specific errors to be shown and onChange they disappear', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.LoginPage, createProps()));
  var usernameElement = component.find('input[type="email"]').at(0);
  var passwordElement = component.find('input[type="password"]').at(0);
  var submit = component.find('button[type="submit"]').at(0);
  expect(submit.props().disabled).toEqual(true);
  component.find('form').at(0).simulate('submit'); // check username field

  expect(component.find(Input).at(0).props().error).toEqual(_messages["default"].card.usernameField.errors.empty);
  expect(component.find(Input).at(0).props().showError).toEqual(true); // check password field

  expect(component.find(Input).at(1).props().error).toEqual(_messages["default"].card.passwordField.errors.empty);
  expect(component.find(Input).at(1).props().showError).toEqual(true);
  usernameElement.simulate('change', {
    target: {
      value: 'Ron'
    }
  });
  expect(component.find(Input).at(0).props().showError).toEqual(false);
  passwordElement.simulate('change', {
    target: {
      value: 'Q!w2e3'
    }
  });
  expect(component.find(Input).at(1).props().showError).toEqual(false);
});
test('Submit while password is too short raises the correct error', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.LoginPage, createProps()));
  var passwordElement = component.find('input[type="password"]').at(0);
  passwordElement.simulate('change', {
    target: {
      value: 'short'
    }
  });
  component.find('form').at(0).simulate('submit');
  expect(component.find(Input).at(1).props().showError).toEqual(true);
  expect(component.find(Input).at(1).props().error).toEqual(_messages["default"].card.passwordField.errors["short"]);
});
test('valid form should be submitted and raise a "server error"', function () {
  var serverError = 'server error';

  var props = _objectSpread({}, createProps());

  props.card.form.onSubmit = function (e, onError) {
    return onError(serverError);
  };

  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.LoginPage, props));
  var passwordElement = component.find('input[type="password"]').at(0);
  var usernameElement = component.find('input[type="email"]').at(0);
  passwordElement.simulate('change', {
    target: {
      value: 'validPassword'
    }
  });
  usernameElement.simulate('change', {
    target: {
      value: 'validUser@gmail.com'
    }
  });
  var validator = component.find(_index.LoginCardWithValidation).instance();
  validator.onSubmit({
    preventDefault: _helpers.noop,
    target: {
      submit: _helpers.noop
    }
  });
  component.update();
  expect(validator.state.form.submitError).toBe(serverError);
});
test('Submit while username is invalid cause a specific error to be shown and onChange is disappears', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.LoginPage, createProps()));
  var usernameElement = component.find('input[type="email"]').at(0);
  usernameElement.simulate('change', {
    target: {
      value: 'agagagagag@'
    }
  });
  component.find('form').at(0).simulate('submit'); // check username field

  expect(component.find(Input).at(0).props().error).toEqual(_messages["default"].card.usernameField.errors.invalid);
  expect(component.find(Input).at(0).props().showError).toEqual(true);
  usernameElement.simulate('change', {
    target: {
      value: 'ron@redhat.com'
    }
  });
  expect(component.find(Input).at(0).props().showError).toEqual(false);
});
test('Remember-me checkbox change trigger mock function', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.LoginPage, createProps()));
  component.find('div.login-pf-settings input[type="checkbox"]').at(0).simulate('change');
  expect(mockFunction).toHaveBeenCalled();
});
test('Forgot Password link click trigger mock function', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.LoginPage, createProps()));
  component.find(ForgotPassword).find('a').at(0).simulate('click');
  expect(mockFunction).toHaveBeenCalled();
});
test('Sign-up click trigger mock function', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.LoginPage, createProps()));
  component.find(SignUp).find('a').at(0).simulate('click');
  expect(mockFunction).toHaveBeenCalled();
});
test('Footer-links click trigger mock function', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.LoginPage, createProps()));
  component.find(FooterLinks).find('ul li a').at(0).simulate('click');
  expect(mockFunction).toHaveBeenCalled();
});
test('Translation works', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.LoginPage, createProps())); // Click on french

  component.find('ul.dropdown-menu li a').at(1).simulate('click');
  expect(component.find(_DropdownButton["default"]).at(0).props().title).toEqual(_messages2["default"].card.header.selectedLanguage);
  expect(component.find(_index.LoginPage.Pattern).at(0).props().header.caption).toEqual(_messages2["default"].header.caption);
});
test('submitButtonAttributes are added to the DOM', function () {
  var id = 'submit-button-unique-test-id';
  var props = createProps();
  props.card.form.submitButtonAttributes = {
    id: id
  };
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.LoginPage, props));
  var doesIDExist = component.find("#".concat(id)).exists();
  expect(doesIDExist).toBeTruthy();
});