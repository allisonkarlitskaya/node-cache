function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import BsLabel from "react-bootstrap/es/Label";
import PropTypes from 'prop-types';
import RemoveButton from './RemoveButton';
import DisposableLabel from './DisposableLabel';
import CompoundLabel from './CompoundLabel';
import LabelWithTooltip from './LabelWithTooltip';

const Label = (_ref) => {
  let {
    children,
    onRemoveClick,
    type
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "onRemoveClick", "type"]);

  return React.createElement(BsLabel, _extends({
    bsStyle: type
  }, props), children, !!onRemoveClick && React.createElement(RemoveButton, {
    onRemoveClick: onRemoveClick,
    title: "Remove"
  }));
}; // WARNING: If you change propTypes you MUST also change DisposableLabel.propTypes


Label.propTypes = _objectSpread({}, BsLabel.propTypes, {
  /** Children nodes */
  children: PropTypes.node,

  /** Label type */
  type: PropTypes.string,

  /** callback when Label is removed  */
  onRemoveClick: PropTypes.func
}); // WARNING: If you change defaultProps you MUST also change DisposableLabel.defaultProps

Label.defaultProps = {
  children: null,
  type: 'default',
  onRemoveClick: undefined
};
Label.RemoveButton = RemoveButton;
Label.DisposableLabel = DisposableLabel;
Label.CompoundLabel = CompoundLabel;
Label.WithTooltop = LabelWithTooltip;
export default Label;