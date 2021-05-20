function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import times from 'lodash/times';
import { addMonths, addYears } from './helpers';
import { noop } from '../../../common/helpers';

class YearView extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      date: new Date(this.props.date),
      selectedDate: new Date(this.props.date)
    });

    _defineProperty(this, "getMonthArray", () => {
      const date = new Date('1/1/1');
      return times(12, i => Intl.DateTimeFormat(this.props.locale, {
        month: 'short'
      }).format(addMonths(date, i)));
    });

    _defineProperty(this, "getPrevYear", () => {
      const {
        date
      } = this.state;
      this.setState({
        date: addYears(date, -1)
      });
    });

    _defineProperty(this, "getNextYear", () => {
      const {
        date
      } = this.state;
      this.setState({
        date: addYears(date, 1)
      });
    });

    _defineProperty(this, "setSelectedMonth", month => {
      const {
        date
      } = this.state;
      date.setMonth(month);
      this.props.setSelected(date);
      this.props.toggleDateView('M');
    });
  }

  render() {
    const {
      date,
      selectedDate
    } = this.state;
    const [currMonth, currYear] = [date.getMonth(), date.getFullYear()];
    const selectedYear = selectedDate.getFullYear();
    const monthArray = this.getMonthArray();
    return React.createElement("div", {
      className: "datepicker-months"
    }, React.createElement("table", {
      className: "table-condensed"
    }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {
      className: "prev",
      onClick: this.getPrevYear
    }, React.createElement("span", {
      className: "glyphicon glyphicon-chevron-left"
    })), React.createElement("th", {
      className: "picker-switch",
      onClick: () => this.props.toggleDateView('D'),
      colSpan: "5"
    }, currYear), React.createElement("th", {
      className: "next",
      onClick: this.getNextYear
    }, React.createElement("span", {
      className: "glyphicon glyphicon-chevron-right"
    })))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", {
      colSpan: "7"
    }, monthArray.map((month, idx) => React.createElement("span", {
      onClick: () => this.setSelectedMonth(idx),
      className: `month ${idx === currMonth && selectedYear === currYear ? 'active' : ''}`,
      key: idx
    }, month)))))));
  }

}

YearView.propTypes = {
  date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  setSelected: PropTypes.func,
  toggleDateView: PropTypes.func,
  locale: PropTypes.string
};
YearView.defaultProps = {
  setSelected: noop,
  toggleDateView: noop,
  date: new Date(),
  locale: 'en-US'
};
export default YearView;