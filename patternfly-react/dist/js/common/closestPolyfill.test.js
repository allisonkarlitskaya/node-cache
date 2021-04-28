"use strict";

var _closestPolyfill = require("./closestPolyfill");

describe('closest', function () {
  beforeEach(function () {
    Element.prototype.polyfillClosest = _closestPolyfill.closest;
    var container = document.createElement('div');
    container.innerHTML = "\n      <div id='div1'>\n        <span class=\"test_cls\" id='span1'>\n          <span class=\"test_cls\" id='span2'>\n            <a id='start'></a>\n          </span>\n        </span>\n      <div>\n    ";
    document.body.appendChild(container);
  });
  test('returns null when enothing is found', function () {
    var el = document.getElementById('start');
    expect(el.polyfillClosest('.unknown')).toBeNull();
  });
  test('finds closest element by class', function () {
    var el = document.getElementById('start');
    expect(el.polyfillClosest('.test_cls').id).toEqual('span2');
  });
  test('finds closest element by tag name', function () {
    var el = document.getElementById('start');
    expect(el.polyfillClosest('div').id).toEqual('div1');
  });
});