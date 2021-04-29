"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockToolbarExampleSource = exports.MockToolbarExample = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../../index");

var _helpers = require("../../../common/helpers");

var _mockFilterExample = require("../../Filter/__mocks__/mockFilterExample");

var _mockSortExample = require("../../Sort/__mocks__/mockSortExample");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var MockToolbarExample = /*#__PURE__*/function (_React$Component) {
  _inherits(MockToolbarExample, _React$Component);

  function MockToolbarExample() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MockToolbarExample);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MockToolbarExample)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      currentFilterType: _mockFilterExample.mockFilterExampleFields[0],
      activeFilters: [],
      currentValue: '',
      currentSortType: _mockSortExample.mockSortFields[0],
      isSortNumeric: _mockSortExample.mockSortFields[0].isNumeric,
      isSortAscending: true,
      currentViewType: 'list'
    });

    _defineProperty(_assertThisInitialized(_this), "onValueKeyPress", function (keyEvent) {
      var _this$state = _this.state,
          currentValue = _this$state.currentValue,
          currentFilterType = _this$state.currentFilterType;

      if (keyEvent.key === 'Enter' && currentValue && currentValue.length > 0) {
        _this.setState({
          currentValue: ''
        });

        _this.filterAdded(currentFilterType, currentValue);

        keyEvent.stopPropagation();
        keyEvent.preventDefault();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "categoryValueSelected", function (value) {
      var _this$state2 = _this.state,
          currentValue = _this$state2.currentValue,
          currentFilterType = _this$state2.currentFilterType,
          filterCategory = _this$state2.filterCategory;

      if (filterCategory && currentValue !== value) {
        _this.setState({
          currentValue: value
        });

        if (value) {
          var filterValue = {
            filterCategory: filterCategory,
            filterValue: value
          };

          _this.filterAdded(currentFilterType, filterValue);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "clearFilters", function () {
      var onFiltersChanged = _this.props.onFiltersChanged;

      _this.setState({
        activeFilters: []
      });

      onFiltersChanged && onFiltersChanged('Filters cleared.');
    });

    _defineProperty(_assertThisInitialized(_this), "filterAdded", function (field, value) {
      var onFiltersChanged = _this.props.onFiltersChanged;
      var filterText = '';

      if (field.title) {
        filterText = field.title;
      } else {
        filterText = field;
      }

      filterText += ': ';

      if (value.filterCategory) {
        filterText += "".concat(value.filterCategory.title || value.filterCategory, "-").concat(value.filterValue.title || value.filterValue);
      } else if (value.title) {
        filterText += value.title;
      } else {
        filterText += value;
      }

      var activeFilters = [].concat(_toConsumableArray(_this.state.activeFilters), [{
        label: filterText
      }]);

      _this.setState({
        activeFilters: activeFilters
      });

      onFiltersChanged && onFiltersChanged("Filter Added: ".concat(filterText));
    });

    _defineProperty(_assertThisInitialized(_this), "filterCategorySelected", function (category) {
      var filterCategory = _this.state.filterCategory;

      if (filterCategory !== category) {
        _this.setState({
          filterCategory: category
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "filterValueSelected", function (filterValue) {
      var _this$state3 = _this.state,
          currentFilterType = _this$state3.currentFilterType,
          currentValue = _this$state3.currentValue;

      if (filterValue !== currentValue) {
        _this.setState({
          currentValue: filterValue
        });

        if (filterValue) {
          _this.filterAdded(currentFilterType, filterValue);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "removeFilter", function (filter) {
      var onFiltersChanged = _this.props.onFiltersChanged;
      var activeFilters = _this.state.activeFilters;
      var index = activeFilters.indexOf(filter);

      if (index > -1) {
        var updated = [].concat(_toConsumableArray(activeFilters.slice(0, index)), _toConsumableArray(activeFilters.slice(index + 1)));

        _this.setState({
          activeFilters: updated
        });
      }

      onFiltersChanged && onFiltersChanged("Filter Removed: ".concat(filter.label));
    });

    _defineProperty(_assertThisInitialized(_this), "selectFilterType", function (filterType) {
      var currentFilterType = _this.state.currentFilterType;

      if (currentFilterType !== filterType) {
        _this.setState({
          currentValue: '',
          currentFilterType: filterType
        });

        if (filterType.filterType === 'complex-select') {
          _this.setState({
            filterCategory: undefined
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "toggleCurrentSortDirection", function () {
      var isSortAscending = _this.state.isSortAscending;
      var onSortChanged = _this.props.onSortChanged;

      _this.setState({
        isSortAscending: !isSortAscending
      });

      onSortChanged && onSortChanged("sort ascending: ".concat(!isSortAscending));
    });

    _defineProperty(_assertThisInitialized(_this), "updateCurrentSortType", function (sortType) {
      var currentSortType = _this.state.currentSortType;
      var onSortChanged = _this.props.onSortChanged;

      if (currentSortType !== sortType) {
        _this.setState({
          currentSortType: sortType,
          isSortNumeric: sortType.isNumeric,
          isSortAscending: true
        });
      }

      onSortChanged && onSortChanged("sort type: ".concat(sortType.title));
    });

    _defineProperty(_assertThisInitialized(_this), "updateCurrentValue", function (event) {
      _this.setState({
        currentValue: event.target.value
      });
    });

    return _this;
  }

  _createClass(MockToolbarExample, [{
    key: "setViewType",
    value: function setViewType(viewType) {
      var onViewChanged = this.props.onViewChanged;
      this.setState({
        currentViewType: viewType
      });
      onViewChanged && onViewChanged(viewType);
    }
  }, {
    key: "renderInput",
    value: function renderInput() {
      var _this2 = this;

      var _this$state4 = this.state,
          currentFilterType = _this$state4.currentFilterType,
          currentValue = _this$state4.currentValue,
          filterCategory = _this$state4.filterCategory;

      if (!currentFilterType) {
        return null;
      }

      if (currentFilterType.filterType === 'select') {
        return _react["default"].createElement(_index.Filter.ValueSelector, {
          filterValues: currentFilterType.filterValues,
          currentValue: currentValue,
          onFilterValueSelected: this.filterValueSelected
        });
      } else if (currentFilterType.filterType === 'complex-select') {
        return _react["default"].createElement(_index.Filter.CategorySelector, {
          filterCategories: currentFilterType.filterCategories,
          currentCategory: filterCategory,
          placeholder: currentFilterType.placeholder,
          onFilterCategorySelected: this.filterCategorySelected
        }, _react["default"].createElement(_index.Filter.CategoryValueSelector, {
          categoryValues: filterCategory && filterCategory.filterValues,
          currentValue: currentValue,
          placeholder: currentFilterType.filterCategoriesPlaceholder,
          onCategoryValueSelected: this.categoryValueSelected
        }));
      }

      return _react["default"].createElement(_index.FormControl, {
        type: currentFilterType.filterType,
        value: currentValue,
        placeholder: currentFilterType.placeholder,
        onChange: function onChange(e) {
          return _this2.updateCurrentValue(e);
        },
        onKeyPress: function onKeyPress(e) {
          return _this2.onValueKeyPress(e);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state5 = this.state,
          currentFilterType = _this$state5.currentFilterType,
          activeFilters = _this$state5.activeFilters,
          currentSortType = _this$state5.currentSortType,
          isSortNumeric = _this$state5.isSortNumeric,
          isSortAscending = _this$state5.isSortAscending,
          currentViewType = _this$state5.currentViewType;
      var _this$props = this.props,
          onActionPerformed = _this$props.onActionPerformed,
          onFindAction = _this$props.onFindAction;
      return _react["default"].createElement(_index.Toolbar, null, _react["default"].createElement(_index.Filter, null, _react["default"].createElement(_index.Filter.TypeSelector, {
        filterTypes: _mockFilterExample.mockFilterExampleFields,
        currentFilterType: currentFilterType,
        onFilterTypeSelected: this.selectFilterType
      }), this.renderInput()), _react["default"].createElement(_index.Sort, null, _react["default"].createElement(_index.Sort.TypeSelector, {
        sortTypes: _mockSortExample.mockSortFields,
        currentSortType: currentSortType,
        onSortTypeSelected: this.updateCurrentSortType
      }), _react["default"].createElement(_index.Sort.DirectionSelector, {
        isNumeric: isSortNumeric,
        isAscending: isSortAscending,
        onClick: function onClick() {
          return _this3.toggleCurrentSortDirection();
        }
      })), _react["default"].createElement("div", {
        className: "form-group"
      }, _react["default"].createElement(_index.Button, {
        onClick: function onClick() {
          onActionPerformed && onActionPerformed('Action: Action 1');
        }
      }, "Action 1"), _react["default"].createElement(_index.Button, {
        onClick: function onClick() {
          onActionPerformed && onActionPerformed('Action: Action 2');
        }
      }, "Action 2"), _react["default"].createElement(_index.DropdownKebab, {
        id: "toolbarActionKebab"
      }, _react["default"].createElement(_index.MenuItem, {
        onClick: function onClick() {
          onActionPerformed && onActionPerformed('Action: Action');
        }
      }, "Action"), _react["default"].createElement(_index.MenuItem, {
        onClick: function onClick() {
          onActionPerformed && onActionPerformed('Action: Another Action');
        }
      }, "Another Action"), _react["default"].createElement(_index.MenuItem, {
        onClick: function onClick() {
          onActionPerformed && onActionPerformed('Action: Something Else Here');
        }
      }, "Something Else Here"), _react["default"].createElement(_index.MenuItem, {
        role: "separator",
        className: "divider"
      }), _react["default"].createElement(_index.MenuItem, {
        onClick: function onClick() {
          onActionPerformed && onActionPerformed('Action: Separated Link');
        }
      }, "Separated Link"))), _react["default"].createElement(_index.Toolbar.RightContent, null, _react["default"].createElement(_index.Toolbar.Find, {
        placeholder: "Find By Keyword...",
        currentIndex: 1,
        totalCount: 3,
        onChange: function onChange(value) {
          return onFindAction && onFindAction("Find: ".concat(value));
        },
        onEnter: function onEnter(value) {
          return onFindAction && onFindAction("Find again: ".concat(value));
        },
        onFindNext: function onFindNext(value) {
          return onFindAction && onFindAction("Find Next: ".concat(value));
        },
        onFindPrevious: function onFindPrevious(value) {
          return onFindAction && onFindAction("Find Previous: ".concat(value));
        }
      }), _react["default"].createElement(_index.Toolbar.ViewSelector, null, _react["default"].createElement(_index.Button, {
        title: "List View",
        bsStyle: "link",
        className: {
          active: currentViewType === 'list'
        },
        onClick: function onClick() {
          _this3.setViewType('list');
        }
      }, _react["default"].createElement(_index.Icon, {
        type: "fa",
        name: "th-list"
      })), _react["default"].createElement(_index.Button, {
        title: "Card View",
        bsStyle: "link",
        className: {
          active: currentViewType === 'card'
        },
        onClick: function onClick() {
          _this3.setViewType('card');
        }
      }, _react["default"].createElement(_index.Icon, {
        type: "fa",
        name: "th"
      })), _react["default"].createElement(_index.Button, {
        title: "Table View",
        bsStyle: "link",
        className: {
          active: currentViewType === 'table'
        },
        onClick: function onClick() {
          _this3.setViewType('table');
        }
      }, _react["default"].createElement(_index.Icon, {
        type: "fa",
        name: "table"
      })))), !activeFilters || activeFilters.length === 0 && _react["default"].createElement(_index.Toolbar.Results, null, _react["default"].createElement("h5", null, "40 Results")), activeFilters && activeFilters.length > 0 && _react["default"].createElement(_index.Toolbar.Results, null, _react["default"].createElement("h5", null, "40 Results"), _react["default"].createElement(_index.Filter.ActiveLabel, null, "Active Filters:"), _react["default"].createElement(_index.Filter.List, null, activeFilters.map(function (item, index) {
        return _react["default"].createElement(_index.Filter.Item, {
          key: index,
          onRemove: _this3.removeFilter,
          filterData: item
        }, "label=", item.label);
      })), _react["default"].createElement("a", {
        href: "#",
        onClick: function onClick(e) {
          e.preventDefault();

          _this3.clearFilters();
        }
      }, "Clear All Filters")));
    }
  }]);

  return MockToolbarExample;
}(_react["default"].Component);

exports.MockToolbarExample = MockToolbarExample;
MockToolbarExample.propTypes = {
  onFiltersChanged: _propTypes["default"].func,
  onSortChanged: _propTypes["default"].func,
  onViewChanged: _propTypes["default"].func,
  onActionPerformed: _propTypes["default"].func,
  onFindAction: _propTypes["default"].func
};
MockToolbarExample.defaultProps = {
  onFiltersChanged: _helpers.noop,
  onSortChanged: _helpers.noop,
  onViewChanged: _helpers.noop,
  onActionPerformed: _helpers.noop,
  onFindAction: _helpers.noop
};
var mockToolbarExampleSource = "\nimport React from 'react';\nimport PropTypes from 'prop-types';\n\nimport {\n  Button,\n  DropdownKebab,\n  Filter,\n  FormControl,\n  Icon,\n  MenuItem,\n  Sort,\n  Toolbar\n} from '../../../index';\nimport { noop } from '../../../common/helpers';\n\nimport { mockFilterExampleFields } from '../../Filter/__mocks__/mockFilterExample';\nimport { mockSortFields } from '../../Sort/__mocks__/mockSortExample';\n\nexport class MockToolbarExample extends React.Component {\n    state = {\n      currentFilterType: mockFilterExampleFields[0],\n      activeFilters: [],\n      currentValue: '',\n      currentSortType: mockSortFields[0],\n      isSortNumeric: mockSortFields[0].isNumeric,\n      isSortAscending: true,\n      currentViewType: 'list'\n    };\n\n  onValueKeyPress = keyEvent => {\n    const { currentValue, currentFilterType } = this.state;\n\n    if (keyEvent.key === 'Enter' && currentValue && currentValue.length > 0) {\n      this.setState({ currentValue: '' });\n      this.filterAdded(currentFilterType, currentValue);\n      keyEvent.stopPropagation();\n      keyEvent.preventDefault();\n    }\n  };\n\n  setViewType(viewType) {\n    const { onViewChanged } = this.props;\n    this.setState({ currentViewType: viewType });\n    onViewChanged && onViewChanged(viewType);\n  }\n\n  categoryValueSelected = value => {\n    const { currentValue, currentFilterType, filterCategory } = this.state;\n\n    if (filterCategory && currentValue !== value) {\n      this.setState({ currentValue: value });\n      if (value) {\n        const filterValue = {\n          filterCategory,\n          filterValue: value\n        };\n        this.filterAdded(currentFilterType, filterValue);\n      }\n    }\n  };\n\n  clearFilters = () => {\n    const { onFiltersChanged } = this.props;\n    this.setState({ activeFilters: [] });\n    onFiltersChanged && onFiltersChanged('Filters cleared.');\n  };\n\n  filterAdded = (field, value) => {\n    const { onFiltersChanged } = this.props;\n    let filterText = '';\n    if (field.title) {\n      filterText = field.title;\n    } else {\n      filterText = field;\n    }\n    filterText += ': ';\n\n    if (value.filterCategory) {\n      filterText += `${value.filterCategory.title ||\n        value.filterCategory}-${value.filterValue.title || value.filterValue}`;\n    } else if (value.title) {\n      filterText += value.title;\n    } else {\n      filterText += value;\n    }\n\n    const activeFilters = [...this.state.activeFilters, { label: filterText }];\n    this.setState({ activeFilters });\n    onFiltersChanged && onFiltersChanged(`Filter Added: ${filterText}`);\n  };\n\n  filterCategorySelected = category => {\n    const { filterCategory } = this.state;\n    if (filterCategory !== category) {\n      this.setState({ filterCategory: category });\n    }\n  };\n\n  filterValueSelected = filterValue => {\n    const { currentFilterType, currentValue } = this.state;\n\n    if (filterValue !== currentValue) {\n      this.setState({ currentValue: filterValue });\n      if (filterValue) {\n        this.filterAdded(currentFilterType, filterValue);\n      }\n    }\n  };\n\n  removeFilter = filter => {\n    const { onFiltersChanged } = this.props;\n    const { activeFilters } = this.state;\n\n    const index = activeFilters.indexOf(filter);\n    if (index > -1) {\n      const updated = [\n        ...activeFilters.slice(0, index),\n        ...activeFilters.slice(index + 1)\n      ];\n      this.setState({ activeFilters: updated });\n    }\n    onFiltersChanged && onFiltersChanged(`Filter Removed: ${filter.label}`);\n  };\n\n  selectFilterType = filterType => {\n    const { currentFilterType } = this.state;\n    if (currentFilterType !== filterType) {\n      this.setState({ currentValue: '', currentFilterType: filterType });\n\n      if (filterType.filterType === 'complex-select') {\n        this.setState({ filterCategory: undefined });\n      }\n    }\n  }\n\n  toggleCurrentSortDirection = () => {\n    const { isSortAscending } = this.state;\n    const { onSortChanged } = this.props;\n\n    this.setState({ isSortAscending: !isSortAscending });\n    onSortChanged && onSortChanged(`sort ascending: ${!isSortAscending}`);\n  };\n\n  updateCurrentSortType = sortType => {\n    const { currentSortType } = this.state;\n    const { onSortChanged } = this.props;\n\n    if (currentSortType !== sortType) {\n      this.setState({\n        currentSortType: sortType,\n        isSortNumeric: sortType.isNumeric,\n        isSortAscending: true\n      });\n    }\n    onSortChanged && onSortChanged(`sort type: ${sortType.title}`);\n  };\n\n  updateCurrentValue = event => {\n    this.setState({ currentValue: event.target.value });\n  };\n\n  renderInput() {\n    const { currentFilterType, currentValue, filterCategory } = this.state;\n    if (!currentFilterType) {\n      return null;\n    }\n\n    if (currentFilterType.filterType === 'select') {\n      return (\n        <Filter.ValueSelector\n          filterValues={currentFilterType.filterValues}\n          currentValue={currentValue}\n          onFilterValueSelected={this.filterValueSelected}\n        />\n      );\n    } else if (currentFilterType.filterType === 'complex-select') {\n      return (\n        <Filter.CategorySelector\n          filterCategories={currentFilterType.filterCategories}\n          currentCategory={filterCategory}\n          placeholder={currentFilterType.placeholder}\n          onFilterCategorySelected={this.filterCategorySelected}\n        >\n          <Filter.CategoryValueSelector\n            categoryValues={filterCategory && filterCategory.filterValues}\n            currentValue={currentValue}\n            placeholder={currentFilterType.filterCategoriesPlaceholder}\n            onCategoryValueSelected={this.categoryValueSelected}\n          />\n        </Filter.CategorySelector>\n      );\n    }\n    return (\n      <FormControl\n        type={currentFilterType.filterType}\n        value={currentValue}\n        placeholder={currentFilterType.placeholder}\n        onChange={e => this.updateCurrentValue(e)}\n        onKeyPress={e => this.onValueKeyPress(e)}\n      />\n    );\n  }\n\n  render() {\n    const {\n      currentFilterType,\n      activeFilters,\n      currentSortType,\n      isSortNumeric,\n      isSortAscending,\n      currentViewType\n    } = this.state;\n\n    const { onActionPerformed, onFindAction } = this.props;\n\n    return (\n      <Toolbar>\n        <Filter>\n          <Filter.TypeSelector\n            filterTypes={mockFilterExampleFields}\n            currentFilterType={currentFilterType}\n            onFilterTypeSelected={this.selectFilterType}\n          />\n          {this.renderInput()}\n        </Filter>\n        <Sort>\n          <Sort.TypeSelector\n            sortTypes={mockSortFields}\n            currentSortType={currentSortType}\n            onSortTypeSelected={this.updateCurrentSortType}\n          />\n          <Sort.DirectionSelector\n            isNumeric={isSortNumeric}\n            isAscending={isSortAscending}\n            onClick={() => this.toggleCurrentSortDirection()}\n          />\n        </Sort>\n        <div className=\"form-group\">\n          <Button\n            onClick={() => {\n              onActionPerformed && onActionPerformed('Action: Action 1');\n            }}\n          >\n            Action 1\n          </Button>\n          <Button\n            onClick={() => {\n              onActionPerformed && onActionPerformed('Action: Action 2');\n            }}\n          >\n            Action 2\n          </Button>\n          <DropdownKebab id=\"toolbarActionKebab\">\n            <MenuItem\n              onClick={() => {\n                onActionPerformed && onActionPerformed('Action: Action');\n              }}\n            >\n              Action\n            </MenuItem>\n            <MenuItem\n              onClick={() => {\n                onActionPerformed &&\n                  onActionPerformed('Action: Another Action');\n              }}\n            >\n              Another Action\n            </MenuItem>\n            <MenuItem\n              onClick={() => {\n                onActionPerformed &&\n                  onActionPerformed('Action: Something Else Here');\n              }}\n            >\n              Something Else Here\n            </MenuItem>\n            <MenuItem role=\"separator\" className=\"divider\" />\n            <MenuItem\n              onClick={() => {\n                onActionPerformed &&\n                  onActionPerformed('Action: Separated Link');\n              }}\n            >\n              Separated Link\n            </MenuItem>\n          </DropdownKebab>\n        </div>\n        <Toolbar.RightContent>\n          <Toolbar.Find\n            placeholder=\"Find By Keyword...\"\n            currentIndex={1}\n            totalCount={3}\n            onChange={value => onFindAction && onFindAction(`Find: ${value}`)}\n            onEnter={value =>\n              onFindAction && onFindAction(`Find again: ${value}`)\n            }\n            onFindNext={value =>\n              onFindAction && onFindAction(`Find Next: ${value}`)\n            }\n            onFindPrevious={value =>\n              onFindAction && onFindAction(`Find Previous: ${value}`)\n            }\n          />\n          <Toolbar.ViewSelector>\n            <Button\n              title=\"List View\"\n              bsStyle=\"link\"\n              className={{ active: currentViewType === 'list' }}\n              onClick={() => {\n                this.setViewType('list');\n              }}\n            >\n              <Icon type=\"fa\" name=\"th-list\" />\n            </Button>\n            <Button\n              title=\"Card View\"\n              bsStyle=\"link\"\n              className={{ active: currentViewType === 'card' }}\n              onClick={() => {\n                this.setViewType('card');\n              }}\n            >\n              <Icon type=\"fa\" name=\"th\" />\n            </Button>\n            <Button\n              title=\"Table View\"\n              bsStyle=\"link\"\n              className={{ active: currentViewType === 'table' }}\n              onClick={() => {\n                this.setViewType('table');\n              }}\n            >\n              <Icon type=\"fa\" name=\"table\" />\n            </Button>\n          </Toolbar.ViewSelector>\n        </Toolbar.RightContent>\n        {!activeFilters ||\n          (activeFilters.length === 0 && (\n            <Toolbar.Results>\n              <h5>40 Results</h5>\n            </Toolbar.Results>\n          ))}\n        {activeFilters &&\n          activeFilters.length > 0 && (\n            <Toolbar.Results>\n              <h5>40 Results</h5>\n              <Filter.ActiveLabel>Active Filters:</Filter.ActiveLabel>\n              <Filter.List>\n                {activeFilters.map((item, index) => (\n                  <Filter.Item\n                    key={index}\n                    onRemove={this.removeFilter}\n                    filterData={item}\n                  >\n                    label={item.label}\n                  </Filter.Item>\n                ))}\n              </Filter.List>\n              <a\n                href=\"#\"\n                onClick={e => {\n                  e.preventDefault();\n                  this.clearFilters();\n                }}\n              >\n                Clear All Filters\n              </a>\n            </Toolbar.Results>\n          )}\n      </Toolbar>\n    );\n  }\n}\n\nMockToolbarExample.propTypes = {\n  onFiltersChanged: PropTypes.func,\n  onSortChanged: PropTypes.func,\n  onViewChanged: PropTypes.func,\n  onActionPerformed: PropTypes.func,\n  onFindAction: PropTypes.func\n};\n\nMockToolbarExample.defaultProps = {\n  onFiltersChanged: noop,\n  onSortChanged: noop,\n  onViewChanged: noop,\n  onActionPerformed: noop,\n  onFindAction: noop\n};\n";
exports.mockToolbarExampleSource = mockToolbarExampleSource;