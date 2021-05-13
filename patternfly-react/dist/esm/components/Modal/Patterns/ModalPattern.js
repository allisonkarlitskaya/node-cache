function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../../index';
import Modal from '../Modal';
import CustomModalDialog from '../InnerComponents/CustomModalDialog';
import BsModal from "react-bootstrap/es/Modal";
/**
 * Modal Pattern component.
 */

const ModalPattern = (_ref) => {
  let {
    show,
    title,
    onClose,
    footer,
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["show", "title", "onClose", "footer", "children"]);

  return React.createElement(Modal, _extends({
    show: show
  }, rest), React.createElement(Modal.Header, null, React.createElement(Modal.CloseButton, {
    onClick: onClose
  }), React.createElement(Modal.Title, null, title)), React.createElement(Modal.Body, null, children), React.createElement(Modal.Footer, null, footer));
};

ModalPattern.propTypes = _objectSpread({}, BsModal.propTypes, {
  show: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onClose: PropTypes.func,
  footer: PropTypes.node,
  children: PropTypes.node
});
ModalPattern.defaultProps = _objectSpread({}, BsModal.defaultProps, {
  dialogComponentClass: CustomModalDialog,
  show: false,
  title: '',
  onClose: noop,
  footer: null,
  children: null
});
ModalPattern.displayName = 'ModalPattern';
export default ModalPattern;