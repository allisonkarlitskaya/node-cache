import React from 'react';
import { mount } from 'enzyme';
import { Sort, DropdownButton } from '../../index';
const mockSortFields = [{
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
test('Sort renders numeric ascending properly', () => {
  const component = mount(React.createElement(Sort, null, React.createElement(Sort.TypeSelector, {
    sortTypes: mockSortFields,
    currentSortType: mockSortFields[0]
  }), React.createElement(Sort.DirectionSelector, null)));
  expect(component.render()).toMatchSnapshot();
});
test('Sort renders numeric descending properly', () => {
  const component = mount(React.createElement(Sort, null, React.createElement(Sort.TypeSelector, {
    sortTypes: mockSortFields,
    currentSortType: mockSortFields[0]
  }), React.createElement(Sort.DirectionSelector, {
    isAscending: false
  })));
  expect(component.render()).toMatchSnapshot();
});
test('Sort renders alpha ascending properly', () => {
  const component = mount(React.createElement(Sort, null, React.createElement(Sort.TypeSelector, {
    sortTypes: mockSortFields,
    currentSortType: mockSortFields[0]
  }), React.createElement(Sort.DirectionSelector, {
    isNumeric: false
  })));
  expect(component.render()).toMatchSnapshot();
});
test('Sort renders alpha descending properly', () => {
  const component = mount(React.createElement(Sort, null, React.createElement(Sort.TypeSelector, {
    sortTypes: mockSortFields,
    currentSortType: mockSortFields[0]
  }), React.createElement(Sort.DirectionSelector, {
    isNumeric: false,
    isAscending: false
  })));
  expect(component.render()).toMatchSnapshot();
});
test('Sort Type Selectors are rendered if at least two types exist', () => {
  [{
    Selector: Sort.TypeSelector,
    props: {
      currentSortType: 'a',
      sortTypes: ['a', 'b']
    },
    expected: {
      length: 1,
      title: 'a'
    }
  }, {
    Selector: Sort.TypeSelector,
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
    Selector: Sort.TypeSelector,
    props: {
      currentSortType: '',
      sortTypes: ['a', 'b']
    },
    expected: {
      length: 1,
      title: 'a'
    }
  }, {
    Selector: Sort.TypeSelector,
    props: {
      currentSortType: 'a',
      sortTypes: ['a']
    },
    expected: {
      length: 0
    }
  }, {
    Selector: Sort.TypeSelector,
    props: {
      currentSortType: 'a',
      sortTypes: []
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