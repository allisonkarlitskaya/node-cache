function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { Popover, ListGroup, ListGroupItem, Pager, Spinner, TypeAheadSelect } from '../../../index';
import EllipsisWithTooltip from 'react-ellipsis-with-tooltip';
import BreadcrumbSearchInput from './BreadcrumbSearchInput';
import { noop } from '../../../common/helpers';
import { removeLastSlashFromPath, getCurrentPath } from '../BreadcrumbSwitcherHelper';

const BreadcrumbSwitcherPopover = (_ref) => {
  let {
    resources,
    onResourceClick,
    onNextPageClick,
    onPrevPageClick,
    loading,
    isPaginated,
    hasError,
    currentPage,
    totalPages,
    onSearchChange,
    onSearchClear,
    searchValue,
    searchDebounceTimeout,
    resourceLoadError
  } = _ref,
      props = _objectWithoutProperties(_ref, ["resources", "onResourceClick", "onNextPageClick", "onPrevPageClick", "loading", "isPaginated", "hasError", "currentPage", "totalPages", "onSearchChange", "onSearchClear", "searchValue", "searchDebounceTimeout", "resourceLoadError"]);

  let popoverBody;

  if (loading) {
    popoverBody = React.createElement("div", {
      className: "breadcrumb-switcher-popover-loading text-center"
    }, React.createElement(Spinner, {
      loading: true,
      size: "md"
    }));
  } else if (hasError) {
    popoverBody = React.createElement("div", {
      className: "breadcrumb-switcher-popover-error"
    }, resourceLoadError);
  } else {
    const createItemProps = item => {
      const {
        id,
        href,
        name
      } = item;
      const key = `${id}-${name}`;
      const hrefWithName = href ? removeLastSlashFromPath(href.replace(id, name)) : href;
      const itemProps = {
        key,
        id: key,
        className: 'no-border',
        active: href === window.location.pathname || getCurrentPath() === hrefWithName
      };

      if (itemProps.active) {
        return _objectSpread({}, itemProps, {
          disabled: true
        });
      }

      return _objectSpread({}, itemProps, {
        onClick: e => onResourceClick(e, href, id),
        href
      });
    };

    popoverBody = React.createElement(React.Fragment, null, React.createElement(ListGroup, {
      className: "scrollable-list"
    }, resources.map(resource => React.createElement(ListGroupItem, createItemProps(resource), React.createElement(EllipsisWithTooltip, null, searchValue && searchValue.length ? React.createElement(TypeAheadSelect.Highlighter, {
      search: searchValue
    }, resource.name) : resource.name)))), isPaginated && React.createElement(Pager, {
      className: "pager-sm",
      messages: {
        nextPage: '',
        previousPage: ''
      },
      onNextPage: onNextPageClick,
      onPreviousPage: onPrevPageClick,
      disablePrevious: currentPage === 1,
      disableNext: totalPages === 0 || currentPage === Math.ceil(totalPages)
    }));
  }

  return React.createElement(Popover, _extends({
    className: "breadcrumb-switcher-popover"
  }, props), React.createElement(BreadcrumbSearchInput, {
    onClear: onSearchClear,
    timeout: searchDebounceTimeout,
    focus: true,
    onSearchChange: onSearchChange,
    searchValue: searchValue
  }), popoverBody);
};

BreadcrumbSwitcherPopover.propTypes = _objectSpread({}, Popover.propTypes, {
  searchValue: PropTypes.string,
  loading: PropTypes.bool,
  hasError: PropTypes.bool,
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  resources: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    href: PropTypes.string,
    onClick: PropTypes.func
  })),
  onSearchChange: PropTypes.func,
  onResourceClick: PropTypes.func,
  isPaginated: PropTypes.bool.isRequired
});
BreadcrumbSwitcherPopover.defaultProps = {
  searchValue: '',
  loading: false,
  hasError: false,
  currentPage: 1,
  totalPages: 1,
  resources: [],
  onResourceClick: noop,
  onSearchChange: noop
};
export default BreadcrumbSwitcherPopover;