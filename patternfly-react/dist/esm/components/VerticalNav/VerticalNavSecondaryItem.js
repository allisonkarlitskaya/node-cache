function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { getContext } from 'recompose';
import { wrongDepth, correctDepth, navContextTypes } from './VerticalNavConstants';
import VerticalNavItemHelper from './VerticalNavItemHelper';
/**
 * VerticalNav.SecondaryItem - a child component for secondary nav items under VerticalNav
 * This is a thin wrapper for VerticalNavItemHelper, to expose the warnings and the explicit-depth API.
 * In the future, we could lift some of the secondary-specific code from Helper into this file.
 */

const BaseVerticalNavSecondaryItem = props => {
  if (wrongDepth(props, 'secondary')) {
    return correctDepth(props);
  }

  return React.createElement(VerticalNavItemHelper, props);
};

BaseVerticalNavSecondaryItem.propTypes = _objectSpread({}, VerticalNavItemHelper.propTypes);
const VerticalNavSecondaryItem = getContext(navContextTypes)(BaseVerticalNavSecondaryItem);
VerticalNavSecondaryItem.propTypes = _objectSpread({}, BaseVerticalNavSecondaryItem.propTypes);
VerticalNavSecondaryItem.displayName = 'VerticalNav.SecondaryItem';
export default VerticalNavSecondaryItem;