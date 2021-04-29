function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import TableConfirmButtonsRow from './TableConfirmButtonsRow';

const TableInlineEditRow = props => {
  const buttonsPosition = (window, rowDimensions) => {
    const position = {};

    if (props.last) {
      position.bottom = window.height - rowDimensions.top - 1;
    } else {
      position.top = rowDimensions.bottom - 1;
    }

    position.right = window.width - rowDimensions.right + 10;
    return position;
  };

  const buttonsClassName = props.last ? 'top' : 'bottom';
  return React.createElement(TableConfirmButtonsRow, _extends({}, props, {
    buttonsPosition: buttonsPosition,
    buttonsClassName: buttonsClassName
  }));
};

TableInlineEditRow.shouldComponentUpdate = true;
TableInlineEditRow.defaultProps = _objectSpread({}, TableConfirmButtonsRow.defaultProps, {
  last: false
});
TableInlineEditRow.propTypes = {
  /** Function that determines whether values or edit components should be rendered */
  isEditing: PropTypes.func,

  /** Confirm edit callback */
  onConfirm: PropTypes.func,

  /** Cancel edit callback */
  onCancel: PropTypes.func,

  /** Flag to indicate last row */
  last: PropTypes.bool,

  /** Row cells */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),

  /** Message text inputs for i18n */
  messages: PropTypes.shape({
    confirmButtonLabel: PropTypes.string,
    cancelButtonLabel: PropTypes.string
  })
};
export default TableInlineEditRow;