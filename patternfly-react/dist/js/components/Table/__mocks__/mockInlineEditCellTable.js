"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockInlineEditCellTableSource = exports.MockInlineEditCellTable = exports.SelectableFormControl = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var sort = _interopRequireWildcard(require("sortabular"));

var resolve = _interopRequireWildcard(require("table-resolver"));

var _recompose = require("recompose");

var _lodash = require("lodash");

var _helpers = require("../../../common/helpers");

var _index = require("../index");

var _InlineEdit = require("../../InlineEdit");

var _mockRows = require("./mockRows");

var _index2 = require("../../../index");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
var SelectableFormControl = /*#__PURE__*/function (_React$Component) {
  _inherits(SelectableFormControl, _React$Component);

  function SelectableFormControl() {
    _classCallCheck(this, SelectableFormControl);

    return _possibleConstructorReturn(this, _getPrototypeOf(SelectableFormControl).apply(this, arguments));
  }

  _createClass(SelectableFormControl, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.selected) {
        this.input.select();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          selected = _this$props.selected,
          otherProps = _objectWithoutProperties(_this$props, ["selected"]);

      return _react["default"].createElement(_index2.FormControl, _extends({}, otherProps, {
        inputRef: function inputRef(ref) {
          _this.input = ref;
        }
      }));
    }
  }]);

  return SelectableFormControl;
}(_react["default"].Component);

exports.SelectableFormControl = SelectableFormControl;
SelectableFormControl.propTypes = {
  selected: _propTypes["default"].bool.isRequired
}; // eslint-disable-next-line react/no-multi-comp

var MockInlineEditCellTable = /*#__PURE__*/function (_React$Component2) {
  _inherits(MockInlineEditCellTable, _React$Component2);

  function MockInlineEditCellTable(props) {
    var _this2;

    _classCallCheck(this, MockInlineEditCellTable);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(MockInlineEditCellTable).call(this, props)); // Point the transform to your sortingColumns. React state can work for this purpose
    // but you can use a state manager as well.

    var getSortingColumns = function getSortingColumns() {
      return _this2.state.sortingColumns || {};
    };

    var sortableTransform = sort.sort({
      getSortingColumns: getSortingColumns,
      onSort: function onSort(selectedColumn) {
        _this2.setState({
          sortingColumns: sort.byColumn({
            sortingColumns: _this2.state.sortingColumns,
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

    _this2.customHeaderFormatters = _index.customHeaderFormattersDefinition;
    var inlineEditController = {
      isEditing: function isEditing(_ref) {
        var rowIndex = _ref.rowIndex,
            columnIndex = _ref.columnIndex,
            rowData = _ref.rowData,
            property = _ref.property;
        return rowData.editing && rowData.editing[property] !== undefined;
      },
      onActivate: function onActivate(e, _ref2) {
        var rowIndex = _ref2.rowIndex,
            columnIndex = _ref2.columnIndex,
            rowData = _ref2.rowData,
            property = _ref2.property;
        var rows = (0, _lodash.cloneDeep)(_this2.state.rows);
        var index = (0, _lodash.findIndex)(rows, {
          id: rowData.id
        });
        rows[index].editing = rows[index].editing || {};
        rows[index].editing[property] = rows[index][property];
        var lastSelected = {
          rowIndex: rowIndex,
          columnIndex: columnIndex
        };

        _this2.setState({
          rows: rows,
          lastSelected: lastSelected
        });
      },
      onConfirm: function onConfirm(value, _ref3) {
        var rowData = _ref3.rowData,
            rowIndex = _ref3.rowIndex,
            columnIndex = _ref3.columnIndex,
            property = _ref3.property;
        var rows = (0, _lodash.cloneDeep)(_this2.state.rows);
        var index = (0, _lodash.findIndex)(rows, {
          id: rowData.id
        });

        if (rowData.editing && rowData.editing[property] !== undefined) {
          rows[index][property] = value !== null ? value : rows[index].editing[property];
          delete rows[index].editing[property];
        }

        _this2.setState({
          rows: rows,
          lastSelected: {}
        });
      },
      onCancel: function onCancel(_ref4) {
        var rowData = _ref4.rowData,
            rowIndex = _ref4.rowIndex,
            columnIndex = _ref4.columnIndex,
            property = _ref4.property;
        var rows = (0, _lodash.cloneDeep)(_this2.state.rows);
        var index = (0, _lodash.findIndex)(rows, {
          id: rowData.id
        });

        if (rowData.editing && rowData.editing[property] !== undefined) {
          delete rows[index].editing[property];
        }

        _this2.setState({
          rows: rows,
          lastSelected: {}
        });
      },
      onChange: function onChange(value, _ref5) {
        var rowData = _ref5.rowData,
            rowIndex = _ref5.rowIndex,
            columnIndex = _ref5.columnIndex,
            property = _ref5.property;
        var rows = (0, _lodash.cloneDeep)(_this2.state.rows);
        var index = (0, _lodash.findIndex)(rows, {
          id: rowData.id
        });
        rows[index].editing[property] = value;

        _this2.setState({
          rows: rows,
          lastSelected: {}
        });
      }
    };
    var inlineEditFormatter = (0, _index.inlineEditFormatterFactory)({
      isEditing: function isEditing(additionalData) {
        return inlineEditController.isEditing(additionalData);
      },
      renderValue: function renderValue(value, additionalData) {
        return _react["default"].createElement("td", {
          className: "editable"
        }, _react["default"].createElement("div", {
          onMouseUp: function onMouseUp(e) {
            return inlineEditController.onActivate(e, additionalData);
          },
          className: "input"
        }, value));
      },
      renderEdit: function renderEdit(value, additionalData) {
        var rowData = additionalData.rowData,
            property = additionalData.property,
            rowIndex = additionalData.rowIndex,
            columnIndex = additionalData.columnIndex;
        var lastSelected = _this2.state.lastSelected;
        var selected = lastSelected && lastSelected.rowIndex === rowIndex && lastSelected.columnIndex === columnIndex;
        return _react["default"].createElement("td", {
          className: "editable editing"
        }, _react["default"].createElement(_index2.InputGroup, null, _react["default"].createElement(SelectableFormControl, {
          type: "text",
          selected: selected,
          defaultValue: rowData.editing[property],
          onBlur: function onBlur(e) {
            return inlineEditController.onChange(e.target.value, additionalData);
          },
          onKeyUp: function onKeyUp(e) {
            if (e.keyCode === _helpers.KEY_CODES.ENTER_KEY) {
              inlineEditController.onConfirm(e.target.value, additionalData);
            } else if (e.keyCode === _helpers.KEY_CODES.ESCAPE_KEY) {
              inlineEditController.onCancel(additionalData);
            }
          }
        }), _react["default"].createElement(_index2.Form.InputGroup.Button, null, _react["default"].createElement(_InlineEdit.ConfirmButton, {
          bsStyle: "primary",
          key: "confirm",
          onMouseUp: function onMouseUp() {
            return inlineEditController.onConfirm(null, additionalData);
          }
        }), _react["default"].createElement(_InlineEdit.CancelButton, {
          bsStyle: "default",
          key: "cancel",
          onMouseUp: function onMouseUp() {
            return inlineEditController.onCancel(additionalData);
          }
        }))));
      }
    });
    _this2.state = {
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
              width: '25%'
            }
          },
          transforms: [sortableTransform],
          formatters: [sortingFormatter],
          customFormatters: [_index.sortableHeaderCellFormatter]
        },
        cell: {
          props: {
            index: 0
          },
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
              width: '25%'
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
      }],
      rows: _mockRows.mockRows.slice(0, 6)
    };
    return _this2;
  }

  _createClass(MockInlineEditCellTable, [{
    key: "render",
    value: function render() {
      var _this3 = this;

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
              return _this3.customHeaderFormatters({
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

  return MockInlineEditCellTable;
}(_react["default"].Component);

exports.MockInlineEditCellTable = MockInlineEditCellTable;
var mockInlineEditCellTableSource = "\nimport React from 'react';\nimport * as sort from 'sortabular';\nimport * as resolve from 'table-resolver';\nimport { compose } from 'recompose';\nimport { cloneDeep, findIndex, orderBy } from 'lodash';\nimport { KEY_CODES } from '../../../common/helpers';\nimport {\n  customHeaderFormattersDefinition,\n  defaultSortingOrder,\n  sortableHeaderCellFormatter,\n  tableCellFormatter,\n  inlineEditFormatterFactory,\n  Table,\n  TABLE_SORT_DIRECTION\n} from '../index';\nimport { ConfirmButton, CancelButton } from '../../InlineEdit';\nimport { mockRows } from './mockRows';\nimport { Form, FormControl, InputGroup } from '../../../index';\n\n/**\n * Reactabular client side data sorting based on the following api docs:\n * https://reactabular.js.org/#/data/sorting\n */\n\nexport class MockInlineEditCellTable extends React.Component {\n  constructor(props) {\n    super(props);\n\n    // Point the transform to your sortingColumns. React state can work for this purpose\n    // but you can use a state manager as well.\n    const getSortingColumns = () => this.state.sortingColumns || {};\n\n    const sortableTransform = sort.sort({\n      getSortingColumns,\n      onSort: selectedColumn => {\n        const { rows, sortingColumns, columns } = this.state;\n\n        const sortedRows = compose(\n          sort.sorter({\n            columns,\n            sortingColumns,\n            sort: orderBy,\n            strategy: sort.strategies.byProperty\n          })\n        )(rows);\n\n        this.setState({\n          rows: sortedRows,\n          sortingColumns: sort.byColumn({\n            sortingColumns: this.state.sortingColumns,\n            sortingOrder: defaultSortingOrder,\n            selectedColumn\n          })\n        });\n      },\n      // Use property or index dependening on the sortingColumns structure specified\n      strategy: sort.strategies.byProperty\n    });\n\n    const sortingFormatter = sort.header({\n      sortableTransform,\n      getSortingColumns,\n      strategy: sort.strategies.byProperty\n    });\n\n    // enables our custom header formatters extensions to reactabular\n    this.customHeaderFormatters = customHeaderFormattersDefinition;\n\n    const inlineEditController = {\n      isEditing: ({ rowIndex, columnIndex, rowData, property }) =>\n        rowData.backup && rowData.backup[property] !== undefined,\n      onActivate: (e, { rowIndex, columnIndex, rowData, property }) => {\n        const rows = cloneDeep(this.state.rows);\n        const index = findIndex(rows, { id: rowData.id });\n\n        rows[index].backup = rows[index].backup || {};\n        rows[index].backup[property] = rows[index][property];\n\n        this.setState({ rows });\n      },\n      onConfirm: (value, { rowData, rowIndex, columnIndex, property }) => {\n        const rows = cloneDeep(this.state.rows);\n        const index = findIndex(rows, { id: rowData.id });\n\n        if (rowData.backup && rowData.backup[property] !== undefined) {\n          delete rows[index].backup[property];\n        }\n\n        this.setState({ rows });\n      },\n      onCancel: (value, { rowData, rowIndex, columnIndex, property }) => {\n        const rows = cloneDeep(this.state.rows);\n        const index = findIndex(rows, { id: rowData.id });\n\n        if (rowData.backup && rowData.backup[property] !== undefined) {\n          rows[index][property] = rows[index].backup[property];\n          delete rows[index].backup[property];\n        }\n\n        this.setState({ rows });\n      },\n      onChange: (value, { rowData, rowIndex, columnIndex, property }) => {\n        const rows = cloneDeep(this.state.rows);\n        const index = findIndex(rows, { id: rowData.id });\n\n        rows[index][property] = value;\n\n        this.setState({ rows });\n      }\n    };\n\n    const inlineEditFormatter = inlineEditFormatterFactory({\n      isEditing: additionalData =>\n        inlineEditController.isEditing(additionalData),\n      renderValue: (value, additionalData) => (\n        <td className=\"editable\">\n          <div\n            onClick={e => inlineEditController.onActivate(e, additionalData)}\n            className=\"input\"\n          >\n            {value}\n          </div>\n        </td>\n      ),\n      renderEdit: (value, additionalData) => (\n        <td className=\"editable editing\">\n          <InputGroup>\n            <FormControl\n              type=\"text\"\n              defaultValue={value}\n              onBlur={e =>\n                inlineEditController.onChange(e.target.value, additionalData)\n              }\n            />\n            <Form.InputGroup.Button>\n              <ConfirmButton\n                bsStyle=\"primary\"\n                key=\"confirm\"\n                onMouseUp={() =>\n                  inlineEditController.onConfirm(value, additionalData)\n                }\n              />\n              <CancelButton\n                bsStyle=\"default\"\n                key=\"cancel\"\n                onMouseUp={() =>\n                  inlineEditController.onCancel(value, additionalData)\n                }\n              />\n            </Form.InputGroup.Button>\n          </InputGroup>\n        </td>\n      )\n    });\n\n    this.state = {\n      // Sort the first column in an ascending way by default.\n      sortingColumns: {\n        name: {\n          direction: TABLE_SORT_DIRECTION.ASC,\n          position: 0\n        }\n      },\n      columns: [\n        {\n          property: 'name',\n          header: {\n            label: 'Name',\n            props: {\n              index: 0,\n              sort: true,\n              style: {\n                width: '25%'\n              }\n            },\n            transforms: [sortableTransform],\n            formatters: [sortingFormatter],\n            customFormatters: [sortableHeaderCellFormatter]\n          },\n          cell: {\n            props: {\n              index: 0\n            },\n            formatters: [inlineEditFormatter]\n          }\n        },\n        {\n          property: 'height',\n          header: {\n            label: 'Height',\n            props: {\n              index: 1,\n              sort: true,\n              style: {\n                width: '25%'\n              }\n            },\n            transforms: [sortableTransform],\n            formatters: [sortingFormatter],\n            customFormatters: [sortableHeaderCellFormatter]\n          },\n          cell: {\n            props: {\n              index: 1\n            },\n            formatters: [inlineEditFormatter]\n          }\n        },\n        {\n          property: 'eye_color',\n          header: {\n            label: 'Eye Color',\n            props: {\n              index: 2,\n              sort: true\n            },\n            transforms: [sortableTransform],\n            formatters: [sortingFormatter],\n            customFormatters: [sortableHeaderCellFormatter]\n          },\n          cell: {\n            props: {\n              index: 2\n            },\n            formatters: [tableCellFormatter]\n          }\n        },\n        {\n          property: 'gender',\n          header: {\n            label: 'Gender',\n            props: {\n              index: 3,\n              sort: true\n            },\n            transforms: [sortableTransform],\n            formatters: [sortingFormatter],\n            customFormatters: [sortableHeaderCellFormatter]\n          },\n          cell: {\n            props: {\n              index: 3\n            },\n            formatters: [tableCellFormatter]\n          }\n        },\n        {\n          property: 'birth_year',\n          header: {\n            label: 'Birth Year',\n            props: {\n              index: 4,\n              sort: true\n            },\n            transforms: [sortableTransform],\n            formatters: [sortingFormatter],\n            customFormatters: [sortableHeaderCellFormatter]\n          },\n          cell: {\n            props: {\n              index: 4\n            },\n            formatters: [tableCellFormatter]\n          }\n        }\n      ],\n      rows: mockRows.slice(0, 6)\n    };\n  }\n  render() {\n    const { rows, sortingColumns, columns } = this.state;\n\n    return (\n      <div>\n        <Table.PfProvider\n          striped\n          bordered\n          hover\n          dataTable\n          inlineEdit\n          columns={columns}\n          components={{\n            header: {\n              cell: cellProps =>\n                this.customHeaderFormatters({\n                  cellProps,\n                  columns,\n                  sortingColumns\n                })\n            }\n          }}\n        >\n          <Table.Header headerRows={resolve.headerRows({ columns })} />\n          <Table.Body\n            rows={rows}\n            rowKey=\"id\"\n            onRow={() => ({\n              role: 'row'\n            })}\n          />\n        </Table.PfProvider>\n      </div>\n    );\n  }\n}";
exports.mockInlineEditCellTableSource = mockInlineEditCellTableSource;