function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../common/helpers';
import BsLabel from "react-bootstrap/es/Label";
import Label from './Label';

const DisposableLabel = props => React.createElement(Label, props); // WARNING: This should be kept consistent with Label.propTypes


DisposableLabel.propTypes = _objectSpread({}, BsLabel.propTypes, {
  /** Children nodes */
  children: PropTypes.node,

  /** Label type */
  type: PropTypes.string,

  /** callback when Label is removed  */
  onRemoveClick: PropTypes.func
}); // WARNING: This should be kept consistent with Label.defaultProps

DisposableLabel.defaultProps = {
  children: null,
  type: 'default',
  onRemoveClick: noop
};
export default DisposableLabel;