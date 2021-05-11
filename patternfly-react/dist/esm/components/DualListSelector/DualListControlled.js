function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';
import { DualList } from './index';
import { adjustProps } from './helpers';
import { noop } from '../../common/helpers';

class DualListControlled extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "onItemChange", ({
      side,
      items,
      selectCount,
      isMainChecked
    }) => {
      const {
        onItemChange
      } = this.props;
      this.setState({
        [side]: _objectSpread({}, this.state[side], {
          items,
          selectCount,
          isMainChecked
        })
      }, () => onItemChange(this.state));
    });

    _defineProperty(this, "onMainCheckboxChange", ({
      side,
      checked,
      items,
      selectCount
    }) => {
      const {
        onMainCheckboxChange
      } = this.props;
      this.setState({
        [side]: _objectSpread({}, this.state[side], {
          items,
          selectCount,
          isMainChecked: checked
        })
      }, () => onMainCheckboxChange(this.state));
    });

    _defineProperty(this, "onSortClick", ({
      side,
      items,
      isSortAsc
    }) => {
      const {
        onSortClick
      } = this.props;
      this.setState({
        [side]: _objectSpread({}, this.state[side], {
          items,
          isSortAsc
        })
      }, () => onSortClick(this.state));
    });

    _defineProperty(this, "onFilterChange", ({
      side,
      filterTerm,
      items,
      isMainChecked
    }) => {
      const {
        onFilterChange
      } = this.props;
      this.setState({
        [side]: _objectSpread({}, this.state[side], {
          filterTerm,
          items,
          isMainChecked
        })
      }, () => onFilterChange(this.state));
    });

    _defineProperty(this, "onChange", ({
      left,
      right
    }) => {
      const {
        onChange
      } = this.props;
      this.setState({
        left,
        right
      }, () => onChange(this.state));
    });

    this.state = _objectSpread({
      prevProps: props
    }, adjustProps(props));
  }

  componentDidMount() {
    const {
      onComponentInit
    } = this.props;
    onComponentInit(this.state);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return !isEqual(nextProps, prevState.prevProps) ? _objectSpread({
      prevProps: nextProps
    }, adjustProps(nextProps)) : null;
  }

  render() {
    const {
      left,
      right,
      allowHiddenInputs
    } = this.state;
    return React.createElement(DualList, {
      left: _objectSpread({}, left),
      right: _objectSpread({}, right),
      onItemChange: this.onItemChange,
      onSortClick: this.onSortClick,
      onFilterChange: this.onFilterChange,
      onMainCheckboxChange: this.onMainCheckboxChange,
      onChange: this.onChange,
      allowHiddenInputs: allowHiddenInputs
    });
  }

}

DualListControlled.propTypes = {
  /**
   * Function that runs after items have been moved between the lists.
   * Receives the updated state as a callback.
   */
  onChange: PropTypes.func,

  /**
   * Function that runs after an item was clicked.
   * Receives the updated state as a callback.
   */
  onItemChange: PropTypes.func,

  /**
   * Function that runs after the main checkbox was clicked.
   * Receives the updated state as a callback.
   */
  onMainCheckboxChange: PropTypes.func,

  /**
   * Function that runs after the sort icon was clicked.
   * Receives the updated state as a callback.
   */
  onSortClick: PropTypes.func,

  /**
   * Function that runs after the filter input has changed.
   * Receives the updated state as a callback.
   */
  onFilterChange: PropTypes.func,

  /**
   * Function that runs after the component had mounted.
   * Receives the updated state as a callback.
   */
  onComponentInit: PropTypes.func
};
DualListControlled.defaultProps = {
  onChange: noop,
  onItemChange: noop,
  onMainCheckboxChange: noop,
  onSortClick: noop,
  onFilterChange: noop,
  onComponentInit: noop
};
export default DualListControlled;