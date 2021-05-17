"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = require("./index");

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

jest.mock('../../common/helpers', function () {
  var selectKeys = function selectKeys(obj, keys) {
    var fn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (val) {
      return val;
    };
    return keys.reduce(function (values, key) {
      return _objectSpread({}, values, _defineProperty({}, key, fn(obj[key])));
    }, {});
  };
  /** Returns a subset of the given object with a validator function applied to its keys. */


  var filterKeys = function filterKeys(obj, validator) {
    return selectKeys(obj, Object.keys(obj).filter(validator));
  };

  return {
    debounce: function debounce(fn) {
      return fn;
    },
    noop: Function.prototype,
    excludeKeys: function excludeKeys(obj, keys) {
      return filterKeys(obj, function (key) {
        return !keys.includes(key);
      });
    }
  };
});

var getProps = function getProps() {
  return {
    left: {
      items: [{
        value: 'Brittany Turner',
        label: 'Brittany Turner',
        children: [{
          value: 'zzz',
          label: 'zzz'
        }, {
          value: 'ppp',
          label: 'ppp'
        }]
      }, {
        value: 'Heather Davis',
        label: 'Heather Davis'
      }]
    },
    right: {
      items: [{
        value: 'Donald Trump',
        label: 'Donald Trump'
      }]
    },
    allowHiddenInputs: true
  };
};

test('dual-list render properly ', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_index.DualListControlled, getProps()));
  expect(component).toMatchSnapshot();
});
test('dual-list items match the list length ', function () {
  var props = getProps();
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.DualListControlled, props));
  var selectors = component.find('.dual-list-pf-selector');
  var leftSelectorItems = selectors.first().find('.dual-list-pf-item');
  var rightSelectorItems = selectors.at(1).find('.dual-list-pf-item');
  expect(leftSelectorItems).toHaveLength(4);
  expect(rightSelectorItems).toHaveLength(1);
});
test('Footer updates when items are selected ', function () {
  var props = getProps();
  var getCounterMessage = jest.fn(function (selected, total) {
    return (0, _helpers.getCounterMessage)(selected, total);
  });
  props.left = _objectSpread({}, props.left, {
    getCounterMessage: getCounterMessage
  });
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.DualListControlled, props));
  expect(getCounterMessage.mock.calls).toHaveLength(1);
  var footer = component.find('.dual-list-pf-footer').first();
  expect(footer.text()).toBe((0, _helpers.getCounterMessage)(0, 3));
  var body = component.find('.dual-list-pf-body').first();
  var listItems = body.find('.dual-list-pf-item');
  var input = listItems.first().find('input');

  var _input$props = input.props(),
      side = _input$props['data-side'],
      position = _input$props['data-position'];

  var mockedEvent = {
    target: {
      checked: true,
      dataset: {
        position: position,
        side: side
      }
    }
  };
  input.simulate('change', mockedEvent);
  expect(footer.text()).toBe(getCounterMessage(2, 3));
  expect(getCounterMessage.mock.calls).toHaveLength(3);
});
test('selecting child items works properly', function () {
  var props = getProps();
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.DualListControlled, props));
  var childItemsCheckbox = component.find('label.dual-list-pf-item.child > input[type="checkbox"]');

  var _childItemsCheckbox$f = childItemsCheckbox.first().props(),
      side = _childItemsCheckbox$f['data-side'],
      position = _childItemsCheckbox$f['data-position'],
      parentPosition = _childItemsCheckbox$f['data-parent-position'];

  var firstMockedEvent = {
    target: {
      checked: true,
      dataset: {
        position: position,
        side: side,
        parentPosition: parentPosition
      }
    }
  };
  var secondMockedEvent = {
    target: {
      checked: true,
      dataset: {
        position: position + 1,
        side: side,
        parentPosition: parentPosition
      }
    }
  };
  childItemsCheckbox.first().simulate('change', firstMockedEvent);
  childItemsCheckbox.at(1).simulate('change', secondMockedEvent);
  expect(component.state().left.items[0].checked).toBeTruthy();
});
test('move child items works properly', function () {
  var props = getProps();
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.DualListControlled, props));
  var childItemsCheckbox = component.find('label.dual-list-pf-item.child > input[type="checkbox"]');

  var _childItemsCheckbox$f2 = childItemsCheckbox.first().props(),
      side = _childItemsCheckbox$f2['data-side'],
      position = _childItemsCheckbox$f2['data-position'],
      parentPosition = _childItemsCheckbox$f2['data-parent-position'];

  var firstMockedEvent = {
    target: {
      checked: true,
      dataset: {
        position: position,
        side: side,
        parentPosition: parentPosition
      }
    }
  };
  childItemsCheckbox.first().simulate('change', firstMockedEvent);
  var rightArrow = component.find('DualListArrows').find('Icon').first();
  rightArrow.simulate('click');
  expect(component.state().right.items[0].checked).toBeFalsy();
  expect(component.state().right.items[0].children[0].checked).toBeFalsy();
});
test('dual-list filter works ', function () {
  var props = getProps();
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.DualListControlled, props));
  var header = component.find('.dual-list-pf-heading').first();
  var filterInput = header.find('.dual-list-pf-filter').first().find('input');

  var _filterInput$props = filterInput.props(),
      side = _filterInput$props['data-side'];

  var value = props.left.items[0].label.charAt(0);
  var mockedEvent = {
    target: {
      value: value,
      dataset: {
        side: side
      }
    }
  };
  filterInput.simulate('change', mockedEvent);
  expect((0, _helpers.getFilterredItemsLength)(component.state()[side].items)).toBe(2);
  mockedEvent.target.value = 'test';
  filterInput.simulate('change', mockedEvent);
  expect((0, _helpers.getFilterredItemsLength)(component.state()[side].items)).toBe(0);
});
test('main checkbox functions properly', function () {
  var props = getProps();
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.DualListControlled, props));
  var selector = component.find('DualListSelector').at(1);
  var itemCheckbox = selector.find('label.dual-list-pf-item > input[type="checkbox"]').first();
  var mainCheckbox = selector.find('input[type="checkbox"].dual-list-pf-main-checkbox');

  var _itemCheckbox$props = itemCheckbox.props(),
      side = _itemCheckbox$props['data-side'],
      position = _itemCheckbox$props['data-position'];

  var mockedEvent = {
    target: {
      checked: true,
      dataset: {
        position: position,
        side: side
      }
    }
  };
  itemCheckbox.simulate('change', mockedEvent);
  expect(component.state()[side].isMainChecked).toBeTruthy();
  mockedEvent.target.checked = false;
  mainCheckbox.simulate('change', mockedEvent);
  expect(component.state()[side].isMainChecked).toBeFalsy();
  expect(component.state()[side].items[0].checked).toBeFalsy();
});
test('transitions between selectors works!', function () {
  var props = getProps();
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.DualListControlled, props));
  var selectors = component.find('DualListSelector');
  var firstItemCheckbox = selectors.first().find('label.dual-list-pf-item > input[type="checkbox"]').first();
  var arrows = component.find('DualListArrows').find('Icon');
  var rightArrow = arrows.at(0);

  var _firstItemCheckbox$pr = firstItemCheckbox.props(),
      side = _firstItemCheckbox$pr['data-side'],
      position = _firstItemCheckbox$pr['data-position'];

  var mockedEvent = {
    target: {
      checked: true,
      dataset: {
        position: position,
        side: side
      }
    }
  };

  var getState = function getState() {
    return component.state();
  };

  expect(getState().left.items).toHaveLength(2);
  expect(getState().right.items).toHaveLength(1);
  firstItemCheckbox.simulate('change', mockedEvent);
  rightArrow.simulate('click');
  expect(getState().left.items).toHaveLength(1);
  expect(getState().right.items).toHaveLength(2);
});
test('sorting works ! ', function () {
  var props = getProps();
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.DualListControlled, props));
  var selector = component.find('DualListSelector').first();
  var sortingIcon = selector.find('.dual-list-pf-sort-icon').first();

  var _sortingIcon$props = sortingIcon.props(),
      side = _sortingIcon$props['data-side'];

  var mockedEvent = {
    target: {
      dataset: {
        side: side
      }
    }
  };

  var originalList = _toConsumableArray(component.state()[side].items);

  sortingIcon.simulate('click', mockedEvent);
  expect(component.state().left.items[0]).toBe(originalList[originalList.length - 1]);
});
test('item is disabled and tooltip exists', function () {
  var props = getProps();
  props.right.items.push({
    value: 'Barack Obama',
    label: 'Barack Obama',
    disabled: true,
    tooltipText: 'Barack Obama'
  });
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.DualListControlled, props));
  expect(component.exists('DualListItemTooltip')).toBeTruthy();
  expect(component.exists('.disabled')).toBeTruthy();
});