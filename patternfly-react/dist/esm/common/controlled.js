function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import { nullValues, selectKeys, filterKeys } from './helpers';
/*
  controlled(stateTypes, defaults)(WrappedComponent)

  *** NOTE / BEWARE! *******************************************************************************
  This is already deprecated, even as new as it is, because we now have getDerivedStateFromProps!
  It remains here for now because of its additional "persist" feature, which we should factor out.
  **************************************************************************************************

  This Higher Order Component provides the controlled component pattern on a prop-by-prop basis.
  It's a nice way for components to implement internal state so they "just work" out of the box,
  but also give users the option of lifting some or all of that state up into their application.

  controlled() takes arguments as an object with three options:
   * types - an object of PropTypes for the state that will be contained here
   * defaults - an optional object with default values for stateTypes
   * persist - an optional array of names from stateTypes which will be persisted to sessionStorage

  The WrappedComponent will be rendered with special props:
   * setControlledState - a reference to this state wrapper's this.setState.
   * Props for all the stateTypes, from this.props if present or from this.state otherwise.
   * All other props passed to the controlled component HoC.

  The idea is that the values in stateTypes could be stored in state, or passed in via props.
  The WrappedComponent doesn't have to care which is being used, and can manage the state
  contained here. When present, props are used instead. If you provide these special props,
  be sure to also provide corresponding callbacks/handlers to keep them updated.

  If you are using the persist option, you can optionally pass a sessionKey prop to the component
  to ensure multiple instances of the component store their data separately. If you don't pass
  a sessionKey, a stringified list of the persisted keys will be used (not unique to the instance).
*/

const controlled = ({
  types,
  defaults = {},
  persist
}) => WrappedComponent => {
  class ControlledComponent extends React.Component {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "state", _objectSpread({}, nullValues(types), {}, defaults));

      _defineProperty(this, "setControlledState", updater => {
        this.setState(updater);
      });

      _defineProperty(this, "loadPersistent", () => {
        if (persist && persist.length > 0) {
          const fromPersisted = window && window.sessionStorage && window.sessionStorage.getItem(this.sessionKey());
          fromPersisted && this.setState(JSON.parse(fromPersisted));
        }
      });

      _defineProperty(this, "savePersistent", () => {
        if (persist && persist.length > 0) {
          const toPersist = selectKeys(this.state, persist);
          window && window.sessionStorage && window.sessionStorage.setItem(this.sessionKey(), JSON.stringify(toPersist));
        }
      });

      _defineProperty(this, "sessionKey", () => this.props.sessionKey || JSON.stringify(persist));
    }

    componentDidMount() {
      this.loadPersistent();
      window && window.addEventListener && window.addEventListener('beforeunload', this.savePersistent);
    }

    componentWillUnmount() {
      this.savePersistent();
      window && window.removeEventListener && window.removeEventListener('beforeunload', this.savePersistent);
    }

    render() {
      const controlledStateProps = filterKeys(this.props, key => types.hasOwnProperty(key) && this.props[key] !== null);
      const otherProps = filterKeys(this.props, key => !types.hasOwnProperty(key));
      return React.createElement(WrappedComponent, _extends({
        setControlledState: this.setControlledState
      }, this.state, controlledStateProps, otherProps));
    }

  }

  ControlledComponent.displayName = WrappedComponent.displayName;
  ControlledComponent.propTypes = _objectSpread({}, WrappedComponent.propTypes, {}, types, {
    sessionKey: PropTypes.string
  });
  ControlledComponent.defaultProps = _objectSpread({}, WrappedComponent.defaultProps);
  return ControlledComponent; // TODO use recompose withState or withStateHandlers here instead of component state above
};

export default controlled;