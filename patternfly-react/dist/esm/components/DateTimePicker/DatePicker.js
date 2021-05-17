function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputGroup, Icon, OverlayTrigger, Popover } from '../../';
import DateInput from './DateComponents/DateInput';
import TodayButton from './DateComponents/TodayButton';
import { formatDate } from './DateHelpers';

class DatePicker extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      value: new Date(this.props.value),
      tmpValue: formatDate(this.props.value, this.props.locale)
    });

    _defineProperty(this, "setSelected", date => {
      let newDate = new Date(this.state.value);

      if (Date.parse(date)) {
        newDate = new Date(date);
      } else if (date === '') {
        newDate = date;
      }

      this.setState({
        value: newDate,
        tmpValue: formatDate(newDate)
      });
    });
  }

  render() {
    const {
      value
    } = this.state;
    const {
      locale,
      weekStartsOn,
      id,
      placement
    } = this.props;
    const popover = React.createElement(Popover, {
      id: id,
      className: "bootstrap-datetimepicker-widget date-picker-pf usetwentyfour"
    }, React.createElement("ul", {
      className: "list-unstyled"
    }, React.createElement("li", null, React.createElement(DateInput, {
      date: value,
      setSelected: this.setSelected,
      locale: locale,
      weekStartsOn: weekStartsOn
    })), React.createElement("li", {
      className: "picker-switch accordion-toggle"
    }, React.createElement(TodayButton, {
      setSelected: this.setSelected
    }))));
    return React.createElement("div", null, React.createElement(InputGroup, {
      className: "input-group date-time-picker-pf"
    }, React.createElement(FormControl, {
      "aria-label": "date-time-picker-input",
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
      className: "date-picker-pf",
      onClick: () => this.setState({
        tmpValue: formatDate(value)
      })
    }, React.createElement(Icon, {
      type: "fa",
      name: "calendar"
    })))));
  }

}

DatePicker.propTypes = {
  value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  locale: PropTypes.string,
  weekStartsOn: PropTypes.number,
  id: PropTypes.string,
  placement: OverlayTrigger.propTypes.placement
};
DatePicker.defaultProps = {
  value: new Date(),
  locale: 'en-US',
  weekStartsOn: 1,
  id: 'popover-date-picker',
  placement: 'top'
};
export default DatePicker;