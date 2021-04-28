"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockInlineEditColumnTableSource = exports.MockInlineEditColumnTable = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var sort = _interopRequireWildcard(require("sortabular"));

var resolve = _interopRequireWildcard(require("table-resolver"));

var _lodash = require("lodash");

var _recompose = require("recompose");

var _index = require("../index");

var _mockRows = require("./mockRows");

var _index2 = require("../../../index");

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
var MockInlineEditColumnTable = /*#__PURE__*/function (_React$Component) {
  _inherits(MockInlineEditColumnTable, _React$Component);

  function MockInlineEditColumnTable(props) {
    var _this;

    _classCallCheck(this, MockInlineEditColumnTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MockInlineEditColumnTable).call(this, props)); // Point the transform to your sortingColumns. React state can work for this purpose
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
    var inlineEditController = {
      isEditing: function isEditing(_ref) {
        var columnIndex = _ref.columnIndex;

        if (_this.props.fullTableEdit) {
          return _this.state.editingColumn !== undefined;
        }

        return columnIndex === _this.state.editingColumn;
      },
      onActivate: function onActivate(additionalData) {
        var columnIndex = additionalData.columnIndex;
        var editedRows = (0, _lodash.cloneDeep)(_this.state.rows);

        _this.setState({
          editingColumn: columnIndex,
          editedRows: editedRows
        });
      },
      onConfirm: function onConfirm() {
        var rows = (0, _lodash.cloneDeep)(_this.state.editedRows);

        _this.setState({
          editingColumn: undefined,
          editedRows: undefined,
          rows: rows
        });
      },
      onCancel: function onCancel() {
        _this.setState({
          editingColumn: undefined,
          editedRows: undefined
        });
      },
      onChange: function onChange(value, _ref2) {
        var rowData = _ref2.rowData,
            property = _ref2.property;
        var editedRows = (0, _lodash.cloneDeep)(_this.state.editedRows);
        var index = (0, _lodash.findIndex)(editedRows, {
          id: rowData.id
        });
        editedRows[index][property] = value;

        _this.setState({
          editedRows: editedRows
        });
      }
    };
    _this.inlineEditController = inlineEditController;
    var inlineEditFormatter = (0, _index.inlineEditFormatterFactory)({
      isEditing: function isEditing(additionalData) {
        return inlineEditController.isEditing(additionalData);
      },
      // renderValue: (value, additionalData) => <span>{value}</span>,
      renderValue: function renderValue(value, additionalData) {
        return _react["default"].createElement("td", {
          className: "editable"
        }, _react["default"].createElement("div", {
          onClick: function onClick(e) {
            return inlineEditController.onActivate(additionalData);
          },
          className: "input"
        }, value));
      },
      renderEdit: function renderEdit(value, additionalData) {
        var property = additionalData.property,
            rowData = additionalData.rowData;
        var index = (0, _lodash.findIndex)(_this.state.editedRows, {
          id: rowData.id
        });
        var defaultValue = _this.state.editedRows[index][property];
        return _react["default"].createElement("td", {
          className: "editable editing"
        }, _react["default"].createElement(_index2.FormControl, {
          type: "text",
          defaultValue: defaultValue,
          onBlur: function onBlur(e) {
            return inlineEditController.onChange(e.target.value, additionalData);
          }
        }));
      }
    });
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
            sort: true,
            style: {
              width: '20%'
            }
          },
          transforms: [sortableTransform],
          formatters: [sortingFormatter],
          customFormatters: [_index.sortableHeaderCellFormatter]
        },
        cell: {
          formatters: [inlineEditFormatter]
        }
      }, {
        property: 'height',
        header: {
          label: 'Height',
          props: {
            index: 1,
            sort: true,
            style: {
              width: '20%'
            }
          },
          transforms: [sortableTransform],
          formatters: [sortingFormatter],
          customFormatters: [_index.sortableHeaderCellFormatter]
        },
        cell: {
          props: {
            index: 1
          },
          formatters: [inlineEditFormatter]
        }
      }, {
        property: 'eye_color',
        header: {
          label: 'Eye Color',
          props: {
            index: 2,
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
            sort: true,
            style: {
              width: '15%'
            }
          },
          transforms: [sortableTransform],
          formatters: [sortingFormatter],
          customFormatters: [_index.sortableHeaderCellFormatter]
        },
        cell: {
          props: {
            index: 4
          },
          formatters: [inlineEditFormatter]
        }
      }],
      rows: _mockRows.mockRows.slice(0, 6)
    };
    return _this;
  }

  _createClass(MockInlineEditColumnTable, [{
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
        inlineEdit: true,
        columns: columns,
        components: {
          header: {
            cell: function cell(cellProps) {
              return _this2.customHeaderFormatters({
                cellProps: cellProps,
                columns: columns,
                sortingColumns: sortingColumns
              });
            },
            row: _index.Table.TableInlineEditHeaderRow
          }
        }
      }, _react["default"].createElement(_index.Table.Header, {
        headerRows: resolve.headerRows({
          columns: columns
        }),
        onRow: function onRow() {
          return {
            role: 'row',
            isEditing: function isEditing() {
              return _this2.state.editingColumn !== undefined;
            },
            onCancel: function onCancel() {
              return _this2.inlineEditController.onCancel();
            },
            onConfirm: function onConfirm() {
              return _this2.inlineEditController.onConfirm();
            }
          };
        }
      }), _react["default"].createElement(_index.Table.Body, {
        rows: sortedRows,
        rowKey: "id"
      })));
    }
  }]);

  return MockInlineEditColumnTable;
}(_react["default"].Component);

exports.MockInlineEditColumnTable = MockInlineEditColumnTable;
MockInlineEditColumnTable.propTypes = {
  fullTableEdit: _propTypes["default"].bool.isRequired
};
var mockInlineEditColumnTableSource = "\nimport React from 'react';\nimport * as sort from 'sortabular';\nimport * as resolve from 'table-resolver';\nimport { cloneDeep, findIndex, orderBy } from 'lodash';\nimport { compose } from 'recompose';\nimport {\n  customHeaderFormattersDefinition,\n  defaultSortingOrder,\n  sortableHeaderCellFormatter,\n  tableCellFormatter,\n  inlineEditFormatterFactory,\n  Table,\n  TABLE_SORT_DIRECTION\n} from '../index';\n\nimport { mockRows } from './mockRows';\nimport { FormControl } from '../../../index';\n\n/**\n * Reactabular client side data sorting based on the following api docs:\n * https://reactabular.js.org/#/data/sorting\n */\nexport class MockInlineEditColumnTable extends React.Component {\n  constructor(props) {\n    super(props);\n\n    // Point the transform to your sortingColumns. React state can work for this purpose\n    // but you can use a state manager as well.\n    const getSortingColumns = () => this.state.sortingColumns || {};\n\n    const sortableTransform = sort.sort({\n      getSortingColumns,\n      onSort: selectedColumn => {\n        this.setState({\n          sortingColumns: sort.byColumn({\n            sortingColumns: this.state.sortingColumns,\n            sortingOrder: defaultSortingOrder,\n            selectedColumn\n          })\n        });\n      },\n      // Use property or index dependening on the sortingColumns structure specified\n      strategy: sort.strategies.byProperty\n    });\n\n    const sortingFormatter = sort.header({\n      sortableTransform,\n      getSortingColumns,\n      strategy: sort.strategies.byProperty\n    });\n\n    // enables our custom header formatters extensions to reactabular\n    this.customHeaderFormatters = customHeaderFormattersDefinition;\n\n    const inlineEditController = {\n      isEditing: ({ columnIndex }) => columnIndex === this.state.editingColumn,\n      onActivate: additionalData => {\n        const { columnIndex } = additionalData;\n        const backup = cloneDeep(this.state.rows);\n\n        this.setState({ editingColumn: columnIndex, backup });\n      },\n      onConfirm: () => {\n        this.setState({\n          editingColumn: undefined,\n          backup: undefined\n        });\n      },\n      onCancel: () => {\n        const rows = cloneDeep(this.state.backup);\n        this.setState({\n          editingColumn: undefined,\n          backup: undefined,\n          rows\n        });\n      },\n      onChange: (value, { rowData, property }) => {\n        const rows = cloneDeep(this.state.rows);\n        const index = findIndex(rows, { id: rowData.id });\n\n        rows[index][property] = value;\n\n        this.setState({ rows });\n      }\n    };\n    this.inlineEditController = inlineEditController;\n\n    const inlineEditFormatter = inlineEditFormatterFactory({\n      isEditing: additionalData =>\n        inlineEditController.isEditing(additionalData),\n      // renderValue: (value, additionalData) => <span>{value}</span>,\n      renderValue: (value, additionalData) => (\n        <td className=\"editable\">\n          <div\n            onClick={e => inlineEditController.onActivate(additionalData)}\n            className=\"input\"\n          >\n            {value}\n          </div>\n        </td>\n      ),\n      renderEdit: (value, additionalData) => (\n        <td className=\"editable editing\">\n          <FormControl\n            type=\"text\"\n            defaultValue={value}\n            onBlur={e =>\n              inlineEditController.onChange(e.target.value, additionalData)\n            }\n          />\n        </td>\n      )\n    });\n\n    this.state = {\n      // Sort the first column in an ascending way by default.\n      sortingColumns: {\n        name: {\n          direction: TABLE_SORT_DIRECTION.ASC,\n          position: 0\n        }\n      },\n      columns: [\n        {\n          property: 'name',\n          header: {\n            label: 'Name',\n            props: {\n              index: 0,\n              sort: true,\n              style: {\n                width: '20%'\n              }\n            },\n            transforms: [sortableTransform],\n            formatters: [sortingFormatter],\n            customFormatters: [sortableHeaderCellFormatter]\n          },\n          cell: {\n            formatters: [inlineEditFormatter]\n          }\n        },\n        {\n          property: 'height',\n          header: {\n            label: 'Height',\n            props: {\n              index: 1,\n              sort: true,\n              style: {\n                width: '20%'\n              }\n            },\n            transforms: [sortableTransform],\n            formatters: [sortingFormatter],\n            customFormatters: [sortableHeaderCellFormatter]\n          },\n          cell: {\n            props: {\n              index: 1\n            },\n            formatters: [inlineEditFormatter]\n          }\n        },\n        {\n          property: 'eye_color',\n          header: {\n            label: 'Eye Color',\n            props: {\n              index: 2,\n              sort: true\n            },\n            transforms: [sortableTransform],\n            formatters: [sortingFormatter],\n            customFormatters: [sortableHeaderCellFormatter]\n          },\n          cell: {\n            props: {\n              index: 2\n            },\n            formatters: [tableCellFormatter]\n          }\n        },\n        {\n          property: 'gender',\n          header: {\n            label: 'Gender',\n            props: {\n              index: 3,\n              sort: true\n            },\n            transforms: [sortableTransform],\n            formatters: [sortingFormatter],\n            customFormatters: [sortableHeaderCellFormatter]\n          },\n          cell: {\n            props: {\n              index: 3\n            },\n            formatters: [tableCellFormatter]\n          }\n        },\n        {\n          property: 'birth_year',\n          header: {\n            label: 'Birth Year',\n            props: {\n              index: 4,\n              sort: true,\n              style: {\n                width: '15%'\n              }\n            },\n            transforms: [sortableTransform],\n            formatters: [sortingFormatter],\n            customFormatters: [sortableHeaderCellFormatter]\n          },\n          cell: {\n            props: {\n              index: 4\n            },\n            formatters: [inlineEditFormatter]\n          }\n        }\n      ],\n      rows: mockRows.slice(0, 6)\n    };\n  }\n\n  render() {\n    const { rows, sortingColumns, columns } = this.state;\n\n    const sortedRows = compose(\n      sort.sorter({\n        columns,\n        sortingColumns,\n        sort: orderBy,\n        strategy: sort.strategies.byProperty\n      })\n    )(rows);\n\n    return (\n      <div>\n        <Table.PfProvider\n          striped\n          bordered\n          hover\n          dataTable\n          inlineEdit\n          columns={columns}\n          components={{\n            header: {\n              cell: cellProps =>\n                this.customHeaderFormatters({\n                  cellProps,\n                  columns,\n                  sortingColumns\n                }),\n              row: Table.TableInlineEditHeaderRow\n            }\n          }}\n        >\n          <Table.Header\n            headerRows={resolve.headerRows({ columns })}\n            onRow={() => ({\n              role: 'row',\n              isEditing: () => this.state.editingColumn !== undefined,\n              onCancel: () => this.inlineEditController.onCancel(),\n              onConfirm: () => this.inlineEditController.onConfirm()\n            })}\n          />\n          <Table.Body rows={sortedRows} rowKey=\"id\" />\n        </Table.PfProvider>\n      </div>\n    );\n  }\n}";
exports.mockInlineEditColumnTableSource = mockInlineEditColumnTableSource;