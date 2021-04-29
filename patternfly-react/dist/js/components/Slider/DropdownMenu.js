"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Dropdown = require("../Dropdown");

var _MenuItem = require("../MenuItem");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DropdownMenu = function DropdownMenu(props) {
  var dropup = props.dropup,
      dropdownList = props.dropdownList,
      onFormatChange = props.onFormatChange,
      title = props.title;
  var menuItems = dropdownList.map(function (item, index) {
    return _react["default"].createElement(_MenuItem.MenuItem, {
      bsClass: "slider_menuitem",
      onClick: function onClick(event) {
        return onFormatChange(event.target.text);
      },
      key: index,
      value: item
    }, item);
  });
  return _react["default"].createElement(_Dropdown.Dropdown, {
    id: "slider_dropdown",
    dropup: dropup,
    pullRight: true
  }, _react["default"].createElement(_Dropdown.Dropdown.Toggle, null, _react["default"].createElement("span", null, title || dropdownList[0])), _react["default"].createElement(_Dropdown.Dropdown.Menu, null, menuItems));
};

DropdownMenu.propTypes = {
  dropup: _propTypes["default"].bool,
  dropdownList: _propTypes["default"].array,
  onFormatChange: _propTypes["default"].func,
  title: _propTypes["default"].string
};
DropdownMenu.defaultProps = {
  dropup: false,
  dropdownList: null,
  onFormatChange: null,
  title: null
};
var _default = DropdownMenu;
exports["default"] = _default;