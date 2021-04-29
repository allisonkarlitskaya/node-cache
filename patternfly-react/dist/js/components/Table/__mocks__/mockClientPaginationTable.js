"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockClientPaginationTableSource = exports.MockClientPaginationTable = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = require("lodash");

var _classnames = _interopRequireDefault(require("classnames"));

var sort = _interopRequireWildcard(require("sortabular"));

var resolve = _interopRequireWildcard(require("table-resolver"));

var _recompose = require("recompose");

var _index = require("../index");

var _MenuItem = require("../../MenuItem");

var _Grid = require("../../Grid");

var _Pagination = require("../../Pagination");

var _mockRows = require("./mockRows");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Reactabular client side paging based on the following api docs:
 * https://reactabular.js.org/#/data/pagination
 */
var MockClientPaginationTable = /*#__PURE__*/function (_React$Component) {
  _inherits(MockClientPaginationTable, _React$Component);

  _createClass(MockClientPaginationTable, null, [{
    key: "deselectRow",
    value: function deselectRow(row) {
      return Object.assign({}, row, {
        selected: false
      });
    }
  }, {
    key: "selectRow",
    value: function selectRow(row) {
      return Object.assign({}, row, {
        selected: true
      });
    }
  }]);

  function MockClientPaginationTable(props) {
    var _this;

    _classCallCheck(this, MockClientPaginationTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MockClientPaginationTable).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onFirstPage", function () {
      _this.setPage(1);
    });

    _defineProperty(_assertThisInitialized(_this), "onLastPage", function () {
      var page = _this.state.pagination.page;

      var totalPages = _this.totalPages();

      if (page < totalPages) {
        _this.setPage(totalPages);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onNextPage", function () {
      var page = _this.state.pagination.page;

      if (page < _this.totalPages()) {
        _this.setPage(_this.state.pagination.page + 1);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onPageInput", function (e) {
      _this.setState({
        pageChangeValue: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onPerPageSelect", function (eventKey, e) {
      var newPaginationState = Object.assign({}, _this.state.pagination);
      newPaginationState.perPage = eventKey;
      newPaginationState.page = 1;

      _this.setState({
        pagination: newPaginationState
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onPreviousPage", function () {
      if (_this.state.pagination.page > 1) {
        _this.setPage(_this.state.pagination.page - 1);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onRow", function (row, _ref) {
      var rowIndex = _ref.rowIndex;
      var selectedRows = _this.state.selectedRows;
      var selected = selectedRows.indexOf(row.id) > -1;
      return {
        className: (0, _classnames["default"])({
          selected: selected
        }),
        role: 'row'
      };
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectAllRows", function (event) {
      var onRowsLogger = _this.props.onRowsLogger;
      var _this$state = _this.state,
          rows = _this$state.rows,
          selectedRows = _this$state.selectedRows;
      var checked = event.target.checked;

      var currentRows = _this.currentRows().rows;

      if (checked) {
        var updatedSelections = _toConsumableArray(new Set([].concat(_toConsumableArray(currentRows.map(function (r) {
          return r.id;
        })), _toConsumableArray(selectedRows))));

        var updatedRows = rows.map(function (r) {
          return updatedSelections.indexOf(r.id) > -1 ? MockClientPaginationTable.selectRow(r) : r;
        });

        _this.setState({
          // important: you must update rows to force a re-render and trigger onRow hook
          rows: updatedRows,
          selectedRows: updatedSelections
        });

        onRowsLogger(updatedRows.filter(function (r) {
          return r.selected;
        }));
      } else {
        var ids = currentRows.map(function (r) {
          return r.id;
        });

        var _updatedSelections = selectedRows.filter(function (r) {
          return !(ids.indexOf(r) > -1);
        });

        var _updatedRows = rows.map(function (r) {
          return _updatedSelections.indexOf(r.id) > -1 ? r : MockClientPaginationTable.deselectRow(r);
        });

        _this.setState({
          rows: _updatedRows,
          selectedRows: _updatedSelections
        });

        onRowsLogger(_updatedRows.filter(function (r) {
          return r.selected;
        }));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectRow", function (event, row) {
      var onRowsLogger = _this.props.onRowsLogger;
      var _this$state2 = _this.state,
          rows = _this$state2.rows,
          selectedRows = _this$state2.selectedRows;
      var selectedRowIndex = rows.findIndex(function (r) {
        return r.id === row.id;
      });

      if (selectedRowIndex > -1) {
        var updatedSelectedRows;
        var updatedRow;

        if (row.selected) {
          updatedSelectedRows = selectedRows.filter(function (r) {
            return !(r === row.id);
          });
          updatedRow = MockClientPaginationTable.deselectRow(row);
        } else {
          selectedRows.push(row.id);
          updatedSelectedRows = selectedRows;
          updatedRow = MockClientPaginationTable.selectRow(row);
        }

        rows[selectedRowIndex] = updatedRow;

        _this.setState({
          rows: rows,
          selectedRows: updatedSelectedRows
        });

        onRowsLogger(rows.filter(function (r) {
          return r.selected;
        }));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSubmit", function () {
      _this.setPage(_this.state.pageChangeValue);
    });

    _defineProperty(_assertThisInitialized(_this), "setPage", function (value) {
      var page = Number(value);

      if (!Number.isNaN(value) && value !== '' && page > 0 && page <= _this.totalPages()) {
        var newPaginationState = Object.assign({}, _this.state.pagination);
        newPaginationState.page = page;

        _this.setState({
          pagination: newPaginationState,
          pageChangeValue: page
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "totalPages", function () {
      var perPage = _this.state.pagination.perPage;
      return Math.ceil(_mockRows.mockRows.length / perPage);
    });

    var getSortingColumns = function getSortingColumns() {
      return _this.state.sortingColumns || {};
    };

    var sortableTransform = sort.sort({
      getSortingColumns: getSortingColumns,
      onSort: function onSort(selectedColumn) {
        _this.setState({
          sortingColumns: sort.byColumn({
            sortingColumns: _this.state.sortingColumns,
            sortingOrder: _index.defaultSortingOrder,
            selectedColumn: selectedColumn
          })
        });
      },
      // Use property or index dependening on the sortingColumns structure specified
      strategy: sort.strategies.byProperty
    });
    var sortingFormatter = sort.header({
      sortableTransform: sortableTransform,
      getSortingColumns: getSortingColumns,
      strategy: sort.strategies.byProperty
    }); // enables our custom header formatters extensions to reactabular

    _this.customHeaderFormatters = _index.customHeaderFormattersDefinition;
    _this.state = {
      // Sort the first column in an ascending way by default.
      sortingColumns: {
        name: {
          direction: _index.TABLE_SORT_DIRECTION.ASC,
          position: 0
        }
      },
      // column definitions
      columns: [{
        property: 'select',
        header: {
          label: 'Vyberte všechny řádky',
          props: {
            index: 0,
            rowSpan: 1,
            colSpan: 1,
            id: 'vybrat vše'
          },
          customFormatters: [_index.selectionHeaderCellFormatter]
        },
        cell: {
          props: {
            index: 0
          },
          formatters: [function (value, _ref2) {
            var rowData = _ref2.rowData,
                rowIndex = _ref2.rowIndex;
            return (0, _index.selectionCellFormatter)({
              rowData: rowData,
              rowIndex: rowIndex
            }, _this.onSelectRow, "vybrat".concat(rowIndex), "vyberte \u0159\xE1dek ".concat(rowIndex));
          }]
        }
      }, {
        property: 'name',
        header: {
          label: 'Name',
          props: {
            index: 1,
            rowSpan: 1,
            colSpan: 1
          },
          transforms: [sortableTransform],
          formatters: [sortingFormatter],
          customFormatters: [_index.sortableHeaderCellFormatter]
        },
        cell: {
          props: {
            index: 1
          },
          formatters: [_index.tableCellFormatter]
        }
      }, {
        property: 'height',
        header: {
          label: 'Height',
          props: {
            index: 2,
            rowSpan: 1,
            colSpan: 1
          },
          transforms: [sortableTransform],
          formatters: [sortingFormatter],
          customFormatters: [_index.sortableHeaderCellFormatter]
        },
        cell: {
          props: {
            index: 2
          },
          formatters: [_index.tableCellFormatter]
        }
      }, {
        property: 'eye_color',
        header: {
          label: 'Eye Color',
          props: {
            index: 3,
            rowSpan: 1,
            colSpan: 1
          },
          transforms: [sortableTransform],
          formatters: [sortingFormatter],
          customFormatters: [_index.sortableHeaderCellFormatter]
        },
        cell: {
          props: {
            index: 3
          },
          formatters: [_index.tableCellFormatter]
        }
      }, {
        property: 'gender',
        header: {
          label: 'Gender',
          props: {
            index: 4,
            rowSpan: 1,
            colSpan: 1
          },
          transforms: [sortableTransform],
          formatters: [sortingFormatter],
          customFormatters: [_index.sortableHeaderCellFormatter]
        },
        cell: {
          props: {
            index: 4
          },
          formatters: [_index.tableCellFormatter]
        }
      }, {
        property: 'birth_year',
        header: {
          label: 'Birth Year',
          props: {
            index: 5,
            rowSpan: 1,
            colSpan: 1
          },
          transforms: [sortableTransform],
          formatters: [sortingFormatter],
          customFormatters: [_index.sortableHeaderCellFormatter]
        },
        cell: {
          props: {
            index: 5
          },
          formatters: [_index.tableCellFormatter]
        }
      }, {
        property: 'actions',
        header: {
          label: 'Actions',
          props: {
            index: 6,
            rowSpan: 1,
            colSpan: 2
          },
          formatters: [_index.actionHeaderCellFormatter]
        },
        cell: {
          props: {
            index: 6
          },
          formatters: [function (value, _ref3) {
            var rowData = _ref3.rowData;
            return [_react["default"].createElement(_index.Table.Actions, {
              key: "0"
            }, _react["default"].createElement(_index.Table.Button, {
              onClick: function onClick() {
                return alert("clicked ".concat(rowData.name));
              }
            }, "Actions")), _react["default"].createElement(_index.Table.Actions, {
              key: "1"
            }, _react["default"].createElement(_index.Table.DropdownKebab, {
              id: "myKebab",
              pullRight: true
            }, _react["default"].createElement(_MenuItem.MenuItem, null, "Action"), _react["default"].createElement(_MenuItem.MenuItem, null, "Another Action"), _react["default"].createElement(_MenuItem.MenuItem, null, "Something else here"), _react["default"].createElement(_MenuItem.MenuItem, {
              divider: true
            }), _react["default"].createElement(_MenuItem.MenuItem, null, "Separated link")))];
          }]
        }
      }],
      // rows and row selection state
      rows: _mockRows.mockRows,
      selectedRows: [],
      // pagination default states
      pagination: {
        page: 1,
        perPage: 6,
        perPageOptions: [6, 10, 15]
      },
      // page input value
      pageChangeValue: 1
    };
    return _this;
  }

  _createClass(MockClientPaginationTable, [{
    key: "currentRows",
    value: function currentRows() {
      var _this$state3 = this.state,
          rows = _this$state3.rows,
          sortingColumns = _this$state3.sortingColumns,
          columns = _this$state3.columns,
          pagination = _this$state3.pagination;
      return (0, _recompose.compose)((0, _Pagination.paginate)(pagination), sort.sorter({
        columns: columns,
        sortingColumns: sortingColumns,
        sort: _lodash.orderBy,
        strategy: sort.strategies.byProperty
      }))(rows);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state4 = this.state,
          columns = _this$state4.columns,
          pagination = _this$state4.pagination,
          sortingColumns = _this$state4.sortingColumns,
          pageChangeValue = _this$state4.pageChangeValue;
      var sortedPaginatedRows = this.currentRows();
      return _react["default"].createElement(_Grid.Grid, {
        fluid: true
      }, _react["default"].createElement(_index.Table.PfProvider, {
        striped: true,
        bordered: true,
        hover: true,
        dataTable: true,
        columns: columns,
        components: {
          header: {
            cell: function cell(cellProps) {
              return _this2.customHeaderFormatters({
                cellProps: cellProps,
                columns: columns,
                sortingColumns: sortingColumns,
                rows: sortedPaginatedRows.rows,
                onSelectAllRows: _this2.onSelectAllRows
              });
            }
          }
        }
      }, _react["default"].createElement(_index.Table.Header, {
        headerRows: resolve.headerRows({
          columns: columns
        })
      }), _react["default"].createElement(_index.Table.Body, {
        rows: sortedPaginatedRows.rows,
        rowKey: "id",
        onRow: this.onRow
      })), _react["default"].createElement(_Pagination.PaginationRow, {
        viewType: _Pagination.PAGINATION_VIEW.TABLE,
        pagination: pagination,
        pageInputValue: pageChangeValue,
        amountOfPages: sortedPaginatedRows.amountOfPages,
        itemCount: sortedPaginatedRows.itemCount,
        itemsStart: sortedPaginatedRows.itemsStart,
        itemsEnd: sortedPaginatedRows.itemsEnd,
        onPerPageSelect: this.onPerPageSelect,
        onFirstPage: this.onFirstPage,
        onPreviousPage: this.onPreviousPage,
        onPageInput: this.onPageInput,
        onNextPage: this.onNextPage,
        onLastPage: this.onLastPage,
        onSubmit: this.onSubmit
      }));
    }
  }]);

  return MockClientPaginationTable;
}(_react["default"].Component);

exports.MockClientPaginationTable = MockClientPaginationTable;
MockClientPaginationTable.propTypes = {
  onRowsLogger: _propTypes["default"].func.isRequired
};
var mockClientPaginationTableSource = "\nimport React from 'react';\nimport PropTypes from 'prop-types';\nimport { orderBy } from 'lodash';\nimport classNames from 'classnames';\nimport * as sort from 'sortabular';\nimport * as resolve from 'table-resolver';\nimport {\n  actionHeaderCellFormatter,\n  customHeaderFormattersDefinition,\n  defaultSortingOrder,\n  selectionCellFormatter,\n  selectionHeaderCellFormatter,\n  sortableHeaderCellFormatter,\n  tableCellFormatter,\n  Table,\n  TABLE_SORT_DIRECTION\n} from '../index';\nimport { MenuItem } from '../../MenuItem';\nimport { Grid } from '../../Grid';\nimport { PaginationRow, paginate, PAGINATION_VIEW } from '../../Pagination';\nimport { compose } from 'recompose';\nimport { mockRows } from './mockRows';\n\n/**\n * Reactabular client side paging based on the following api docs:\n * https://reactabular.js.org/#/data/pagination\n */\n\nexport class MockClientPaginationTable extends React.Component {\n  static selectRow(row) {\n    return Object.assign({}, row, { selected: true });\n  }\n  static deselectRow(row) {\n    return Object.assign({}, row, { selected: false });\n  }\n\n  constructor(props) {\n    super(props);\n\n    const getSortingColumns = () => this.state.sortingColumns || {};\n\n    const sortableTransform = sort.sort({\n      getSortingColumns,\n      onSort: selectedColumn => {\n        this.setState({\n          sortingColumns: sort.byColumn({\n            sortingColumns: this.state.sortingColumns,\n            sortingOrder: defaultSortingOrder,\n            selectedColumn\n          })\n        });\n      },\n      // Use property or index dependening on the sortingColumns structure specified\n      strategy: sort.strategies.byProperty\n    });\n\n    const sortingFormatter = sort.header({\n      sortableTransform,\n      getSortingColumns,\n      strategy: sort.strategies.byProperty\n    });\n\n    // enables our custom header formatters extensions to reactabular\n    this.customHeaderFormatters = customHeaderFormattersDefinition;\n\n    this.state = {\n      // Sort the first column in an ascending way by default.\n      sortingColumns: {\n        name: {\n          direction: TABLE_SORT_DIRECTION.ASC,\n          position: 0\n        }\n      },\n\n      // column definitions\n      columns: [\n        {\n          property: 'select',\n          header: {\n            label: 'Vyberte v\u0161echny \u0159\xE1dky',\n            props: {\n              index: 0,\n              rowSpan: 1,\n              colSpan: 1,\n              id: 'vybrat v\u0161e'\n            },\n            customFormatters: [selectionHeaderCellFormatter]\n          },\n          cell: {\n            props: {\n              index: 0\n            },\n            formatters: [\n              (value, { rowData, rowIndex }) => {\n                return selectionCellFormatter(\n                  { rowData, rowIndex },\n                  this.onSelectRow,\n                  `vybrat ${rowIndex}`, `vyberte \u0159\xE1dek ${rowIndex}`\n                );\n              }\n            ]\n          }\n        },\n        {\n          property: 'name',\n          header: {\n            label: 'Name',\n            props: {\n              index: 1,\n              rowSpan: 1,\n              colSpan: 1\n            },\n            transforms: [sortableTransform],\n            formatters: [sortingFormatter],\n            customFormatters: [sortableHeaderCellFormatter]\n          },\n          cell: {\n            props: {\n              index: 1\n            },\n            formatters: [tableCellFormatter]\n          }\n        },\n        {\n          property: 'height',\n          header: {\n            label: 'Height',\n            props: {\n              index: 2,\n              rowSpan: 1,\n              colSpan: 1\n            },\n            transforms: [sortableTransform],\n            formatters: [sortingFormatter],\n            customFormatters: [sortableHeaderCellFormatter]\n          },\n          cell: {\n            props: {\n              index: 2\n            },\n            formatters: [tableCellFormatter]\n          }\n        },\n        {\n          property: 'eye_color',\n          header: {\n            label: 'Eye Color',\n            props: {\n              index: 3,\n              rowSpan: 1,\n              colSpan: 1\n            },\n            transforms: [sortableTransform],\n            formatters: [sortingFormatter],\n            customFormatters: [sortableHeaderCellFormatter]\n          },\n          cell: {\n            props: {\n              index: 3\n            },\n            formatters: [tableCellFormatter]\n          }\n        },\n        {\n          property: 'gender',\n          header: {\n            label: 'Gender',\n            props: {\n              index: 4,\n              rowSpan: 1,\n              colSpan: 1\n            },\n            transforms: [sortableTransform],\n            formatters: [sortingFormatter],\n            customFormatters: [sortableHeaderCellFormatter]\n          },\n          cell: {\n            props: {\n              index: 4\n            },\n            formatters: [tableCellFormatter]\n          }\n        },\n        {\n          property: 'birth_year',\n          header: {\n            label: 'Birth Year',\n            props: {\n              index: 5,\n              rowSpan: 1,\n              colSpan: 1\n            },\n            transforms: [sortableTransform],\n            formatters: [sortingFormatter],\n            customFormatters: [sortableHeaderCellFormatter]\n          },\n          cell: {\n            props: {\n              index: 5\n            },\n            formatters: [tableCellFormatter]\n          }\n        },\n        {\n          property: 'actions',\n          header: {\n            label: 'Actions',\n            props: {\n              index: 6,\n              rowSpan: 1,\n              colSpan: 2\n            },\n            formatters: [actionHeaderCellFormatter]\n          },\n          cell: {\n            props: {\n              index: 6\n            },\n            formatters: [\n              (value, { rowData }) => {\n                return [\n                  <Table.Actions key=\"0\">\n                    <Table.Button\n                      onClick={() => alert('clicked ' + rowData.name)}\n                    >\n                      Actions\n                    </Table.Button>\n                  </Table.Actions>,\n                  <Table.Actions key=\"1\">\n                    <Table.DropdownKebab id=\"myKebab\" pullRight>\n                      <MenuItem>Action</MenuItem>\n                      <MenuItem>Another Action</MenuItem>\n                      <MenuItem>Something else here</MenuItem>\n                      <MenuItem divider />\n                      <MenuItem>Separated link</MenuItem>\n                    </Table.DropdownKebab>\n                  </Table.Actions>\n                ];\n              }\n            ]\n          }\n        }\n      ],\n\n      // rows and row selection state\n      rows: mockRows,\n      selectedRows: [],\n\n      // pagination default states\n      pagination: {\n        page: 1,\n        perPage: 6,\n        perPageOptions: [6, 10, 15]\n      },\n\n      // page input value\n      pageChangeValue: 1\n    };\n  }\n  totalPages = () => {\n    const { perPage } = this.state.pagination;\n    return Math.ceil(mockRows.length / perPage);\n  };\n  onPageInput = e => {\n    this.setState({ pageChangeValue: e.target.value });\n  };\n  onSubmit = () => {\n    this.setPage(this.state.pageChangeValue);\n  };\n  setPage = value => {\n    const page = Number(value);\n    if (\n      !Number.isNaN(value) &&\n      value !== '' &&\n      page > 0 &&\n      page <= this.totalPages()\n    ) {\n      let newPaginationState = Object.assign({}, this.state.pagination);\n      newPaginationState.page = page;\n      this.setState({ pagination: newPaginationState, pageChangeValue: page });\n    }\n  }\n  onPerPageSelect = (eventKey, e) => {\n    let newPaginationState = Object.assign({}, this.state.pagination);\n    newPaginationState.perPage = eventKey;\n    newPaginationState.page = 1;\n    this.setState({ pagination: newPaginationState });\n  };\n  onFirstPage = () => {\n    this.setPage(1);\n  };\n  onPreviousPage = () => {\n    if (this.state.pagination.page > 1) {\n      this.setPage(this.state.pagination.page - 1);\n    }\n  };\n  onNextPage () => {\n    const { page } = this.state.pagination;\n    if (page < this.totalPages()) {\n      this.setPage(this.state.pagination.page + 1);\n    }\n  };\n  onLastPage = () => {\n    const { page } = this.state.pagination;\n    const totalPages = this.totalPages();\n    if (page < totalPages) {\n      this.setPage(totalPages);\n    }\n  };\n  onSelectRow = (event, row) => {\n    const { onRowsLogger } = this.props;\n    const { rows, selectedRows } = this.state;\n    const selectedRowIndex = rows.findIndex(r => r.id === row.id);\n    if (selectedRowIndex > -1) {\n      let updatedSelectedRows, updatedRow;\n      if (row.selected) {\n        updatedSelectedRows = selectedRows.filter(r => !(r === row.id));\n        updatedRow = MockClientPaginationTable.deselectRow(row);\n      } else {\n        selectedRows.push(row.id);\n        updatedSelectedRows = selectedRows;\n        updatedRow = MockClientPaginationTable.selectRow(row);\n      }\n      rows[selectedRowIndex] = updatedRow;\n      this.setState({\n        rows: rows,\n        selectedRows: updatedSelectedRows\n      });\n      onRowsLogger(rows.filter(r => r.selected));\n    }\n  };\n  onSelectAllRows = event => {\n    const { onRowsLogger } = this.props;\n    const { rows, selectedRows } = this.state;\n    const checked = event.target.checked;\n    const currentRows = this.currentRows().rows;\n\n    if (checked) {\n      const updatedSelections = [\n        ...new Set([...currentRows.map(r => r.id), ...selectedRows])\n      ];\n      const updatedRows = rows.map(r => {\n        return updatedSelections.indexOf(r.id) > -1 ? MockClientPaginationTable.selectRow(r) : r;\n      });\n      this.setState({\n        // important: you must update rows to force a re-render and trigger onRow hook\n        rows: updatedRows,\n        selectedRows: updatedSelections\n      });\n      onRowsLogger(updatedRows.filter(r => r.selected));\n    } else {\n      const ids = currentRows.map(r => r.id);\n      const updatedSelections = selectedRows.filter(r => {\n        return !(ids.indexOf(r) > -1);\n      });\n      const updatedRows = rows.map(r => {\n        return updatedSelections.indexOf(r.id) > -1 ? r : MockClientPaginationTable.deselectRow(r);\n      });\n      this.setState({\n        rows: updatedRows,\n        selectedRows: updatedSelections\n      });\n      onRowsLogger(updatedRows.filter(r => r.selected));\n    }\n  };\n  currentRows() {\n    const { rows, sortingColumns, columns, pagination } = this.state;\n    return compose(\n      paginate(pagination),\n      sort.sorter({\n        columns: columns,\n        sortingColumns,\n        sort: orderBy,\n        strategy: sort.strategies.byProperty\n      })\n    )(rows);\n  }\n  onRow(row, { rowIndex }) {\n    const { selectedRows } = this.state;\n    const selected = selectedRows.indexOf(row.id) > -1;\n    return {\n      className: classNames({ selected: selected }),\n      role: 'row'\n    };\n  }\n  render() {\n    const { columns, pagination, sortingColumns, pageChangeValue } = this.state;\n    const sortedPaginatedRows = this.currentRows();\n\n    return (\n      <Grid fluid>\n        <Table.PfProvider\n          striped\n          bordered\n          hover\n          dataTable\n          columns={columns}\n          components={{\n            header: {\n              cell: cellProps => {\n                return this.customHeaderFormatters({\n                  cellProps,\n                  columns,\n                  sortingColumns,\n                  rows: sortedPaginatedRows.rows,\n                  onSelectAllRows: this.onSelectAllRows\n                });\n              }\n            }\n          }}\n        >\n          <Table.Header headerRows={resolve.headerRows({ columns })} />\n          <Table.Body\n            rows={sortedPaginatedRows.rows}\n            rowKey=\"id\"\n            onRow={this.onRow}\n          />\n        </Table.PfProvider>\n        <PaginationRow\n          viewType={PAGINATION_VIEW.TABLE}\n          pagination={pagination}\n          pageInputValue={pageChangeValue}\n          amountOfPages={sortedPaginatedRows.amountOfPages}\n          itemCount={sortedPaginatedRows.itemCount}\n          itemsStart={sortedPaginatedRows.itemsStart}\n          itemsEnd={sortedPaginatedRows.itemsEnd}\n          onPerPageSelect={this.onPerPageSelect}\n          onFirstPage={this.onFirstPage}\n          onPreviousPage={this.onPreviousPage}\n          onPageInput={this.onPageInput}\n          onNextPage={this.onNextPage}\n          onLastPage={this.onLastPage}\n          onSubmit={this.onSubmit}\n        />\n      </Grid>\n    );\n  }\n}\nMockClientPaginationTable.propTypes = {\n  onRowsLogger: PropTypes.func.isRequired\n};\n";
exports.mockClientPaginationTableSource = mockClientPaginationTableSource;