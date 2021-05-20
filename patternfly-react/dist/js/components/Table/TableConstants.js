"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultSortingOrder = exports.TABLE_SORT_DIRECTIONS = exports.TABLE_SORT_DIRECTION = exports.TABLE_ALIGNMENT_TYPES = exports.TABLE_ALIGN = void 0;
var TABLE_ALIGN = {
  CENTER: 'center',
  RIGHT: 'right',
  DEFAULT: ''
};
exports.TABLE_ALIGN = TABLE_ALIGN;
var TABLE_ALIGNMENT_TYPES = [TABLE_ALIGN.CENTER, TABLE_ALIGN.RIGHT, TABLE_ALIGN.DEFAULT];
exports.TABLE_ALIGNMENT_TYPES = TABLE_ALIGNMENT_TYPES;
var TABLE_SORT_DIRECTION = {
  ASC: 'asc',
  DESC: 'desc',
  DEFAULT: ''
};
exports.TABLE_SORT_DIRECTION = TABLE_SORT_DIRECTION;
var TABLE_SORT_DIRECTIONS = [TABLE_SORT_DIRECTION.ASC, TABLE_SORT_DIRECTION.DESC, TABLE_SORT_DIRECTION.DEFAULT]; // Reactabular sorting order allows you to specifiy sort asc/desc only and removes
// the unsorted state. This is consistent with current PF Data Table but should
// be better spelled out in our design docs.
// https://github.com/patternfly/patternfly-design/issues/516
// https://reactabular.js.org/#/data/sorting?a=customizing-sorting-order

exports.TABLE_SORT_DIRECTIONS = TABLE_SORT_DIRECTIONS;
var defaultSortingOrder = {
  FIRST: 'asc',
  asc: 'desc',
  desc: 'asc'
};
exports.defaultSortingOrder = defaultSortingOrder;