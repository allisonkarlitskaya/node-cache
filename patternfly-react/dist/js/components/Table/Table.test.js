"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = require("./index");

var _helpers = require("../../common/helpers");

var _mockBootstrapRows = require("./__mocks__/mockBootstrapRows");

var _mockBootstrapColumns = require("./__mocks__/mockBootstrapColumns");

var _mockClientPaginationTable = require("./__mocks__/mockClientPaginationTable");

var _mockServerPaginationTable = require("./__mocks__/mockServerPaginationTable");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('Mock Client Pagination table renders', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_mockClientPaginationTable.MockClientPaginationTable, {
    onRowsLogger: jest.fn()
  }));
  expect(component.render()).toMatchSnapshot();
});
test('Mock Server Pagination table renders', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_mockServerPaginationTable.MockServerPaginationTable, {
    onServerPageLogger: jest.fn()
  }));
  expect(component.render()).toMatchSnapshot();
});
test('Bootstrap basic table renders properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Table.PfProvider, {
    columns: _mockBootstrapColumns.mockBootstrapColumns
  }, _react["default"].createElement("caption", null, "Optional table caption."), _react["default"].createElement(_index.Table.Header, null), _react["default"].createElement(_index.Table.Body, {
    rows: _mockBootstrapRows.mockBootstrapRows.slice(0, 3),
    rowKey: "id"
  })));
  expect(component.render()).toMatchSnapshot();
});
test('Bootstrap striped table renders properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Table.PfProvider, {
    striped: true,
    columns: _mockBootstrapColumns.mockBootstrapColumns
  }, _react["default"].createElement(_index.Table.Header, null), _react["default"].createElement(_index.Table.Body, {
    rows: _mockBootstrapRows.mockBootstrapRows.slice(0, 3),
    rowKey: "id"
  })));
  expect(component.render()).toMatchSnapshot();
});
test('Bootstrap bordered table renders properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Table.PfProvider, {
    bordered: true,
    columns: _mockBootstrapColumns.mockBootstrapColumns
  }, _react["default"].createElement(_index.Table.Header, null), _react["default"].createElement(_index.Table.Body, {
    rows: _mockBootstrapRows.mockBootstrapRows.slice(0, 3),
    rowKey: "id"
  })));
  expect(component.render()).toMatchSnapshot();
});
test('Bootstrap hover table renders properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Table.PfProvider, {
    hover: true,
    columns: _mockBootstrapColumns.mockBootstrapColumns
  }, _react["default"].createElement(_index.Table.Header, null), _react["default"].createElement(_index.Table.Body, {
    rows: _mockBootstrapRows.mockBootstrapRows.slice(0, 3),
    rowKey: "id"
  })));
  expect(component.render()).toMatchSnapshot();
});
test('Bootstrap condensed table renders properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Table.PfProvider, {
    condensed: true,
    columns: _mockBootstrapColumns.mockBootstrapColumns
  }, _react["default"].createElement(_index.Table.Header, null), _react["default"].createElement(_index.Table.Body, {
    rows: _mockBootstrapRows.mockBootstrapRows.slice(0, 3),
    rowKey: "id"
  })));
  expect(component.render()).toMatchSnapshot();
});
test('Bootstrap contextual classes table renders properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Table.PfProvider, {
    condensed: true,
    columns: _mockBootstrapColumns.mockBootstrapColumns
  }, _react["default"].createElement(_index.Table.Header, null), _react["default"].createElement(_index.Table.Body, {
    rows: _mockBootstrapRows.mockBootstrapRows,
    rowKey: "id",
    onRow: function onRow(row, _ref) {
      var rowIndex = _ref.rowIndex;

      switch (rowIndex) {
        case 0:
          return {
            className: 'active'
          };

        case 2:
          return {
            className: 'success'
          };

        case 4:
          return {
            className: 'warning'
          };

        case 6:
          return {
            className: 'danger'
          };

        default:
          return null;
      }
    }
  })));
  expect(component.render()).toMatchSnapshot();
});
test('Bootstrap responsive table renders properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement("div", {
    className: "table-responsive"
  }, _react["default"].createElement(_index.Table.PfProvider, {
    columns: _mockBootstrapColumns.mockBootstrapColumns
  }, _react["default"].createElement(_index.Table.Header, null), _react["default"].createElement(_index.Table.Body, {
    rows: _mockBootstrapRows.mockBootstrapRows.slice(0, 3),
    rowKey: "id"
  }))));
  expect(component.render()).toMatchSnapshot();
});
test('Patternfly table renders properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Table.PfProvider, {
    striped: true,
    bordered: true,
    hover: true,
    columns: _mockBootstrapColumns.mockPatternflyColumns
  }, _react["default"].createElement(_index.Table.Header, null), _react["default"].createElement(_index.Table.Body, {
    rows: _mockBootstrapRows.mockBootstrapRows,
    rowKey: "id"
  })));
  expect(component.render()).toMatchSnapshot();
});
describe('inline edit', function () {
  var getTable = function getTable(options) {
    return _react["default"].createElement(_index.Table.PfProvider, {
      striped: true,
      bordered: true,
      hover: true,
      dataTable: true,
      inlineEdit: true,
      columns: _mockBootstrapColumns.mockPatternflyColumns,
      components: options.components
    }, _react["default"].createElement(_index.Table.Header, {
      onRow: options.onHeaderRow || _helpers.noop
    }), _react["default"].createElement(_index.Table.Body, {
      rows: [_mockBootstrapRows.mockBootstrapRows[0]],
      rowKey: "id",
      onRow: options.onRow || _helpers.noop
    }));
  };

  test('Inline edit row renders properly', function () {
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement("div", null));
    var wrapperNode = wrapper.getDOMNode();
    var tableComponent = getTable({
      components: {
        body: {
          row: _index.Table.InlineEditRow,
          cell: function cell(cellProps) {
            return cellProps.children;
          }
        }
      },
      onRow: function onRow(rowData, _ref2) {
        var rowIndex = _ref2.rowIndex;
        return {
          role: 'row',
          isEditing: function isEditing() {
            return rowIndex === 0;
          },
          onCancel: _helpers.noop,
          onConfirm: _helpers.noop,
          last: false,
          buttonsMountpoint: wrapperNode
        };
      }
    });
    (0, _enzyme.mount)(tableComponent, {
      attachTo: wrapperNode
    });
    expect(wrapper.render()).toMatchSnapshot();
  });
  test('Inline edit last row renders properly last row', function () {
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement("div", null));
    var wrapperNode = wrapper.getDOMNode();
    var tableComponent = getTable({
      components: {
        body: {
          row: _index.Table.InlineEditRow,
          cell: function cell(cellProps) {
            return cellProps.children;
          }
        }
      },
      onRow: function onRow(rowData, _ref3) {
        var rowIndex = _ref3.rowIndex;
        return {
          role: 'row',
          isEditing: function isEditing() {
            return rowIndex === 0;
          },
          onCancel: _helpers.noop,
          onConfirm: _helpers.noop,
          last: true,
          buttonsMountpoint: wrapperNode
        };
      }
    });
    (0, _enzyme.mount)(tableComponent, {
      attachTo: wrapperNode
    });
    expect(wrapper.render()).toMatchSnapshot();
  });
  test('Inline edit header row renders', function () {
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement("div", null));
    var wrapperNode = wrapper.getDOMNode();
    var tableComponent = getTable({
      components: {
        header: {
          row: _index.Table.TableInlineEditHeaderRow,
          cell: function cell(cellProps) {
            return cellProps.children;
          }
        }
      },
      onHeaderRow: function onHeaderRow() {
        return {
          role: 'row',
          isEditing: function isEditing() {
            return true;
          },
          onCancel: _helpers.noop,
          onConfirm: _helpers.noop,
          buttonsMountpoint: wrapperNode
        };
      }
    });
    (0, _enzyme.mount)(tableComponent, {
      attachTo: wrapperNode
    });
    expect(wrapper.render()).toMatchSnapshot();
  });
});