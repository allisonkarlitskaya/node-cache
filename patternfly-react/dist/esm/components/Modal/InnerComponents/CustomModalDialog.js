function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * CustomModalDialog creates custom ReactBootstrap ModalDialog
 * https://github.com/react-bootstrap/react-bootstrap/blob/bs3-dev/src/ModalDialog.js
 * Up-to-date with the original as of https://github.com/react-bootstrap/react-bootstrap/commit/87a9a97f8670f3a02436f8f520caf36f88e4bdab
 *
 * This extends ModalDialog and adds contentClassName prop for setting
 * `modal-content` div's class
 */
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import * as utils from 'react-bootstrap/lib/utils';
const {
  bsClass
} = utils.bootstrapUtils;
const {
  bsSizes
} = utils.bootstrapUtils;
const {
  getClassSet
} = utils.bootstrapUtils;
const {
  prefix
} = utils.bootstrapUtils;
const {
  splitBsProps
} = utils.bootstrapUtils; // React Bootstrap utils/StyleConfig Size is currently not exported

const Size = {
  LARGE: 'large',
  SMALL: 'small'
}; // eslint-disable-next-line react/prefer-stateless-function

class CustomModalDialog extends React.Component {
  render() {
    const _this$props = this.props,
          {
      dialogClassName,
      contentClassName,
      className,
      style,
      children,
      onMouseDownDialog
    } = _this$props,
          props = _objectWithoutProperties(_this$props, ["dialogClassName", "contentClassName", "className", "style", "children", "onMouseDownDialog"]);

    const [bsProps, elementProps] = splitBsProps(props);
    const bsClassName = prefix(bsProps);

    const modalStyle = _objectSpread({
      display: 'block'
    }, style);

    const dialogClasses = _objectSpread({}, getClassSet(bsProps), {
      [bsClassName]: false,
      [prefix(bsProps, 'dialog')]: true
    });

    return React.createElement("div", _extends({}, elementProps, {
      tabIndex: "-1",
      role: "dialog",
      style: modalStyle,
      className: classNames(className, bsClassName)
    }), React.createElement("div", {
      className: classNames(dialogClassName, dialogClasses),
      onMouseDown: onMouseDownDialog
    }, React.createElement("div", {
      className: classNames(prefix(bsProps, 'content'), contentClassName),
      role: "document"
    }, children)));
  }

}

CustomModalDialog.propTypes = {
  /** A css class to apply to the Modal dialog DOM node. */
  dialogClassName: PropTypes.string,

  /** custom modal-content class added to the content DOM node */
  contentClassName: PropTypes.string,

  /** base modal class name */
  className: PropTypes.string,

  /** additional modal styles */
  style: PropTypes.object,

  /** Children nodes */
  children: PropTypes.node
};
CustomModalDialog.defaultProps = {
  dialogClassName: '',
  contentClassName: '',
  className: '',
  style: {},
  children: null
};
export default bsClass('modal', bsSizes([Size.LARGE, Size.SMALL], CustomModalDialog));