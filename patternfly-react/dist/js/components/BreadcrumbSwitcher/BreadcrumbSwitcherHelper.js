"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentPath = exports.removeLastSlashFromPath = void 0;

/**
 * Removes slashes from the beggining and end of the path
 * @param {String} path - the path that should be removed of slashes
 */
var removeLastSlashFromPath = function removeLastSlashFromPath(path) {
  if (!path || path.length < 2) {
    return path;
  }

  var lastCharIndex = path.length - 1;
  return path[lastCharIndex] === '/' ? path.slice(0, -1) : path;
};

exports.removeLastSlashFromPath = removeLastSlashFromPath;

var getCurrentPath = function getCurrentPath() {
  return removeLastSlashFromPath(window.location.pathname);
};

exports.getCurrentPath = getCurrentPath;