"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockClientSortableTableSource = exports.MockClientSortableTable = void 0;

var _react = _interopRequireDefault(require("react"));

var _lodash = require("lodash");

var sort = _interopRequireWildcard(require("sortabular"));

var resolve = _interopRequireWildcard(require("table-resolver"));

var _recompose = require("recompose");

var _index = require("../index");

var _MenuItem = require("../../MenuItem");

var _mockRows = require("./mockRows");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Reactabular client side data sorting based on the following api docs:
 * https://reactabular.js.org/#/data/sorting
 */
var MockClientSortableTable = /*#__PURE__*/function (_React$Component) {
  _inherits(MockClientSortableTable, _React$Component);

  function MockClientSortableTable(props) {
    var _this;

    _classCallCheck(this, MockClientSortableTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MockClientSortableTable).call(this, props)); // Point the transform to your sortingColumns. React state can work for this purpose
    // but you can use a state manager as well.

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
      columns: [{
        property: 'name',
        header: {
          label: 'Name',
          props: {
            index: 0,
            rowSpan: 1,
            colSpan: 1,
            sort: true
          },
          transforms: [sortableTransform],
          formatters: [sortingFormatter],
          customFormatters: [_index.sortableHeaderCellFormatter]
        },
        cell: {
          props: {
            index: 0
          },
          formatters: [_index.tableCellFormatter]
        }
      }, {
        property: 'height',
        header: {
          label: 'Height',
          props: {
            index: 1,
            rowSpan: 1,
            colSpan: 1,
            sort: true
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
        property: 'eye_color',
        header: {
          label: 'Eye Color',
          props: {
            index: 2,
            rowSpan: 1,
            colSpan: 1,
            sort: true
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
        property: 'gender',
        header: {
          label: 'Gender',
          props: {
            index: 3,
            rowSpan: 1,
            colSpan: 1,
            sort: true
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
        property: 'birth_year',
        header: {
          label: 'Birth Year',
          props: {
            index: 4,
            rowSpan: 1,
            colSpan: 1,
            sort: true
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
        property: 'actions',
        header: {
          label: 'Actions',
          props: {
            index: 5,
            rowSpan: 1,
            colSpan: 2
          },
          formatters: [_index.actionHeaderCellFormatter]
        },
        cell: {
          props: {
            index: 5
          },
          formatters: [function (value, _ref) {
            var rowData = _ref.rowData;
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
      rows: _mockRows.mockRows.slice(0, 6)
    };
    return _this;
  }

  _createClass(MockClientSortableTable, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          rows = _this$state.rows,
          sortingColumns = _this$state.sortingColumns,
          columns = _this$state.columns;
      var sortedRows = (0, _recompose.compose)(sort.sorter({
        columns: columns,
        sortingColumns: sortingColumns,
        sort: _lodash.orderBy,
        strategy: sort.strategies.byProperty
      }))(rows);
      return _react["default"].createElement("div", null, _react["default"].createElement(_index.Table.PfProvider, {
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
                sortingColumns: sortingColumns
              });
            }
          }
        }
      }, _react["default"].createElement(_index.Table.Header, {
        headerRows: resolve.headerRows({
          columns: columns
        })
      }), _react["default"].createElement(_index.Table.Body, {
        rows: sortedRows,
        rowKey: "id",
        onRow: function onRow() {
          return {
            role: 'row'
          };
        }
      })));
    }
  }]);

  return MockClientSortableTable;
}(_react["default"].Component);

exports.MockClientSortableTable = MockClientSortableTable;
var mockClientSortableTableSource = "\nimport React from 'react';\nimport { orderBy } from 'lodash';\nimport * as sort from 'sortabular';\nimport * as resolve from 'table-resolver';\nimport {\n  actionHeaderCellFormatter,\n  customHeaderFormattersDefinition,\n  defaultSortingOrder,\n  sortableHeaderCellFormatter,\n  tableCellFormatter,\n  Table,\n  TABLE_SORT_DIRECTION\n} from '../index';\nimport { MenuItem } from '../../MenuItem';\nimport { compose } from 'recompose';\nimport { mockRows } from './mockRows';\n\n/**\n * Reactabular client side data sorting based on the following api docs:\n * https://reactabular.js.org/#/data/sorting\n */\n\nexport class MockClientSortableTable extends React.Component {\n  constructor(props) {\n    super(props);\n\n    // Point the transform to your sortingColumns. React state can work for this purpose\n    // but you can use a state manager as well.\n    const getSortingColumns = () => this.state.sortingColumns || {};\n\n    const sortableTransform = sort.sort({\n      getSortingColumns,\n      onSort: selectedColumn => {\n        this.setState({\n          sortingColumns: sort.byColumn({\n            sortingColumns: this.state.sortingColumns,\n            sortingOrder: defaultSortingOrder,\n            selectedColumn\n          })\n        });\n      },\n      // Use property or index dependening on the sortingColumns structure specified\n      strategy: sort.strategies.byProperty\n    });\n\n    const sortingFormatter = sort.header({\n      sortableTransform,\n      getSortingColumns,\n      strategy: sort.strategies.byProperty\n    });\n\n    // enables our custom header formatters extensions to reactabular\n    this.customHeaderFormatters = customHeaderFormattersDefinition;\n\n    this.state = {\n      // Sort the first column in an ascending way by default.\n      sortingColumns: {\n        name: {\n          direction: TABLE_SORT_DIRECTION.ASC,\n          position: 0\n        }\n      },\n      columns: [\n        {\n          property: 'name',\n          header: {\n            label: 'Name',\n            props: {\n              index: 0,\n              rowSpan: 1,\n              colSpan: 1,\n              sort: true\n            },\n            transforms: [sortableTransform],\n            formatters: [sortingFormatter],\n            customFormatters: [sortableHeaderCellFormatter]\n          },\n          cell: {\n            props: {\n              index: 0\n            },\n            formatters: [tableCellFormatter]\n          }\n        },\n        {\n          property: 'height',\n          header: {\n            label: 'Height',\n            props: {\n              index: 1,\n              rowSpan: 1,\n              colSpan: 1,\n              sort: true\n            },\n            transforms: [sortableTransform],\n            formatters: [sortingFormatter],\n            customFormatters: [sortableHeaderCellFormatter]\n          },\n          cell: {\n            props: {\n              index: 1\n            },\n            formatters: [tableCellFormatter]\n          }\n        },\n        {\n          property: 'eye_color',\n          header: {\n            label: 'Eye Color',\n            props: {\n              index: 2,\n              rowSpan: 1,\n              colSpan: 1,\n              sort: true\n            },\n            transforms: [sortableTransform],\n            formatters: [sortingFormatter],\n            customFormatters: [sortableHeaderCellFormatter]\n          },\n          cell: {\n            props: {\n              index: 2\n            },\n            formatters: [tableCellFormatter]\n          }\n        },\n        {\n          property: 'gender',\n          header: {\n            label: 'Gender',\n            props: {\n              index: 3,\n              rowSpan: 1,\n              colSpan: 1,\n              sort: true\n            },\n            transforms: [sortableTransform],\n            formatters: [sortingFormatter],\n            customFormatters: [sortableHeaderCellFormatter]\n          },\n          cell: {\n            props: {\n              index: 3\n            },\n            formatters: [tableCellFormatter]\n          }\n        },\n        {\n          property: 'birth_year',\n          header: {\n            label: 'Birth Year',\n            props: {\n              index: 4,\n              rowSpan: 1,\n              colSpan: 1,\n              sort: true\n            },\n            transforms: [sortableTransform],\n            formatters: [sortingFormatter],\n            customFormatters: [sortableHeaderCellFormatter]\n          },\n          cell: {\n            props: {\n              index: 4\n            },\n            formatters: [tableCellFormatter]\n          }\n        },\n        {\n          property: 'actions',\n          header: {\n            label: 'Actions',\n            props: {\n              index: 5,\n              rowSpan: 1,\n              colSpan: 2\n            },\n            formatters: [actionHeaderCellFormatter]\n          },\n          cell: {\n            props: {\n              index: 5\n            },\n            formatters: [\n              (value, { rowData }) => {\n                return [\n                  <Table.Actions key=\"0\">\n                    <Table.Button\n                      onClick={() => alert('clicked ' + rowData.name)}\n                    >\n                      Actions\n                    </Table.Button>\n                  </Table.Actions>,\n                  <Table.Actions key=\"1\">\n                    <Table.DropdownKebab id=\"myKebab\" pullRight>\n                      <MenuItem>Action</MenuItem>\n                      <MenuItem>Another Action</MenuItem>\n                      <MenuItem>Something else here</MenuItem>\n                      <MenuItem divider />\n                      <MenuItem>Separated link</MenuItem>\n                    </Table.DropdownKebab>\n                  </Table.Actions>\n                ];\n              }\n            ]\n          }\n        }\n      ],\n      rows: mockRows.slice(0, 6)\n    };\n  }\n  render() {\n    const { rows, sortingColumns, columns } = this.state;\n\n    const sortedRows = compose(\n      sort.sorter({\n        columns: columns,\n        sortingColumns,\n        sort: orderBy,\n        strategy: sort.strategies.byProperty\n      })\n    )(rows);\n\n    return (\n      <div>\n        <Table.PfProvider\n          striped\n          bordered\n          hover\n          dataTable\n          columns={columns}\n          components={{\n            header: {\n              cell: cellProps => {\n                return this.customHeaderFormatters({\n                  cellProps,\n                  columns,\n                  sortingColumns\n                });\n              }\n            }\n          }}\n        >\n          <Table.Header headerRows={resolve.headerRows({ columns })} />\n          <Table.Body\n            rows={sortedRows}\n            rowKey=\"id\"\n            onRow={() => {\n              return {\n                role: 'row'\n              };\n            }}\n          />\n        </Table.PfProvider>\n      </div>\n    );\n  }\n}";
exports.mockClientSortableTableSource = mockClientSortableTableSource;