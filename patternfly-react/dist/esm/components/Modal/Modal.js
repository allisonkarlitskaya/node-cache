function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import BsModal from "react-bootstrap/es/Modal";
import CustomModalDialog from './InnerComponents/CustomModalDialog';
import ModalCloseButton from './ModalCloseButton';
import ModalPattern from './Patterns/ModalPattern';
import StatefulModalPattern from './Patterns/StatefulModalPattern';
/**
 * Modal Component for Patternfly React
 */

class Modal extends BsModal {
  render() {
    return super.render();
  }

}

Modal.propTypes = _objectSpread({}, BsModal.propTypes);
Modal.defaultProps = _objectSpread({}, BsModal.defaultProps, {
  dialogComponentClass: CustomModalDialog
});
Modal.CloseButton = ModalCloseButton;
Modal.Pattern = ModalPattern;
Modal.Pattern.Stateful = StatefulModalPattern;
export default Modal;