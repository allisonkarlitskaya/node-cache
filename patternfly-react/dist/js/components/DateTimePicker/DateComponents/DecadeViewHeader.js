"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DecadeViewHeader = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _helpers = require("../../../common/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DecadeViewHeader = function DecadeViewHeader(_ref) {
  var currDecade = _ref.currDecade,
      getPrevDecade = _ref.getPrevDecade,
      getNextDecade = _ref.getNextDecade;
  return _react["default"].createElement("thead", null, _react["default"].createElement("tr", null, _react["default"].createElement("th", {
    className: "prev",
    onClick: getPrevDecade
  }, _react["default"].createElement("span", {
    className: "glyphicon glyphicon-chevron-left"
  })), _react["default"].createElement("th", {
    className: "picker-switch",
    "data-action": "pickerSwitch",
    colSpan: "5"
  }, "".concat(currDecade, "-").concat(currDecade + 11)), _react["default"].createElement("th", {
    className: "next",
    onClick: getNextDecade
  }, _react["default"].createElement("span", {
    className: "glyphicon glyphicon-chevron-right"
  }))));
};

exports.DecadeViewHeader = DecadeViewHeader;
DecadeViewHeader.propTypes = {
  currDecade: _propTypes["default"].number,
  getPrevDecade: _propTypes["default"].func,
  getNextDecade: _propTypes["default"].func
};
DecadeViewHeader.defaultProps = {
  currDecade: 20,
  getPrevDecade: _helpers.noop,
  getNextDecade: _helpers.noop
};
var _default = DecadeViewHeader;
exports["default"] = _default;