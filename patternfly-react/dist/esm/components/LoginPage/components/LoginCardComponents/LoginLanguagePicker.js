function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { DropdownButton, MenuItem } from '../../../../index';
import { noop } from '../../../../common/helpers';

class LoginLanguagePicker extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClick", e => {
      const {
        onLanguageChange
      } = this.props;
      onLanguageChange(e);
      this.setState({
        title: e.target.text
      });
    });

    const {
      selectedLanguage,
      availableLanguages
    } = props;
    this.state = {
      title: selectedLanguage || availableLanguages && availableLanguages[0].text
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const {
      selectedLanguage,
      availableLanguages
    } = nextProps;
    const title = selectedLanguage || availableLanguages && availableLanguages[0].text;
    this.setState({
      title
    });
  }

  render() {
    const {
      availableLanguages,
      className,
      id
    } = this.props;
    const {
      title
    } = this.state;

    if (!availableLanguages) {
      return null;
    }

    const menuItems = availableLanguages.map((language, index) => React.createElement(MenuItem, {
      key: index,
      value: language.value,
      active: title === language.text,
      onClick: this.handleClick
    }, language.text));
    return React.createElement("div", {
      className: classNames('bootstrap-select btn-group', className)
    }, React.createElement(DropdownButton, {
      title: title,
      id: id
    }, menuItems));
  }

}

LoginLanguagePicker.propTypes = {
  /** Provided languages to pass into the dropdown menu */
  availableLanguages: PropTypes.arrayOf(PropTypes.shape({
    /** the language menu item's value */
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /** the language menu item's text */
    text: PropTypes.string
  })),

  /** The default selected language */
  selectedLanguage: PropTypes.string,

  /** Callback to trigger when selecting a language */
  onLanguageChange: PropTypes.func,

  /** Additional css classes */
  className: PropTypes.string,

  /** The dropdown's id */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
LoginLanguagePicker.defaultProps = {
  selectedLanguage: null,
  availableLanguages: null,
  onLanguageChange: noop,
  className: null,
  id: 'language-picker'
};
export default LoginLanguagePicker;