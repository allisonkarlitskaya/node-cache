"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DecadeViewTable = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _helpers = require("../../../common/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DecadeViewTable = function DecadeViewTable(_ref) {
  var yearArray = _ref.yearArray,
      selectedYear = _ref.selectedYear,
      setSelectedYear = _ref.setSelectedYear;
  return _react["default"].createElement("tbody", null, _react["default"].createElement("tr", null, _react["default"].createElement("td", {
    colSpan: "7"
  }, yearArray.map(function (year) {
    return _react["default"].createElement("span", {
      onClick: function onClick() {
        return setSelectedYear(year);
      },
      className: "year ".concat(year === selectedYear ? 'active' : ''),
      key: year
    }, year);
  }))));
};

exports.DecadeViewTable = DecadeViewTable;
DecadeViewTable.propTypes = {
  yearArray: _propTypes["default"].array,
  selectedYear: _propTypes["default"].number,
  setSelectedYear: _propTypes["default"].func
};
DecadeViewTable.defaultProps = {
  yearArray: [],
  selectedYear: new Date().getFullYear(),
  setSelectedYear: _helpers.noop
};
var _default = DecadeViewTable;
exports["default"] = _default;