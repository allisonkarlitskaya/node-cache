function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { Sort, Toolbar } from '../../../index';
export const mockSortFields = [{
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
export class MockSortExample extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      currentSortType: mockSortFields[0],
      isSortNumeric: mockSortFields[0].isNumeric,
      isSortAscending: true
    });

    _defineProperty(this, "filterAdded", (field, value) => {
      let filterText = '';

      if (field.title) {
        filterText = field.title;
      } else {
        filterText = field;
      }

      filterText += ': ';

      if (value.filterCategory) {
        filterText += `${value.filterCategory.title || value.filterCategory}-${value.filterValue.title || value.filterValue}`;
      } else if (value.title) {
        filterText += value.title;
      } else {
        filterText += value;
      }

      const activeFilters = [...this.state.activeFilters, {
        label: filterText
      }];
      this.setState({
        activeFilters
      });
    });

    _defineProperty(this, "toggleCurrentSortDirection", () => {
      this.setState(prevState => ({
        isSortAscending: !prevState.isSortAscending
      }));
    });

    _defineProperty(this, "updateCurrentSortType", sortType => {
      const {
        currentSortType
      } = this.state;

      if (currentSortType !== sortType) {
        this.setState({
          currentSortType: sortType,
          isSortNumeric: sortType.isNumeric,
          isSortAscending: true
        });
      }
    });
  }

  render() {
    const {
      currentSortType,
      isSortNumeric,
      isSortAscending
    } = this.state;
    return React.createElement(Toolbar, null, React.createElement(Sort, null, React.createElement(Sort.TypeSelector, {
      sortTypes: mockSortFields,
      currentSortType: currentSortType,
      onSortTypeSelected: this.updateCurrentSortType
    }), React.createElement(Sort.DirectionSelector, {
      isNumeric: isSortNumeric,
      isAscending: isSortAscending,
      onClick: () => this.toggleCurrentSortDirection()
    })));
  }

}
export const mockSortExampleSource = `
import React from 'react';
import { Sort, Toolbar } from '../../../index';

export const mockSortFields = [
  {
    id: 'name',
    title: 'Name',
    isNumeric: false
  },
  {
    id: 'address',
    title: 'Address',
    isNumeric: false
  },
  {
    id: 'birthMonth',
    title: 'Birth Month',
    isNumeric: true
  },
  {
    id: 'car',
    title: 'Car',
    isNumeric: false
  }
];

export class MockSortExample extends React.Component {
    state = {
      currentSortType: mockSortFields[0],
      isSortNumeric: mockSortFields[0].isNumeric,
      isSortAscending: true
    };

  filterAdded = (field, value) => {
    let filterText = '';
    if (field.title) {
      filterText = field.title;
    } else {
      filterText = field;
    }
    filterText += ': ';

    if (value.filterCategory) {
      filterText +=
        (value.filterCategory.title || value.filterCategory) +
        '-' +
        (value.filterValue.title || value.filterValue);
    } else if (value.title) {
      filterText += value.title;
    } else {
      filterText += value;
    }

    let activeFilters = [...this.state.activeFilters, { label: filterText }];
    this.setState({ activeFilters: activeFilters });
  };

  updateCurrentSortType = sortType => {
    const { currentSortType } = this.state;
    if (currentSortType !== sortType) {
      this.setState({
        currentSortType: sortType,
        isSortNumeric: sortType.isNumeric,
        isSortAscending: true
      });
    }
  }

  toggleCurrentSortDirection = () => {
    this.setState(prevState => {
      return { isSortAscending: !prevState.isSortAscending };
    });
  }

  render() {
    const { currentSortType, isSortNumeric, isSortAscending } = this.state;

    return (
      <Toolbar>
        <Sort>
          <Sort.TypeSelector
            sortTypes={mockSortFields}
            currentSortType={currentSortType}
            onSortTypeSelected={this.updateCurrentSortType}
          />
          <Sort.DirectionSelector
            isNumeric={isSortNumeric}
            isAscending={isSortAscending}
            onClick={() => this.toggleCurrentSortDirection()}
          />
        </Sort>
      </Toolbar>
    );
  }
}
`;