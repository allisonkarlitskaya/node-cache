"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = require("../../index");

var _mockFilterExample = require("./__mocks__/mockFilterExample");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('Filter input renders properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Filter, null, _react["default"].createElement(_index.Filter.TypeSelector, {
    filterTypes: _mockFilterExample.mockFilterExampleFields,
    currentFilterType: _mockFilterExample.mockFilterExampleFields[0]
  }), _react["default"].createElement(_index.FormControl, {
    type: _mockFilterExample.mockFilterExampleFields[0].filterType,
    id: "filterInput",
    value: "",
    placeholder: "Filter by Name"
  })));
  expect(component.render()).toMatchSnapshot();
});
test('Filter select renders properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Filter, null, _react["default"].createElement(_index.Filter.TypeSelector, {
    filterTypes: _mockFilterExample.mockFilterExampleFields,
    currentFilterType: _mockFilterExample.mockFilterExampleFields[2]
  }), _react["default"].createElement(_index.Filter.ValueSelector, {
    filterValues: _mockFilterExample.mockFilterExampleFields[2].filterValues,
    currentValue: _mockFilterExample.mockFilterExampleFields[2].filterValues[4]
  })));
  expect(component.render()).toMatchSnapshot();
});
test('Filter categories renders properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Filter, null, _react["default"].createElement(_index.Filter.TypeSelector, {
    filterTypes: _mockFilterExample.mockFilterExampleFields,
    currentFilterType: _mockFilterExample.mockFilterExampleFields[3]
  }), _react["default"].createElement(_index.Filter.CategorySelector, {
    filterCategories: _mockFilterExample.mockFilterExampleFields[3].filterCategories,
    currentCategory: _mockFilterExample.mockFilterExampleFields[3].filterCategories[0],
    placeholder: _mockFilterExample.mockFilterExampleFields[3].placeholder
  }, _react["default"].createElement(_index.Filter.CategoryValueSelector, {
    categoryValues: _mockFilterExample.mockFilterExampleFields[3].filterCategories[0].filterValues,
    currentValue: _mockFilterExample.mockFilterExampleFields[3].filterCategories[0].filterValues[0],
    placeholder: _mockFilterExample.mockFilterExampleFields[3].filterCategoriesPlaceholder
  }))));
  expect(component.render()).toMatchSnapshot();
});
test('Filter renders properly in a Toolbar', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Toolbar, null, _react["default"].createElement(_index.Filter, null, _react["default"].createElement(_index.Filter.TypeSelector, {
    filterTypes: _mockFilterExample.mockFilterExampleFields,
    currentFilterType: _mockFilterExample.mockFilterExampleFields[0]
  }), _react["default"].createElement(_index.FormControl, {
    type: _mockFilterExample.mockFilterExampleFields[0].filterType,
    id: "filterInput",
    value: "",
    placeholder: "Filter by Name"
  }))));
  expect(component.render()).toMatchSnapshot();
});
test('Filter active components render properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Toolbar.Results, null, _react["default"].createElement(_index.Filter.ActiveLabel, {
    title: "Active Filters:"
  }), _react["default"].createElement(_index.Filter.List, null, _react["default"].createElement(_index.Filter.Item, {
    label: "Name: John"
  }), _react["default"].createElement(_index.Filter.Item, {
    label: "Address: Westford"
  }))));
  expect(component.render()).toMatchSnapshot();
});
test('Selectors are rendered if at least two filters exist or a placeholder is given', function () {
  [{
    Selector: _index.Filter.TypeSelector,
    props: {
      currentFilterType: 'a',
      filterTypes: ['a']
    },
    expected: {
      length: 0
    }
  }, {
    Selector: _index.Filter.TypeSelector,
    props: {
      currentFilterType: 'a',
      filterTypes: []
    },
    expected: {
      length: 0
    }
  }, {
    Selector: _index.Filter.TypeSelector,
    props: {
      currentFilterType: 'a',
      filterTypes: ['a', 'b']
    },
    expected: {
      length: 1,
      title: 'a'
    }
  }, {
    Selector: _index.Filter.TypeSelector,
    props: {
      currentFilterType: 'a',
      filterTypes: [],
      placeholder: 'placeholder'
    },
    expected: {
      length: 1,
      title: 'a'
    }
  }, {
    Selector: _index.Filter.ValueSelector,
    props: {
      currentValue: {
        title: 'a'
      },
      filterValues: ['a', 'b']
    },
    expected: {
      length: 1,
      title: 'a'
    }
  }, {
    Selector: _index.Filter.ValueSelector,
    props: {
      currentValue: 'a',
      filterValues: ['a']
    },
    expected: {
      length: 0
    }
  }, {
    Selector: _index.Filter.ValueSelector,
    props: {
      currentValue: 'a',
      filterValues: [],
      placeholder: 'placeholder'
    },
    expected: {
      length: 1,
      title: 'a'
    }
  }, {
    Selector: _index.Filter.ValueSelector,
    props: {
      currentValue: 'a',
      filterValues: []
    },
    expected: {
      length: 0
    }
  }, {
    Selector: _index.Filter.CategorySelector,
    props: {
      currentCategory: 'b',
      filterCategories: ['a', 'b']
    },
    expected: {
      length: 1,
      title: 'b'
    }
  }, {
    Selector: _index.Filter.CategorySelector,
    props: {
      currentCategory: 'a',
      filterCategories: ['a']
    },
    expected: {
      length: 0
    }
  }, {
    Selector: _index.Filter.CategorySelector,
    props: {
      currentCategory: '',
      filterCategories: [],
      placeholder: 'placeholder'
    },
    expected: {
      length: 1,
      title: 'placeholder'
    }
  }, {
    Selector: _index.Filter.CategorySelector,
    props: {
      currentCategory: 'a',
      filterCategories: []
    },
    expected: {
      length: 0
    }
  }, {
    Selector: _index.Filter.CategoryValueSelector,
    props: {
      currentValue: 'a',
      categoryValues: ['a', 'b']
    },
    expected: {
      length: 1,
      title: 'a'
    }
  }, {
    Selector: _index.Filter.CategoryValueSelector,
    props: {
      currentValue: 'a',
      categoryValues: ['a']
    },
    expected: {
      length: 0
    }
  }, {
    Selector: _index.Filter.CategoryValueSelector,
    props: {
      currentValue: 'a',
      categoryValues: [],
      placeholder: 'placeholder'
    },
    expected: {
      length: 1,
      title: 'a'
    }
  }, {
    Selector: _index.Filter.CategoryValueSelector,
    props: {
      currentValue: 'a',
      categoryValues: []
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