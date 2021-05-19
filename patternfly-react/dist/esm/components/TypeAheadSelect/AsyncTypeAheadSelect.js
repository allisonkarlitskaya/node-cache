function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import PropTypes from 'prop-types';

class AsyncTypeAheadSelect extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      options: this.props.options,
      isLoading: this.props.isLoading
    });

    _defineProperty(this, "onSearchStart", () => this.setState({
      isLoading: true
    }));

    _defineProperty(this, "onSearchEnd", options => this.setState({
      options,
      isLoading: false
    }));

    _defineProperty(this, "handleSearch", query => {
      this.onSearchStart();
      Promise.resolve(this.props.onSearch(query)).then(options => this.onSearchEnd(options));
    });
  }

  render() {
    const _this$props = this.props,
          {
      innerRef
    } = _this$props,
          props = _objectWithoutProperties(_this$props, ["innerRef"]);

    return React.createElement(AsyncTypeahead, _extends({}, props, {
      ref: innerRef,
      onSearch: this.handleSearch,
      options: this.state.options,
      isLoading: this.state.isLoading
    }));
  }

}

AsyncTypeAheadSelect.propTypes = {
  /** Callback function for search */
  onSearch: PropTypes.func.isRequired,

  /** Array of selectable options */
  options: PropTypes.array,

  /** Flag to indicate if typeahead is loading */
  isLoading: PropTypes.bool,

  /** Internal property to access the react bootstrap typeahead component via outer ref property */
  innerRef: PropTypes.any
};
AsyncTypeAheadSelect.defaultProps = {
  options: [],
  isLoading: false,
  innerRef: null
};
export default React.forwardRef((props, ref) => React.createElement(AsyncTypeAheadSelect, _extends({}, props, {
  innerRef: ref
})));