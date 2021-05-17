function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';

class TodayButton extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "setToday", () => {
      const {
        setSelected
      } = this.props;

      if (setSelected) {
        setSelected(new Date());
      }
    });
  }

  render() {
    return React.createElement("table", {
      className: "table-condensed"
    }, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, React.createElement("button", {
      type: "button",
      className: "today-button",
      onClick: this.setToday
    }, React.createElement("span", {
      className: "today-button-pf"
    }))))));
  }

}

TodayButton.propTypes = {
  setSelected: PropTypes.func
};
TodayButton.defaultProps = {
  setSelected: null
};
export default TodayButton;