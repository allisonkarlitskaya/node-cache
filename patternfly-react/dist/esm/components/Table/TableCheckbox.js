function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { ControlLabel } from '../Form';
import { noop } from '../../common/helpers';
/**
 * TableCheckbox component for Patternfly React
 */

const TableCheckbox = (_ref) => {
  let {
    id,
    label,
    checked,
    onChange
  } = _ref,
      props = _objectWithoutProperties(_ref, ["id", "label", "checked", "onChange"]);

  return React.createElement(React.Fragment, null, React.createElement(ControlLabel, {
    srOnly: true,
    htmlFor: id
  }, label), React.createElement("input", _extends({
    type: "checkbox",
    id: id,
    checked: checked,
    onChange: onChange
  }, props)));
};

TableCheckbox.propTypes = {
  /** checkbox id */
  id: PropTypes.string,

  /** checkbox label */
  label: PropTypes.string,

  /** checkbox is checked */
  checked: PropTypes.bool,

  /** onChange callback */
  onChange: PropTypes.func
};
TableCheckbox.defaultProps = {
  id: '',
  label: '',
  checked: false,
  onChange: noop
};
export default TableCheckbox;