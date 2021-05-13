"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockServerPaginationTableSource = exports.MockServerPaginationTable = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var resolve = _interopRequireWildcard(require("table-resolver"));

var _index = require("../index");

var _MenuItem = require("../../MenuItem");

var _Grid = require("../../Grid");

var _Pagination = require("../../Pagination");

var _mockServerApi = _interopRequireDefault(require("./mockServerApi"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MockServerPaginationTable = /*#__PURE__*/function (_React$Component) {
  _inherits(MockServerPaginationTable, _React$Component);

  _createClass(MockServerPaginationTable, null, [{
    key: "onRow",
    value: function onRow(row, _ref) {
      var rowIndex = _ref.rowIndex;
      return {
        className: (0, _classnames["default"])({
          selected: row.selected
        }),
        role: 'row'
      };
    }
  }]);

  function MockServerPaginationTable(props) {
    var _this;

    _classCallCheck(this, MockServerPaginationTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MockServerPaginationTable).call(this, props)); // enables our custom header formatters extensions to reactabular

    _defineProperty(_assertThisInitialized(_this), "onPageSet", function (page) {
      var newPaginationState = Object.assign({}, _this.state.pagination);
      newPaginationState.page = page;

      _this.getPage(_this.state.sortingColumns, newPaginationState);
    });

    _defineProperty(_assertThisInitialized(_this), "onPerPageSelect", function (eventKey, e) {
      var newPaginationState = Object.assign({}, _this.state.pagination);
      newPaginationState.perPage = eventKey;
      newPaginationState.page = 1;

      _this.getPage(_this.state.sortingColumns, newPaginationState);
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectAllRows", function (event) {
      var _this$state = _this.state,
          sortingColumns = _this$state.sortingColumns,
          pagination = _this$state.pagination,
          rows = _this$state.rows;
      var checked = event.target.checked;

      _mockServerApi["default"].selectAllRows({
        rows: rows,
        checked: checked
      }).then(function (response) {
        // refresh rows after all rows selected
        _this.getPage(sortingColumns, pagination);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectRow", function (event, row) {
      var _this$state2 = _this.state,
          sortingColumns = _this$state2.sortingColumns,
          pagination = _this$state2.pagination;

      _mockServerApi["default"].selectRow({
        row: row
      }).then(function (response) {
        // refresh rows after row is selected
        _this.getPage(sortingColumns, pagination);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSort", function (e, column, sortDirection) {
      // Clearing existing sortingColumns does simple single column sort. To do multisort,
      // set each column based on existing sorts specified and set sort position.
      var updatedSortingColumns = _defineProperty({}, column.property, {
        direction: sortDirection === _index.TABLE_SORT_DIRECTION.ASC ? _index.TABLE_SORT_DIRECTION.DESC : _index.TABLE_SORT_DIRECTION.ASC,
        position: 0
      });

      alert("Server API called with: sort by ".concat(column.property, " ").concat(updatedSortingColumns[column.property].direction));

      _this.getPage(updatedSortingColumns, _this.state.pagination);
    });

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
          label: 'Select all rows',
          props: {
            index: 0,
            rowSpan: 1,
            colSpan: 1
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
            }, _this.onSelectRow);
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
      rows: [],
      // pagination default states
      pagination: {
        page: 1,
        perPage: 6,
        perPageOptions: [6, 10, 15]
      },
      // server side pagination values
      itemCount: 0
    };
    return _this;
  }

  _createClass(MockServerPaginationTable, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      var _this$state3 = this.state,
          sortingColumns = _this$state3.sortingColumns,
          pagination = _this$state3.pagination;
      this.getPage(sortingColumns, pagination);
    }
  }, {
    key: "getPage",
    value: function getPage(sortingColumns, pagination) {
      var _this2 = this;

      var onServerPageLogger = this.props.onServerPageLogger; // call our mock server with next sorting/paging arguments

      var getPageArgs = {
        sortingColumns: sortingColumns,
        page: pagination.page,
        perPage: pagination.perPage
      };
      onServerPageLogger(getPageArgs);

      _mockServerApi["default"].getPage(getPageArgs).then(function (response) {
        _this2.setState({
          sortingColumns: sortingColumns,
          pagination: pagination,
          rows: response.rows,
          itemCount: response.itemCount
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state4 = this.state,
          columns = _this$state4.columns,
          pagination = _this$state4.pagination,
          sortingColumns = _this$state4.sortingColumns,
          rows = _this$state4.rows,
          itemCount = _this$state4.itemCount;
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
              return _this3.customHeaderFormatters({
                cellProps: cellProps,
                columns: columns,
                sortingColumns: sortingColumns,
                rows: rows,
                onSelectAllRows: _this3.onSelectAllRows,
                onSort: _this3.onSort
              });
            }
          }
        }
      }, _react["default"].createElement(_index.Table.Header, {
        headerRows: resolve.headerRows({
          columns: columns
        })
      }), _react["default"].createElement(_index.Table.Body, {
        rows: rows,
        rowKey: "id",
        onRow: MockServerPaginationTable.onRow
      })), _react["default"].createElement(_Pagination.Paginator, {
        viewType: _Pagination.PAGINATION_VIEW.TABLE,
        pagination: pagination,
        itemCount: itemCount,
        onPageSet: this.onPageSet,
        onPerPageSelect: this.onPerPageSelect
      }));
    }
  }]);

  return MockServerPaginationTable;
}(_react["default"].Component);

exports.MockServerPaginationTable = MockServerPaginationTable;
MockServerPaginationTable.propTypes = {
  onServerPageLogger: _propTypes["default"].func.isRequired
};
var mockServerPaginationTableSource = "\nimport React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames';\nimport * as resolve from 'table-resolver';\nimport {\n  actionHeaderCellFormatter,\n  customHeaderFormattersDefinition,\n  selectionCellFormatter,\n  selectionHeaderCellFormatter,\n  sortableHeaderCellFormatter,\n  tableCellFormatter,\n  Table,\n  TABLE_SORT_DIRECTION\n} from '../index';\nimport { MenuItem } from '../../MenuItem';\nimport { Grid } from '../../Grid';\nimport { Paginator, PAGINATION_VIEW } from '../../Pagination';\nimport MockServerApi from './mockServerApi';\n\nexport class MockServerPaginationTable extends React.Component {\n  static onRow(row, { rowIndex }) {\n    return {\n      className: classNames({ selected: row.selected }),\n      role: 'row'\n    };\n  }\n\n  constructor(props) {\n    super(props);\n\n    // enables our custom header formatters extensions to reactabular\n    this.customHeaderFormatters = customHeaderFormattersDefinition;\n\n    this.state = {\n      // Sort the first column in an ascending way by default.\n      sortingColumns: {\n        name: {\n          direction: TABLE_SORT_DIRECTION.ASC,\n          position: 0\n        }\n      },\n\n      // column definitions\n      columns: [\n        {\n          property: 'select',\n          header: {\n            label: 'Select all rows',\n            props: {\n              index: 0,\n              rowSpan: 1,\n              colSpan: 1\n            },\n            customFormatters: [selectionHeaderCellFormatter]\n          },\n          cell: {\n            props: {\n              index: 0\n            },\n            formatters: [\n              (value, { rowData, rowIndex }) => {\n                return selectionCellFormatter(\n                  { rowData, rowIndex },\n                  this.onSelectRow\n                );\n              }\n            ]\n          }\n        },\n        {\n          property: 'name',\n          header: {\n            label: 'Name',\n            props: {\n              index: 1,\n              rowSpan: 1,\n              colSpan: 1\n            },\n            customFormatters: [sortableHeaderCellFormatter]\n          },\n          cell: {\n            props: {\n              index: 1\n            },\n            formatters: [tableCellFormatter]\n          }\n        },\n        {\n          property: 'height',\n          header: {\n            label: 'Height',\n            props: {\n              index: 2,\n              rowSpan: 1,\n              colSpan: 1\n            },\n            customFormatters: [sortableHeaderCellFormatter]\n          },\n          cell: {\n            props: {\n              index: 2\n            },\n            formatters: [tableCellFormatter]\n          }\n        },\n        {\n          property: 'eye_color',\n          header: {\n            label: 'Eye Color',\n            props: {\n              index: 3,\n              rowSpan: 1,\n              colSpan: 1\n            },\n            customFormatters: [sortableHeaderCellFormatter]\n          },\n          cell: {\n            props: {\n              index: 3\n            },\n            formatters: [tableCellFormatter]\n          }\n        },\n        {\n          property: 'gender',\n          header: {\n            label: 'Gender',\n            props: {\n              index: 4,\n              rowSpan: 1,\n              colSpan: 1\n            },\n            customFormatters: [sortableHeaderCellFormatter]\n          },\n          cell: {\n            props: {\n              index: 4\n            },\n            formatters: [tableCellFormatter]\n          }\n        },\n        {\n          property: 'birth_year',\n          header: {\n            label: 'Birth Year',\n            props: {\n              index: 5,\n              rowSpan: 1,\n              colSpan: 1\n            },\n            customFormatters: [sortableHeaderCellFormatter]\n          },\n          cell: {\n            props: {\n              index: 5\n            },\n            formatters: [tableCellFormatter]\n          }\n        },\n        {\n          property: 'actions',\n          header: {\n            label: 'Actions',\n            props: {\n              index: 6,\n              rowSpan: 1,\n              colSpan: 2\n            },\n            formatters: [actionHeaderCellFormatter]\n          },\n          cell: {\n            props: {\n              index: 6\n            },\n            formatters: [\n              (value, { rowData }) => {\n                return [\n                  <Table.Actions key=\"0\">\n                    <Table.Button\n                      onClick={() => alert('clicked ' + rowData.name)}\n                    >\n                      Actions\n                    </Table.Button>\n                  </Table.Actions>,\n                  <Table.Actions key=\"1\">\n                    <Table.DropdownKebab id=\"myKebab\" pullRight>\n                      <MenuItem>Action</MenuItem>\n                      <MenuItem>Another Action</MenuItem>\n                      <MenuItem>Something else here</MenuItem>\n                      <MenuItem divider />\n                      <MenuItem>Separated link</MenuItem>\n                    </Table.DropdownKebab>\n                  </Table.Actions>\n                ];\n              }\n            ]\n          }\n        }\n      ],\n\n      // rows and row selection state\n      rows: [],\n\n      // pagination default states\n      pagination: {\n        page: 1,\n        perPage: 6,\n        perPageOptions: [6, 10, 15]\n      },\n\n      // server side pagination values\n      itemCount: 0\n    };\n  }\n\n  componentWillMount() {\n    const { sortingColumns, pagination } = this.state;\n    this.getPage(sortingColumns, pagination);\n  }\n\n  getPage(sortingColumns, pagination) {\n    const { onServerPageLogger } = this.props;\n\n    // call our mock server with next sorting/paging arguments\n    const getPageArgs = {\n      sortingColumns,\n      page: pagination.page,\n      perPage: pagination.perPage\n    };\n\n    onServerPageLogger(getPageArgs);\n\n    MockServerApi.getPage(getPageArgs).then(response => {\n      this.setState({\n        sortingColumns: sortingColumns,\n        pagination: pagination,\n        rows: response.rows,\n        itemCount: response.itemCount\n      });\n    });\n  }\n\n  onSort = (e, column, sortDirection) => {\n    // Clearing existing sortingColumns does simple single column sort. To do multisort,\n    // set each column based on existing sorts specified and set sort position.\n    const updatedSortingColumns = {\n      [column.property]: {\n        direction:\n          sortDirection === TABLE_SORT_DIRECTION.ASC\n            ? TABLE_SORT_DIRECTION.DESC\n            : TABLE_SORT_DIRECTION.ASC,\n        position: 0\n      }\n    };\n\n    alert(\n      'Server API called with: sort by ' +\n        column.property +\n        ' ' +\n        updatedSortingColumns[column.property].direction\n    );\n\n    this.getPage(updatedSortingColumns, this.state.pagination);\n  };\n\n  onSelectRow = (event, row) => {\n    const { sortingColumns, pagination } = this.state;\n    MockServerApi.selectRow({ row }).then(response => {\n      // refresh rows after row is selected\n      this.getPage(sortingColumns, pagination);\n    });\n  };\n  onSelectAllRows = event => {\n    const { sortingColumns, pagination, rows } = this.state;\n    const checked = event.target.checked;\n    MockServerApi.selectAllRows({ rows, checked }).then(response => {\n      // refresh rows after all rows selected\n      this.getPage(sortingColumns, pagination);\n    });\n  };\n\n  onPerPageSelect = (eventKey, e) => {\n    let newPaginationState = Object.assign({}, this.state.pagination);\n    newPaginationState.perPage = eventKey;\n    newPaginationState.page = 1;\n    this.getPage(this.state.sortingColumns, newPaginationState);\n  };\n  onPageSet = page => {\n    let newPaginationState = Object.assign({}, this.state.pagination);\n    newPaginationState.page = page;\n    this.getPage(this.state.sortingColumns, newPaginationState);\n  };\n\n  render() {\n    const { columns, pagination, sortingColumns, rows, itemCount } = this.state;\n\n    return (\n      <Grid fluid>\n        <Table.PfProvider\n          striped\n          bordered\n          hover\n          dataTable\n          columns={columns}\n          components={{\n            header: {\n              cell: cellProps => {\n                return this.customHeaderFormatters({\n                  cellProps,\n                  columns,\n                  sortingColumns,\n                  rows: rows,\n                  onSelectAllRows: this.onSelectAllRows,\n                  onSort: this.onSort\n                });\n              }\n            }\n          }}\n        >\n          <Table.Header headerRows={resolve.headerRows({ columns })} />\n          <Table.Body rows={rows} rowKey=\"id\" onRow={MockServerPaginationTable.onRow} />\n        </Table.PfProvider>\n        <Paginator\n          viewType={PAGINATION_VIEW.TABLE}\n          pagination={pagination}\n          itemCount={itemCount}\n          onPageSet={this.onPageSet}\n          onPerPageSelect={this.onPerPageSelect}\n        />\n      </Grid>\n    );\n  }\n}\nMockServerPaginationTable.propTypes = {\n  onServerPageLogger: PropTypes.func.isRequired\n};\n";
exports.mockServerPaginationTableSource = mockServerPaginationTableSource;