"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Alert = _interopRequireDefault(require("./Alert"));

var _AlertConstants = require("./AlertConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var ALL_ALERT_TYPES = [].concat(_toConsumableArray(_AlertConstants.ALERT_TYPES), _toConsumableArray(_AlertConstants.DEPRECATED_ALERT_TYPES));

var testAlertSnapshot = function testAlertSnapshot(type, onDismiss) {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_Alert["default"], {
    type: type,
    onDismiss: onDismiss
  }, _react["default"].createElement("span", null, "Alert Message!")));
  expect(component.render()).toMatchSnapshot();
};

ALL_ALERT_TYPES.forEach(function (type) {
  beforeAll(function () {
    return jest.spyOn(console, 'warn').mockImplementation(function () {});
  });
  test("Alert ".concat(type, " renders properly"), function () {
    testAlertSnapshot(type);
  });
  test("Alert ".concat(type, " renders properly with dismiss button"), function () {
    testAlertSnapshot(type, jest.fn());
  });
});
test('Alert correctly throws error given unsupported type', function () {
  jest.spyOn(console, 'error').mockImplementation(function () {});

  var invalidType = function test() {
    (0, _enzyme.mount)(_react["default"].createElement(_Alert["default"], {
      type: "foo"
    }));
  };

  expect(invalidType).toThrowErrorMatchingSnapshot();
});