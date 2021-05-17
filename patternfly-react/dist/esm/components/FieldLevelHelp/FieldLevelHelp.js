function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon } from '../Icon';
import { Button } from '../Button';
import { Popover } from '../Popover';
import { OverlayTrigger } from '../OverlayTrigger';
/**
 * FieldLevelHelp Component for Patternfly React
 */

const FieldLevelHelp = (_ref) => {
  let {
    children,
    content,
    close,
    rootClose,
    placement,
    buttonClass
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "content", "close", "rootClose", "placement", "buttonClass"]);

  // backwards compatibility of the existing `close` prop - use that prop if it exists
  const closeProp = typeof close !== 'undefined' ? close : rootClose;
  const overlay = React.createElement(Popover, {
    id: "popover"
  }, content);
  const buttonClasses = classNames('popover-pf-info', buttonClass);
  return React.createElement(OverlayTrigger, {
    overlay: overlay,
    placement: placement,
    trigger: ['click'],
    rootClose: closeProp
  }, React.createElement(Button, {
    bsStyle: "link",
    className: buttonClasses
  }, React.createElement(Icon, {
    type: "pf",
    name: "info"
  })));
};

FieldLevelHelp.propTypes = {
  /** additional fieldlevelhelp classes */
  content: PropTypes.node,

  /** close prop */
  close: PropTypes.bool,

  /** leave popover/tooltip open  */
  rootClose: PropTypes.bool,

  /** overlay placement */
  placement: PropTypes.string,

  /** button class */
  buttonClass: PropTypes.string,

  /** children nodes  */
  children: PropTypes.node
};
FieldLevelHelp.defaultProps = {
  content: null,
  close: undefined,
  rootClose: true,
  placement: 'top',
  buttonClass: '',
  children: null
};
export default FieldLevelHelp;