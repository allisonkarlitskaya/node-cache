function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from '../Tooltip';
import { OverlayTrigger } from '../OverlayTrigger';
import { Icon } from '../Icon';

const ApplicationLauncherItem = (_ref) => {
  let {
    onClick,
    tooltip,
    tooltipPlacement,
    title,
    icon,
    noIcons,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["onClick", "tooltip", "tooltipPlacement", "title", "icon", "noIcons", "className"]);

  const classes = classNames('applauncher-pf-item', className);

  if (tooltip !== null) {
    return React.createElement(OverlayTrigger, {
      overlay: React.createElement(Tooltip, {
        id: title
      }, tooltip),
      placement: tooltipPlacement,
      trigger: ['hover', 'focus'],
      rootClose: false
    }, React.createElement("li", {
      className: classes,
      role: "presentation"
    }, React.createElement("a", {
      className: "applauncher-pf-link",
      href: "#",
      onClick: e => onClick(e),
      role: "menuitem"
    }, !noIcons && React.createElement(Icon, {
      type: "pf",
      name: icon,
      className: "applauncher-pf-link-icon"
    }), React.createElement("span", {
      className: "applauncher-pf-link-title"
    }, title))));
  }

  return React.createElement("li", {
    className: classes,
    role: "presentation"
  }, React.createElement("a", {
    className: "applauncher-pf-link",
    href: "#",
    onClick: e => onClick(e),
    role: "menuitem"
  }, !noIcons && React.createElement(Icon, {
    type: "pf",
    name: icon,
    className: "applauncher-pf-link-icon"
  }), React.createElement("span", {
    className: "applauncher-pf-link-title"
  }, title)));
};

ApplicationLauncherItem.propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,

  /** onClick func */
  onClick: PropTypes.func,

  /** Title String */
  title: PropTypes.string.isRequired,

  /** Icon Type */
  icon: PropTypes.string.isRequired,

  /** App Tooltip */
  tooltip: PropTypes.string,

  /** Tooltip Placement */
  tooltipPlacement: PropTypes.string,

  /** No Icons Bool */
  noIcons: PropTypes.bool
};
ApplicationLauncherItem.defaultProps = {
  className: '',
  onClick: null,
  noIcons: false,
  tooltipPlacement: 'left',
  tooltip: null
};
export default ApplicationLauncherItem;