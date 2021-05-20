function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../../common/helpers';

const DualListHiddenSelect = (_ref) => {
  let {
    items
  } = _ref,
      props = _objectWithoutProperties(_ref, ["items"]);

  const selectedValues = [];
  const options = React.createElement(React.Fragment, null, items ? items.map(({
    value,
    children,
    label
  }, index) => {
    if (children) {
      return children.map(({
        value: childValue,
        label: childLabel
      }, childIndex) => {
        selectedValues.push(childValue);
        return React.createElement("option", {
          key: `${index}-${childIndex}`,
          value: childValue
        }, childLabel);
      });
    }

    selectedValues.push(value);
    return React.createElement("option", {
      key: index,
      value: value
    }, label);
  }) : React.createElement("option", null));
  return (// Added 'onChange' after the browser threw a warning of using the value attribute without it.
    React.createElement("select", _extends({}, props, {
      multiple: true,
      hidden: true,
      value: selectedValues,
      onChange: noop
    }), options)
  );
};

DualListHiddenSelect.propTypes = {
  /** An array of items */
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    children: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    }))
  }))
};
DualListHiddenSelect.defaultProps = {
  items: []
};
export default DualListHiddenSelect;