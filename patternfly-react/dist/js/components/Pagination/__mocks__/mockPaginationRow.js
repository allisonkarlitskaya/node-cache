"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockPaginationSource = exports.MockPaginationRow = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _helpers = require("../../../common/helpers");

var _index = require("../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MockPaginationRow = /*#__PURE__*/function (_React$Component) {
  _inherits(MockPaginationRow, _React$Component);

  function MockPaginationRow() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MockPaginationRow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MockPaginationRow)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      pagination: {
        page: 1,
        perPage: 6,
        perPageOptions: [6, 10, 15, 25, 50]
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onPageInput", function (e) {
      var newPaginationState = Object.assign({}, _this.state.pagination);
      newPaginationState.page = e.target.value;

      _this.setState({
        pagination: newPaginationState
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onPerPageSelect", function (eventKey, e) {
      var newPaginationState = Object.assign({}, _this.state.pagination);
      newPaginationState.perPage = eventKey;

      _this.setState({
        pagination: newPaginationState
      });
    });

    return _this;
  }

  _createClass(MockPaginationRow, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          viewType = _this$props.viewType,
          pageInputValue = _this$props.pageInputValue,
          amountOfPages = _this$props.amountOfPages,
          pageSizeDropUp = _this$props.pageSizeDropUp,
          itemCount = _this$props.itemCount,
          itemsStart = _this$props.itemsStart,
          itemsEnd = _this$props.itemsEnd,
          onFirstPage = _this$props.onFirstPage,
          onPreviousPage = _this$props.onPreviousPage,
          onNextPage = _this$props.onNextPage,
          onLastPage = _this$props.onLastPage;
      return _react["default"].createElement(_index.PaginationRow, {
        viewType: viewType,
        pageInputValue: pageInputValue,
        pagination: this.state.pagination,
        amountOfPages: amountOfPages,
        pageSizeDropUp: pageSizeDropUp,
        itemCount: itemCount,
        itemsStart: itemsStart,
        itemsEnd: itemsEnd,
        onPerPageSelect: this.onPerPageSelect,
        onFirstPage: onFirstPage,
        onPreviousPage: onPreviousPage,
        onPageInput: this.onPageInput,
        onNextPage: onNextPage,
        onLastPage: onLastPage
      });
    }
  }]);

  return MockPaginationRow;
}(_react["default"].Component);

exports.MockPaginationRow = MockPaginationRow;
MockPaginationRow.propTypes = {
  viewType: _propTypes["default"].oneOf(_index.PAGINATION_VIEW_TYPES).isRequired,
  pageInputValue: _propTypes["default"].number.isRequired,
  amountOfPages: _propTypes["default"].number.isRequired,
  pageSizeDropUp: _propTypes["default"].bool,
  itemCount: _propTypes["default"].number.isRequired,
  itemsStart: _propTypes["default"].number.isRequired,
  itemsEnd: _propTypes["default"].number.isRequired,
  onFirstPage: _propTypes["default"].func,
  onPreviousPage: _propTypes["default"].func,
  onNextPage: _propTypes["default"].func,
  onLastPage: _propTypes["default"].func
};
MockPaginationRow.defaultProps = {
  pageSizeDropUp: true,
  onFirstPage: _helpers.noop,
  onPreviousPage: _helpers.noop,
  onNextPage: _helpers.noop,
  onLastPage: _helpers.noop
};
var mockPaginationSource = "\nimport React from 'react';\nimport PropTypes from 'prop-types';\nimport { noop } from '../../../common/helpers';\nimport { PaginationRow, PAGINATION_VIEW_TYPES } from '../index';\n\nexport class MockPaginationRow extends React.Component {\n    state = {\n      pagination: {\n        page: 1,\n        perPage: 6,\n        perPageOptions: [6, 10, 15, 25, 50]\n      }\n    };\n\n  onPageInput = e => {\n    const newPaginationState = Object.assign({}, this.state.pagination);\n    newPaginationState.page = e.target.value;\n    this.setState({ pagination: newPaginationState });\n  }\n  onPerPageSelect = (eventKey, e) => {\n    const newPaginationState = Object.assign({}, this.state.pagination);\n    newPaginationState.perPage = eventKey;\n    this.setState({ pagination: newPaginationState });\n  }\n  render() {\n    const {\n      viewType,\n      pageInputValue,\n      amountOfPages,\n      pageSizeDropUp,\n      itemCount,\n      itemsStart,\n      itemsEnd,\n      onFirstPage,\n      onPreviousPage,\n      onNextPage,\n      onLastPage\n    } = this.props;\n\n    return (\n      <PaginationRow\n        viewType={viewType}\n        pageInputValue={pageInputValue}\n        pagination={this.state.pagination}\n        amountOfPages={amountOfPages}\n        pageSizeDropUp={pageSizeDropUp}\n        itemCount={itemCount}\n        itemsStart={itemsStart}\n        itemsEnd={itemsEnd}\n        onPerPageSelect={this.onPerPageSelect}\n        onFirstPage={onFirstPage}\n        onPreviousPage={onPreviousPage}\n        onPageInput={this.onPageInput}\n        onNextPage={onNextPage}\n        onLastPage={onLastPage}\n      />\n    );\n  }\n}\nMockPaginationRow.propTypes = {\n  viewType: PropTypes.oneOf(PAGINATION_VIEW_TYPES).isRequired,\n  pageInputValue: PropTypes.number.isRequired,\n  amountOfPages: PropTypes.number.isRequired,\n  pageSizeDropUp: PropTypes.bool,\n  itemCount: PropTypes.number.isRequired,\n  itemsStart: PropTypes.number.isRequired,\n  itemsEnd: PropTypes.number.isRequired,\n  onFirstPage: PropTypes.func,\n  onPreviousPage: PropTypes.func,\n  onNextPage: PropTypes.func,\n  onLastPage: PropTypes.func\n};\nMockPaginationRow.defaultProps = {\n  pageSizeDropUp: true,\n  onFirstPage: noop,\n  onPreviousPage: noop,\n  onNextPage: noop,\n  onLastPage: noop\n};\n";
exports.mockPaginationSource = mockPaginationSource;