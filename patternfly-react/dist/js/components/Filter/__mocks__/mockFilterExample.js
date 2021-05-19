"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockFilterExampleSource = exports.MockFilterExample = exports.mockFilterExampleFields = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../../../index");

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

var mockFilterExampleFields = [{
  id: 'name',
  title: 'Name',
  placeholder: 'Filter by Name',
  filterType: 'text'
}, {
  id: 'address',
  title: 'Address',
  placeholder: 'Filter by Address',
  filterType: 'text'
}, {
  id: 'birthMonth',
  title: 'Birth Month',
  placeholder: 'Filter by Birth Month',
  filterType: 'select',
  filterValues: [{
    title: 'January',
    id: 'jan'
  }, {
    title: 'February',
    id: 'feb'
  }, {
    title: 'March',
    id: 'mar'
  }, {
    title: 'April',
    id: 'apr'
  }, {
    title: 'May',
    id: 'may'
  }, {
    title: 'June',
    id: 'jun'
  }, {
    title: 'July',
    id: 'jul'
  }, {
    title: 'August',
    id: 'aug'
  }, {
    title: 'September',
    id: 'sep'
  }, {
    title: 'October',
    id: 'oct'
  }, {
    title: 'November',
    id: 'nov'
  }, {
    title: 'December',
    id: 'dec'
  }]
}, {
  id: 'car',
  title: 'Car',
  placeholder: 'Filter by Car Make',
  filterType: 'complex-select',
  filterValues: [{
    title: 'Subaru',
    id: 'subie'
  }, 'Toyota'],
  filterCategoriesPlaceholder: 'Filter by Car Model',
  filterCategories: [{
    id: 'subie',
    title: 'Subaru',
    filterValues: [{
      title: 'Outback',
      id: 'out'
    }, 'Crosstrek', 'Impreza']
  }, {
    id: 'toyota',
    title: 'Toyota',
    filterValues: [{
      title: 'Prius',
      id: 'pri'
    }, 'Corolla', 'Echo']
  }]
}];
exports.mockFilterExampleFields = mockFilterExampleFields;

var MockFilterExample = /*#__PURE__*/function (_React$Component) {
  _inherits(MockFilterExample, _React$Component);

  function MockFilterExample() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MockFilterExample);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MockFilterExample)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      currentFilterType: mockFilterExampleFields[0],
      activeFilters: [],
      currentValue: ''
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
      _this.setState({
        activeFilters: []
      });
    });

    _defineProperty(_assertThisInitialized(_this), "filterAdded", function (field, value) {
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

      if ((field.filterType === 'select' || field.filterType === 'complex-select') && _this.filterExists(field.title)) {
        _this.enforceSingleSelect(field.title);
      }

      var activeFilters = [].concat(_toConsumableArray(_this.state.activeFilters), [{
        label: filterText
      }]);

      _this.setState({
        activeFilters: activeFilters
      });
    });

    _defineProperty(_assertThisInitialized(_this), "filterCategorySelected", function (category) {
      var filterCategory = _this.state.filterCategory;

      if (filterCategory !== category) {
        _this.setState({
          filterCategory: category,
          currentValue: ''
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

    _defineProperty(_assertThisInitialized(_this), "filterExists", function (fieldTitle) {
      var activeFilters = _this.state.activeFilters;
      var index = (0, _lodash.findIndex)(activeFilters, function (filter) {
        return filter.label.startsWith(fieldTitle);
      });
      return index !== -1;
    });

    _defineProperty(_assertThisInitialized(_this), "getFilterValue", function (fieldTitle) {
      var activeFilters = _this.state.activeFilters;
      var existingFilter = (0, _lodash.find)(activeFilters, function (filter) {
        return filter.label.startsWith(fieldTitle);
      });
      return existingFilter.label.substring(existingFilter.label.indexOf(': ') + 2);
    });

    _defineProperty(_assertThisInitialized(_this), "enforceSingleSelect", function (fieldTitle) {
      var activeFilters = _this.state.activeFilters;
      (0, _lodash.remove)(activeFilters, function (filter) {
        return filter.label.startsWith(fieldTitle);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "removeFilter", function (filter) {
      var activeFilters = _this.state.activeFilters;
      var index = activeFilters.indexOf(filter);

      if (index > -1) {
        var updated = [].concat(_toConsumableArray(activeFilters.slice(0, index)), _toConsumableArray(activeFilters.slice(index + 1)));

        _this.setState({
          activeFilters: updated
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "selectFilterType", function (filterType) {
      var currentFilterType = _this.state.currentFilterType;

      if (currentFilterType !== filterType) {
        var newCurrentValue = '';
        var newFilterCategory; // set selected value(s) in dropdown(s) if filter exists

        if (filterType.filterType === 'select' || filterType.filterType === 'complex-select') {
          if (_this.filterExists(filterType.title)) {
            var filterValue = _this.getFilterValue(filterType.title);

            if (filterType.filterType === 'select') {
              newCurrentValue = filterValue;
            } else {
              var categoryValues = filterValue.split('-');

              var _categoryValues = _slicedToArray(categoryValues, 2);

              newFilterCategory = _categoryValues[0];
              newCurrentValue = _categoryValues[1];
              newFilterCategory = (0, _lodash.find)(filterType.filterCategories, function (filterCat) {
                return filterCat.title === newFilterCategory;
              });
            }
          }
        }

        _this.setState({
          currentFilterType: filterType,
          currentValue: newCurrentValue,
          filterCategory: newFilterCategory
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateCurrentValue", function (event) {
      _this.setState({
        currentValue: event.target.value
      });
    });

    return _this;
  }

  _createClass(MockFilterExample, [{
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

      if (currentFilterType.filterType === 'select' || currentFilterType.filterType === 'complex-select') {
        // remove selected value in dropdown(s) if filter was removed
        if (currentValue !== '' && !this.filterExists(currentFilterType.title)) {
          this.setState({
            currentValue: '',
            filterCategory: currentFilterType.filterType === 'complex-select' ? '' : filterCategory
          });
        }
      }

      if (currentFilterType.filterType === 'select') {
        return _react["default"].createElement(_index.Filter.ValueSelector, {
          filterValues: currentFilterType.filterValues,
          placeholder: currentFilterType.placeholder,
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
          activeFilters = _this$state5.activeFilters;
      return _react["default"].createElement("div", null, _react["default"].createElement("div", {
        style: {
          width: 300
        }
      }, _react["default"].createElement(_index.Filter, null, _react["default"].createElement(_index.Filter.TypeSelector, {
        filterTypes: mockFilterExampleFields,
        currentFilterType: currentFilterType,
        onFilterTypeSelected: this.selectFilterType
      }), this.renderInput())), activeFilters && activeFilters.length > 0 && _react["default"].createElement(_index.Toolbar.Results, null, _react["default"].createElement(_index.Filter.ActiveLabel, null, "Active Filters:"), _react["default"].createElement(_index.Filter.List, null, activeFilters.map(function (item, index) {
        return _react["default"].createElement(_index.Filter.Item, {
          key: index,
          onRemove: _this3.removeFilter,
          filterData: item
        }, item.label);
      })), _react["default"].createElement("a", {
        href: "#",
        onClick: function onClick(e) {
          e.preventDefault();

          _this3.clearFilters();
        }
      }, "Clear All Filters")));
    }
  }]);

  return MockFilterExample;
}(_react["default"].Component);

exports.MockFilterExample = MockFilterExample;
var mockFilterExampleSource = "\nimport React from 'react';\nimport { Filter, FormControl, Toolbar } from '../../../index';\nimport { findIndex, find, remove } from 'lodash';\n\nexport const mockFilterExampleFields = [\n  {\n    id: 'name',\n    title: 'Name',\n    placeholder: 'Filter by Name',\n    filterType: 'text'\n  },\n  {\n    id: 'address',\n    title: 'Address',\n    placeholder: 'Filter by Address',\n    filterType: 'text'\n  },\n  {\n    id: 'birthMonth',\n    title: 'Birth Month',\n    placeholder: 'Filter by Birth Month',\n    filterType: 'select',\n    filterValues: [\n      { title: 'January', id: 'jan' },\n      { title: 'February', id: 'feb' },\n      { title: 'March', id: 'mar' },\n      { title: 'April', id: 'apr' },\n      { title: 'May', id: 'may' },\n      { title: 'June', id: 'jun' },\n      { title: 'July', id: 'jul' },\n      { title: 'August', id: 'aug' },\n      { title: 'September', id: 'sep' },\n      { title: 'October', id: 'oct' },\n      { title: 'November', id: 'nov' },\n      { title: 'December', id: 'dec' }\n    ]\n  },\n  {\n    id: 'car',\n    title: 'Car',\n    placeholder: 'Filter by Car Make',\n    filterType: 'complex-select',\n    filterValues: [{ title: 'Subaru', id: 'subie' }, 'Toyota'],\n    filterCategoriesPlaceholder: 'Filter by Car Model',\n    filterCategories: [\n      {\n        id: 'subie',\n        title: 'Subaru',\n        filterValues: [\n          {\n            title: 'Outback',\n            id: 'out'\n          },\n          'Crosstrek',\n          'Impreza'\n        ]\n      },\n      {\n        id: 'toyota',\n        title: 'Toyota',\n        filterValues: [\n          {\n            title: 'Prius',\n            id: 'pri'\n          },\n          'Corolla',\n          'Echo'\n        ]\n      }\n    ]\n  }\n];\n\nexport class MockFilterExample extends React.Component {\n\n    state = {\n      currentFilterType: mockFilterExampleFields[0],\n      activeFilters: [],\n      currentValue: ''\n    };\n\n  filterAdded = (field, value) => {\n    let filterText = '';\n    if (field.title) {\n      filterText = field.title;\n    } else {\n      filterText = field;\n    }\n    filterText += ': ';\n\n    if (value.filterCategory) {\n      filterText +=\n        (value.filterCategory.title || value.filterCategory) +\n        '-' +\n        (value.filterValue.title || value.filterValue);\n    } else if (value.title) {\n      filterText += value.title;\n    } else {\n      filterText += value;\n    }\n\n    if ((field.filterType === 'select' || field.filterType === 'complex-select') && this.filterExists(field.title)) {\n      this.enforceSingleSelect(field.title);\n    }\n\n    let activeFilters = [...this.state.activeFilters, { label: filterText }];\n    this.setState({ activeFilters: activeFilters });\n  };\n\n  selectFilterType = filterType => {\n    const { currentFilterType } = this.state;\n    if (currentFilterType !== filterType) {\n      let newCurrentValue = '';\n      let newFilterCategory;\n      // set selected value(s) in dropdown(s) if filter exists\n      if (filterType.filterType === 'select' || filterType.filterType === 'complex-select') {\n        if (this.filterExists(filterType.title)) {\n          const filterValue = this.getFilterValue(filterType.title);\n          if (filterType.filterType === 'select') {\n            newCurrentValue = filterValue;\n          } else {\n            const categoryValues = filterValue.split('-');\n            [newFilterCategory, newCurrentValue] = categoryValues;\n            newFilterCategory = find(filterType.filterCategories, filterCat => filterCat.title === newFilterCategory);\n          }\n        }\n      }\n      this.setState({\n        currentFilterType: filterType,\n        currentValue: newCurrentValue,\n        filterCategory: newFilterCategory\n      });\n    }\n  }\n\n  filterValueSelected = filterValue => {\n    const { currentFilterType, currentValue } = this.state;\n\n    if (filterValue !== currentValue) {\n      this.setState({ currentValue: filterValue });\n      if (filterValue) {\n        this.filterAdded(currentFilterType, filterValue);\n      }\n    }\n  }\n\n  filterCategorySelected = category => {\n    const { filterCategory } = this.state;\n    if (filterCategory !== category) {\n      this.setState({ filterCategory: category, currentValue: '' });\n    }\n  }\n\n  categoryValueSelected = value => {\n    const { currentValue, currentFilterType, filterCategory } = this.state;\n\n    if (filterCategory && currentValue !== value) {\n      this.setState({ currentValue: value });\n      if (value) {\n        let filterValue = {\n          filterCategory: filterCategory,\n          filterValue: value\n        };\n        this.filterAdded(currentFilterType, filterValue);\n      }\n    }\n  }\n\n  updateCurrentValue = event => {\n    this.setState({ currentValue: event.target.value });\n  }\n\n  onValueKeyPress = keyEvent => {\n    const { currentValue, currentFilterType } = this.state;\n\n    if (keyEvent.key === 'Enter' && currentValue && currentValue.length > 0) {\n      this.setState({ currentValue: '' });\n      this.filterAdded(currentFilterType, currentValue);\n      keyEvent.stopPropagation();\n      keyEvent.preventDefault();\n    }\n  }\n\n  filterExists = fieldTitle => {\n    const { activeFilters } = this.state;\n    const index = findIndex(activeFilters, filter => filter.label.startsWith(fieldTitle));\n    return index !== -1;\n  };\n\n  getFilterValue = fieldTitle => {\n    const { activeFilters } = this.state;\n    const existingFilter = find(activeFilters, filter => filter.label.startsWith(fieldTitle));\n    return existingFilter.label.substring(existingFilter.label.indexOf(': ') + 2);\n  };\n\n  enforceSingleSelect = fieldTitle => {\n    const { activeFilters } = this.state;\n    remove(activeFilters, filter => filter.label.startsWith(fieldTitle));\n  };\n\n  removeFilter = filter => {\n    const { activeFilters } = this.state;\n\n    let index = activeFilters.indexOf(filter);\n    if (index > -1) {\n      let updated = [\n        ...activeFilters.slice(0, index),\n        ...activeFilters.slice(index + 1)\n      ];\n      this.setState({ activeFilters: updated });\n    }\n  }\n\n  clearFilters = () => {\n    this.setState({ activeFilters: [] });\n  }\n\n  renderInput() {\n    const { currentFilterType, currentValue, filterCategory } = this.state;\n    if (!currentFilterType) {\n      return null;\n    }\n\n    if (currentFilterType.filterType === 'select' || currentFilterType.filterType === 'complex-select') {\n      // remove selected value in dropdown(s) if filter was removed\n      if (currentValue !== '' && !this.filterExists(currentFilterType.title)) {\n        this.setState({\n          currentValue: '',\n          filterCategory: currentFilterType.filterType === 'complex-select' ? '' : filterCategory\n        });\n      }\n    }\n\n    if (currentFilterType.filterType === 'select') {\n      return (\n        <Filter.ValueSelector\n          filterValues={currentFilterType.filterValues}\n          placeholder={currentFilterType.placeholder}\n          currentValue={currentValue}\n          onFilterValueSelected={this.filterValueSelected}\n        />\n      );\n    } else if (currentFilterType.filterType === 'complex-select') {\n      return (\n        <Filter.CategorySelector\n          filterCategories={currentFilterType.filterCategories}\n          currentCategory={filterCategory}\n          placeholder={currentFilterType.placeholder}\n          onFilterCategorySelected={this.filterCategorySelected}\n        >\n          <Filter.CategoryValueSelector\n            categoryValues={filterCategory && filterCategory.filterValues}\n            currentValue={currentValue}\n            placeholder={currentFilterType.filterCategoriesPlaceholder}\n            onCategoryValueSelected={this.categoryValueSelected}\n          />\n        </Filter.CategorySelector>\n      );\n    } else {\n      return (\n        <FormControl\n          type={currentFilterType.filterType}\n          value={currentValue}\n          placeholder={currentFilterType.placeholder}\n          onChange={e => this.updateCurrentValue(e)}\n          onKeyPress={e => this.onValueKeyPress(e)}\n        />\n      );\n    }\n  }\n\n  render() {\n    const { currentFilterType, activeFilters } = this.state;\n\n    return (\n      <div>\n        <div style={{ width: 300 }}>\n          <Filter>\n            <Filter.TypeSelector\n              filterTypes={mockFilterExampleFields}\n              currentFilterType={currentFilterType}\n              onFilterTypeSelected={this.selectFilterType}\n            />\n            {this.renderInput()}\n          </Filter>\n        </div>\n        {activeFilters &&\n          activeFilters.length > 0 && (\n            <Toolbar.Results>\n              <Filter.ActiveLabel>{'Active Filters:'}</Filter.ActiveLabel>\n              <Filter.List>\n                {activeFilters.map((item, index) => {\n                  return (\n                    <Filter.Item\n                      key={index}\n                      onRemove={this.removeFilter}\n                      filterData={item}\n                    >\n                      {item.label}\n                    </Filter.Item>\n                  );\n                })}\n              </Filter.List>\n              <a\n                href=\"#\"\n                onClick={e => {\n                  e.preventDefault();\n                  this.clearFilters();\n                }}\n              >\n                Clear All Filters\n              </a>\n            </Toolbar.Results>\n          )}\n      </div>\n    );\n  }\n}\n";
exports.mockFilterExampleSource = mockFilterExampleSource;