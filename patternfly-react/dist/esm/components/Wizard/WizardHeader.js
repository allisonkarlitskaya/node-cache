function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';
import { Modal } from '../Modal';
/**
 * WizardHeader component for Patternfly React
 */

const WizardHeader = (_ref) => {
  let {
    onClose,
    title
  } = _ref,
      props = _objectWithoutProperties(_ref, ["onClose", "title"]);

  return React.createElement(Modal.Header, props, React.createElement("button", {
    className: "close",
    onClick: onClose,
    "aria-hidden": "true",
    "aria-label": "Close"
  }, React.createElement(Icon, {
    type: "pf",
    name: "close"
  })), React.createElement(Modal.Title, null, title));
};

WizardHeader.propTypes = {
  /** onClose callback */
  onClose: PropTypes.func.isRequired,

  /** The wizard title */
  title: PropTypes.node
};
WizardHeader.defaultProps = {
  title: null
};
export default WizardHeader;