"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../../index");

var _helpers = require("../../../common/helpers");

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DualListFilter = function DualListFilter(_ref) {
  var onChange = _ref.onChange,
      side = _ref.side,
      placeHolder = _ref.placeHolder;
  return _react["default"].createElement("span", {
    className: "dual-list-pf-filter"
  }, _react["default"].createElement("input", {
    onChange: onChange,
    type: "text",
    placeholder: placeHolder,
    autoComplete: "off",
    "data-side": side
  }), _react["default"].createElement(_index.Icon, {
    size: "lg",
    name: "search",
    className: "search-icon"
  }));
};

DualListFilter.propTypes = {
  /** The filter function that runs on the list items when the input changes. */
  onChange: _propTypes["default"].func,

  /** The side of the selector. */
  side: _propTypes["default"].string,

  /** Filter's placeholder. */
  placeHolder: _propTypes["default"].string
};
DualListFilter.defaultProps = {
  onChange: _helpers.noop,
  side: null,
  placeHolder: _constants.FILTER_LABEL
};
var _default = DualListFilter;
exports["default"] = _default;