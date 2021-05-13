function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PaginationRowArrowIcon from './PaginationRowArrowIcon';
import { noop } from '../../common/helpers';
/**
 * PaginationRowForward component for Patternfly React
 */

const PaginationRowForward = (_ref) => {
  let {
    className,
    page,
    amountOfPages,
    messagesNextPage,
    messagesLastPage,
    onNextPage,
    onLastPage,
    disable
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "page", "amountOfPages", "messagesNextPage", "messagesLastPage", "onNextPage", "onLastPage", "disable"]);

  const classes = classNames('pagination', 'pagination-pf-forward', className);
  return React.createElement("ul", {
    className: classes
  }, React.createElement("li", {
    className: page === amountOfPages || disable ? 'disabled' : ''
  }, React.createElement("a", {
    href: "#",
    title: messagesNextPage,
    onClick: e => {
      e.preventDefault();

      if (page !== amountOfPages) {
        onNextPage(e);
      }
    }
  }, React.createElement(PaginationRowArrowIcon, {
    name: "right"
  }))), React.createElement("li", {
    className: page === amountOfPages || disable ? 'disabled' : ''
  }, React.createElement("a", {
    href: "#",
    title: messagesLastPage,
    onClick: e => {
      e.preventDefault();

      if (page !== amountOfPages) {
        onLastPage(e);
      }
    }
  }, React.createElement(PaginationRowArrowIcon, {
    name: "double-right"
  }))));
};

PaginationRowForward.propTypes = {
  /** additional class names */
  className: PropTypes.string,

  /** pagination page */
  page: PropTypes.number.isRequired,

  /** calculated amount of pages */
  amountOfPages: PropTypes.number.isRequired,

  /** messages next page */
  messagesNextPage: PropTypes.string.isRequired,

  /** messages last page */
  messagesLastPage: PropTypes.string.isRequired,

  /** next page callback */
  onNextPage: PropTypes.func,

  /** last page callback */
  onLastPage: PropTypes.func,

  /** disable next button  */
  disable: PropTypes.bool
};
PaginationRowForward.defaultProps = {
  className: '',
  onNextPage: noop,
  onLastPage: noop,
  disable: false
};
export default PaginationRowForward;