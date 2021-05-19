"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockSortExampleSource = exports.MockSortExample = exports.mockSortFields = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../../../index");

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
exports.mockSortFields = mockSortFields;

var MockSortExample = /*#__PURE__*/function (_React$Component) {
  _inherits(MockSortExample, _React$Component);

  function MockSortExample() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MockSortExample);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MockSortExample)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      currentSortType: mockSortFields[0],
      isSortNumeric: mockSortFields[0].isNumeric,
      isSortAscending: true
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

      var activeFilters = [].concat(_toConsumableArray(_this.state.activeFilters), [{
        label: filterText
      }]);

      _this.setState({
        activeFilters: activeFilters
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleCurrentSortDirection", function () {
      _this.setState(function (prevState) {
        return {
          isSortAscending: !prevState.isSortAscending
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateCurrentSortType", function (sortType) {
      var currentSortType = _this.state.currentSortType;

      if (currentSortType !== sortType) {
        _this.setState({
          currentSortType: sortType,
          isSortNumeric: sortType.isNumeric,
          isSortAscending: true
        });
      }
    });

    return _this;
  }

  _createClass(MockSortExample, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          currentSortType = _this$state.currentSortType,
          isSortNumeric = _this$state.isSortNumeric,
          isSortAscending = _this$state.isSortAscending;
      return _react["default"].createElement(_index.Toolbar, null, _react["default"].createElement(_index.Sort, null, _react["default"].createElement(_index.Sort.TypeSelector, {
        sortTypes: mockSortFields,
        currentSortType: currentSortType,
        onSortTypeSelected: this.updateCurrentSortType
      }), _react["default"].createElement(_index.Sort.DirectionSelector, {
        isNumeric: isSortNumeric,
        isAscending: isSortAscending,
        onClick: function onClick() {
          return _this2.toggleCurrentSortDirection();
        }
      })));
    }
  }]);

  return MockSortExample;
}(_react["default"].Component);

exports.MockSortExample = MockSortExample;
var mockSortExampleSource = "\nimport React from 'react';\nimport { Sort, Toolbar } from '../../../index';\n\nexport const mockSortFields = [\n  {\n    id: 'name',\n    title: 'Name',\n    isNumeric: false\n  },\n  {\n    id: 'address',\n    title: 'Address',\n    isNumeric: false\n  },\n  {\n    id: 'birthMonth',\n    title: 'Birth Month',\n    isNumeric: true\n  },\n  {\n    id: 'car',\n    title: 'Car',\n    isNumeric: false\n  }\n];\n\nexport class MockSortExample extends React.Component {\n    state = {\n      currentSortType: mockSortFields[0],\n      isSortNumeric: mockSortFields[0].isNumeric,\n      isSortAscending: true\n    };\n\n  filterAdded = (field, value) => {\n    let filterText = '';\n    if (field.title) {\n      filterText = field.title;\n    } else {\n      filterText = field;\n    }\n    filterText += ': ';\n\n    if (value.filterCategory) {\n      filterText +=\n        (value.filterCategory.title || value.filterCategory) +\n        '-' +\n        (value.filterValue.title || value.filterValue);\n    } else if (value.title) {\n      filterText += value.title;\n    } else {\n      filterText += value;\n    }\n\n    let activeFilters = [...this.state.activeFilters, { label: filterText }];\n    this.setState({ activeFilters: activeFilters });\n  };\n\n  updateCurrentSortType = sortType => {\n    const { currentSortType } = this.state;\n    if (currentSortType !== sortType) {\n      this.setState({\n        currentSortType: sortType,\n        isSortNumeric: sortType.isNumeric,\n        isSortAscending: true\n      });\n    }\n  }\n\n  toggleCurrentSortDirection = () => {\n    this.setState(prevState => {\n      return { isSortAscending: !prevState.isSortAscending };\n    });\n  }\n\n  render() {\n    const { currentSortType, isSortNumeric, isSortAscending } = this.state;\n\n    return (\n      <Toolbar>\n        <Sort>\n          <Sort.TypeSelector\n            sortTypes={mockSortFields}\n            currentSortType={currentSortType}\n            onSortTypeSelected={this.updateCurrentSortType}\n          />\n          <Sort.DirectionSelector\n            isNumeric={isSortNumeric}\n            isAscending={isSortAscending}\n            onClick={() => this.toggleCurrentSortDirection()}\n          />\n        </Sort>\n      </Toolbar>\n    );\n  }\n}\n";
exports.mockSortExampleSource = mockSortExampleSource;