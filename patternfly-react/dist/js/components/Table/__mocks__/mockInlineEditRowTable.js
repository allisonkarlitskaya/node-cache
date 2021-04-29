"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockInlineEditRowTableSource = exports.MockInlineEditRowTable = void 0;

var _react = _interopRequireDefault(require("react"));

var sort = _interopRequireWildcard(require("sortabular"));

var resolve = _interopRequireWildcard(require("table-resolver"));

var _lodash = require("lodash");

var _recompose = require("recompose");

var _index = require("../index");

var _Icon = require("../../Icon");

var _Button = require("../../Button");

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
var MockInlineEditRowTable = /*#__PURE__*/function (_React$Component) {
  _inherits(MockInlineEditRowTable, _React$Component);

  function MockInlineEditRowTable(props) {
    var _this;

    _classCallCheck(this, MockInlineEditRowTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MockInlineEditRowTable).call(this, props)); // Point the transform to your sortingColumns. React state can work for this purpose
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
        var rowData = _ref.rowData;
        return rowData.editing !== undefined;
      },
      onActivate: function onActivate(_ref2) {
        var rowData = _ref2.rowData;
        var rows = (0, _lodash.cloneDeep)(_this.state.rows);
        var index = (0, _lodash.findIndex)(rows, {
          id: rowData.id
        });
        rows[index].editing = (0, _lodash.cloneDeep)(rows[index]);

        _this.setState({
          rows: rows,
          editing: true
        });
      },
      onConfirm: function onConfirm(_ref3) {
        var rowData = _ref3.rowData;
        var rows = (0, _lodash.cloneDeep)(_this.state.rows);
        var index = (0, _lodash.findIndex)(rows, {
          id: rowData.id
        });
        rows[index] = (0, _lodash.cloneDeep)(rows[index].editing);
        delete rows[index].editing;

        _this.setState({
          rows: rows,
          editing: false
        });
      },
      onCancel: function onCancel(_ref4) {
        var rowData = _ref4.rowData;
        var rows = (0, _lodash.cloneDeep)(_this.state.rows);
        var index = (0, _lodash.findIndex)(rows, {
          id: rowData.id
        });
        delete rows[index].editing;

        _this.setState({
          rows: rows,
          editing: false
        });
      },
      onChange: function onChange(value, _ref5) {
        var rowData = _ref5.rowData,
            property = _ref5.property;
        var rows = (0, _lodash.cloneDeep)(_this.state.rows);
        var index = (0, _lodash.findIndex)(rows, {
          id: rowData.id
        });
        rows[index].editing[property] = value;

        _this.setState({
          rows: rows
        });
      }
    };
    _this.inlineEditController = inlineEditController;
    var inlineEditFormatter = (0, _index.inlineEditFormatterFactory)({
      isEditing: function isEditing(additionalData) {
        return inlineEditController.isEditing(additionalData);
      },
      renderValue: function renderValue(value, additionalData) {
        return _react["default"].createElement("td", {
          className: "editable"
        }, _react["default"].createElement("span", {
          className: "static"
        }, value));
      },
      renderEdit: function renderEdit(value, additionalData) {
        var rowData = additionalData.rowData,
            property = additionalData.property;
        return _react["default"].createElement("td", {
          className: "editable editing"
        }, _react["default"].createElement(_index2.FormControl, {
          type: "text",
          defaultValue: rowData.editing[property],
          onBlur: function onBlur(e) {
            return inlineEditController.onChange(e.target.value, additionalData);
          }
        }));
      }
    });
    var inlineEditButtonsFormatter = (0, _index.inlineEditFormatterFactory)({
      isEditing: function isEditing(additionalData) {
        return _this.state.editing;
      },
      renderValue: function renderValue(value, additionalData) {
        return _react["default"].createElement("td", {
          style: {
            padding: '2px'
          }
        }, _react["default"].createElement(_Button.Button, {
          bsStyle: "default",
          onClick: function onClick() {
            return inlineEditController.onActivate(additionalData);
          }
        }, _react["default"].createElement(_Icon.Icon, {
          type: "pf",
          name: "edit"
        })));
      },
      renderEdit: function renderEdit(value, additionalData) {
        return _react["default"].createElement("td", {
          style: {
            padding: '2px'
          }
        }, _react["default"].createElement(_Button.Button, {
          bsStyle: "default",
          disabled: true
        }, _react["default"].createElement(_Icon.Icon, {
          type: "pf",
          name: "edit"
        })));
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
      }, {
        property: 'actions',
        header: {
          label: 'Actions',
          props: {
            index: 5
          },
          formatters: [_index.actionHeaderCellFormatter]
        },
        cell: {
          props: {
            index: 5
          },
          formatters: [inlineEditButtonsFormatter]
        }
      }],
      rows: _mockRows.mockRows.slice(0, 6)
    };
    return _this;
  }

  _createClass(MockInlineEditRowTable, [{
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
            }
          },
          body: {
            row: _index.Table.InlineEditRow
          }
        }
      }, _react["default"].createElement(_index.Table.Header, {
        headerRows: resolve.headerRows({
          columns: columns
        })
      }), _react["default"].createElement(_index.Table.Body, {
        rows: sortedRows,
        rowKey: "id",
        onRow: function onRow(rowData, _ref6) {
          var rowIndex = _ref6.rowIndex;
          return {
            role: 'row',
            isEditing: function isEditing() {
              return _this2.inlineEditController.isEditing({
                rowData: rowData
              });
            },
            onCancel: function onCancel() {
              return _this2.inlineEditController.onCancel({
                rowData: rowData,
                rowIndex: rowIndex
              });
            },
            onConfirm: function onConfirm() {
              return _this2.inlineEditController.onConfirm({
                rowData: rowData,
                rowIndex: rowIndex
              });
            },
            last: rowIndex === sortedRows.length - 1
          };
        }
      })));
    }
  }]);

  return MockInlineEditRowTable;
}(_react["default"].Component);

exports.MockInlineEditRowTable = MockInlineEditRowTable;
var mockInlineEditRowTableSource = "\nimport React from 'react';\nimport * as sort from 'sortabular';\nimport * as resolve from 'table-resolver';\nimport { cloneDeep, findIndex, orderBy } from 'lodash';\nimport { compose } from 'recompose';\nimport {\n  actionHeaderCellFormatter,\n  customHeaderFormattersDefinition,\n  defaultSortingOrder,\n  sortableHeaderCellFormatter,\n  tableCellFormatter,\n  inlineEditFormatterFactory,\n  Table,\n  TABLE_SORT_DIRECTION\n} from '../index';\n\nimport { Icon } from '../../Icon';\nimport { Button } from '../../Button';\nimport { mockRows } from './mockRows';\nimport { FormControl } from '../../../index';\n\n/**\n * Reactabular client side data sorting based on the following api docs:\n * https://reactabular.js.org/#/data/sorting\n */\nexport class MockInlineEditRowTable extends React.Component {\n  constructor(props) {\n    super(props);\n\n    // Point the transform to your sortingColumns. React state can work for this purpose\n    // but you can use a state manager as well.\n    const getSortingColumns = () => this.state.sortingColumns || {};\n\n    const sortableTransform = sort.sort({\n      getSortingColumns,\n      onSort: selectedColumn => {\n        this.setState({\n          sortingColumns: sort.byColumn({\n            sortingColumns: this.state.sortingColumns,\n            sortingOrder: defaultSortingOrder,\n            selectedColumn\n          })\n        });\n      },\n      // Use property or index dependening on the sortingColumns structure specified\n      strategy: sort.strategies.byProperty\n    });\n\n    const sortingFormatter = sort.header({\n      sortableTransform,\n      getSortingColumns,\n      strategy: sort.strategies.byProperty\n    });\n\n    // enables our custom header formatters extensions to reactabular\n    this.customHeaderFormatters = customHeaderFormattersDefinition;\n\n    const inlineEditController = {\n      isEditing: ({ rowData }) => rowData.backup !== undefined,\n      onActivate: ({ rowData }) => {\n        const rows = cloneDeep(this.state.rows);\n        const index = findIndex(rows, { id: rowData.id });\n\n        rows[index].backup = cloneDeep(rows[index]);\n\n        this.setState({ rows, editing: true });\n      },\n      onConfirm: ({ rowData }) => {\n        const rows = cloneDeep(this.state.rows);\n        const index = findIndex(rows, { id: rowData.id });\n\n        delete rows[index].backup;\n\n        this.setState({ rows, editing: false });\n      },\n      onCancel: ({ rowData }) => {\n        const rows = cloneDeep(this.state.rows);\n        const index = findIndex(rows, { id: rowData.id });\n\n        rows[index] = cloneDeep(rows[index].backup);\n        delete rows[index].backup;\n\n        this.setState({ rows, editing: false });\n      },\n      onChange: (value, { rowData, property }) => {\n        const rows = cloneDeep(this.state.rows);\n        const index = findIndex(rows, { id: rowData.id });\n\n        rows[index][property] = value;\n\n        this.setState({ rows });\n      }\n    };\n    this.inlineEditController = inlineEditController;\n\n    const inlineEditFormatter = inlineEditFormatterFactory({\n      isEditing: additionalData =>\n        inlineEditController.isEditing(additionalData),\n      renderValue: (value, additionalData) => (\n        <td className=\"editable\">\n          <span className=\"static\">{value}</span>\n        </td>\n      ),\n      renderEdit: (value, additionalData) => (\n        <td className=\"editable editing\">\n          <FormControl\n            type=\"text\"\n            defaultValue={value}\n            onBlur={e =>\n              inlineEditController.onChange(e.target.value, additionalData)\n            }\n          />\n        </td>\n      )\n    });\n\n    const inlineEditButtonsFormatter = inlineEditFormatterFactory({\n      isEditing: additionalData => this.state.editing,\n      renderValue: (value, additionalData) => (\n        <td style={{ padding: '2px' }}>\n          <Button\n            bsStyle=\"default\"\n            onClick={() => inlineEditController.onActivate(additionalData)}\n          >\n            <Icon type=\"pf\" name=\"edit\" />\n          </Button>\n        </td>\n      ),\n      renderEdit: (value, additionalData) => (\n        <td style={{ padding: '2px' }}>\n          <Button bsStyle=\"default\" disabled>\n            <Icon type=\"pf\" name=\"edit\" />\n          </Button>\n        </td>\n      )\n    });\n\n    this.state = {\n      // Sort the first column in an ascending way by default.\n      sortingColumns: {\n        name: {\n          direction: TABLE_SORT_DIRECTION.ASC,\n          position: 0\n        }\n      },\n      columns: [\n        {\n          property: 'name',\n          header: {\n            label: 'Name',\n            props: {\n              index: 0,\n              sort: true,\n              style: {\n                width: '20%'\n              }\n            },\n            transforms: [sortableTransform],\n            formatters: [sortingFormatter],\n            customFormatters: [sortableHeaderCellFormatter]\n          },\n          cell: {\n            formatters: [inlineEditFormatter]\n          }\n        },\n        {\n          property: 'height',\n          header: {\n            label: 'Height',\n            props: {\n              index: 1,\n              sort: true,\n              style: {\n                width: '20%'\n              }\n            },\n            transforms: [sortableTransform],\n            formatters: [sortingFormatter],\n            customFormatters: [sortableHeaderCellFormatter]\n          },\n          cell: {\n            props: {\n              index: 1\n            },\n            formatters: [inlineEditFormatter]\n          }\n        },\n        {\n          property: 'eye_color',\n          header: {\n            label: 'Eye Color',\n            props: {\n              index: 2,\n              sort: true\n            },\n            transforms: [sortableTransform],\n            formatters: [sortingFormatter],\n            customFormatters: [sortableHeaderCellFormatter]\n          },\n          cell: {\n            props: {\n              index: 2\n            },\n            formatters: [tableCellFormatter]\n          }\n        },\n        {\n          property: 'gender',\n          header: {\n            label: 'Gender',\n            props: {\n              index: 3,\n              sort: true\n            },\n            transforms: [sortableTransform],\n            formatters: [sortingFormatter],\n            customFormatters: [sortableHeaderCellFormatter]\n          },\n          cell: {\n            props: {\n              index: 3\n            },\n            formatters: [tableCellFormatter]\n          }\n        },\n        {\n          property: 'birth_year',\n          header: {\n            label: 'Birth Year',\n            props: {\n              index: 4,\n              sort: true,\n              style: {\n                width: '15%'\n              }\n            },\n            transforms: [sortableTransform],\n            formatters: [sortingFormatter],\n            customFormatters: [sortableHeaderCellFormatter]\n          },\n          cell: {\n            props: {\n              index: 4\n            },\n            formatters: [inlineEditFormatter]\n          }\n        },\n        {\n          property: 'actions',\n          header: {\n            label: 'Actions',\n            props: {\n              index: 5\n            },\n            formatters: [actionHeaderCellFormatter]\n          },\n          cell: {\n            props: {\n              index: 5\n            },\n            formatters: [inlineEditButtonsFormatter]\n          }\n        }\n      ],\n      rows: mockRows.slice(0, 6)\n    };\n  }\n\n  render() {\n    const { rows, sortingColumns, columns } = this.state;\n\n    const sortedRows = compose(\n      sort.sorter({\n        columns,\n        sortingColumns,\n        sort: orderBy,\n        strategy: sort.strategies.byProperty\n      })\n    )(rows);\n\n    return (\n      <div>\n        <Table.PfProvider\n          striped\n          bordered\n          hover\n          dataTable\n          inlineEdit\n          columns={columns}\n          components={{\n            header: {\n              cell: cellProps =>\n                this.customHeaderFormatters({\n                  cellProps,\n                  columns,\n                  sortingColumns\n                })\n            },\n            body: {\n              row: Table.InlineEditRow,\n              cell: cellProps => cellProps.children\n            }\n          }}\n        >\n          <Table.Header headerRows={resolve.headerRows({ columns })} />\n          <Table.Body\n            rows={sortedRows}\n            rowKey=\"id\"\n            onRow={(rowData, { rowIndex }) => ({\n              role: 'row',\n              isEditing: () => this.inlineEditController.isEditing({ rowData }),\n              onCancel: () =>\n                this.inlineEditController.onCancel({ rowData, rowIndex }),\n              onConfirm: () =>\n                this.inlineEditController.onConfirm({ rowData, rowIndex }),\n              last: rowIndex === sortedRows.length - 1\n            })}\n          />\n        </Table.PfProvider>\n      </div>\n    );\n  }\n}";
exports.mockInlineEditRowTableSource = mockInlineEditRowTableSource;