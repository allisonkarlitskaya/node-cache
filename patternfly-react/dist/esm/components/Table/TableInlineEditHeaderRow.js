function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import TableConfirmButtonsRow from './TableConfirmButtonsRow';

const TableInlineEditHeaderRow = props => {
  const buttonsPosition = (window, rowDimensions) => {
    const position = {};
    position.bottom = window.height - rowDimensions.bottom - 3;
    position.right = window.width - rowDimensions.right + 10;
    return position;
  };

  const buttonsClassName = 'top bold';

  const rowProps = _objectSpread({}, props, {
    buttonsPosition,
    buttonsClassName
  });

  return React.createElement(TableConfirmButtonsRow, rowProps);
};

TableInlineEditHeaderRow.shouldComponentUpdate = true;
TableInlineEditHeaderRow.defaultProps = _objectSpread({}, TableConfirmButtonsRow.defaultProps);
TableInlineEditHeaderRow.propTypes = {
  /** Function that determines whether values or edit components should be rendered */
  isEditing: PropTypes.func,

  /** Confirm edit callback */
  onConfirm: PropTypes.func,

  /** Cancel edit callback */
  onCancel: PropTypes.func,

  /** Row cells */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),

  /** Message text inputs for i18n */
  messages: PropTypes.shape({
    confirmButtonLabel: PropTypes.string,
    cancelButtonLabel: PropTypes.string
  })
};
export default TableInlineEditHeaderRow;