"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mockRows = require("./mockRows");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * simple singleton mockServer API for server paginated table story
 *
 * typically one would connect this api to redux actions/redux store
 * and pass data via a redux connected component.
 */
var MockServerApi = /*#__PURE__*/function () {
  _createClass(MockServerApi, null, [{
    key: "toggleRow",
    value: function toggleRow(row) {
      return Object.assign({}, row, {
        selected: !row.selected
      });
    }
  }]);

  function MockServerApi() {
    _classCallCheck(this, MockServerApi);

    this.mockRows = _mockRows.mockRows;
  }

  _createClass(MockServerApi, [{
    key: "getPage",
    value: function getPage(_ref) {
      var _this = this;

      var sortingColumns = _ref.sortingColumns,
          page = _ref.page,
          perPage = _ref.perPage;
      // server api accepts sort parameters, the current page, and the number perPage
      // callServerApi(sortingColumns, page, perPage)
      // mock server logic to update the paginated rows
      var p = page - 1 || 0;
      var amountOfPages = Math.ceil(this.mockRows.length / perPage);
      var startPage = p < amountOfPages ? p : 0;
      var endOfPage = startPage * perPage + perPage;
      return new Promise(function (resolve) {
        // server api returns sorted/paged rows, total of amount of pages, total items,
        // items start, items end
        resolve({
          rows: _this.mockRows.slice(startPage * perPage, endOfPage),
          amountOfPages: amountOfPages,
          itemCount: _this.mockRows.length
        });
      });
    }
  }, {
    key: "selectRow",
    value: function selectRow(_ref2) {
      var row = _ref2.row;
      // call server api to update row
      // callServerApi(row)
      // mock server logic to update `mockRows`
      var index = this.mockRows.findIndex(function (r) {
        return r.id === row.id;
      });

      if (index > -1) {
        this.mockRows[index] = MockServerApi.toggleRow(this.mockRows[index]);
      }

      return new Promise(function (resolve) {
        // server api returns updated row
        resolve({
          row: row
        });
      });
    }
  }, {
    key: "selectAllRows",
    value: function selectAllRows(_ref3) {
      var _this2 = this;

      var checked = _ref3.checked,
          rows = _ref3.rows;
      // call server api to update all current rows
      // callServerApi(rows)
      // mock server logic to update `mockRows`
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var row = _step.value;

          var index = _this2.mockRows.findIndex(function (r) {
            return r.id === row.id;
          });

          if (index > -1) {
            var updated = Object.assign({}, _this2.mockRows[index], {
              selected: checked
            });
            _this2.mockRows[index] = updated;
          }
        };

        for (var _iterator = rows[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return new Promise(function (resolve) {
        // server api returns updated rows
        resolve({
          rows: rows
        });
      });
    }
  }]);

  return MockServerApi;
}();

var _default = new MockServerApi();

exports["default"] = _default;