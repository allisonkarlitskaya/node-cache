"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _DualListArrows = _interopRequireDefault(require("./components/DualListArrows"));

var _DualListSelector = _interopRequireDefault(require("./components/DualListSelector"));

var _DualListHiddenSelect = _interopRequireDefault(require("./components/DualListHiddenSelect"));

var _helpers = require("../../common/helpers");

var _helpers2 = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DualList = /*#__PURE__*/function (_React$Component) {
  _inherits(DualList, _React$Component);

  function DualList(props) {
    var _this;

    _classCallCheck(this, DualList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DualList).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onItemChange", function (_ref) {
      var _ref$target = _ref.target,
          checked = _ref$target.checked,
          _ref$target$dataset = _ref$target.dataset,
          position = _ref$target$dataset.position,
          side = _ref$target$dataset.side,
          parentPosition = _ref$target$dataset.parentPosition;
      var _this$props$side = _this.props[side],
          originalSelectCount = _this$props$side.selectCount,
          originalItems = _this$props$side.items,
          isSortAsc = _this$props$side.isSortAsc,
          filterTerm = _this$props$side.filterTerm;
      var items = (0, _cloneDeep["default"])(originalItems);
      var item = (0, _helpers2.getItem)(isSortAsc, items, position, parentPosition);
      var selectCount = originalSelectCount;
      item.checked = checked;

      if ((0, _helpers2.itemHasParent)(item)) {
        var parent = (0, _helpers2.getItem)(isSortAsc, items, parentPosition);
        parent.checked = (0, _helpers2.isAllChildrenChecked)(parent);
        selectCount = (0, _helpers2.getUpdatedSelectCount)(selectCount, checked);
      } else if ((0, _helpers2.itemHasChildren)(item)) {
        var children = item.children;
        (0, _helpers2.toggleAllItems)(children, checked);
        selectCount = (0, _helpers2.getUpdatedSelectCount)(selectCount, checked, children.length);
      } else {
        selectCount = (0, _helpers2.getUpdatedSelectCount)(selectCount, checked);
      }

      var isMainChecked = false;

      if (filterTerm) {
        var filteredItemsLength = (0, _helpers2.getFilterredItemsLength)(items);
        var selectedFilteredItemsLength = (0, _helpers2.getSelectedFilterredItemsLength)(items);
        isMainChecked = filteredItemsLength > 0 && selectedFilteredItemsLength === filteredItemsLength;
      } else {
        isMainChecked = (0, _helpers2.isAllItemsChecked)(items, selectCount);
      }

      _this.props.onItemChange({
        side: side,
        items: items,
        selectCount: selectCount,
        isMainChecked: isMainChecked
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onMainCheckboxChange", function (_ref2) {
      var _ref2$target = _ref2.target,
          checked = _ref2$target.checked,
          side = _ref2$target.dataset.side;
      var _this$props$side2 = _this.props[side],
          originalItems = _this$props$side2.items,
          filterTerm = _this$props$side2.filterTerm,
          originalSelectCount = _this$props$side2.selectCount;
      var items = (0, _cloneDeep["default"])(originalItems);
      var selectCount = originalSelectCount;

      if (filterTerm) {
        var filterredItems = (0, _helpers2.getFilterredItems)(items);
        var toggledAmount = (0, _helpers2.toggleAllItems)(filterredItems, checked);
        selectCount += toggledAmount * (checked ? 1 : -1);
      } else {
        var _toggledAmount = (0, _helpers2.toggleAllItems)(items, checked);

        selectCount = checked ? selectCount + _toggledAmount : 0;
      }

      _this.props.onMainCheckboxChange({
        side: side,
        checked: checked,
        items: items,
        selectCount: selectCount
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSortClick", function (_ref3) {
      var side = _ref3.target.dataset.side;
      var _this$props$side3 = _this.props[side],
          items = _this$props$side3.items,
          isSortAsc = _this$props$side3.isSortAsc;
      var itemsReversed = (0, _helpers2.reverseAllItemsOrder)(items);

      _this.props.onSortClick({
        side: side,
        items: itemsReversed,
        isSortAsc: !isSortAsc
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onFilterChange", function (event) {
      /** https://reactjs.org/docs/events.html#event-pooling */
      event.persist();

      _this.onFilterChangeDebounced(event);
    });

    _defineProperty(_assertThisInitialized(_this), "emitFilterChange", function (_ref4) {
      var _ref4$target = _ref4.target,
          value = _ref4$target.value,
          side = _ref4$target.dataset.side;
      var _this$props$side4 = _this.props[side],
          originalItems = _this$props$side4.items,
          selectCount = _this$props$side4.selectCount;
      var filterTerm = value.trim();

      if (!value) {
        var _items = (0, _helpers2.makeAllHiddenFilteredItemsVisible)(originalItems);

        var _isMainChecked = (0, _helpers2.isAllItemsChecked)(_items, selectCount);

        _this.props.onFilterChange({
          side: side,
          filterTerm: filterTerm,
          items: _items,
          isMainChecked: _isMainChecked
        });

        return;
      }

      var items = (0, _helpers2.filterByHiding)(originalItems, filterTerm);
      var filteredItemsLength = (0, _helpers2.getFilterredItemsLength)(items);
      var isMainChecked = filteredItemsLength > 0 && (0, _helpers2.getSelectedFilterredItemsLength)(items) === filteredItemsLength;

      _this.props.onFilterChange({
        side: side,
        filterTerm: filterTerm,
        items: items,
        isMainChecked: isMainChecked
      });
    });

    _defineProperty(_assertThisInitialized(_this), "moveTo", function (otherSide) {
      var _this$props$onChange;

      var side = otherSide === 'right' ? 'left' : 'right';
      var sideState = _this.props[side];
      var otherSideState = _this.props[otherSide];
      var sideItemsWithRemainChildren = [];
      var otherSideItems = (0, _cloneDeep["default"])(otherSideState.items);
      var sideItems = sideState.items.filter(function (item) {
        if ((0, _helpers2.isItemSelected)(item)) {
          if ((0, _helpers2.itemHasChildren)(item)) {
            var _isItemExistOnList = (0, _helpers2.isItemExistOnList)(otherSideItems, item.label),
                isParentExist = _isItemExistOnList.isParentExist,
                parentIndex = _isItemExistOnList.parentIndex;

            if (isParentExist) {
              var children = otherSideItems[parentIndex].children;
              children.push.apply(children, _toConsumableArray(item.children));
              return false;
            }
          }

          otherSideItems.push(item);
          return false;
        } else if ((0, _helpers2.itemHasChildren)(item)) {
          var selectedChildren = [];
          var unselectedChildren = [];
          item.children.forEach(function (childItem) {
            if ((0, _helpers2.isItemSelected)(childItem)) {
              selectedChildren.push(childItem);
            } else {
              unselectedChildren.push(childItem);
            }
          });

          if (selectedChildren.length > 0) {
            var _isItemExistOnList2 = (0, _helpers2.isItemExistOnList)(otherSideItems, item.label),
                _isParentExist = _isItemExistOnList2.isParentExist,
                _parentIndex = _isItemExistOnList2.parentIndex;

            if (_isParentExist) {
              var _otherSideItems$_pare;

              (_otherSideItems$_pare = otherSideItems[_parentIndex].children).push.apply(_otherSideItems$_pare, selectedChildren);
            } else {
              otherSideItems.push(_objectSpread({}, item, {
                checked: true,
                children: selectedChildren
              }));
            }

            if (unselectedChildren.length > 0) {
              sideItemsWithRemainChildren.push(_objectSpread({}, item, {
                children: unselectedChildren
              }));
            }

            return false;
          }
        }

        return true;
      });

      if (sideItemsWithRemainChildren.length > 0) {
        var _sideItems;

        (_sideItems = sideItems).push.apply(_sideItems, sideItemsWithRemainChildren);
      }

      var updatedSideState = _objectSpread({}, sideState, {
        selectCount: 0,
        isMainChecked: false
      });

      var updatedOtherSideState = _objectSpread({}, otherSideState, {
        selectCount: 0,
        isMainChecked: false
      });

      sideItems = (0, _helpers2.arrangeArray)(_objectSpread({}, updatedSideState, {
        items: sideItems
      }));
      otherSideItems = (0, _helpers2.arrangeArray)(_objectSpread({}, updatedOtherSideState, {
        items: otherSideItems,
        resetAllSelected: true
      }));

      _this.props.onChange((_this$props$onChange = {}, _defineProperty(_this$props$onChange, side, _objectSpread({}, updatedSideState, {
        items: sideItems
      })), _defineProperty(_this$props$onChange, otherSide, _objectSpread({}, updatedOtherSideState, {
        items: otherSideItems
      })), _this$props$onChange));
    });

    _defineProperty(_assertThisInitialized(_this), "leftArrowClick", function () {
      var left = _this.props.arrows.left;
      left.onClick();

      _this.moveTo('left');
    });

    _defineProperty(_assertThisInitialized(_this), "rightArrowClick", function () {
      var right = _this.props.arrows.right;
      right.onClick();

      _this.moveTo('right');
    });

    _this.onFilterChangeDebounced = (0, _helpers.debounce)(_this.emitFilterChange, 200);
    return _this;
  }

  _createClass(DualList, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          left = _this$props.left,
          right = _this$props.right,
          arrows = _this$props.arrows,
          allowHiddenInputs = _this$props.allowHiddenInputs;
      var hiddenInputs = allowHiddenInputs ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_DualListHiddenSelect["default"], _extends({}, left.inputProps, {
        items: left.items
      })), _react["default"].createElement(_DualListHiddenSelect["default"], _extends({}, right.inputProps, {
        items: right.items
      }))) : null;
      return _react["default"].createElement("div", {
        className: "dual-list-pf"
      }, hiddenInputs, _react["default"].createElement(_DualListSelector["default"], _extends({
        side: "left"
      }, left, {
        onItemChange: this.onItemChange,
        onSortClick: this.onSortClick,
        onFilterChange: this.onFilterChange,
        onMainCheckboxChange: this.onMainCheckboxChange
      })), _react["default"].createElement(_DualListArrows["default"], {
        left: {
          onClick: this.leftArrowClick,
          ariaLabel: arrows.left.ariaLabel
        },
        right: {
          onClick: this.rightArrowClick,
          ariaLabel: arrows.right.ariaLabel
        }
      }), _react["default"].createElement(_DualListSelector["default"], _extends({
        side: "right"
      }, right, {
        onItemChange: this.onItemChange,
        onSortClick: this.onSortClick,
        onFilterChange: this.onFilterChange,
        onMainCheckboxChange: this.onMainCheckboxChange
      })));
    }
  }]);

  return DualList;
}(_react["default"].Component);

DualList.propTypes = {
  /**
   * - items: Array of objects that must contain a label and a value.
   * - options: The Kebab menu items.
   * - isSortAsc: Set the list items sorting direction.
   * - sortBy: set the list items sorting factor.
   * - isMainChecked: Set the main checkbox state.
   */
  left: _propTypes["default"].shape({
    items: _propTypes["default"].arrayOf(_propTypes["default"].shape({
      label: _propTypes["default"].string.isRequired,
      value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,
      children: _propTypes["default"].arrayOf(_propTypes["default"].shape({
        label: _propTypes["default"].string,
        value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])
      }))
    })),
    options: _propTypes["default"].node,
    isSortAsc: _propTypes["default"].bool,
    sortBy: _propTypes["default"].string,
    isMainChecked: _propTypes["default"].bool,
    inputProps: _propTypes["default"].object
  }),

  /**
   * - items: Array of objects that must contain a label and a value.
   * - options: The Kebab menu items.
   * - isSortAsc: Set the list items sorting direction.
   * - isMainChecked: Set the main checkbox state.
   * - sortBy: set the list items sorting factor.
   */
  right: _propTypes["default"].shape({
    items: _propTypes["default"].arrayOf(_propTypes["default"].shape({
      label: _propTypes["default"].string,
      value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])
    })),
    options: _propTypes["default"].node,
    isSortAsc: _propTypes["default"].bool,
    sortBy: _propTypes["default"].string,
    isMainChecked: _propTypes["default"].bool,
    inputProps: _propTypes["default"].object
  }),

  /**
   * - Conatains the left and right arrows properties,
   * - Where in every object there are:
   * - onClick - function which determine the onClick event,
   * - ariaLabel - set the aria-label text.
   */
  arrows: _propTypes["default"].shape({
    left: _propTypes["default"].shape({
      onClick: _propTypes["default"].func,
      ariaLabel: _propTypes["default"].string
    }),
    right: _propTypes["default"].shape({
      onClick: _propTypes["default"].func,
      ariaLabel: _propTypes["default"].string
    })
  }),

  /**
   * Allows adding hidden select inputs
   * that reflects the dual list selected items.
   * It can be used while submitting a form to access the dual list data.
   * */
  allowHiddenInputs: _propTypes["default"].bool,

  /**
   * Function that runs after an item was clicked.
   * receives an object of: { side, items, selectCount, isMainChecked } as a callback.
   */
  onItemChange: _propTypes["default"].func,

  /**
   * Function that runs after the sort icon was clicked.
   * receives an object of: { side, items, isSortAsc } as a callback.
   */
  onSortClick: _propTypes["default"].func,

  /**
   * Function that runs after the filter input has changed.
   * receives an object of: { side, filterTerm } as a callback.
   */
  onFilterChange: _propTypes["default"].func,

  /**
   * Function that runs after the main checkbox was clicked.
   * receives an object of: { side, checked, items, selectCount } as a callback.
   */
  onMainCheckboxChange: _propTypes["default"].func,

  /**
   * Function that runs after items have been moved between the lists.
   * receives an object of: { left, right } updated sides as a callback.
   */
  onChange: _propTypes["default"].func
};
DualList.defaultProps = {
  left: {
    items: [],
    options: null,
    isSortAsc: true,
    sortBy: 'label',
    filterTerm: '',
    isMainChecked: false,
    inputProps: null
  },
  right: {
    items: [],
    options: null,
    isSortAsc: true,
    sortBy: 'label',
    filterTerm: '',
    isMainChecked: false,
    inputProps: null
  },
  arrows: {
    left: {
      onClick: _helpers.noop,
      ariaLabel: null
    },
    right: {
      onClick: _helpers.noop,
      ariaLabel: null
    }
  },
  allowHiddenInputs: false,
  onItemChange: _helpers.noop,
  onSortClick: _helpers.noop,
  onFilterChange: _helpers.noop,
  onMainCheckboxChange: _helpers.noop,
  onChange: _helpers.noop
};
var _default = DualList;
exports["default"] = _default;