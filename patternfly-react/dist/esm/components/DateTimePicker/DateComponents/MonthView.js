function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import chunk from 'lodash/chunk';
import times from 'lodash/times';
import Day from './Day';
import { addDays, addMonths, getMonthStart, isEqualDate, isWeekend } from './helpers';
import Header from './Header';

class DateInput extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      selectedDate: new Date(this.props.date),
      date: new Date(this.props.date)
    });

    _defineProperty(this, "calendarArray", date => {
      const {
        weekStartsOn
      } = this.props;
      const monthStart = getMonthStart(new Date(date));
      const offset = monthStart.getDay() - weekStartsOn;
      return chunk(times(35, i => addDays(monthStart, i - offset)), 7);
    });

    _defineProperty(this, "getPrevMonth", () => {
      const {
        date
      } = this.state;
      this.setState({
        date: addMonths(date, -1)
      });
    });

    _defineProperty(this, "getNextMonth", () => {
      const {
        date
      } = this.state;
      this.setState({
        date: addMonths(date, 1)
      });
    });

    _defineProperty(this, "setSelected", day => {
      this.setState({
        selectedDate: day,
        date: day
      });
      this.props.setSelected(day);
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const nextDate = new Date(nextProps.date);
    const prevDate = new Date(prevState.selectedDate);
    return !(Date.parse(nextDate) === Date.parse(prevDate)) ? {
      selectedDate: nextDate,
      date: nextDate
    } : null;
  }

  render() {
    const {
      locale,
      weekStartsOn,
      toggleDateView
    } = this.props;
    const {
      date,
      selectedDate
    } = this.state;
    const calendar = this.calendarArray(date);
    return React.createElement("div", {
      className: "datepicker-days"
    }, React.createElement("table", {
      className: "table-condensed"
    }, React.createElement(Header, {
      getPrevMonth: this.getPrevMonth,
      getNextMonth: this.getNextMonth,
      date: date,
      locale: locale,
      weekStartsOn: weekStartsOn,
      toggleDateView: toggleDateView
    }), React.createElement("tbody", null, calendar.map((el, idx) => React.createElement("tr", {
      key: idx
    }, el.map(day => React.createElement(Day, {
      key: day,
      day: day,
      setSelected: this.setSelected,
      classNamesArray: {
        weekend: isWeekend(day),
        old: day.getMonth() !== date.getMonth(),
        active: isEqualDate(day, selectedDate),
        today: isEqualDate(day, new Date())
      }
    })))))));
  }

}

DateInput.propTypes = {
  date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  setSelected: PropTypes.func,
  toggleDateView: PropTypes.func,
  locale: PropTypes.string,
  weekStartsOn: PropTypes.number
};
DateInput.defaultProps = {
  setSelected: null,
  toggleDateView: null,
  date: new Date(),
  locale: 'en-US',
  weekStartsOn: 1
};
export default DateInput;