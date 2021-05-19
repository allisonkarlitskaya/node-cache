function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputGroup, Icon, OverlayTrigger, Popover } from '../../';
import DateInput from './DateComponents/DateInput';
import TodayButton from './DateComponents/TodayButton';
import TimeInput from './TimeComponents/TimeInput';
import { MONTH } from './DateComponents/DateConstants';
import { formatTime } from './TimeHelpers';

class DateTimePicker extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "formatDate", date => {
      const {
        locale
      } = this.props;
      const options = [{
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      }, {
        hour: 'numeric',
        minute: '2-digit'
      }];

      if (Date.parse(date)) {
        const parsedValue = new Date(date);
        return `${parsedValue.toLocaleString(locale, options[0])} ${parsedValue.toLocaleString(locale, options[1])}`;
      }

      return date;
    });

    _defineProperty(this, "setSelected", date => {
      let newDate = new Date(this.state.value);

      if (Date.parse(date)) {
        newDate = new Date(date);
      }

      this.setState({
        value: newDate,
        tmpValue: this.formatDate(newDate),
        typeOfDateInput: 'M',
        isTimeTableOpen: false
      });
    });

    this.state = {
      value: new Date(this.props.value),
      tmpValue: this.formatDate(new Date(this.props.value)),
      typeOfDateInput: MONTH,
      isTimeTableOpen: false
    };
  }

  render() {
    const {
      locale,
      weekStartsOn,
      id,
      placement
    } = this.props;
    const {
      value,
      typeOfDateInput,
      isTimeTableOpen,
      hiddenValue
    } = this.state;
    const popover = React.createElement(Popover, {
      id: id,
      className: "bootstrap-datetimepicker-widget date-time-picker-pf dropdown-menu timepicker-sbs"
    }, React.createElement("div", {
      className: "row"
    }, React.createElement(DateInput, {
      date: value,
      setSelected: this.setSelected,
      locale: locale,
      weekStartsOn: weekStartsOn,
      className: "col-md-6",
      typeOfDateInput: typeOfDateInput
    }), React.createElement(TimeInput, {
      time: value,
      setSelected: this.setSelected,
      isTimeTableOpen: isTimeTableOpen,
      locale: locale,
      className: "col-md-6"
    })), React.createElement("li", {
      className: "picker-switch accordion-toggle"
    }, React.createElement(TodayButton, {
      setSelected: this.setSelected
    })));
    return React.createElement("div", null, React.createElement(InputGroup, {
      className: "input-group date-time-picker-pf"
    }, React.createElement(FormControl, {
      "aria-label": "date-picker-input",
      type: "text",
      value: this.state.tmpValue,
      onChange: e => this.setState({
        tmpValue: e.target.value
      }),
      onBlur: e => this.setSelected(e.target.value)
    }), React.createElement(OverlayTrigger, {
      trigger: "click",
      placement: placement,
      overlay: popover,
      rootClose: true
    }, React.createElement(InputGroup.Addon, {
      className: "date-time-picker-pf",
      onClick: () => this.setState({
        tmpValue: formatTime(value, locale)
      })
    }, React.createElement(Icon, {
      type: "fa",
      name: "calendar"
    })))));
  }

}

DateTimePicker.propTypes = {
  value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  locale: PropTypes.string,
  weekStartsOn: PropTypes.number,
  id: PropTypes.string,
  hiddenValue: PropTypes.bool,
  placement: PropTypes.oneOf(['top', 'bottom'])
};
DateTimePicker.defaultProps = {
  value: new Date(),
  locale: 'en-US',
  weekStartsOn: 1,
  id: 'datetime-picker-popover',
  hiddenValue: true,
  placement: 'top'
};
export default DateTimePicker;