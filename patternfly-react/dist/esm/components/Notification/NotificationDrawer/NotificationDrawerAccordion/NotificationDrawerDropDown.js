function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../../../Dropdown';
import { Icon } from '../../../Icon';

const NotificationDrawerDropDown = (_ref) => {
  let {
    id,
    children,
    className,
    pullRight
  } = _ref,
      props = _objectWithoutProperties(_ref, ["id", "children", "className", "pullRight"]);

  const classes = classNames('dropdown', {
    'pull-right': pullRight
  }, 'dropdown-kebab-pf', className);
  return React.createElement(Dropdown, {
    className: classes,
    id: id
  }, React.createElement(Dropdown.Toggle, {
    bsStyle: "link",
    noCaret: true
  }, React.createElement(Icon, {
    name: "ellipsis-v"
  })), React.createElement(Dropdown.Menu, {
    className: "dropdown-menu-right"
  }, children));
};

NotificationDrawerDropDown.propTypes = {
  /** dropdown button id */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,

  /** Additional element css classes */
  className: PropTypes.string,

  /** menu right aligned */
  pullRight: PropTypes.bool
};
NotificationDrawerDropDown.defaultProps = {
  pullRight: true,
  id: null,
  className: ''
};
export default NotificationDrawerDropDown;