function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { noop } from '../../common/helpers';
import { Modal } from '../Modal';
import { Button } from '../Button';

const MessageDialog = (_ref) => {
  let {
    show,
    onHide,
    primaryAction,
    secondaryAction,
    title,
    icon,
    primaryContent,
    secondaryContent,
    primaryActionButtonBsStyle,
    secondaryActionButtonBsStyle,
    primaryActionButtonContent,
    secondaryActionButtonContent,
    className,
    footer,
    enforceFocus,
    accessibleName,
    accessibleDescription
  } = _ref,
      props = _objectWithoutProperties(_ref, ["show", "onHide", "primaryAction", "secondaryAction", "title", "icon", "primaryContent", "secondaryContent", "primaryActionButtonBsStyle", "secondaryActionButtonBsStyle", "primaryActionButtonContent", "secondaryActionButtonContent", "className", "footer", "enforceFocus", "accessibleName", "accessibleDescription"]);

  return React.createElement(Modal, _extends({
    className: classNames('message-dialog-pf', className),
    show: show,
    onHide: onHide,
    enforceFocus: enforceFocus,
    "aria-modal": true,
    "aria-labelledby": accessibleName,
    "aria-describedby": accessibleDescription
  }, props), React.createElement(Modal.Header, null, React.createElement(Modal.CloseButton, {
    onClick: onHide
  }), React.createElement(Modal.Title, {
    id: accessibleName
  }, title)), React.createElement(Modal.Body, null, icon && icon, React.createElement("div", {
    id: accessibleDescription
  }, primaryContent && primaryContent, secondaryContent && secondaryContent)), React.createElement(Modal.Footer, null, !footer ? React.createElement(React.Fragment, null, secondaryActionButtonContent && React.createElement(Button, {
    bsStyle: secondaryActionButtonBsStyle,
    onClick: secondaryAction
  }, secondaryActionButtonContent), React.createElement(Button, {
    autoFocus: true,
    bsStyle: primaryActionButtonBsStyle,
    onClick: primaryAction
  }, primaryActionButtonContent)) : footer));
};

MessageDialog.propTypes = {
  /** additional class(es) */
  className: PropTypes.string,

  /** When true, the modal will show itself */
  show: PropTypes.bool.isRequired,

  /** A callback fired when the header closeButton or backdrop is clicked */
  onHide: PropTypes.func.isRequired,

  /** callback to trigger when clicking the default footer primary action button */
  primaryAction(props, propName, componentName) {
    if (props.footer) {
      return null;
    }

    return PropTypes.checkPropTypes({
      primaryAction: PropTypes.func.isRequired
    }, {
      [propName]: props[propName]
    }, propName, componentName);
  },

  /** callback to trigger when clicking the default footer secondary action button */
  secondaryAction: PropTypes.func,

  /** Bootstrap button style for primary action */
  primaryActionButtonBsStyle: PropTypes.string,

  /** Bootstrap button style for secondary action */
  secondaryActionButtonBsStyle: PropTypes.string,

  /** content for default footer primary action button */
  primaryActionButtonContent(props, propName, componentName) {
    if (props.footer) {
      return null;
    }

    return PropTypes.checkPropTypes({
      primaryActionButtonContent: PropTypes.node.isRequired
    }, {
      [propName]: props[propName]
    }, propName, componentName);
  },

  /** content for default footer secondary action button */
  secondaryActionButtonContent: PropTypes.node,

  /** modal title */
  title: PropTypes.string,

  /** modal body icon */
  icon: PropTypes.node,

  /** modal body primary content */
  primaryContent: PropTypes.node,

  /** modal body secondary content */
  secondaryContent: PropTypes.node,

  /** custom footer */
  footer: PropTypes.node,

  /** When true the modal will prevent focus from leaving the Modal while open */
  enforceFocus: PropTypes.bool,

  /** Gives the modal an accessible name by referring to the element that provides the dialog title. Must be unique, as this sets an id */
  accessibleName: PropTypes.string,

  /** Gives the modal an accessible description by referring to the modal content that describes the primary message or purpose of the dialog. Not used if there is no static text that describes the modal. Must be unique, as this sets an id */
  accessibleDescription: PropTypes.string
};
MessageDialog.defaultProps = {
  className: '',
  primaryAction: null,
  secondaryAction: noop,
  primaryActionButtonBsStyle: 'primary',
  secondaryActionButtonBsStyle: 'default',
  primaryActionButtonContent: null,
  secondaryActionButtonContent: null,
  title: '',
  icon: null,
  primaryContent: null,
  secondaryContent: null,
  footer: null,
  enforceFocus: true,
  accessibleName: '',
  accessibleDescription: ''
};
export default MessageDialog;