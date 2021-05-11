"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basicExample = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var basicExample = function basicExample(props, firstItemClass) {
  return _react["default"].createElement(_index.VerticalNav, _extends({}, props, {
    showBadges: true
  }), _react["default"].createElement(_index.VerticalNav.Masthead, {
    title: "Patternfly React"
  }), _react["default"].createElement(_index.VerticalNav.Item, {
    title: "Item 1",
    iconClass: "fa fa-home",
    initialActive: true,
    onClick: function onClick() {
      return alert('Item 1!');
    },
    className: firstItemClass
  }, _react["default"].createElement(_index.VerticalNav.Badge, {
    count: 42
  })), _react["default"].createElement(_index.VerticalNav.Item, {
    title: "Item 2",
    iconClass: "fa fa-star"
  }, _react["default"].createElement(_index.VerticalNav.SecondaryItem, {
    title: "Item 2-A",
    onClick: function onClick() {
      return alert('Item 2-A!');
    }
  }, _react["default"].createElement(_index.VerticalNav.Badge, {
    count: 9999,
    tooltip: "Whoa, that's a lot"
  })), _react["default"].createElement(_index.VerticalNav.SecondaryItem, {
    title: "Item 2-B (external link)",
    href: "http://www.patternfly.org"
  }), _react["default"].createElement(_index.VerticalNav.SecondaryItem, {
    title: "Divider",
    isDivider: true
  }), _react["default"].createElement(_index.VerticalNav.SecondaryItem, {
    title: "Item 2-C"
  })), _react["default"].createElement(_index.VerticalNav.Item, {
    title: "Item 3",
    iconClass: "fa fa-info-circle"
  }, _react["default"].createElement(_index.VerticalNav.SecondaryItem, {
    title: "Item 3-A"
  }), _react["default"].createElement(_index.VerticalNav.SecondaryItem, {
    title: "Divider",
    isDivider: true
  }), _react["default"].createElement(_index.VerticalNav.SecondaryItem, {
    title: "Item 3-B"
  }, _react["default"].createElement(_index.VerticalNav.TertiaryItem, {
    title: "Item 3-B-i"
  }), _react["default"].createElement(_index.VerticalNav.TertiaryItem, {
    title: "Item 3-B-ii"
  }), _react["default"].createElement(_index.VerticalNav.TertiaryItem, {
    title: "Item 3-B-iii"
  })), _react["default"].createElement(_index.VerticalNav.SecondaryItem, {
    title: "Item 3-C"
  })));
};

exports.basicExample = basicExample;