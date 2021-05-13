"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Grid = _interopRequireDefault(require("react-bootstrap/lib/Grid"));

var _Row = _interopRequireDefault(require("./Row"));

var _Col = _interopRequireDefault(require("./Col"));

var _Clearfix = _interopRequireDefault(require("./Clearfix"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_Grid["default"].Row = _Row["default"];
_Grid["default"].Col = _Col["default"];
_Grid["default"].Clearfix = _Clearfix["default"];
var _default = _Grid["default"];
exports["default"] = _default;