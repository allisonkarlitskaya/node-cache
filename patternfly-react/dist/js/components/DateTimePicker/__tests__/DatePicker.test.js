"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _DatePicker = _interopRequireDefault(require("../DatePicker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('DatePicker is working properly', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_DatePicker["default"], {
    value: "2/21/2019, 2:22:31 PM"
  }));
  expect(component.render()).toMatchSnapshot();
});
test('Edit form of DatePicker', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_DatePicker["default"], {
    value: "2/21/2019"
  }));
  expect(component.render()).toMatchSnapshot();
  component.find('input').simulate('change', {
    target: {
      value: '2/22/2019'
    }
  });
  component.find('input').simulate('blur');
  expect(component.state().value).toEqual(new Date('2/22/2019'));
});
test('Clear DatePicker', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_DatePicker["default"], {
    value: "2/21/2019, 2:22:31 PM"
  }));
  component.find('input').simulate('change', {
    target: {
      value: ''
    }
  });
  component.find('input').simulate('blur');
  expect(component.render()).toMatchSnapshot();
});
test('Show value after clear DatePicker', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_DatePicker["default"], {
    value: "2/21/2019, 2:22:31 PM"
  }));
  component.find('input').simulate('change', {
    target: {
      value: ''
    }
  });
  component.find('input').simulate('blur');
  component.find('.date-picker-pf').at(0).simulate('click');
  expect(component.render()).toMatchSnapshot();
});
test('Edit after clear DatePicker', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_DatePicker["default"], {
    value: "2/21/2019, 2:22:31 PM"
  }));
  component.find('input').simulate('change', {
    target: {
      value: ''
    }
  });
  component.find('input').simulate('blur');
  component.find('input').simulate('change', {
    target: {
      value: '2/21/2019'
    }
  });
  component.find('input').simulate('blur');
  expect(component.render()).toMatchSnapshot();
});