"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DualListItem = _interopRequireDefault(require("./DualListItem"));

var _helpers = require("../../../common/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var DualListItems = function DualListItems(_ref) {
  var items = _ref.items,
      filterTerm = _ref.filterTerm,
      onChange = _ref.onChange,
      side = _ref.side;
  var menuItems = items.map(function (item, index) {
    var children = item.children;
    return _react["default"].createElement(_react["default"].Fragment, {
      key: "fragment-".concat(index)
    }, _react["default"].createElement(_DualListItem["default"], _extends({
      className: children && 'parent'
    }, item, {
      key: "item-".concat(index),
      filterTerm: filterTerm,
      onChange: onChange,
      side: side
    })), children && children.map(function (child, childIndex) {
      return _react["default"].createElement(_DualListItem["default"], _extends({
        className: "child"
      }, child, {
        key: "".concat(item.label, "-child").concat(childIndex),
        filterTerm: filterTerm,
        onChange: onChange,
        side: side
      }));
    }));
  });
  return menuItems;
};

DualListItems.propTypes = {
  /** An array of items to create list items elements uppon */
  items: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].string.isRequired,
    value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,
    children: _propTypes["default"].arrayOf(_propTypes["default"].shape({
      label: _propTypes["default"].string,
      value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])
    }))
  })),

  /** The term which is flitering the list. */
  filterTerm: _propTypes["default"].string,

  /** A function that is running when the item selected state is toggled. */
  onChange: _propTypes["default"].func,

  /** The side of the selector. */
  side: _propTypes["default"].string
};
DualListItems.defaultProps = {
  items: [],
  filterTerm: null,
  onChange: _helpers.noop,
  side: null
};
var _default = DualListItems;
exports["default"] = _default;