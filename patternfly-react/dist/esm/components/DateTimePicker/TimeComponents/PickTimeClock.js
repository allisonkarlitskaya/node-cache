function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../../common/helpers';
import { AM, PM, HOUR, MINUTE } from './TimeConstants';

class PickTimeClock extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      ampm: this.props.time.getHours() >= 12 ? PM : AM
    });

    _defineProperty(this, "setTime", (type, amount) => {
      const {
        time,
        setSelected
      } = this.props;

      if (type === HOUR) {
        time.setHours(time.getHours() + amount);
      } else if (type === MINUTE) {
        time.setMinutes(time.getMinutes() + amount);
      }

      setSelected(time);
    });

    _defineProperty(this, "toggleAMPM", () => {
      const {
        time,
        setSelected
      } = this.props;

      if (this.state.ampm === AM) {
        time.setHours(time.getHours() + 12);
        this.setState({
          ampm: PM
        });
      } else {
        time.setHours(time.getHours() - 12);
        this.setState({
          ampm: AM
        });
      }

      setSelected(time);
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      ampm: nextProps.time.getHours() >= 12 ? PM : AM
    };
  }

  render() {
    const {
      time,
      toggleTimeTable
    } = this.props;
    const minutes = time.getMinutes();
    const hours = time.getHours() % 12 || 12;
    return React.createElement("div", {
      className: "timepicker-picker"
    }, React.createElement("table", null, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", {
      onClick: () => this.setTime(HOUR, 1)
    }, React.createElement("a", {
      title: "Increment Hour",
      className: "btn clock-btn"
    }, React.createElement("span", {
      className: "glyphicon glyphicon-chevron-up"
    }))), React.createElement("td", {
      className: "separator"
    }), React.createElement("td", {
      onClick: () => this.setTime(MINUTE, 1)
    }, React.createElement("a", {
      title: "Increment Minute",
      className: "btn clock-btn"
    }, React.createElement("span", {
      className: "glyphicon glyphicon-chevron-up"
    }))), React.createElement("td", {
      className: "separator"
    })), React.createElement("tr", null, React.createElement("td", {
      onClick: () => toggleTimeTable(HOUR)
    }, React.createElement("span", {
      className: "timepicker-hour",
      title: "Pick Hour"
    }, `${hours}`.padStart(2, '0'))), React.createElement("td", {
      className: "separator"
    }, ":"), React.createElement("td", {
      onClick: () => toggleTimeTable(MINUTE)
    }, React.createElement("span", {
      className: "timepicker-minute",
      title: "Pick Minute"
    }, `${minutes}`.padStart(2, '0'))), React.createElement("td", null, React.createElement("button", {
      className: "btn btn-primary ampm-toggle",
      onClick: () => this.toggleAMPM()
    }, this.state.ampm))), React.createElement("tr", null, React.createElement("td", null, React.createElement("a", {
      title: "Decrement Hour",
      className: "btn clock-btn",
      onClick: () => this.setTime(HOUR, -1)
    }, React.createElement("span", {
      className: "glyphicon glyphicon-chevron-down"
    }))), React.createElement("td", {
      className: "separator"
    }), React.createElement("td", null, React.createElement("a", {
      title: "Decrement Minute",
      className: "btn clock-btn",
      onClick: () => this.setTime(MINUTE, -1)
    }, React.createElement("span", {
      className: "glyphicon glyphicon-chevron-down"
    }))), React.createElement("td", {
      className: "separator"
    })))));
  }

}

PickTimeClock.propTypes = {
  time: PropTypes.instanceOf(Date).isRequired,
  setSelected: PropTypes.func,
  toggleTimeTable: PropTypes.func
};
PickTimeClock.defaultProps = {
  setSelected: noop,
  toggleTimeTable: noop
};
export default PickTimeClock;