"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DualListFilter = _interopRequireDefault(require("./DualListFilter"));

var _DualListSort = _interopRequireDefault(require("./DualListSort"));

var _DualListMainCheckbox = _interopRequireDefault(require("./DualListMainCheckbox"));

var _DualListDropDown = _interopRequireDefault(require("./DualListDropDown"));

var _helpers = require("../../../common/helpers");

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DualListHeading = function DualListHeading(_ref) {
  var isSortAsc = _ref.isSortAsc,
      onSortClick = _ref.onSortClick,
      onFilterChange = _ref.onFilterChange,
      onMainCheckboxChange = _ref.onMainCheckboxChange,
      kebabMenu = _ref.kebabMenu,
      side = _ref.side,
      sortAriaLabel = _ref.sortAriaLabel,
      isMainChecked = _ref.isMainChecked,
      kebabID = _ref.kebabID;
  return _react["default"].createElement("div", {
    className: "dual-list-pf-heading"
  }, _react["default"].createElement(_DualListMainCheckbox["default"], {
    side: side,
    onChange: onMainCheckboxChange,
    isChecked: isMainChecked
  }), _react["default"].createElement(_DualListFilter["default"], {
    side: side,
    onChange: onFilterChange
  }), _react["default"].createElement(_DualListSort["default"], {
    side: side,
    onClick: onSortClick,
    isSortAsc: isSortAsc,
    ariaLabel: sortAriaLabel
  }), _react["default"].createElement(_DualListDropDown["default"], {
    id: kebabID
  }, kebabMenu));
};

DualListHeading.propTypes = {
  /** Which type of sort is it to determine the right icon. */
  isSortAsc: _propTypes["default"].bool,

  /** The function which is running when sort icon is clicked. */
  onSortClick: _propTypes["default"].func,

  /** The filter function that runs on the list items when the input changes. */
  onFilterChange: _propTypes["default"].func,

  /** The function which is being called on checked state toggled. */
  onMainCheckboxChange: _propTypes["default"].func,

  /** The Kebab menu items */
  kebabMenu: _propTypes["default"].node,

  /** Which side is the selector, passed by the onClick function. */
  side: _propTypes["default"].string,

  /** Sets the aria-label of the icon. */
  sortAriaLabel: _propTypes["default"].string,

  /** controlls the main checkbox */
  isMainChecked: _propTypes["default"].bool,

  /** ID for the kebab container */
  kebabID: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
DualListHeading.defaultProps = {
  isSortAsc: true,
  onSortClick: _helpers.noop,
  onFilterChange: _helpers.noop,
  onMainCheckboxChange: _helpers.noop,
  kebabMenu: null,
  side: null,
  sortAriaLabel: _constants.SORT_ARIA_LABEL,
  isMainChecked: false,
  kebabID: null
};
var _default = DualListHeading;
exports["default"] = _default;