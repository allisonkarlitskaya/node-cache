"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _AsyncTypeAheadSelect = _interopRequireDefault(require("./AsyncTypeAheadSelect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('AsyncTypeAheadSelect is working !!', function () {
  var typeaheadRef;
  var optionsArray = ['One', 'Two', 'Three'];
  var timeout = 500;

  var handleSearch = function handleSearch() {
    setTimeout(function () {
      return optionsArray;
    }, timeout);
  };

  var component = (0, _enzyme.shallow)(_react["default"].createElement(_AsyncTypeAheadSelect["default"], {
    useCache: true,
    ref: function ref(r) {
      typeaheadRef = r;
    },
    labelKey: "login",
    minLength: 0,
    placeholder: "Search someone who have forked Patternfly-react..",
    onSearch: handleSearch,
    renderMenuItemChildren: function renderMenuItemChildren(option) {
      return _react["default"].createElement("span", null, "option");
    }
  })).dive();
  expect(component).toMatchSnapshot();
  component.instance().handleSearch();
  expect(typeaheadRef).toBeUndefined();
  setTimeout(function () {
    component.update();
    expect(component.state().options).toEqual(optionsArray);
    expect(component.state().isLoading).toEqual(false);
    expect(typeaheadRef.getInstance()).toBeDefined();
  }, timeout + 1000);
});