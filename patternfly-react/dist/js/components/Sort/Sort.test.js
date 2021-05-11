"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = require("../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mockSortFields = [{
  id: 'name',
  title: 'Name',
  isNumeric: false
}, {
  id: 'address',
  title: 'Address',
  isNumeric: false
}, {
  id: 'birthMonth',
  title: 'Birth Month',
  isNumeric: true
}, {
  id: 'car',
  title: 'Car',
  isNumeric: false
}];
test('Sort renders numeric ascending properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Sort, null, _react["default"].createElement(_index.Sort.TypeSelector, {
    sortTypes: mockSortFields,
    currentSortType: mockSortFields[0]
  }), _react["default"].createElement(_index.Sort.DirectionSelector, null)));
  expect(component.render()).toMatchSnapshot();
});
test('Sort renders numeric descending properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Sort, null, _react["default"].createElement(_index.Sort.TypeSelector, {
    sortTypes: mockSortFields,
    currentSortType: mockSortFields[0]
  }), _react["default"].createElement(_index.Sort.DirectionSelector, {
    isAscending: false
  })));
  expect(component.render()).toMatchSnapshot();
});
test('Sort renders alpha ascending properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Sort, null, _react["default"].createElement(_index.Sort.TypeSelector, {
    sortTypes: mockSortFields,
    currentSortType: mockSortFields[0]
  }), _react["default"].createElement(_index.Sort.DirectionSelector, {
    isNumeric: false
  })));
  expect(component.render()).toMatchSnapshot();
});
test('Sort renders alpha descending properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Sort, null, _react["default"].createElement(_index.Sort.TypeSelector, {
    sortTypes: mockSortFields,
    currentSortType: mockSortFields[0]
  }), _react["default"].createElement(_index.Sort.DirectionSelector, {
    isNumeric: false,
    isAscending: false
  })));
  expect(component.render()).toMatchSnapshot();
});
test('Sort Type Selectors are rendered if at least two types exist', function () {
  [{
    Selector: _index.Sort.TypeSelector,
    props: {
      currentSortType: 'a',
      sortTypes: ['a', 'b']
    },
    expected: {
      length: 1,
      title: 'a'
    }
  }, {
    Selector: _index.Sort.TypeSelector,
    props: {
      currentSortType: '',
      sortTypes: [{
        title: 'a'
      }, 'b']
    },
    expected: {
      length: 1,
      title: 'a'
    }
  }, {
    Selector: _index.Sort.TypeSelector,
    props: {
      currentSortType: '',
      sortTypes: ['a', 'b']
    },
    expected: {
      length: 1,
      title: 'a'
    }
  }, {
    Selector: _index.Sort.TypeSelector,
    props: {
      currentSortType: 'a',
      sortTypes: ['a']
    },
    expected: {
      length: 0
    }
  }, {
    Selector: _index.Sort.TypeSelector,
    props: {
      currentSortType: 'a',
      sortTypes: []
    },
    expected: {
      length: 0
    }
  }].forEach(function (_ref) {
    var Selector = _ref.Selector,
        props = _ref.props,
        expected = _ref.expected;
    var view = (0, _enzyme.mount)(_react["default"].createElement(Selector, props)).find(_index.DropdownButton);
    expect(view).toHaveLength(expected.length);

    if (expected.length) {
      expect(view.props().title).toBe(expected.title);
    }
  });
});