function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { addMonths } from './helpers';
import MonthView from './MonthView';
import YearView from './YearView';
import DecadeView from './DecadeView';

class DateInput extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      selectedDate: new Date(this.props.date),
      date: new Date(this.props.date),
      typeOfDateInput: this.props.typeOfDateInput
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

    _defineProperty(this, "toggleDateView", (type = null) => {
      this.setState({
        typeOfDateInput: type
      });
    });

    _defineProperty(this, "getDateViewByType", type => {
      const {
        date,
        weekStartsOn,
        locale,
        setSelected
      } = this.props;
      const parsedDate = Date.parse(date) ? date : new Date();

      switch (type) {
        case 'D':
          return React.createElement(DecadeView, {
            date: parsedDate,
            setSelected: setSelected,
            toggleDateView: this.toggleDateView
          });

        case 'Y':
          return React.createElement(YearView, {
            date: parsedDate,
            setSelected: setSelected,
            locale: locale,
            toggleDateView: this.toggleDateView
          });

        default:
          return React.createElement(MonthView, {
            date: parsedDate,
            setSelected: setSelected,
            locale: locale,
            weekStartsOn: weekStartsOn,
            toggleDateView: this.toggleDateView
          });
      }
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const nextDate = new Date(nextProps.date);
    const prevDate = new Date(prevState.selectedDate);
    const nextType = new Date(nextProps.date);
    return Date.parse(nextDate) === Date.parse(prevDate) ? null : {
      selectedDate: nextDate,
      date: nextDate,
      typeOfDateInput: nextType
    };
  }

  render() {
    const {
      className
    } = this.props;
    const {
      typeOfDateInput
    } = this.state;
    return React.createElement("div", {
      className: classNames('datepicker', className)
    }, this.getDateViewByType(typeOfDateInput));
  }

}

DateInput.propTypes = {
  date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  setSelected: PropTypes.func,
  locale: PropTypes.string,
  weekStartsOn: PropTypes.number,
  className: PropTypes.string,
  typeOfDateInput: PropTypes.string
};
DateInput.defaultProps = {
  setSelected: null,
  date: new Date(),
  locale: 'en-US',
  weekStartsOn: 1,
  className: '',
  typeOfDateInput: 'M'
};
export default DateInput;