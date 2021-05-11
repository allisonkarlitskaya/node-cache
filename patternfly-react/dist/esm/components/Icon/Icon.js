function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import PatternflyIcon from './InnerComponents/PatternflyIcon';

const Icon = (_ref) => {
  let {
    type
  } = _ref,
      props = _objectWithoutProperties(_ref, ["type"]);

  const IconComponent = type === 'fa' && FontAwesome || type === 'pf' && PatternflyIcon;

  if (IconComponent) {
    return React.createElement(IconComponent, props);
  }

  throw new Error(`Unsupported prop type=${type}`);
};

Icon.propTypes = {
  /** Icon type can be 'fa' or 'pf'.
   'fa' is the default type. */
  type: PropTypes.oneOf(['fa', 'pf']),

  /** Icon name is the pf-name or fa-name without the prefix.
   e.g.: As for 'pf-ok' name will be 'ok' */
  name: PropTypes.string.isRequired
};
Icon.defaultProps = {
  type: 'fa'
};
export default Icon;