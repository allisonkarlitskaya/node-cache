"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _helpers = require("../../../common/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DualListHiddenSelect = function DualListHiddenSelect(_ref) {
  var items = _ref.items,
      props = _objectWithoutProperties(_ref, ["items"]);

  var selectedValues = [];

  var options = _react["default"].createElement(_react["default"].Fragment, null, items ? items.map(function (_ref2, index) {
    var value = _ref2.value,
        children = _ref2.children,
        label = _ref2.label;

    if (children) {
      return children.map(function (_ref3, childIndex) {
        var childValue = _ref3.value,
            childLabel = _ref3.label;
        selectedValues.push(childValue);
        return _react["default"].createElement("option", {
          key: "".concat(index, "-").concat(childIndex),
          value: childValue
        }, childLabel);
      });
    }

    selectedValues.push(value);
    return _react["default"].createElement("option", {
      key: index,
      value: value
    }, label);
  }) : _react["default"].createElement("option", null));

  return (// Added 'onChange' after the browser threw a warning of using the value attribute without it.
    _react["default"].createElement("select", _extends({}, props, {
      multiple: true,
      hidden: true,
      value: selectedValues,
      onChange: _helpers.noop
    }), options)
  );
};

DualListHiddenSelect.propTypes = {
  /** An array of items */
  items: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].string.isRequired,
    value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,
    children: _propTypes["default"].arrayOf(_propTypes["default"].shape({
      label: _propTypes["default"].string,
      value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])
    }))
  }))
};
DualListHiddenSelect.defaultProps = {
  items: []
};
var _default = DualListHiddenSelect;
exports["default"] = _default;