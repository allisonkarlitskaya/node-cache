function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../Dropdown';
import { ButtonGroup } from '../Button';

const CardDropdownButton = (_ref) => {
  let {
    id,
    children,
    title,
    className,
    pullRight
  } = _ref,
      props = _objectWithoutProperties(_ref, ["id", "children", "title", "className", "pullRight"]);

  const classes = classNames('card-pf-time-frame-filter', className);

  const CustomButtonGroup = customGroup => React.createElement(ButtonGroup, _extends({}, customGroup, {
    bsClass: " "
  }));

  return React.createElement(Dropdown, _extends({
    className: classes,
    id: id,
    pullRight: pullRight,
    componentClass: CustomButtonGroup
  }, props), React.createElement(Dropdown.Toggle, null, title), React.createElement(Dropdown.Menu, null, children));
};

CardDropdownButton.propTypes = {
  /** dropdown button id */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,

  /** Dropdown title */
  title: PropTypes.node,

  /** Additional element css classes */
  className: PropTypes.string,

  /** menu right aligned */
  pullRight: PropTypes.bool
};
CardDropdownButton.defaultProps = {
  pullRight: true,
  id: null,
  title: null,
  className: ''
};
export default CardDropdownButton;