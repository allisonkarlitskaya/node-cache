"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var helpers = _interopRequireWildcard(require("./helpers"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

describe('bindMethods', function () {
  test('binds specified methods and ignores unspecified', function () {
    var Test = /*#__PURE__*/function () {
      function Test() {
        _classCallCheck(this, Test);

        helpers.bindMethods(this, ['bound']);
      }

      _createClass(Test, [{
        key: "bound",
        value: function bound() {
          expect(this).toBeInstanceOf(Test);
        }
      }, {
        key: "unbound",
        value: function unbound() {
          expect(this).toBeNull();
        }
      }]);

      return Test;
    }();

    var instance = new Test();
    instance.bound.call(null);
    instance.unbound.call(null);
  });
});
describe('selectKeys', function () {
  test('defaults function to an identity function', function () {
    var obj = {
      key: 'value'
    };
    var newObj = helpers.selectKeys(obj, ['key']);
    expect(newObj.key).toBe(obj.key);
  });
  test('allows a function to be passed', function () {
    var obj = {
      key: 'value'
    };
    var newValue = 'newValue';
    var fn = jest.fn(function () {
      return newValue;
    });
    var newObj = helpers.selectKeys(obj, ['key'], fn);
    expect(newObj.key).toBe(newValue);
    expect(fn).toBeCalledWith(obj.key);
  });
  test('removes keys unspecified', function () {
    var obj = {
      key: 'value'
    };
    var newValue = 'newValue';
    var fn = jest.fn(function () {
      return newValue;
    });
    var newObj = helpers.selectKeys(obj, [], fn);
    expect(newObj.key).toBeUndefined();
  });
});