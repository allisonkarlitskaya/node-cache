function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputGroup, Icon, OverlayTrigger, Popover } from '../../';
import TimeInput from './TimeComponents/TimeInput';
import { getDateFromTime, formatTime } from './TimeHelpers';

class TimePicker extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      value: getDateFromTime(this.props.value),
      tmpValue: formatTime(this.props.value, this.props.locale)
    });

    _defineProperty(this, "setSelected", time => {
      const newTime = getDateFromTime(time);

      if (newTime) {
        this.setState({
          value: newTime,
          tmpValue: formatTime(newTime, this.props.locale)
        });
      } else {
        this.setState({
          tmpValue: formatTime(newTime, this.props.locale)
        });
      }
    });
  }

  render() {
    const {
      value
    } = this.state;
    const {
      locale,
      placement,
      id
    } = this.props;
    const popover = React.createElement(Popover, {
      id: id,
      className: "bootstrap-datetimepicker-widget date-time-picker-pf bootstrap-timepicker-widget"
    }, React.createElement("ul", {
      className: "list-unstyled"
    }, React.createElement("li", {
      className: "picker-switch accordion-toggle"
    }, React.createElement("table", {
      className: "table-condensed"
    }, React.createElement("tbody", null, React.createElement("tr", null)))), React.createElement("li", null, React.createElement(TimeInput, {
      time: value,
      setSelected: this.setSelected,
      locale: locale
    }))));
    return React.createElement(InputGroup, {
      className: "input-group date-time-picker-pf time-picker-pf"
    }, React.createElement(FormControl, {
      "aria-label": "time-picker-input",
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
      className: "picker-pf",
      onClick: () => this.setState({
        tmpValue: formatTime(value, locale)
      })
    }, React.createElement(Icon, {
      type: "fa",
      name: "clock-o"
    }))));
  }

}

TimePicker.propTypes = {
  /** Value of the input */
  value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),

  /** locale string for formating the time string */
  locale: PropTypes.string,

  /** id of the popover */
  id: PropTypes.string,

  /** Placement of the popover */
  placement: OverlayTrigger.propTypes.placement
};
TimePicker.defaultProps = {
  value: new Date(),
  locale: 'en-US',
  id: 'popover-time-picker',
  placement: 'top'
};
export default TimePicker;