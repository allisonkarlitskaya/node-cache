"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _TimePicker = _interopRequireDefault(require("../TimePicker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('TimePicker is working properly', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_TimePicker["default"], {
    value: "2/2/2 5:22:31 PM"
  }));
  expect(component.render()).toMatchSnapshot();
});
test('TimePicker is working properly with time only', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_TimePicker["default"], {
    value: "5:22:31 PM"
  }));
  expect(component.render()).toMatchSnapshot();
});
test('Edit form of TimePicker', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_TimePicker["default"], {
    value: "2:22:31 PM"
  }));
  component.find('input').simulate('change', {
    target: {
      value: '2:42 PM'
    }
  });
  component.find('input').simulate('blur');
  expect(component.render()).toMatchSnapshot();
  expect(component.state().value).toEqual(new Date('1/1/1 2:42:00 PM'));
});
test('Clear TimePicker', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_TimePicker["default"], {
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
test('Show value after clear TimePicker', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_TimePicker["default"], {
    value: "2/21/2019, 2:22:31 PM"
  }));
  component.find('input').simulate('change', {
    target: {
      value: ''
    }
  });
  component.find('input').simulate('blur');
  component.find('.picker-pf').at(0).simulate('click');
  expect(component.render()).toMatchSnapshot();
});
test('Edit after clear TimePicker', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_TimePicker["default"], {
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
      value: '2:42 PM'
    }
  });
  component.find('input').simulate('blur');
  expect(component.render()).toMatchSnapshot();
});