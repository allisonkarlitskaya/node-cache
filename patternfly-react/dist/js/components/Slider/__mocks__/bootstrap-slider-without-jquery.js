"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var mockSlider = jest.fn(function MockSlider(el, props) {
  var _this = this;

  this.props = props;
  this.value = props.value;
  this.handlers = {};
  this.tooltip = getMockElement();
  this.tickLabelContainer = getMockElement();
  this.on = jest.fn(function (evt, handler) {
    _this.handlers[evt] = handler;
  });
  this.setValue = jest.fn(function (value) {
    _this.value = value;
  });
  this.setAttribute = jest.fn();
});

function getMockElement() {
  return {
    offsetWidth: 0,
    offsetHeight: 0,
    style: {
      marginTop: 0
    }
  };
}

var _default = mockSlider;
exports["default"] = _default;