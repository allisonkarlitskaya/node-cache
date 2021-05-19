function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import BootstrapSlider from './BootstrapSlider';
import { noop } from '../../common/helpers';
import { Icon } from '../Icon';
import { ControlLabel, FormControl } from '../Form';
import Boundaries from './Boundaries';
import DropdownMenu from './DropdownMenu';

class Slider extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "onSlide", value => {
      const newValue = value < this.props.min ? this.props.min : value;
      this.setState({
        value: newValue
      }, () => this.props.onSlide(newValue));
    });

    _defineProperty(this, "onInputChange", event => {
      const newValue = parseInt(event.target.value || 0, 10);
      this.setState({
        value: newValue
      }, () => this.props.onSlide(newValue));
    });

    _defineProperty(this, "onFormatChange", format => {
      this.setState({
        tooltipFormat: format
      }, this.props.onFormatChange(format));
    });

    _defineProperty(this, "formatter", value => `${value} ${this.state.tooltipFormat}`);

    this.state = {
      value: this.props.value,
      tooltipFormat: this.props.dropdownList && this.props.dropdownList[0] || this.props.inputFormat
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.onSlide(this.props.value);
    }
  }

  render() {
    let label = null;
    let sliderClass = 'col-xs-12 col-sm-12 col-md-12';
    const labelClass = 'col-xs-2 col-sm-2 col-md-2';

    if (this.props.label || this.props.icon) {
      sliderClass = 'col-xs-10 col-sm-10 col-md-10';
      label = this.props.icon ? React.createElement(Icon, _extends({
        className: labelClass
      }, this.props.icon)) : React.createElement(ControlLabel, {
        htmlFor: this.props.id,
        bsClass: labelClass
      }, this.props.label);
    }

    let formatElement;

    if (this.props.inputFormat) {
      formatElement = React.createElement("span", null, this.props.inputFormat);
    }

    if (this.props.dropdownList) {
      formatElement = React.createElement(DropdownMenu, _extends({}, this.props, {
        onFormatChange: this.onFormatChange,
        title: this.state.tooltipFormat
      }));
    }

    const inputElement = this.props.input && React.createElement(FormControl, {
      bsClass: "slider-input-pf",
      type: "number",
      value: this.state.value,
      min: this.props.min,
      max: this.props.max,
      onChange: this.onInputChange
    });
    const BSSlider = React.createElement(BootstrapSlider, _extends({}, this.props, {
      formatter: this.formatter,
      value: this.state.value,
      onSlide: this.onSlide
    }));
    return React.createElement("div", null, label, React.createElement("div", {
      className: sliderClass
    }, React.createElement(Boundaries, _extends({
      slider: BSSlider
    }, this.props), inputElement, formatElement)));
  }

}

Slider.propTypes = {
  id: PropTypes.string,
  orientation: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.number]),
  toolTip: PropTypes.bool,
  onSlide: PropTypes.func,
  onFormatChange: PropTypes.func,
  label: PropTypes.string,
  labelClass: PropTypes.string,
  icon: PropTypes.object,
  input: PropTypes.bool,
  sliderClass: PropTypes.string,
  dropdownList: PropTypes.array,
  inputFormat: PropTypes.string
};
Slider.defaultProps = {
  id: null,
  orientation: 'horizontal',
  min: 0,
  max: 100,
  value: 0,
  step: 1,
  toolTip: false,
  onSlide: noop,
  onFormatChange: noop,
  label: null,
  labelClass: null,
  input: false,
  sliderClass: null,
  icon: null,
  dropdownList: null,
  inputFormat: ''
};
export default Slider;