"use strict";

var _helpers = require("./helpers");

var _AlertConstants = require("./AlertConstants");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var ALL_ALERT_TYPES = [].concat(_toConsumableArray(_AlertConstants.ALERT_TYPES), _toConsumableArray(_AlertConstants.DEPRECATED_ALERT_TYPES));
describe('Alert helpers', function () {
  beforeAll(function () {
    return jest.spyOn(console, 'warn').mockImplementation(function () {});
  });
  afterAll(function () {
    // eslint-disable-next-line no-console
    console.warn.mockRestore();
  });
  test('should warn about deprecated types', function () {
    ALL_ALERT_TYPES.forEach(function (type) {
      return (0, _helpers.warnIfDeprecatedType)(type);
    }); // eslint-disable-next-line no-console

    expect(console.warn).toMatchSnapshot();
  });
  ALL_ALERT_TYPES.forEach(function (type) {
    test("should get icon name for type ".concat(type), function () {
      expect((0, _helpers.getIconName)(type)).toMatchSnapshot();
    });
  });
  ALL_ALERT_TYPES.forEach(function (type) {
    test("should get class name for type ".concat(type), function () {
      expect((0, _helpers.getClassName)(type)).toMatchSnapshot();
    });
  });
});