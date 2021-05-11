"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Day = function Day(_ref) {
  var day = _ref.day,
      setSelected = _ref.setSelected,
      classNamesArray = _ref.classNamesArray;
  var date = day.getDate();
  return _react["default"].createElement("td", {
    className: (0, _classnames["default"])('day', classNamesArray),
    "data-day": date,
    onClick: function onClick() {
      setSelected(day);
    }
  }, date);
};

Day.propTypes = {
  day: _propTypes["default"].instanceOf(Date).isRequired,
  classNamesArray: _propTypes["default"].object,
  setSelected: _propTypes["default"].func
};
Day.defaultProps = {
  setSelected: null,
  classNamesArray: []
};
var _default = Day;
exports["default"] = _default;