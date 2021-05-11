function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PaginationRowArrowIcon from './PaginationRowArrowIcon';
import { noop } from '../../common/helpers';
/**
 * PaginationRowBack component for Patternfly React
 */

const PaginationRowBack = (_ref) => {
  let {
    className,
    page,
    messagesFirstPage,
    messagesPreviousPage,
    onFirstPage,
    onPreviousPage,
    disable
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "page", "messagesFirstPage", "messagesPreviousPage", "onFirstPage", "onPreviousPage", "disable"]);

  const classes = classNames('pagination', 'pagination-pf-back', className);
  return React.createElement("ul", _extends({
    className: classes
  }, props), React.createElement("li", {
    className: page === 1 || disable ? 'disabled' : ''
  }, React.createElement("a", {
    href: "#",
    title: messagesFirstPage,
    onClick: e => {
      e.preventDefault();

      if (page !== 1) {
        onFirstPage(e);
      }
    }
  }, React.createElement(PaginationRowArrowIcon, {
    name: "double-left"
  }))), React.createElement("li", {
    className: page === 1 || disable ? 'disabled' : ''
  }, React.createElement("a", {
    href: "#",
    title: messagesPreviousPage,
    onClick: e => {
      e.preventDefault();

      if (page !== 1) {
        onPreviousPage(e);
      }
    }
  }, React.createElement(PaginationRowArrowIcon, {
    name: "left"
  }))));
};

PaginationRowBack.propTypes = {
  /** additional class names */
  className: PropTypes.string,

  /** pagination page */
  page: PropTypes.number.isRequired,

  /** messages firstPage */
  messagesFirstPage: PropTypes.string.isRequired,

  /** messages previousPage */
  messagesPreviousPage: PropTypes.string.isRequired,

  /** first page callback */
  onFirstPage: PropTypes.func,

  /** previous page selection callback */
  onPreviousPage: PropTypes.func,

  /** disable back button */
  disable: PropTypes.bool
};
PaginationRowBack.defaultProps = {
  className: '',
  onFirstPage: noop,
  onPreviousPage: noop,
  disable: false
};
export default PaginationRowBack;