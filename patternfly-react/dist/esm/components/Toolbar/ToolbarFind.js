function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { FormControl } from '../Form';
import { noop } from '../../common/helpers';

class ToolbarFind extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      dropdownShown: false,
      currentValue: ''
    });

    _defineProperty(this, "onValueKeyPress", keyEvent => {
      const {
        onEnter
      } = this.props;
      const {
        currentValue
      } = this.state;

      if (keyEvent.key === 'Enter' && onEnter) {
        onEnter(currentValue);
      }
    });

    _defineProperty(this, "handleFindNext", () => {
      const {
        currentValue
      } = this.state;
      const {
        onFindNext
      } = this.props;

      if (onFindNext) {
        onFindNext(currentValue);
      }
    });

    _defineProperty(this, "handleFindPrevious", () => {
      const {
        currentValue
      } = this.state;
      const {
        onFindPrevious
      } = this.props;

      if (onFindPrevious) {
        onFindPrevious(currentValue);
      }
    });

    _defineProperty(this, "handleValueChange", event => {
      const {
        onChange
      } = this.props;
      this.setState({
        currentValue: event.target.value
      });

      if (onChange) {
        onChange(event.target.value);
      }
    });

    _defineProperty(this, "hideDropdown", () => {
      this.setState({
        dropdownShown: false
      });
    });

    _defineProperty(this, "toggleDropdownShown", () => {
      this.setState(prevState => ({
        dropdownShown: !prevState.dropdownShown
      }));
    });
  }

  renderCounts() {
    const {
      currentValue
    } = this.state;
    const {
      currentIndex,
      totalCount
    } = this.props;

    if (currentValue && currentValue !== '') {
      return [React.createElement("span", {
        className: "find-pf-nums",
        key: "findCountText"
      }, currentIndex || 0, " of ", totalCount), React.createElement(Button, {
        bsStyle: "link",
        key: "findPrevious",
        onClick: this.handleFindPrevious
      }, React.createElement(Icon, {
        type: "fa",
        name: "angle-up"
      })), React.createElement(Button, {
        bsStyle: "link",
        key: "findNext",
        onClick: this.handleFindNext
      }, React.createElement(Icon, {
        type: "fa",
        name: "angle-down"
      }))];
    }

    return null;
  }

  render() {
    const {
      dropdownShown,
      currentValue
    } = this.state;
    const {
      className,
      placeholder
    } = this.props;
    const classes = classNames('form-group toolbar-pf-find', className);
    const dropdownClasses = classNames('find-pf-dropdown-container', {
      show: dropdownShown
    });
    return React.createElement("div", {
      className: classes
    }, React.createElement(Button, {
      bsStyle: "link",
      className: "btn-find",
      onClick: this.toggleDropdownShown
    }, React.createElement(Icon, {
      type: "fa",
      name: "search"
    })), React.createElement("div", {
      className: dropdownClasses
    }, React.createElement(FormControl, {
      type: "text",
      id: "find",
      value: currentValue,
      placeholder: placeholder,
      onKeyPress: e => this.onValueKeyPress(e),
      onChange: this.handleValueChange
    }), React.createElement("div", {
      className: "find-pf-buttons"
    }, this.renderCounts(), React.createElement(Button, {
      bsStyle: "link",
      className: "btn-find-close",
      onClick: this.hideDropdown
    }, React.createElement(Icon, {
      type: "pf",
      name: "close"
    })))));
  }

}

ToolbarFind.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,

  /** index of current item */
  currentIndex: PropTypes.number,

  /** total number of items */
  totalCount: PropTypes.number.isRequired,

  /** Placeholder text when empty */
  placeholder: PropTypes.string,

  /** Callback function when user hits the enter key */
  onEnter: PropTypes.func,

  /** Callback function when the find value changes */
  onChange: PropTypes.func,

  /** Callback function when the find next is selected */
  onFindNext: PropTypes.func,

  /** Callback function when the find previous is selected */
  onFindPrevious: PropTypes.func
};
ToolbarFind.defaultProps = {
  className: '',
  currentIndex: 0,
  placeholder: '',
  onEnter: noop,
  onChange: noop,
  onFindNext: noop,
  onFindPrevious: noop
};
export default ToolbarFind;