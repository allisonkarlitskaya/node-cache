"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Timer class implements a simple timeout mechanism
 */
var Timer = /*#__PURE__*/function () {
  function Timer(func, delay) {
    _classCallCheck(this, Timer);

    this.timer = null;
    this.delay = delay;
    this.execute = func;
  } // startTimer optionally takes a new func and delay so the timer instance can be reused.


  _createClass(Timer, [{
    key: "startTimer",
    value: function startTimer(func) {
      var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
      this.clearTimer();

      if (func) {
        this.execute = func;
      }

      if (delay >= 0) {
        this.delay = delay;
      }

      this.timer = setTimeout(this.execute, this.delay);
    }
  }, {
    key: "clearTimer",
    value: function clearTimer() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
    }
  }, {
    key: "skipTimer",
    value: function skipTimer() {
      if (this.timer) {
        this.execute(true); // execute can take an optional `skipped` argument

        this.clearTimer();
      }
    }
  }]);

  return Timer;
}();

var _default = Timer;
exports["default"] = _default;