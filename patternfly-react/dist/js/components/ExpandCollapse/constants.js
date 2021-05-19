"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ALIGN_TYPES = exports.ALIGN_CENTER = exports.ALIGN_LEFT = void 0;

/**
 * UNUSED/DEPRECATED
 *
 * These constants have been moved directly into the ExpandCollapse component.
 * The separate file constants do not display correctly in storybook and were not exported outside of this file
 * so they weren't accessible unless this file was expressly imported.
 *
 * Leaving this file for the case that an application did expressly import this file.
 */
var ALIGN_LEFT = 'left';
exports.ALIGN_LEFT = ALIGN_LEFT;
var ALIGN_CENTER = 'center';
exports.ALIGN_CENTER = ALIGN_CENTER;
var ALIGN_TYPES = [ALIGN_LEFT, ALIGN_CENTER];
exports.ALIGN_TYPES = ALIGN_TYPES;