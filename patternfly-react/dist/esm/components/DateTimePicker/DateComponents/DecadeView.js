function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import times from 'lodash/times';
import { addYears } from './helpers';
import { noop } from '../../../common/helpers';
import { DecadeViewHeader } from './DecadeViewHeader';
import { DecadeViewTable } from './DecadeViewTable';

class DecadeView extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      date: new Date(this.props.date),
      selectedDate: new Date(this.props.date)
    });

    _defineProperty(this, "getYearArray", () => {
      const {
        date
      } = this.state;
      date.setFullYear(Math.floor(date.getFullYear() / 10) * 10);
      return times(12, i => addYears(date, i).getFullYear());
    });

    _defineProperty(this, "getPrevDecade", () => {
      const {
        date
      } = this.state;
      this.setState({
        date: addYears(date, -10)
      });
    });

    _defineProperty(this, "getNextDecade", () => {
      const {
        date
      } = this.state;
      this.setState({
        date: addYears(date, 10)
      });
    });

    _defineProperty(this, "setSelectedYear", year => {
      const {
        setSelected,
        toggleDateView
      } = this.props;
      const {
        date
      } = this.state;
      date.setFullYear(year);
      setSelected(date);
      toggleDateView('Y');
    });
  }

  render() {
    const {
      date,
      selectedDate
    } = this.state;
    const currDecade = Math.floor(date.getFullYear() / 10) * 10;
    const selectedYear = selectedDate.getFullYear();
    const yearArray = this.getYearArray();
    return React.createElement("div", {
      className: "datepicker-years"
    }, React.createElement("table", {
      className: "table-condensed"
    }, React.createElement(DecadeViewHeader, {
      currDecade: currDecade,
      getNextDecade: this.getNextDecade,
      getPrevDecade: this.getPrevDecade
    }), React.createElement(DecadeViewTable, {
      selectedYear: selectedYear,
      yearArray: yearArray,
      setSelectedYear: this.setSelectedYear
    })));
  }

}

DecadeView.propTypes = {
  date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  setSelected: PropTypes.func,
  toggleDateView: PropTypes.func
};
DecadeView.defaultProps = {
  setSelected: noop,
  toggleDateView: noop,
  date: new Date()
};
export default DecadeView;