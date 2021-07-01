"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockHorizontalMastheadSource = exports.MockHorizontalMasthead = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _index = require("../index");

var _MenuItem = require("../../MenuItem");

var _brand = _interopRequireDefault(require("storybook/img/brand.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MockHorizontalMasthead = /*#__PURE__*/function (_React$Component) {
  _inherits(MockHorizontalMasthead, _React$Component);

  function MockHorizontalMasthead(props) {
    var _this;

    _classCallCheck(this, MockHorizontalMasthead);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MockHorizontalMasthead).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onNavToggleClick", function () {
      _this.setState({
        menuCollapsed: !_this.state.menuCollapsed
      });
    });

    _this.state = {
      menuCollapsed: true
    };
    return _this;
  }

  _createClass(MockHorizontalMasthead, [{
    key: "render",
    value: function render() {
      var menuCollapsed = this.state.menuCollapsed;
      var mobileMenuClasses = (0, _classnames["default"])({
        'navbar-collapse': true,
        'navbar-collapse-1': true,
        collapse: true,
        "in": !menuCollapsed
      });
      return _react["default"].createElement(_index.Masthead, {
        titleImg: _brand["default"],
        title: "Patternfly React",
        navToggle: true,
        thin: true,
        onNavToggleClick: this.onNavToggleClick
      }, _react["default"].createElement(_index.Masthead.Collapse, null, _react["default"].createElement(_index.Masthead.Dropdown, {
        id: "app-help-dropdown",
        title: _react["default"].createElement("span", {
          title: "Help",
          className: "pficon pficon-help"
        }),
        noCaret: true
      }, _react["default"].createElement(_MenuItem.MenuItem, {
        eventKey: "1"
      }, "Help"), _react["default"].createElement(_MenuItem.MenuItem, {
        eventKey: "2"
      }, "About")), _react["default"].createElement(_index.Masthead.Dropdown, {
        id: "app-user-dropdown",
        title: _react["default"].createElement("span", null, _react["default"].createElement("span", {
          title: "Help",
          className: "pficon pficon-user"
        }), _react["default"].createElement("span", {
          className: "dropdown-title"
        }, " Brian Johnson"))
      }, _react["default"].createElement(_MenuItem.MenuItem, {
        eventKey: "1"
      }, "User Preferences"), _react["default"].createElement(_MenuItem.MenuItem, {
        eventKey: "2"
      }, "Logout"))), _react["default"].createElement("div", {
        className: mobileMenuClasses
      }, _react["default"].createElement("ul", {
        className: "nav navbar-nav navbar-utility"
      }, _react["default"].createElement(_index.Masthead.Dropdown, {
        id: "app-help-dropdown",
        title: _react["default"].createElement("span", {
          title: "Help",
          className: "pficon pficon-help"
        }),
        noCaret: true
      }, _react["default"].createElement(_MenuItem.MenuItem, {
        eventKey: "1"
      }, "Help"), _react["default"].createElement(_MenuItem.MenuItem, {
        eventKey: "2"
      }, "About")), _react["default"].createElement(_index.Masthead.Dropdown, {
        id: "app-user-dropdown",
        title: _react["default"].createElement("span", null, _react["default"].createElement("span", {
          title: "Help",
          className: "pficon pficon-user"
        }), _react["default"].createElement("span", {
          className: "dropdown-title"
        }, " Brian Johnson"))
      }, _react["default"].createElement(_MenuItem.MenuItem, {
        eventKey: "1"
      }, "User Preferences"), _react["default"].createElement(_MenuItem.MenuItem, {
        eventKey: "2"
      }, "Logout")))));
    }
  }]);

  return MockHorizontalMasthead;
}(_react["default"].Component);

exports.MockHorizontalMasthead = MockHorizontalMasthead;
var mockHorizontalMastheadSource = "\nimport React from 'react';\nimport classNames from 'classnames';\n\nimport { Masthead } from '../index';\nimport { MenuItem } from '../../MenuItem';\nimport pfFitBrand from 'storybook/img/brand.svg';\n\nexport class MockHorizontalMasthead extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      menuCollapsed: true\n    };\n  }\n\n  onNavToggleClick = () => {\n    this.setState({\n      menuCollapsed: !this.state.menuCollapsed\n    });\n  };\n\n  render() {\n    const { menuCollapsed } = this.state;\n\n    const mobileMenuClasses = classNames({\n      'navbar-collapse': true,\n      'navbar-collapse-1': true,\n      collapse: true,\n      in: !menuCollapsed\n    });\n    return (\n      <Masthead\n        titleImg={pfFitBrand}\n        title=\"Patternfly React\"\n        navToggle\n        thin\n        onNavToggleClick={this.onNavToggleClick}\n      >\n        <Masthead.Collapse>\n          <Masthead.Dropdown\n            id=\"app-help-dropdown\"\n            title={<span title=\"Help\" className=\"pficon pficon-help\" />}\n            noCaret\n          >\n            <MenuItem eventKey=\"1\">Help</MenuItem>\n            <MenuItem eventKey=\"2\">About</MenuItem>\n          </Masthead.Dropdown>\n          <Masthead.Dropdown\n            id=\"app-user-dropdown\"\n            title={\n              <span>\n                <span title=\"Help\" className=\"pficon pficon-user\" />\n                <span className=\"dropdown-title\"> Brian Johnson</span>\n              </span>\n            }\n          >\n            <MenuItem eventKey=\"1\">User Preferences</MenuItem>\n            <MenuItem eventKey=\"2\">Logout</MenuItem>\n          </Masthead.Dropdown>\n        </Masthead.Collapse>\n        <div className={mobileMenuClasses}>\n          <ul className=\"nav navbar-nav navbar-utility\">\n            <Masthead.Dropdown\n              id=\"app-help-dropdown\"\n              title={<span title=\"Help\" className=\"pficon pficon-help\" />}\n              noCaret\n            >\n              <MenuItem eventKey=\"1\">Help</MenuItem>\n              <MenuItem eventKey=\"2\">About</MenuItem>\n            </Masthead.Dropdown>\n            <Masthead.Dropdown\n              id=\"app-user-dropdown\"\n              title={\n                <span>\n                  <span title=\"Help\" className=\"pficon pficon-user\" />\n                  <span className=\"dropdown-title\"> Brian Johnson</span>\n                </span>\n              }\n            >\n              <MenuItem eventKey=\"1\">User Preferences</MenuItem>\n              <MenuItem eventKey=\"2\">Logout</MenuItem>\n            </Masthead.Dropdown>\n          </ul>\n        </div>\n      </Masthead>\n    );\n  }\n}\n";
exports.mockHorizontalMastheadSource = mockHorizontalMastheadSource;