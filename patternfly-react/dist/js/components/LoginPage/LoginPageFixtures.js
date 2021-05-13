"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBuildYourOwnSocialLoginPageProps = exports.getManagedSocialLoginPageProps = exports.getBuildYourOwnPageProps = exports.getManagedPageProps = exports.getManagedPageWithErrorsOnTopProps = exports.createLogoList = void 0;

var _messages = _interopRequireDefault(require("./mocks/messages.en"));

var _messages2 = _interopRequireDefault(require("./mocks/messages.fr"));

var _img = _interopRequireDefault(require("./assets/img"));

var _addonActions = require("@storybook/addon-actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// eslint-disable-next-line import/no-extraneous-dependencies
var storyAction = function storyAction(e, message) {
  e.preventDefault();
  (0, _addonActions.action)(message)();
};

var createLogoList = function createLogoList() {
  var socialLinkClick = function socialLinkClick(e) {
    return storyAction(e, 'Social Link was clicked');
  };

  var google = _img["default"].google,
      facebook = _img["default"].facebook,
      linkedin = _img["default"].linkedin,
      github = _img["default"].github,
      instagram = _img["default"].instagram,
      stackExchange = _img["default"].stackExchange,
      twitter = _img["default"].twitter,
      git = _img["default"].git,
      openID = _img["default"].openID,
      dropbox = _img["default"].dropbox,
      fedora = _img["default"].fedora,
      skype = _img["default"].skype;
  return [{
    src: google,
    alt: 'Google',
    text: 'Google',
    onClick: function onClick(e) {
      return socialLinkClick(e);
    }
  }, {
    src: facebook,
    alt: 'Facebook',
    text: 'Facebook',
    onClick: function onClick(e) {
      return socialLinkClick(e);
    }
  }, {
    src: linkedin,
    alt: 'Linkedin',
    text: 'Linkedin',
    onClick: function onClick(e) {
      return socialLinkClick(e);
    }
  }, {
    src: github,
    alt: 'Github',
    text: 'Github',
    onClick: function onClick(e) {
      return socialLinkClick(e);
    }
  }, {
    src: instagram,
    alt: 'Instagram',
    text: 'Instagram',
    onClick: function onClick(e) {
      return socialLinkClick(e);
    }
  }, {
    src: git,
    alt: 'Git',
    text: 'Git',
    onClick: function onClick(e) {
      return socialLinkClick(e);
    }
  }, {
    src: openID,
    alt: 'OpenID',
    text: 'OpenID',
    onClick: function onClick(e) {
      return socialLinkClick(e);
    }
  }, {
    src: dropbox,
    alt: 'Dropbox',
    text: 'Dropbox',
    onClick: function onClick(e) {
      return socialLinkClick(e);
    }
  }, {
    src: fedora,
    alt: 'Fedora',
    text: 'Fedora',
    onClick: function onClick(e) {
      return socialLinkClick(e);
    }
  }, {
    src: skype,
    alt: 'Skype',
    text: 'Skype',
    onClick: function onClick(e) {
      return socialLinkClick(e);
    }
  }, {
    src: twitter,
    alt: 'Twitter',
    text: 'Twitter',
    onClick: function onClick(e) {
      return socialLinkClick(e);
    }
  }, {
    src: stackExchange,
    alt: 'StackExchange',
    text: 'StackExchange',
    onClick: function onClick(e) {
      return socialLinkClick(e);
    }
  }];
};

exports.createLogoList = createLogoList;

var getManagedPageWithErrorsOnTopProps = function getManagedPageWithErrorsOnTopProps() {
  var header = _messages["default"].header,
      footerLinks = _messages["default"].footerLinks,
      card = _messages["default"].card;
  footerLinks.forEach(function (link) {
    link.onClick = function (e) {
      return storyAction(e, 'Footer Link was pressed');
    };
  });
  return {
    container: {
      backgroundUrl: _img["default"].background,
      translations: {
        en: _messages["default"],
        fr: _messages2["default"]
      },
      className: '',
      alert: {
        message: header.alert,
        onDismiss: function onDismiss(e) {
          return storyAction(e, 'Notification was dismissed');
        },
        show: true
      }
    },
    header: {
      logoSrc: _img["default"].brand,
      logoTitle: header.logo,
      caption: header.caption
    },
    footerLinks: footerLinks,
    card: {
      title: card.header.title,
      selectedLanguage: card.header.selectedLanguage,
      availableLanguages: card.header.availableLanguages,
      signUp: {
        label: card.signUp.label,
        link: {
          children: card.signUp.link.label,
          href: '#',
          onClick: function onClick(e) {
            return storyAction(e, 'sign up was clicked');
          }
        }
      },
      form: {
        validate: true,
        topErrorOnly: true,
        usernameField: {
          id: 'card_email',
          type: 'email',
          placeholder: card.usernameField.placeholder,
          errors: card.usernameField.errors
        },
        passwordField: {
          id: 'card_password',
          type: 'password',
          placeholder: card.passwordField.placeholder,
          minLength: 8,
          errors: card.passwordField.errors,
          warnings: card.passwordField.warnings
        },
        additionalFields: null,
        rememberMe: {
          label: card.rememberMe,
          onClick: function onClick(e) {
            return (0, _addonActions.action)('remember me checkbox was clicked')();
          }
        },
        forgotPassword: {
          label: card.forgotPassword,
          href: '#',
          onClick: function onClick(e) {
            return storyAction(e, 'Forgot password was clicked');
          }
        },
        disableSubmit: false,
        submitText: card.form.submitText,
        onSubmit: function onSubmit(e, onError) {
          storyAction(e, 'Form was submitted successfully !');
          setTimeout(function () {
            return onError('Returning some server error');
          }, 2000);
        }
      }
    }
  };
};

exports.getManagedPageWithErrorsOnTopProps = getManagedPageWithErrorsOnTopProps;

var getManagedPageProps = function getManagedPageProps() {
  var header = _messages["default"].header,
      footerLinks = _messages["default"].footerLinks,
      card = _messages["default"].card;
  footerLinks.forEach(function (link) {
    link.onClick = function (e) {
      return storyAction(e, 'Footer Link was pressed');
    };
  });
  return {
    container: {
      backgroundUrl: _img["default"].background,
      translations: {
        en: _messages["default"],
        fr: _messages2["default"]
      },
      className: '',
      alert: {
        message: header.alert,
        onDismiss: function onDismiss(e) {
          return storyAction(e, 'Notification was dismissed');
        },
        show: true
      }
    },
    header: {
      logoSrc: _img["default"].brand,
      logoTitle: header.logo,
      caption: header.caption
    },
    footerLinks: footerLinks,
    card: {
      title: card.header.title,
      selectedLanguage: card.header.selectedLanguage,
      availableLanguages: card.header.availableLanguages,
      signUp: {
        label: card.signUp.label,
        link: {
          children: card.signUp.link.label,
          href: '#',
          onClick: function onClick(e) {
            return storyAction(e, 'sign up was clicked');
          }
        }
      },
      form: {
        validate: true,
        usernameField: {
          id: 'card_email',
          type: 'email',
          placeholder: card.usernameField.placeholder,
          errors: card.usernameField.errors
        },
        passwordField: {
          id: 'card_password',
          type: 'password',
          placeholder: card.passwordField.placeholder,
          minLength: 8,
          errors: card.passwordField.errors,
          warnings: card.passwordField.warnings
        },
        additionalFields: null,
        rememberMe: {
          label: card.rememberMe,
          onClick: function onClick(e) {
            return (0, _addonActions.action)('remember me checkbox was clicked')();
          }
        },
        forgotPassword: {
          label: card.forgotPassword,
          href: '#',
          onClick: function onClick(e) {
            return storyAction(e, 'Forgot password was clicked');
          }
        },
        disableSubmit: false,
        submitText: card.form.submitText,
        onSubmit: function onSubmit(e, onError) {
          storyAction(e, 'Form was submitted successfully !');
          setTimeout(function () {
            return onError('Returning some server error');
          }, 2000);
        }
      },
      social: {
        links: createLogoList()
      }
    }
  };
};

exports.getManagedPageProps = getManagedPageProps;

var getBuildYourOwnPageProps = function getBuildYourOwnPageProps() {
  var header = _messages["default"].header,
      footerLinks = _messages["default"].footerLinks,
      card = _messages["default"].card;
  footerLinks.forEach(function (link) {
    link.onClick = function (e) {
      return storyAction(e, 'Footer Link was pressed');
    };
  });
  return {
    container: {
      backgroundUrl: _img["default"].background,
      translations: {
        en: _messages["default"],
        fr: _messages2["default"]
      },
      className: '',
      alert: {
        message: header.alert,
        onDismiss: function onDismiss(e) {
          return storyAction(e, 'Notification was dismissed');
        },
        show: true
      }
    },
    header: {
      logoSrc: _img["default"].brand,
      logoTitle: header.logo,
      caption: header.caption
    },
    footerLinks: footerLinks,
    card: {
      title: card.header.title,
      selectedLanguage: card.header.selectedLanguage,
      availableLanguages: card.header.availableLanguages,
      signUp: {
        label: card.signUp.label,
        link: {
          children: card.signUp.link.label,
          href: '#',
          onClick: function onClick(e) {
            return storyAction(e, 'sign up was clicked');
          }
        }
      },
      form: {
        validate: false,
        usernameField: {
          id: 'card_email',
          type: 'email',
          placeholder: card.usernameField.placeholder,
          errors: card.usernameField.errors
        },
        passwordField: {
          id: 'card_password',
          type: 'password',
          placeholder: card.passwordField.placeholder,
          minLength: 8,
          errors: card.passwordField.errors,
          warnings: card.passwordField.warnings
        },
        additionalFields: null,
        rememberMe: {
          label: card.rememberMe,
          onClick: function onClick(e) {
            return (0, _addonActions.action)('remember me checkbox was clicked')();
          }
        },
        forgotPassword: {
          label: card.forgotPassword,
          href: '#',
          onClick: function onClick(e) {
            return storyAction(e, 'Forgot password was clicked');
          }
        },
        disableSubmit: false,
        submitText: card.form.submitText,
        onSubmit: function onSubmit(e, onError) {
          storyAction(e, 'Form was submitted successfully !');
          setTimeout(function () {
            return onError('Returning some server error');
          }, 2000);
        }
      }
    }
  };
};

exports.getBuildYourOwnPageProps = getBuildYourOwnPageProps;

var getManagedSocialLoginPageProps = function getManagedSocialLoginPageProps() {
  var header = _messages["default"].header,
      footerLinks = _messages["default"].footerLinks,
      card = _messages["default"].card;
  footerLinks.forEach(function (link) {
    link.onClick = function (e) {
      return storyAction(e, 'Footer Link was pressed');
    };
  });
  return {
    container: {
      backgroundUrl: _img["default"].background,
      translations: {
        en: _messages["default"],
        fr: _messages2["default"]
      },
      className: '',
      alert: {
        message: header.alert,
        onDismiss: function onDismiss(e) {
          return storyAction(e, 'Notification was dismissed');
        },
        show: true
      }
    },
    header: {
      logoSrc: _img["default"].brand,
      logoTitle: header.logo,
      caption: header.caption
    },
    footerLinks: footerLinks,
    card: {
      title: card.header.title,
      selectedLanguage: card.header.selectedLanguage,
      availableLanguages: card.header.availableLanguages,
      signUp: {
        label: card.signUp.label,
        link: {
          children: card.signUp.link.label,
          href: '#',
          onClick: function onClick(e) {
            return storyAction(e, 'sign up was clicked');
          }
        }
      },
      form: {
        validate: true,
        usernameField: {
          id: 'card_email',
          type: 'email',
          placeholder: card.usernameField.placeholder,
          errors: card.usernameField.errors
        },
        passwordField: {
          id: 'card_password',
          type: 'password',
          placeholder: card.passwordField.placeholder,
          minLength: 8,
          errors: card.passwordField.errors,
          warnings: card.passwordField.warnings
        },
        additionalFields: null,
        rememberMe: {
          label: card.rememberMe,
          onClick: function onClick(e) {
            return (0, _addonActions.action)('remember me checkbox was clicked')();
          }
        },
        forgotPassword: {
          label: card.forgotPassword,
          href: '#',
          onClick: function onClick(e) {
            return storyAction(e, 'Forgot password was clicked');
          }
        },
        disableSubmit: false,
        submitText: card.form.submitText,
        onSubmit: function onSubmit(e, onError) {
          storyAction(e, 'Form was submitted successfully !');
          setTimeout(function () {
            return onError('Returning some server error');
          }, 2000);
        }
      },
      social: {
        links: createLogoList()
      }
    }
  };
};

exports.getManagedSocialLoginPageProps = getManagedSocialLoginPageProps;

var getBuildYourOwnSocialLoginPageProps = function getBuildYourOwnSocialLoginPageProps() {
  var header = _messages["default"].header,
      footerLinks = _messages["default"].footerLinks,
      card = _messages["default"].card;
  footerLinks.forEach(function (link) {
    link.onClick = function (e) {
      return storyAction(e, 'Footer Link was pressed');
    };
  });
  return {
    container: {
      backgroundUrl: _img["default"].background,
      translations: {
        en: _messages["default"],
        fr: _messages2["default"]
      },
      className: '',
      alert: {
        message: header.alert,
        onDismiss: function onDismiss(e) {
          return storyAction(e, 'Notification was dismissed');
        },
        show: true
      }
    },
    header: {
      logoSrc: _img["default"].brand,
      logoTitle: header.logo,
      caption: header.caption
    },
    footerLinks: footerLinks,
    card: {
      title: card.header.title,
      selectedLanguage: card.header.selectedLanguage,
      availableLanguages: card.header.availableLanguages,
      signUp: {
        label: card.signUp.label,
        link: {
          children: card.signUp.link.label,
          href: '#',
          onClick: function onClick(e) {
            return storyAction(e, 'sign up was clicked');
          }
        }
      },
      form: {
        validate: false,
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
        additionalFields: null,
        rememberMe: {
          label: card.rememberMe,
          onClick: function onClick(e) {
            return (0, _addonActions.action)('remember me checkbox was clicked')();
          }
        },
        forgotPassword: {
          label: card.forgotPassword,
          href: '#',
          onClick: function onClick(e) {
            return storyAction(e, 'Forgot password was clicked');
          }
        },
        disableSubmit: false,
        submitText: card.form.submitText,
        onSubmit: function onSubmit(e, onError) {
          storyAction(e, 'Form was submitted successfully !');
          setTimeout(function () {
            return onError('Returning some server error');
          }, 2000);
        }
      },
      social: {
        links: createLogoList()
      }
    }
  };
};

exports.getBuildYourOwnSocialLoginPageProps = getBuildYourOwnSocialLoginPageProps;