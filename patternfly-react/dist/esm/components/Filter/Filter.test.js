import React from 'react';
import { mount } from 'enzyme';
import { Filter, FormControl, Toolbar, DropdownButton } from '../../index';
import { mockFilterExampleFields } from './__mocks__/mockFilterExample';
test('Filter input renders properly', () => {
  const component = mount(React.createElement(Filter, null, React.createElement(Filter.TypeSelector, {
    filterTypes: mockFilterExampleFields,
    currentFilterType: mockFilterExampleFields[0]
  }), React.createElement(FormControl, {
    type: mockFilterExampleFields[0].filterType,
    id: "filterInput",
    value: "",
    placeholder: "Filter by Name"
  })));
  expect(component.render()).toMatchSnapshot();
});
test('Filter select renders properly', () => {
  const component = mount(React.createElement(Filter, null, React.createElement(Filter.TypeSelector, {
    filterTypes: mockFilterExampleFields,
    currentFilterType: mockFilterExampleFields[2]
  }), React.createElement(Filter.ValueSelector, {
    filterValues: mockFilterExampleFields[2].filterValues,
    currentValue: mockFilterExampleFields[2].filterValues[4]
  })));
  expect(component.render()).toMatchSnapshot();
});
test('Filter categories renders properly', () => {
  const component = mount(React.createElement(Filter, null, React.createElement(Filter.TypeSelector, {
    filterTypes: mockFilterExampleFields,
    currentFilterType: mockFilterExampleFields[3]
  }), React.createElement(Filter.CategorySelector, {
    filterCategories: mockFilterExampleFields[3].filterCategories,
    currentCategory: mockFilterExampleFields[3].filterCategories[0],
    placeholder: mockFilterExampleFields[3].placeholder
  }, React.createElement(Filter.CategoryValueSelector, {
    categoryValues: mockFilterExampleFields[3].filterCategories[0].filterValues,
    currentValue: mockFilterExampleFields[3].filterCategories[0].filterValues[0],
    placeholder: mockFilterExampleFields[3].filterCategoriesPlaceholder
  }))));
  expect(component.render()).toMatchSnapshot();
});
test('Filter renders properly in a Toolbar', () => {
  const component = mount(React.createElement(Toolbar, null, React.createElement(Filter, null, React.createElement(Filter.TypeSelector, {
    filterTypes: mockFilterExampleFields,
    currentFilterType: mockFilterExampleFields[0]
  }), React.createElement(FormControl, {
    type: mockFilterExampleFields[0].filterType,
    id: "filterInput",
    value: "",
    placeholder: "Filter by Name"
  }))));
  expect(component.render()).toMatchSnapshot();
});
test('Filter active components render properly', () => {
  const component = mount(React.createElement(Toolbar.Results, null, React.createElement(Filter.ActiveLabel, {
    title: "Active Filters:"
  }), React.createElement(Filter.List, null, React.createElement(Filter.Item, {
    label: "Name: John"
  }), React.createElement(Filter.Item, {
    label: "Address: Westford"
  }))));
  expect(component.render()).toMatchSnapshot();
});
test('Selectors are rendered if at least two filters exist or a placeholder is given', () => {
  [{
    Selector: Filter.TypeSelector,
    props: {
      currentFilterType: 'a',
      filterTypes: ['a']
    },
    expected: {
      length: 0
    }
  }, {
    Selector: Filter.TypeSelector,
    props: {
      currentFilterType: 'a',
      filterTypes: []
    },
    expected: {
      length: 0
    }
  }, {
    Selector: Filter.TypeSelector,
    props: {
      currentFilterType: 'a',
      filterTypes: ['a', 'b']
    },
    expected: {
      length: 1,
      title: 'a'
    }
  }, {
    Selector: Filter.TypeSelector,
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
    Selector: Filter.ValueSelector,
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
    Selector: Filter.ValueSelector,
    props: {
      currentValue: 'a',
      filterValues: ['a']
    },
    expected: {
      length: 0
    }
  }, {
    Selector: Filter.ValueSelector,
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
    Selector: Filter.ValueSelector,
    props: {
      currentValue: 'a',
      filterValues: []
    },
    expected: {
      length: 0
    }
  }, {
    Selector: Filter.CategorySelector,
    props: {
      currentCategory: 'b',
      filterCategories: ['a', 'b']
    },
    expected: {
      length: 1,
      title: 'b'
    }
  }, {
    Selector: Filter.CategorySelector,
    props: {
      currentCategory: 'a',
      filterCategories: ['a']
    },
    expected: {
      length: 0
    }
  }, {
    Selector: Filter.CategorySelector,
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
    Selector: Filter.CategorySelector,
    props: {
      currentCategory: 'a',
      filterCategories: []
    },
    expected: {
      length: 0
    }
  }, {
    Selector: Filter.CategoryValueSelector,
    props: {
      currentValue: 'a',
      categoryValues: ['a', 'b']
    },
    expected: {
      length: 1,
      title: 'a'
    }
  }, {
    Selector: Filter.CategoryValueSelector,
    props: {
      currentValue: 'a',
      categoryValues: ['a']
    },
    expected: {
      length: 0
    }
  }, {
    Selector: Filter.CategoryValueSelector,
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
    Selector: Filter.CategoryValueSelector,
    props: {
      currentValue: 'a',
      categoryValues: []
    },
    expected: {
      length: 0
    }
  }].forEach(({
    Selector,
    props,
    expected
  }) => {
    const view = mount(React.createElement(Selector, props)).find(DropdownButton);
    expect(view).toHaveLength(expected.length);

    if (expected.length) {
      expect(view.props().title).toBe(expected.title);
    }
  });
});