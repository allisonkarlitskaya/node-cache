"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Tabs = _interopRequireDefault(require("react-bootstrap/lib/Tabs"));

var _TabContainer = _interopRequireDefault(require("./TabContainer"));

var _TabContent = _interopRequireDefault(require("./TabContent"));

var _TabPane = _interopRequireDefault(require("./TabPane"));

var _Tab = _interopRequireDefault(require("./Tab"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_Tabs["default"].Tab = _Tab["default"];
_Tabs["default"].TabContainer = _TabContainer["default"];
_Tabs["default"].TabContent = _TabContent["default"];
_Tabs["default"].TabPane = _TabPane["default"];
var _default = _Tabs["default"];
exports["default"] = _default;