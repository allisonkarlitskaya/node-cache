"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = require("../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

test('Wizard header renders properly', function () {
  var onCloseMock = jest.fn();
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_index.Wizard.Header, {
    onClose: onCloseMock,
    title: "Wizard Title"
  }));
  component.find('.close').simulate('click');
  expect(onCloseMock).toBeCalled();
  expect(component).toMatchSnapshot('Wizard header snapshot');
});
test('Wizard body renders properly', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_index.Wizard.Body, {
    className: "someAdditionalClass"
  }, "Some Children"));
  expect(component).toMatchSnapshot('Wizard body snapshot');
});
test('Wizard steps renders properly', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_index.Wizard.Steps, {
    className: "someAdditionalClass",
    steps: [_react["default"].createElement(_index.Wizard.Step, {
      key: 0,
      stepIndex: 0,
      step: 0,
      activeStep: 0,
      label: "Step 1",
      title: "Step 1",
      onClick: jest.fn()
    }, _react["default"].createElement(_index.Wizard.SubStep, {
      subStep: "1.1",
      title: "Step 1.1",
      activeSubStep: 0
    }), _react["default"].createElement(_index.Wizard.SubStep, {
      subStep: "1.2",
      title: "Step 1.2",
      activeSubStep: 0
    })), _react["default"].createElement(_index.Wizard.Step, {
      key: 1,
      stepIndex: 1,
      step: 1,
      label: "Step 2",
      title: "Step 2",
      activeStep: 0,
      onClick: jest.fn()
    }, _react["default"].createElement(_index.Wizard.SubStep, {
      subStep: "2.1",
      title: "Step 2.1",
      activeSubStep: 0
    }), _react["default"].createElement(_index.Wizard.SubStep, {
      subStep: "2.2",
      title: "Step 2.2",
      activeSubStep: 0
    }))]
  }));
  expect(component).toMatchSnapshot('Wizard steps snapshot');
});
test('Wizard step renders properly', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_index.Wizard.Step, {
    key: 0,
    stepIndex: 0,
    step: 0,
    activeStep: 0,
    label: "Step 1",
    title: "Step 1",
    onClick: jest.fn()
  }, _react["default"].createElement(_index.Wizard.SubStep, {
    subStep: "1.1",
    title: "Step 1.1",
    activeSubStep: 0
  }), _react["default"].createElement(_index.Wizard.SubStep, {
    subStep: "1.2",
    title: "Step 1.2",
    activeSubStep: 0
  })));
  expect(component).toMatchSnapshot('Wizard step snapshot');
});
test('Wizard sub step renders properly', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_index.Wizard.SubStep, {
    subStep: "1.1",
    title: "Step 1.1",
    activeSubStep: 0
  }));
  expect(component).toMatchSnapshot('Wizard sub step snapshot');
});
test('Wizard row renders properly', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_index.Wizard.Row, {
    className: "someAdditionalClass"
  }, "Some Children"));
  expect(component).toMatchSnapshot('Wizard row snapshot');
});
test('Wizard sidebar renders properly', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_index.Wizard.Sidebar, {
    className: "someAdditionalClass",
    items: ['item1', 'item2']
  }));
  expect(component).toMatchSnapshot('Wizard sidebar snapshot');
});
test('Wizard sidebar group renders properly', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_index.Wizard.SidebarGroup, {
    className: "someAdditionalClass",
    step: "1",
    activeStep: "1"
  }, "Some Children"));
  expect(component).toMatchSnapshot('Wizard sidebar group snapshot');
});
test('Wizard sidebar group item renders properly', function () {
  var onClickMock = jest.fn();
  var stepIndex = 1;
  var subStepIndex = 1;
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_index.Wizard.SidebarGroupItem, {
    className: "wizard-sidebar-group-item",
    key: "1.1",
    stepIndex: stepIndex,
    subStepIndex: subStepIndex,
    subStep: "1.1",
    label: "1A.",
    title: "Details",
    activeSubStep: "1.1",
    onClick: onClickMock
  }));
  component.find('a').simulate('click', {
    preventDefault: function preventDefault() {}
  });
  expect(onClickMock).toBeCalledWith(stepIndex, subStepIndex);
  expect(component).toMatchSnapshot('Wizard sidebar group item snapshot');
});
test('Wizard main renders properly', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_index.Wizard.Main, {
    className: "someAdditionalClass"
  }, "Some Children"));
  expect(component).toMatchSnapshot('Wizard main snapshot');
});
test('Wizard contents renders properly', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_index.Wizard.Contents, {
    className: "someAdditionalClass",
    stepIndex: 1,
    subStepIndex: 1.1,
    activeStepIndex: 1,
    activeSubStepIndex: 1.1
  }, "Some Children"));
  expect(component).toMatchSnapshot('Wizard contents snapshot');
});
test('Wizard contents renders hidden class when not active', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_index.Wizard.Contents, {
    className: "someAdditionalClass",
    stepIndex: 1,
    subStepIndex: 1.1,
    activeStepIndex: 1,
    activeSubStepIndex: 1.2
  }, "Some Children"));
  expect(component).toMatchSnapshot('Wizard contents hidden snapshot');
});
test('Wizard review steps renders properly', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_index.Wizard.ReviewSteps, {
    className: "someAdditionalClass"
  }, "Some Children"));
  expect(component).toMatchSnapshot('Wizard review steps snapshot');
});
test('Wizard review step renders properly', function () {
  var onClickMock = jest.fn();
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_index.Wizard.ReviewStep, {
    onClick: onClickMock,
    title: "Step One",
    collapsed: true
  }, "Some Children"));
  component.find('a').simulate('click');
  expect(onClickMock).toBeCalled();
  expect(component).toMatchSnapshot('Wizard review step snapshot');
});
test('Wizard review sub steps renders properly', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_index.Wizard.ReviewSubSteps, {
    className: "someAdditionalClass",
    collapsed: true
  }, "Some Children"));
  expect(component).toMatchSnapshot('Wizard review sub steps snapshot');
});
test('Wizard review sub step renders properly', function () {
  var onClickMock = jest.fn();
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_index.Wizard.ReviewSubStep, {
    onClick: onClickMock,
    label: "1.1",
    title: "1.1",
    collapsed: true
  }, "Some Children"));
  component.find('a').simulate('click');
  expect(onClickMock).toBeCalled();
  expect(component).toMatchSnapshot('Wizard review sub step snapshot');
});
test('Wizard review content renders properly', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_index.Wizard.ReviewContent, {
    className: "someAdditionalClass",
    collapsed: true
  }, "Some Children"));
  expect(component).toMatchSnapshot('Wizard review content snapshot');
});
test('Wizard review item renders properly', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_index.Wizard.ReviewItem, {
    className: "someAdditionalClass"
  }, "Some Children"));
  expect(component).toMatchSnapshot('Wizard review item snapshot');
});
test('Wizard footer renders properly', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_index.Wizard.Footer, {
    className: "someAdditionalClass"
  }, "Some Children"));
  expect(component).toMatchSnapshot('Wizard footer snapshot');
});
test('Wizard pattern body renders properly while loading', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_index.Wizard.Pattern.Body, {
    loading: true,
    loadingTitle: "Wizard Title",
    loadingMessage: "Wizard loading..."
  }));
  expect(component).toMatchSnapshot('Wizard pattern body loading snapshot');
});
test('Wizard pattern body renders active step', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_index.Wizard.Pattern.Body, {
    loading: false,
    steps: [{
      title: 'General',
      render: function render() {
        return _react["default"].createElement("p", null, "General");
      }
    }, {
      title: 'Step Two',
      render: function render() {
        return _react["default"].createElement("p", null, "Step Two");
      }
    }, {
      title: 'Step Three',
      render: function render() {
        return _react["default"].createElement("p", null, "Step Three");
      }
    }],
    activeStepIndex: 0
  }));
  expect(component).toMatchSnapshot('Wizard pattern body renders active step snapshot');
});
test('Wizard pattern body renders empty if no steps and not loading', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_index.Wizard.Pattern.Body, {
    loading: false
  }));
  expect(component).toMatchSnapshot('Wizard pattern body renders empty snapshot');
});

var testWizardPattern = function testWizardPattern(props) {
  var onHide = jest.fn();
  var onExited = jest.fn();
  var onStepChanged = jest.fn();
  return _react["default"].createElement(_index.Wizard.Pattern, _extends({
    show: true,
    onHide: onHide,
    onExited: onExited,
    title: "Wizard Pattern Example",
    nextStepDisabled: false,
    steps: [{
      title: 'General',
      render: function render() {
        return _react["default"].createElement("p", null, "General");
      }
    }, {
      title: 'Step Two',
      render: function render() {
        return _react["default"].createElement("p", null, "Step Two");
      }
    }, {
      title: 'Step Three',
      render: function render() {
        return _react["default"].createElement("p", null, "Step Three");
      }
    }],
    loadingTitle: "Loading...",
    loadingMessage: "This may take a minute.",
    activeStepIndex: 0,
    onStepChanged: onStepChanged
  }, props));
};

test('Wizard Pattern renders properly', function () {
  var component = (0, _enzyme.shallow)(testWizardPattern({
    loading: false
  }));
  expect(component).toMatchSnapshot('Wizard pattern snapshot');
});
test('Wizard Pattern hides onClose', function () {
  var onHideMock = jest.fn();
  var component = (0, _enzyme.mount)(testWizardPattern({
    onHide: onHideMock
  }));
  component.find('.close').simulate('click');
  expect(onHideMock).toBeCalled();
});
test('Wizard Pattern sets active step to step 2 after step click', function () {
  var onStepChangedMock = jest.fn();
  var onNextMock = jest.fn();
  var component = (0, _enzyme.mount)(testWizardPattern({
    onStepChanged: onStepChangedMock,
    onNext: onNextMock
  }));
  component.find('.wizard-pf-step a').at(1).simulate('click');
  expect(onNextMock).toBeCalledWith(1);
  expect(onStepChangedMock).toBeCalledWith(1);
});
test('Wizard Pattern accepts next step then previous step', function () {
  var eventCount = 0;
  var onBackMock = jest.fn();
  var component = (0, _enzyme.mount)(testWizardPattern({
    onStepChanged: function onStepChanged() {
      return eventCount++;
    },
    onBack: onBackMock
  })); // click next

  component.find('.wizard-pf-footer button').at(2).simulate('click');
  component.setProps({
    activeStepIndex: 1
  }); // click previous

  component.find('.wizard-pf-footer button').at(1).simulate('click');
  expect(onBackMock).toBeCalledWith(0);
  expect(eventCount).toBe(2);
});

var testStatefulWizardPattern = function testStatefulWizardPattern(props) {
  var onHide = jest.fn();
  var onExited = jest.fn();
  var onStepChanged = jest.fn();
  return _react["default"].createElement(_index.Wizard.Pattern.Stateful, _extends({
    show: true,
    onHide: onHide,
    onExited: onExited,
    title: "Wizard Pattern Stateful Example",
    shouldDisableNextStep: function shouldDisableNextStep() {
      return false;
    },
    shouldDisablePreviousStep: function shouldDisablePreviousStep() {
      return false;
    },
    shouldPreventStepChange: function shouldPreventStepChange() {
      return false;
    },
    steps: [{
      title: 'General',
      render: function render() {
        return _react["default"].createElement("p", null, "General");
      }
    }, {
      title: 'Step Two',
      render: function render() {
        return _react["default"].createElement("p", null, "Step Two");
      }
    }, {
      title: 'Step Three',
      render: function render() {
        return _react["default"].createElement("p", null, "Step Three");
      }
    }],
    loadingTitle: "Loading...",
    loadingMessage: "This may take a minute.",
    onStepChanged: onStepChanged
  }, props));
};

test('Wizard Stateful Pattern renders properly', function () {
  var component = (0, _enzyme.shallow)(testStatefulWizardPattern());
  expect(component.state().activeStepIndex).toBe(0);
  expect(component).toMatchSnapshot('Wizard stateful pattern snapshot');
});
test('Wizard Stateful Pattern renders properly after wizard step click', function () {
  var component = (0, _enzyme.mount)(testStatefulWizardPattern());
  component.find('.wizard-pf-step a').at(1).simulate('click');
  expect(component.state().activeStepIndex).toBe(1);
});
test('Wizard Stateful Pattern should return on shouldPreventStepChange', function () {
  var component = (0, _enzyme.mount)(testStatefulWizardPattern({
    shouldPreventStepChange: function shouldPreventStepChange(activeStepIndex, newStepIndex) {
      return true;
    }
  }));
  component.find('.wizard-pf-step a').at(1).simulate('click');
  expect(component.state().activeStepIndex).toBe(0);
});

var testDisableNextStepWizard = function testDisableNextStepWizard(props) {
  var onHide = jest.fn();
  var onExited = jest.fn();
  var onStepChanged = jest.fn();
  return _react["default"].createElement(_index.Wizard.Pattern.Stateful, _extends({
    show: true,
    onHide: onHide,
    onExited: onExited,
    onStepChanged: onStepChanged,
    title: "Wizard Disable Next Step",
    shouldDisableNextStep: function shouldDisableNextStep() {
      return true;
    },
    steps: [{
      title: '1',
      render: function render() {
        return _react["default"].createElement("p", null, "1");
      }
    }, {
      title: '2',
      render: function render() {
        return _react["default"].createElement("p", null, "2");
      }
    }, {
      title: '3',
      render: function render() {
        return _react["default"].createElement("p", null, "3");
      }
    }]
  }, props));
};

var testDisablePreviousStepWizard = function testDisablePreviousStepWizard(props) {
  var onHide = jest.fn();
  var onExited = jest.fn();
  var onStepChanged = jest.fn();
  return _react["default"].createElement(_index.Wizard.Pattern.Stateful, _extends({
    show: true,
    onHide: onHide,
    onExited: onExited,
    onStepChanged: onStepChanged,
    title: "Wizard Disable Previous Step",
    shouldDisablePreviousStep: function shouldDisablePreviousStep(idx) {
      return idx === 2;
    },
    shouldDisableCancelButton: function shouldDisableCancelButton(idx) {
      return idx === 1;
    },
    steps: [{
      title: '1',
      render: function render() {
        return _react["default"].createElement("p", null, "1");
      }
    }, {
      title: '2',
      render: function render() {
        return _react["default"].createElement("p", {
          className: "step2"
        }, "2");
      }
    }, {
      title: '3',
      render: function render() {
        return _react["default"].createElement("p", null, "3");
      }
    }]
  }, props));
};

var expectDisability = function expectDisability(component, buttonIndex) {
  return expect(component.find('.wizard-pf-footer .btn').at(buttonIndex).getDOMNode().disabled);
};

var clickOnNext = function clickOnNext(component) {
  return component.find('.wizard-pf-footer .btn').at(2).simulate('click');
};

test('Wizard Stateful with shouldDisableNextStep should disable next step', function () {
  var component = (0, _enzyme.mount)(testDisableNextStepWizard());
  expectDisability(component, 2).toBe(true);
});
test('Wizard Stateful with shouldDisablePreviousStep and shouldDisableCancelButton', function () {
  var component = (0, _enzyme.mount)(testDisablePreviousStepWizard());
  expectDisability(component, 0).toBe(false);
  expectDisability(component, 1).toBe(true); // cannot go back on the first step

  clickOnNext(component);
  expect(component.exists('.step2')).toEqual(true);
  expectDisability(component, 0).toBe(true);
  expectDisability(component, 1).toBe(false);
  clickOnNext(component);
  expectDisability(component, 0).toBe(false);
  expectDisability(component, 1).toBe(true);
});