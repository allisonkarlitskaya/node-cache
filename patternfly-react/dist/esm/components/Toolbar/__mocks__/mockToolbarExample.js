function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import { Button, DropdownKebab, Filter, FormControl, Icon, MenuItem, Sort, Toolbar } from '../../../index';
import { noop } from '../../../common/helpers';
import { mockFilterExampleFields } from '../../Filter/__mocks__/mockFilterExample';
import { mockSortFields } from '../../Sort/__mocks__/mockSortExample';
export class MockToolbarExample extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      currentFilterType: mockFilterExampleFields[0],
      activeFilters: [],
      currentValue: '',
      currentSortType: mockSortFields[0],
      isSortNumeric: mockSortFields[0].isNumeric,
      isSortAscending: true,
      currentViewType: 'list'
    });

    _defineProperty(this, "onValueKeyPress", keyEvent => {
      const {
        currentValue,
        currentFilterType
      } = this.state;

      if (keyEvent.key === 'Enter' && currentValue && currentValue.length > 0) {
        this.setState({
          currentValue: ''
        });
        this.filterAdded(currentFilterType, currentValue);
        keyEvent.stopPropagation();
        keyEvent.preventDefault();
      }
    });

    _defineProperty(this, "categoryValueSelected", value => {
      const {
        currentValue,
        currentFilterType,
        filterCategory
      } = this.state;

      if (filterCategory && currentValue !== value) {
        this.setState({
          currentValue: value
        });

        if (value) {
          const filterValue = {
            filterCategory,
            filterValue: value
          };
          this.filterAdded(currentFilterType, filterValue);
        }
      }
    });

    _defineProperty(this, "clearFilters", () => {
      const {
        onFiltersChanged
      } = this.props;
      this.setState({
        activeFilters: []
      });
      onFiltersChanged && onFiltersChanged('Filters cleared.');
    });

    _defineProperty(this, "filterAdded", (field, value) => {
      const {
        onFiltersChanged
      } = this.props;
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
      onFiltersChanged && onFiltersChanged(`Filter Added: ${filterText}`);
    });

    _defineProperty(this, "filterCategorySelected", category => {
      const {
        filterCategory
      } = this.state;

      if (filterCategory !== category) {
        this.setState({
          filterCategory: category
        });
      }
    });

    _defineProperty(this, "filterValueSelected", filterValue => {
      const {
        currentFilterType,
        currentValue
      } = this.state;

      if (filterValue !== currentValue) {
        this.setState({
          currentValue: filterValue
        });

        if (filterValue) {
          this.filterAdded(currentFilterType, filterValue);
        }
      }
    });

    _defineProperty(this, "removeFilter", filter => {
      const {
        onFiltersChanged
      } = this.props;
      const {
        activeFilters
      } = this.state;
      const index = activeFilters.indexOf(filter);

      if (index > -1) {
        const updated = [...activeFilters.slice(0, index), ...activeFilters.slice(index + 1)];
        this.setState({
          activeFilters: updated
        });
      }

      onFiltersChanged && onFiltersChanged(`Filter Removed: ${filter.label}`);
    });

    _defineProperty(this, "selectFilterType", filterType => {
      const {
        currentFilterType
      } = this.state;

      if (currentFilterType !== filterType) {
        this.setState({
          currentValue: '',
          currentFilterType: filterType
        });

        if (filterType.filterType === 'complex-select') {
          this.setState({
            filterCategory: undefined
          });
        }
      }
    });

    _defineProperty(this, "toggleCurrentSortDirection", () => {
      const {
        isSortAscending
      } = this.state;
      const {
        onSortChanged
      } = this.props;
      this.setState({
        isSortAscending: !isSortAscending
      });
      onSortChanged && onSortChanged(`sort ascending: ${!isSortAscending}`);
    });

    _defineProperty(this, "updateCurrentSortType", sortType => {
      const {
        currentSortType
      } = this.state;
      const {
        onSortChanged
      } = this.props;

      if (currentSortType !== sortType) {
        this.setState({
          currentSortType: sortType,
          isSortNumeric: sortType.isNumeric,
          isSortAscending: true
        });
      }

      onSortChanged && onSortChanged(`sort type: ${sortType.title}`);
    });

    _defineProperty(this, "updateCurrentValue", event => {
      this.setState({
        currentValue: event.target.value
      });
    });
  }

  setViewType(viewType) {
    const {
      onViewChanged
    } = this.props;
    this.setState({
      currentViewType: viewType
    });
    onViewChanged && onViewChanged(viewType);
  }

  renderInput() {
    const {
      currentFilterType,
      currentValue,
      filterCategory
    } = this.state;

    if (!currentFilterType) {
      return null;
    }

    if (currentFilterType.filterType === 'select') {
      return React.createElement(Filter.ValueSelector, {
        filterValues: currentFilterType.filterValues,
        currentValue: currentValue,
        onFilterValueSelected: this.filterValueSelected
      });
    } else if (currentFilterType.filterType === 'complex-select') {
      return React.createElement(Filter.CategorySelector, {
        filterCategories: currentFilterType.filterCategories,
        currentCategory: filterCategory,
        placeholder: currentFilterType.placeholder,
        onFilterCategorySelected: this.filterCategorySelected
      }, React.createElement(Filter.CategoryValueSelector, {
        categoryValues: filterCategory && filterCategory.filterValues,
        currentValue: currentValue,
        placeholder: currentFilterType.filterCategoriesPlaceholder,
        onCategoryValueSelected: this.categoryValueSelected
      }));
    }

    return React.createElement(FormControl, {
      type: currentFilterType.filterType,
      value: currentValue,
      placeholder: currentFilterType.placeholder,
      onChange: e => this.updateCurrentValue(e),
      onKeyPress: e => this.onValueKeyPress(e)
    });
  }

  render() {
    const {
      currentFilterType,
      activeFilters,
      currentSortType,
      isSortNumeric,
      isSortAscending,
      currentViewType
    } = this.state;
    const {
      onActionPerformed,
      onFindAction
    } = this.props;
    return React.createElement(Toolbar, null, React.createElement(Filter, null, React.createElement(Filter.TypeSelector, {
      filterTypes: mockFilterExampleFields,
      currentFilterType: currentFilterType,
      onFilterTypeSelected: this.selectFilterType
    }), this.renderInput()), React.createElement(Sort, null, React.createElement(Sort.TypeSelector, {
      sortTypes: mockSortFields,
      currentSortType: currentSortType,
      onSortTypeSelected: this.updateCurrentSortType
    }), React.createElement(Sort.DirectionSelector, {
      isNumeric: isSortNumeric,
      isAscending: isSortAscending,
      onClick: () => this.toggleCurrentSortDirection()
    })), React.createElement("div", {
      className: "form-group"
    }, React.createElement(Button, {
      onClick: () => {
        onActionPerformed && onActionPerformed('Action: Action 1');
      }
    }, "Action 1"), React.createElement(Button, {
      onClick: () => {
        onActionPerformed && onActionPerformed('Action: Action 2');
      }
    }, "Action 2"), React.createElement(DropdownKebab, {
      id: "toolbarActionKebab"
    }, React.createElement(MenuItem, {
      onClick: () => {
        onActionPerformed && onActionPerformed('Action: Action');
      }
    }, "Action"), React.createElement(MenuItem, {
      onClick: () => {
        onActionPerformed && onActionPerformed('Action: Another Action');
      }
    }, "Another Action"), React.createElement(MenuItem, {
      onClick: () => {
        onActionPerformed && onActionPerformed('Action: Something Else Here');
      }
    }, "Something Else Here"), React.createElement(MenuItem, {
      role: "separator",
      className: "divider"
    }), React.createElement(MenuItem, {
      onClick: () => {
        onActionPerformed && onActionPerformed('Action: Separated Link');
      }
    }, "Separated Link"))), React.createElement(Toolbar.RightContent, null, React.createElement(Toolbar.Find, {
      placeholder: "Find By Keyword...",
      currentIndex: 1,
      totalCount: 3,
      onChange: value => onFindAction && onFindAction(`Find: ${value}`),
      onEnter: value => onFindAction && onFindAction(`Find again: ${value}`),
      onFindNext: value => onFindAction && onFindAction(`Find Next: ${value}`),
      onFindPrevious: value => onFindAction && onFindAction(`Find Previous: ${value}`)
    }), React.createElement(Toolbar.ViewSelector, null, React.createElement(Button, {
      title: "List View",
      bsStyle: "link",
      className: {
        active: currentViewType === 'list'
      },
      onClick: () => {
        this.setViewType('list');
      }
    }, React.createElement(Icon, {
      type: "fa",
      name: "th-list"
    })), React.createElement(Button, {
      title: "Card View",
      bsStyle: "link",
      className: {
        active: currentViewType === 'card'
      },
      onClick: () => {
        this.setViewType('card');
      }
    }, React.createElement(Icon, {
      type: "fa",
      name: "th"
    })), React.createElement(Button, {
      title: "Table View",
      bsStyle: "link",
      className: {
        active: currentViewType === 'table'
      },
      onClick: () => {
        this.setViewType('table');
      }
    }, React.createElement(Icon, {
      type: "fa",
      name: "table"
    })))), !activeFilters || activeFilters.length === 0 && React.createElement(Toolbar.Results, null, React.createElement("h5", null, "40 Results")), activeFilters && activeFilters.length > 0 && React.createElement(Toolbar.Results, null, React.createElement("h5", null, "40 Results"), React.createElement(Filter.ActiveLabel, null, "Active Filters:"), React.createElement(Filter.List, null, activeFilters.map((item, index) => React.createElement(Filter.Item, {
      key: index,
      onRemove: this.removeFilter,
      filterData: item
    }, "label=", item.label))), React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        this.clearFilters();
      }
    }, "Clear All Filters")));
  }

}
MockToolbarExample.propTypes = {
  onFiltersChanged: PropTypes.func,
  onSortChanged: PropTypes.func,
  onViewChanged: PropTypes.func,
  onActionPerformed: PropTypes.func,
  onFindAction: PropTypes.func
};
MockToolbarExample.defaultProps = {
  onFiltersChanged: noop,
  onSortChanged: noop,
  onViewChanged: noop,
  onActionPerformed: noop,
  onFindAction: noop
};
export const mockToolbarExampleSource = `
import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  DropdownKebab,
  Filter,
  FormControl,
  Icon,
  MenuItem,
  Sort,
  Toolbar
} from '../../../index';
import { noop } from '../../../common/helpers';

import { mockFilterExampleFields } from '../../Filter/__mocks__/mockFilterExample';
import { mockSortFields } from '../../Sort/__mocks__/mockSortExample';

export class MockToolbarExample extends React.Component {
    state = {
      currentFilterType: mockFilterExampleFields[0],
      activeFilters: [],
      currentValue: '',
      currentSortType: mockSortFields[0],
      isSortNumeric: mockSortFields[0].isNumeric,
      isSortAscending: true,
      currentViewType: 'list'
    };

  onValueKeyPress = keyEvent => {
    const { currentValue, currentFilterType } = this.state;

    if (keyEvent.key === 'Enter' && currentValue && currentValue.length > 0) {
      this.setState({ currentValue: '' });
      this.filterAdded(currentFilterType, currentValue);
      keyEvent.stopPropagation();
      keyEvent.preventDefault();
    }
  };

  setViewType(viewType) {
    const { onViewChanged } = this.props;
    this.setState({ currentViewType: viewType });
    onViewChanged && onViewChanged(viewType);
  }

  categoryValueSelected = value => {
    const { currentValue, currentFilterType, filterCategory } = this.state;

    if (filterCategory && currentValue !== value) {
      this.setState({ currentValue: value });
      if (value) {
        const filterValue = {
          filterCategory,
          filterValue: value
        };
        this.filterAdded(currentFilterType, filterValue);
      }
    }
  };

  clearFilters = () => {
    const { onFiltersChanged } = this.props;
    this.setState({ activeFilters: [] });
    onFiltersChanged && onFiltersChanged('Filters cleared.');
  };

  filterAdded = (field, value) => {
    const { onFiltersChanged } = this.props;
    let filterText = '';
    if (field.title) {
      filterText = field.title;
    } else {
      filterText = field;
    }
    filterText += ': ';

    if (value.filterCategory) {
      filterText += \`\${value.filterCategory.title ||
        value.filterCategory}-\${value.filterValue.title || value.filterValue}\`;
    } else if (value.title) {
      filterText += value.title;
    } else {
      filterText += value;
    }

    const activeFilters = [...this.state.activeFilters, { label: filterText }];
    this.setState({ activeFilters });
    onFiltersChanged && onFiltersChanged(\`Filter Added: \${filterText}\`);
  };

  filterCategorySelected = category => {
    const { filterCategory } = this.state;
    if (filterCategory !== category) {
      this.setState({ filterCategory: category });
    }
  };

  filterValueSelected = filterValue => {
    const { currentFilterType, currentValue } = this.state;

    if (filterValue !== currentValue) {
      this.setState({ currentValue: filterValue });
      if (filterValue) {
        this.filterAdded(currentFilterType, filterValue);
      }
    }
  };

  removeFilter = filter => {
    const { onFiltersChanged } = this.props;
    const { activeFilters } = this.state;

    const index = activeFilters.indexOf(filter);
    if (index > -1) {
      const updated = [
        ...activeFilters.slice(0, index),
        ...activeFilters.slice(index + 1)
      ];
      this.setState({ activeFilters: updated });
    }
    onFiltersChanged && onFiltersChanged(\`Filter Removed: \${filter.label}\`);
  };

  selectFilterType = filterType => {
    const { currentFilterType } = this.state;
    if (currentFilterType !== filterType) {
      this.setState({ currentValue: '', currentFilterType: filterType });

      if (filterType.filterType === 'complex-select') {
        this.setState({ filterCategory: undefined });
      }
    }
  }

  toggleCurrentSortDirection = () => {
    const { isSortAscending } = this.state;
    const { onSortChanged } = this.props;

    this.setState({ isSortAscending: !isSortAscending });
    onSortChanged && onSortChanged(\`sort ascending: \${!isSortAscending}\`);
  };

  updateCurrentSortType = sortType => {
    const { currentSortType } = this.state;
    const { onSortChanged } = this.props;

    if (currentSortType !== sortType) {
      this.setState({
        currentSortType: sortType,
        isSortNumeric: sortType.isNumeric,
        isSortAscending: true
      });
    }
    onSortChanged && onSortChanged(\`sort type: \${sortType.title}\`);
  };

  updateCurrentValue = event => {
    this.setState({ currentValue: event.target.value });
  };

  renderInput() {
    const { currentFilterType, currentValue, filterCategory } = this.state;
    if (!currentFilterType) {
      return null;
    }

    if (currentFilterType.filterType === 'select') {
      return (
        <Filter.ValueSelector
          filterValues={currentFilterType.filterValues}
          currentValue={currentValue}
          onFilterValueSelected={this.filterValueSelected}
        />
      );
    } else if (currentFilterType.filterType === 'complex-select') {
      return (
        <Filter.CategorySelector
          filterCategories={currentFilterType.filterCategories}
          currentCategory={filterCategory}
          placeholder={currentFilterType.placeholder}
          onFilterCategorySelected={this.filterCategorySelected}
        >
          <Filter.CategoryValueSelector
            categoryValues={filterCategory && filterCategory.filterValues}
            currentValue={currentValue}
            placeholder={currentFilterType.filterCategoriesPlaceholder}
            onCategoryValueSelected={this.categoryValueSelected}
          />
        </Filter.CategorySelector>
      );
    }
    return (
      <FormControl
        type={currentFilterType.filterType}
        value={currentValue}
        placeholder={currentFilterType.placeholder}
        onChange={e => this.updateCurrentValue(e)}
        onKeyPress={e => this.onValueKeyPress(e)}
      />
    );
  }

  render() {
    const {
      currentFilterType,
      activeFilters,
      currentSortType,
      isSortNumeric,
      isSortAscending,
      currentViewType
    } = this.state;

    const { onActionPerformed, onFindAction } = this.props;

    return (
      <Toolbar>
        <Filter>
          <Filter.TypeSelector
            filterTypes={mockFilterExampleFields}
            currentFilterType={currentFilterType}
            onFilterTypeSelected={this.selectFilterType}
          />
          {this.renderInput()}
        </Filter>
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
        <div className="form-group">
          <Button
            onClick={() => {
              onActionPerformed && onActionPerformed('Action: Action 1');
            }}
          >
            Action 1
          </Button>
          <Button
            onClick={() => {
              onActionPerformed && onActionPerformed('Action: Action 2');
            }}
          >
            Action 2
          </Button>
          <DropdownKebab id="toolbarActionKebab">
            <MenuItem
              onClick={() => {
                onActionPerformed && onActionPerformed('Action: Action');
              }}
            >
              Action
            </MenuItem>
            <MenuItem
              onClick={() => {
                onActionPerformed &&
                  onActionPerformed('Action: Another Action');
              }}
            >
              Another Action
            </MenuItem>
            <MenuItem
              onClick={() => {
                onActionPerformed &&
                  onActionPerformed('Action: Something Else Here');
              }}
            >
              Something Else Here
            </MenuItem>
            <MenuItem role="separator" className="divider" />
            <MenuItem
              onClick={() => {
                onActionPerformed &&
                  onActionPerformed('Action: Separated Link');
              }}
            >
              Separated Link
            </MenuItem>
          </DropdownKebab>
        </div>
        <Toolbar.RightContent>
          <Toolbar.Find
            placeholder="Find By Keyword..."
            currentIndex={1}
            totalCount={3}
            onChange={value => onFindAction && onFindAction(\`Find: \${value}\`)}
            onEnter={value =>
              onFindAction && onFindAction(\`Find again: \${value}\`)
            }
            onFindNext={value =>
              onFindAction && onFindAction(\`Find Next: \${value}\`)
            }
            onFindPrevious={value =>
              onFindAction && onFindAction(\`Find Previous: \${value}\`)
            }
          />
          <Toolbar.ViewSelector>
            <Button
              title="List View"
              bsStyle="link"
              className={{ active: currentViewType === 'list' }}
              onClick={() => {
                this.setViewType('list');
              }}
            >
              <Icon type="fa" name="th-list" />
            </Button>
            <Button
              title="Card View"
              bsStyle="link"
              className={{ active: currentViewType === 'card' }}
              onClick={() => {
                this.setViewType('card');
              }}
            >
              <Icon type="fa" name="th" />
            </Button>
            <Button
              title="Table View"
              bsStyle="link"
              className={{ active: currentViewType === 'table' }}
              onClick={() => {
                this.setViewType('table');
              }}
            >
              <Icon type="fa" name="table" />
            </Button>
          </Toolbar.ViewSelector>
        </Toolbar.RightContent>
        {!activeFilters ||
          (activeFilters.length === 0 && (
            <Toolbar.Results>
              <h5>40 Results</h5>
            </Toolbar.Results>
          ))}
        {activeFilters &&
          activeFilters.length > 0 && (
            <Toolbar.Results>
              <h5>40 Results</h5>
              <Filter.ActiveLabel>Active Filters:</Filter.ActiveLabel>
              <Filter.List>
                {activeFilters.map((item, index) => (
                  <Filter.Item
                    key={index}
                    onRemove={this.removeFilter}
                    filterData={item}
                  >
                    label={item.label}
                  </Filter.Item>
                ))}
              </Filter.List>
              <a
                href="#"
                onClick={e => {
                  e.preventDefault();
                  this.clearFilters();
                }}
              >
                Clear All Filters
              </a>
            </Toolbar.Results>
          )}
      </Toolbar>
    );
  }
}

MockToolbarExample.propTypes = {
  onFiltersChanged: PropTypes.func,
  onSortChanged: PropTypes.func,
  onViewChanged: PropTypes.func,
  onActionPerformed: PropTypes.func,
  onFindAction: PropTypes.func
};

MockToolbarExample.defaultProps = {
  onFiltersChanged: noop,
  onSortChanged: noop,
  onViewChanged: noop,
  onActionPerformed: noop,
  onFindAction: noop
};
`;