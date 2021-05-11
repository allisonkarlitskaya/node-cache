"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var testPaginationRowSnapshot = function testPaginationRowSnapshot(viewType) {
  var pageSizeDropUp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.PaginationRow, {
    viewType: viewType,
    className: "paginator",
    pagination: {
      page: 1,
      perPage: 6,
      perPageOptions: [6, 10, 15, 25, 50]
    },
    amountOfPages: 5,
    pageSizeDropUp: pageSizeDropUp,
    itemCount: 75,
    itemsStart: 1,
    itemsEnd: 15,
    messages: {
      firstPage: 'עמוד ראשון',
      previousPage: 'עמוד קודם',
      nextPage: 'עמוד הבא',
      lastPage: 'עמוד אחרון',
      perPage: 'לדף',
      of: 'שֶׁל'
    },
    onSubmit: jest.fn(),
    onPerPageSelect: jest.fn(),
    onFirstPage: jest.fn(),
    onPreviousPage: jest.fn(),
    onPageInput: jest.fn(),
    onNextPage: jest.fn(),
    onLastPage: jest.fn()
  }));
  expect(component.render()).toMatchSnapshot();
};

_index.PAGINATION_VIEW_TYPES.forEach(function (viewType) {
  test("PaginationRow ".concat(viewType, " renders properly"), function () {
    testPaginationRowSnapshot(viewType);
  });
});

test('PaginationRow.Items renders', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.PaginationRow.Items, {
    itemCount: 55,
    itemsStart: 0,
    itemsEnd: 10,
    messagesOf: "of"
  }));
  expect(component.render()).toMatchSnapshot();
});
test('PaginationRow renders with dropdown page size selector', function () {
  testPaginationRowSnapshot(_index.PAGINATION_VIEW.LIST, false);
});
test('PaginationRow.Back renders', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.PaginationRow.Back, {
    page: 1,
    messagesFirstPage: "first page",
    messagesPreviousPage: "previous page",
    onFirstPage: jest.fn(),
    onPreviousPage: jest.fn()
  }));
  expect(component.render()).toMatchSnapshot();
});
test('PaginationRow.ButtonGroup renders', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.PaginationRow.ButtonGroup, {
    className: "custom-class"
  }));
  expect(component.render()).toMatchSnapshot();
});
test('PaginationRow.Forward renders', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.PaginationRow.Forward, {
    page: 1,
    amountOfPages: 4,
    messagesNextPage: "Next Page",
    messagesLastPage: "Last Page",
    onNextPage: jest.fn(),
    onLastPage: jest.fn()
  }));
  expect(component.render()).toMatchSnapshot();
});
test('PaginationRow.AmountOfPages renders', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.PaginationRow.AmountOfPages, {
    messagesOf: "of",
    amountOfPages: 4
  }));
  expect(component.render()).toMatchSnapshot();
});
test('Paginator renders properly the first page', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Paginator, {
    itemCount: 75,
    pagination: {
      page: 1,
      perPage: 10,
      perPageOptions: [5, 10, 15]
    },
    viewType: _index.PAGINATION_VIEW.LIST
  }));
  expect(component.render()).toMatchSnapshot();
});
test('Paginator renders properly a middle page', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Paginator, {
    itemCount: 75,
    pagination: {
      page: 4,
      perPage: 10,
      perPageOptions: [5, 10, 15]
    },
    viewType: _index.PAGINATION_VIEW.LIST
  }));
  expect(component.render()).toMatchSnapshot();
});
test('Paginator renders properly the last page', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Paginator, {
    itemCount: 75,
    pagination: {
      page: 8,
      perPage: 10,
      perPageOptions: [5, 10, 15]
    },
    viewType: _index.PAGINATION_VIEW.LIST
  }));
  expect(component.render()).toMatchSnapshot();
});