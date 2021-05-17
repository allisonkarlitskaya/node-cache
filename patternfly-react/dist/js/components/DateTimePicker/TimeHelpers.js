"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatTime = exports.getDateFromTime = void 0;

var getDateFromTime = function getDateFromTime(time) {
  if (time === '') {
    return time;
  }

  if (Date.parse(time)) {
    return new Date(time);
  } else if (Date.parse("1/1/1 ".concat(time))) {
    return new Date("1/1/1 ".concat(time));
  }

  return time;
};

exports.getDateFromTime = getDateFromTime;

var formatTime = function formatTime(time) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';
  var options = {
    hour: 'numeric',
    minute: '2-digit'
  };
  var parsedTime = getDateFromTime(time);

  if (Date.parse(parsedTime)) {
    return parsedTime.toLocaleTimeString(locale, options);
  }

  return time;
};

exports.formatTime = formatTime;