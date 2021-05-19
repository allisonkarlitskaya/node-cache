"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isItemDisabled = exports.isItemHiddenByFilter = exports.isItemSelected = exports.getSelectedFilterredItemsLength = exports.getFilterredItemsLength = exports.getFilterredItems = exports.isItemExistOnList = exports.isAllItemsChecked = exports.toggleAllItems = exports.getItemPosition = exports.itemHasChildren = exports.itemHasParent = exports.getUpdatedSelectCount = exports.getItem = exports.reverseAllItemsOrder = exports.getItemsLength = exports.isAllChildrenChecked = exports.adjustProps = exports.getCounterMessage = exports.getCheckedAmount = exports.getDefaultProps = exports.arrangeArray = exports.shouldItemBeChecked = exports.sortItems = exports.makeAllHiddenFilteredItemsVisible = exports.filterByHiding = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var filterByHiding = function filterByHiding(list, value) {
  var filterValue = value.toLowerCase();
  return list.map(function (item) {
    var itemLabel = item.label.toLowerCase();
    var included = itemLabel.includes(filterValue); // if the item label matches the filter value.

    item.hiddenByFilter = !included; // if it is a parent and its label doesn't match the filter value.

    if (itemHasChildren(item)) {
      if (isItemHiddenByFilter(item)) {
        var childrenIncludedAmount = 0;
        item.children.forEach(function (childItem) {
          if (childItem.hidden) {
            return;
          }

          var childLabel = childItem.label.toLowerCase();
          var childIncluded = childLabel.includes(filterValue);
          childItem.hiddenByFilter = !childIncluded;
          childrenIncludedAmount += childIncluded ? 1 : 0;
        });
        item.hiddenByFilter = childrenIncludedAmount === 0;
      } else {
        item.children = makeAllHiddenFilteredItemsVisible(item.children);
      }
    }

    return item;
  });
}; // We don't want to touch default hidden items that the consumer set to hidden.


exports.filterByHiding = filterByHiding;

var makeAllHiddenFilteredItemsVisible = function makeAllHiddenFilteredItemsVisible(list) {
  return list.map(function (item) {
    item.hiddenByFilter = false;

    if (itemHasChildren(item)) {
      item.children.forEach(function (childItem) {
        childItem.hiddenByFilter = false;
      });
    }

    return item;
  });
};

exports.makeAllHiddenFilteredItemsVisible = makeAllHiddenFilteredItemsVisible;

var sortItems = function sortItems(items) {
  var sortFactor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'label';
  return items.sort(function (a, b) {
    return a[sortFactor].toLowerCase() > b[sortFactor].toLowerCase() ? 1 : -1;
  });
};

exports.sortItems = sortItems;

var shouldItemBeChecked = function shouldItemBeChecked(item, isMainChecked, resetAllSelected) {
  var checked = item.checked || false;
  var isItemEditable = !item.disabled || !item.hidden || !item.isItemHiddenByFilter;

  if (!isItemEditable) {
    return checked;
  }

  if (resetAllSelected) {
    checked = false;
  } else if (isMainChecked) {
    checked = isMainChecked;
  }

  return checked;
};

exports.shouldItemBeChecked = shouldItemBeChecked;

var arrangeArray = function arrangeArray(_ref) {
  var items = _ref.items,
      sortBy = _ref.sortBy,
      _ref$isSortAsc = _ref.isSortAsc,
      isSortAsc = _ref$isSortAsc === void 0 ? true : _ref$isSortAsc,
      _ref$isMainChecked = _ref.isMainChecked,
      isMainChecked = _ref$isMainChecked === void 0 ? false : _ref$isMainChecked,
      _ref$resetAllSelected = _ref.resetAllSelected,
      resetAllSelected = _ref$resetAllSelected === void 0 ? false : _ref$resetAllSelected;
  // sort the items
  var itemsCopy = sortItems(items, sortBy).map(function (item, index) {
    // add position to the item and update if the main checkbox is initialy checked.
    var modifiedItem = _objectSpread({}, item, {
      position: index,
      checked: shouldItemBeChecked(item, isMainChecked, resetAllSelected)
    });

    if (itemHasChildren(item)) {
      // sort the children array and add a position, parentPosition and update check state.
      modifiedItem.children = sortItems(item.children, sortBy).map(function (child, childIndex) {
        return _objectSpread({}, child, {
          position: childIndex,
          parentPosition: index,
          checked: shouldItemBeChecked(child, isMainChecked, resetAllSelected)
        });
      });
    }

    return modifiedItem;
  });
  itemsCopy = isSortAsc ? itemsCopy : reverseAllItemsOrder(itemsCopy);
  return itemsCopy;
};

exports.arrangeArray = arrangeArray;

var getDefaultProps = function getDefaultProps() {
  return {
    items: [],
    options: null,
    isSortAsc: true,
    sortBy: 'label',
    filterTerm: '',
    isMainChecked: false
  };
};

exports.getDefaultProps = getDefaultProps;

var getCheckedAmount = function getCheckedAmount(items) {
  var checkedAmount = 0;
  items.forEach(function (item) {
    if (isItemSelected(item)) {
      checkedAmount += 1;

      if (itemHasChildren(item)) {
        checkedAmount += item.children.length;
      }
    } else if (itemHasChildren(item)) {
      item.children.forEach(function (child) {
        if (isItemSelected(child)) {
          checkedAmount += 1;
        }
      });
    }
  });
  return checkedAmount;
};

exports.getCheckedAmount = getCheckedAmount;

var getCounterMessage = function getCounterMessage(selected, total) {
  return "".concat(selected, " of ").concat(total, " items selected");
};

exports.getCounterMessage = getCounterMessage;

var adjustProps = function adjustProps(_ref2) {
  var left = _ref2.left,
      right = _ref2.right,
      props = _objectWithoutProperties(_ref2, ["left", "right"]);

  var defaultProps = getDefaultProps();
  var leftItems = arrangeArray(_objectSpread({}, left));
  var rightItems = arrangeArray(_objectSpread({}, right));
  return _objectSpread({}, props, {
    left: _objectSpread({}, defaultProps, {}, left, {
      items: leftItems,
      selectCount: getCheckedAmount(leftItems)
    }),
    right: _objectSpread({}, defaultProps, {}, right, {
      items: rightItems,
      selectCount: getCheckedAmount(rightItems)
    })
  });
};

exports.adjustProps = adjustProps;

var isAllChildrenChecked = function isAllChildrenChecked(_ref3) {
  var children = _ref3.children;
  return children && children.filter(function (_ref4) {
    var checked = _ref4.checked;
    return checked;
  }).length === children.length;
};

exports.isAllChildrenChecked = isAllChildrenChecked;

var getItemsLength = function getItemsLength(items) {
  var length = items.length;
  var hiddenItemsAmount = 0;

  if (length === 0) {
    return 0;
  }

  items.forEach(function (_ref5) {
    var hidden = _ref5.hidden,
        children = _ref5.children;

    if (hidden) {
      hiddenItemsAmount += 1;
    }

    if (children) {
      length -= 1;
      children.forEach(function (child) {
        if (!child.hidden) {
          length += 1;
        }
      });
    }
  });
  return length - hiddenItemsAmount;
};

exports.getItemsLength = getItemsLength;

var reverseAllItemsOrder = function reverseAllItemsOrder(items) {
  var reversedItems = _toConsumableArray(items).reverse();

  return reversedItems.map(function (item) {
    return item.children ? _objectSpread({}, item, {
      children: item.children.reverse()
    }) : item;
  });
};

exports.reverseAllItemsOrder = reverseAllItemsOrder;

var getItem = function getItem(isSortAsc, items, position, parentPosition) {
  // if item is a child.
  if (parentPosition !== undefined) {
    var parent = items[getItemPosition(items, parentPosition, isSortAsc)];
    return parent.children[getItemPosition(parent.children, position, isSortAsc)];
  }

  return items[getItemPosition(items, position, isSortAsc)];
};

exports.getItem = getItem;

var getUpdatedSelectCount = function getUpdatedSelectCount(selectCount, checked) {
  var amount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return selectCount + (checked ? amount : -1 * amount);
};

exports.getUpdatedSelectCount = getUpdatedSelectCount;

var itemHasParent = function itemHasParent(item) {
  return item.parentPosition !== undefined;
};

exports.itemHasParent = itemHasParent;

var itemHasChildren = function itemHasChildren(item) {
  return item.children !== undefined;
};

exports.itemHasChildren = itemHasChildren;

var getItemPosition = function getItemPosition(array, position, isSortAsc) {
  return isSortAsc ? position : array.length - position - 1;
};

exports.getItemPosition = getItemPosition;

var toggleAllItems = function toggleAllItems(list, checked) {
  var toggleCount = 0;
  list.forEach(function (item) {
    if (item.disabled || item.hidden) {
      return;
    }

    if (item.checked !== checked) {
      item.checked = checked;
      toggleCount += 1;
    }

    if (itemHasChildren(item)) {
      var childrenToggleCount = 0;
      item.children.forEach(function (childItem) {
        if (childItem.disabled || childItem.hidden) {
          return;
        }

        if (childItem.checked !== checked) {
          childItem.checked = checked;
          childrenToggleCount += 1;
        }
      });

      if (childrenToggleCount > 0) {
        toggleCount += childrenToggleCount - 1;
      }
    }
  });
  return toggleCount;
};

exports.toggleAllItems = toggleAllItems;

var isAllItemsChecked = function isAllItemsChecked(items, selectCount) {
  return selectCount > 0 && selectCount === getItemsLength(items);
};

exports.isAllItemsChecked = isAllItemsChecked;

var isItemExistOnList = function isItemExistOnList(list, itemLabel) {
  var parentIndex = null; // find if the parent already exist on the list.

  list.forEach(function (listItem, index) {
    if (listItem.label === itemLabel) {
      parentIndex = index;
    }
  });
  return {
    isParentExist: parentIndex !== null,
    parentIndex: parentIndex
  };
};

exports.isItemExistOnList = isItemExistOnList;

var getFilterredItems = function getFilterredItems(list) {
  var filteredItems = [];
  list.forEach(function (item) {
    if (!isItemHiddenByFilter(item)) {
      filteredItems.push(item);
    } else if (itemHasChildren(item)) {
      var filteredChildren = [];
      item.children.forEach(function (childItem) {
        if (!isItemHiddenByFilter(childItem)) {
          filteredChildren.push(childItem);
        }
      });

      if (filteredChildren.length > 0) {
        filteredItems.push(_objectSpread({}, item, {
          children: filteredChildren
        }));
      }
    }
  });
  return filteredItems;
};

exports.getFilterredItems = getFilterredItems;

var getFilterredItemsLength = function getFilterredItemsLength(list) {
  return getItemsLength(getFilterredItems(list));
};

exports.getFilterredItemsLength = getFilterredItemsLength;

var getSelectedFilterredItemsLength = function getSelectedFilterredItemsLength(list) {
  var filteredItems = getFilterredItems(list);
  var selectedAmount = 0;
  filteredItems.forEach(function (item) {
    if (isItemSelected(item)) {
      selectedAmount += 1;

      if (itemHasChildren(item)) {
        var selectedChildrenAmount = 0;
        item.children.forEach(function (childItem) {
          if (isItemSelected(childItem)) {
            selectedChildrenAmount += 1;
          }
        });

        if (selectedChildrenAmount) {
          selectedAmount += selectedChildrenAmount - 1;
        }
      }
    }
  });
  return selectedAmount;
};

exports.getSelectedFilterredItemsLength = getSelectedFilterredItemsLength;

var isItemSelected = function isItemSelected(item) {
  return item.checked;
};

exports.isItemSelected = isItemSelected;

var isItemHiddenByFilter = function isItemHiddenByFilter(item) {
  return item.hiddenByFilter;
};

exports.isItemHiddenByFilter = isItemHiddenByFilter;

var isItemDisabled = function isItemDisabled(item) {
  return item.disabled;
};

exports.isItemDisabled = isItemDisabled;