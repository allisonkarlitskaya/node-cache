function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { mount, shallow } from 'enzyme';
import { Wizard } from '../../index';
test('Wizard header renders properly', () => {
  const onCloseMock = jest.fn();
  const component = shallow(React.createElement(Wizard.Header, {
    onClose: onCloseMock,
    title: "Wizard Title"
  }));
  component.find('.close').simulate('click');
  expect(onCloseMock).toBeCalled();
  expect(component).toMatchSnapshot('Wizard header snapshot');
});
test('Wizard body renders properly', () => {
  const component = shallow(React.createElement(Wizard.Body, {
    className: "someAdditionalClass"
  }, "Some Children"));
  expect(component).toMatchSnapshot('Wizard body snapshot');
});
test('Wizard steps renders properly', () => {
  const component = shallow(React.createElement(Wizard.Steps, {
    className: "someAdditionalClass",
    steps: [React.createElement(Wizard.Step, {
      key: 0,
      stepIndex: 0,
      step: 0,
      activeStep: 0,
      label: "Step 1",
      title: "Step 1",
      onClick: jest.fn()
    }, React.createElement(Wizard.SubStep, {
      subStep: "1.1",
      title: "Step 1.1",
      activeSubStep: 0
    }), React.createElement(Wizard.SubStep, {
      subStep: "1.2",
      title: "Step 1.2",
      activeSubStep: 0
    })), React.createElement(Wizard.Step, {
      key: 1,
      stepIndex: 1,
      step: 1,
      label: "Step 2",
      title: "Step 2",
      activeStep: 0,
      onClick: jest.fn()
    }, React.createElement(Wizard.SubStep, {
      subStep: "2.1",
      title: "Step 2.1",
      activeSubStep: 0
    }), React.createElement(Wizard.SubStep, {
      subStep: "2.2",
      title: "Step 2.2",
      activeSubStep: 0
    }))]
  }));
  expect(component).toMatchSnapshot('Wizard steps snapshot');
});
test('Wizard step renders properly', () => {
  const component = shallow(React.createElement(Wizard.Step, {
    key: 0,
    stepIndex: 0,
    step: 0,
    activeStep: 0,
    label: "Step 1",
    title: "Step 1",
    onClick: jest.fn()
  }, React.createElement(Wizard.SubStep, {
    subStep: "1.1",
    title: "Step 1.1",
    activeSubStep: 0
  }), React.createElement(Wizard.SubStep, {
    subStep: "1.2",
    title: "Step 1.2",
    activeSubStep: 0
  })));
  expect(component).toMatchSnapshot('Wizard step snapshot');
});
test('Wizard sub step renders properly', () => {
  const component = shallow(React.createElement(Wizard.SubStep, {
    subStep: "1.1",
    title: "Step 1.1",
    activeSubStep: 0
  }));
  expect(component).toMatchSnapshot('Wizard sub step snapshot');
});
test('Wizard row renders properly', () => {
  const component = shallow(React.createElement(Wizard.Row, {
    className: "someAdditionalClass"
  }, "Some Children"));
  expect(component).toMatchSnapshot('Wizard row snapshot');
});
test('Wizard sidebar renders properly', () => {
  const component = shallow(React.createElement(Wizard.Sidebar, {
    className: "someAdditionalClass",
    items: ['item1', 'item2']
  }));
  expect(component).toMatchSnapshot('Wizard sidebar snapshot');
});
test('Wizard sidebar group renders properly', () => {
  const component = shallow(React.createElement(Wizard.SidebarGroup, {
    className: "someAdditionalClass",
    step: "1",
    activeStep: "1"
  }, "Some Children"));
  expect(component).toMatchSnapshot('Wizard sidebar group snapshot');
});
test('Wizard sidebar group item renders properly', () => {
  const onClickMock = jest.fn();
  const stepIndex = 1;
  const subStepIndex = 1;
  const component = shallow(React.createElement(Wizard.SidebarGroupItem, {
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
    preventDefault() {}

  });
  expect(onClickMock).toBeCalledWith(stepIndex, subStepIndex);
  expect(component).toMatchSnapshot('Wizard sidebar group item snapshot');
});
test('Wizard main renders properly', () => {
  const component = shallow(React.createElement(Wizard.Main, {
    className: "someAdditionalClass"
  }, "Some Children"));
  expect(component).toMatchSnapshot('Wizard main snapshot');
});
test('Wizard contents renders properly', () => {
  const component = shallow(React.createElement(Wizard.Contents, {
    className: "someAdditionalClass",
    stepIndex: 1,
    subStepIndex: 1.1,
    activeStepIndex: 1,
    activeSubStepIndex: 1.1
  }, "Some Children"));
  expect(component).toMatchSnapshot('Wizard contents snapshot');
});
test('Wizard contents renders hidden class when not active', () => {
  const component = shallow(React.createElement(Wizard.Contents, {
    className: "someAdditionalClass",
    stepIndex: 1,
    subStepIndex: 1.1,
    activeStepIndex: 1,
    activeSubStepIndex: 1.2
  }, "Some Children"));
  expect(component).toMatchSnapshot('Wizard contents hidden snapshot');
});
test('Wizard review steps renders properly', () => {
  const component = shallow(React.createElement(Wizard.ReviewSteps, {
    className: "someAdditionalClass"
  }, "Some Children"));
  expect(component).toMatchSnapshot('Wizard review steps snapshot');
});
test('Wizard review step renders properly', () => {
  const onClickMock = jest.fn();
  const component = shallow(React.createElement(Wizard.ReviewStep, {
    onClick: onClickMock,
    title: "Step One",
    collapsed: true
  }, "Some Children"));
  component.find('a').simulate('click');
  expect(onClickMock).toBeCalled();
  expect(component).toMatchSnapshot('Wizard review step snapshot');
});
test('Wizard review sub steps renders properly', () => {
  const component = shallow(React.createElement(Wizard.ReviewSubSteps, {
    className: "someAdditionalClass",
    collapsed: true
  }, "Some Children"));
  expect(component).toMatchSnapshot('Wizard review sub steps snapshot');
});
test('Wizard review sub step renders properly', () => {
  const onClickMock = jest.fn();
  const component = shallow(React.createElement(Wizard.ReviewSubStep, {
    onClick: onClickMock,
    label: "1.1",
    title: "1.1",
    collapsed: true
  }, "Some Children"));
  component.find('a').simulate('click');
  expect(onClickMock).toBeCalled();
  expect(component).toMatchSnapshot('Wizard review sub step snapshot');
});
test('Wizard review content renders properly', () => {
  const component = shallow(React.createElement(Wizard.ReviewContent, {
    className: "someAdditionalClass",
    collapsed: true
  }, "Some Children"));
  expect(component).toMatchSnapshot('Wizard review content snapshot');
});
test('Wizard review item renders properly', () => {
  const component = shallow(React.createElement(Wizard.ReviewItem, {
    className: "someAdditionalClass"
  }, "Some Children"));
  expect(component).toMatchSnapshot('Wizard review item snapshot');
});
test('Wizard footer renders properly', () => {
  const component = shallow(React.createElement(Wizard.Footer, {
    className: "someAdditionalClass"
  }, "Some Children"));
  expect(component).toMatchSnapshot('Wizard footer snapshot');
});
test('Wizard pattern body renders properly while loading', () => {
  const component = shallow(React.createElement(Wizard.Pattern.Body, {
    loading: true,
    loadingTitle: "Wizard Title",
    loadingMessage: "Wizard loading..."
  }));
  expect(component).toMatchSnapshot('Wizard pattern body loading snapshot');
});
test('Wizard pattern body renders active step', () => {
  const component = shallow(React.createElement(Wizard.Pattern.Body, {
    loading: false,
    steps: [{
      title: 'General',
      render: () => React.createElement("p", null, "General")
    }, {
      title: 'Step Two',
      render: () => React.createElement("p", null, "Step Two")
    }, {
      title: 'Step Three',
      render: () => React.createElement("p", null, "Step Three")
    }],
    activeStepIndex: 0
  }));
  expect(component).toMatchSnapshot('Wizard pattern body renders active step snapshot');
});
test('Wizard pattern body renders empty if no steps and not loading', () => {
  const component = shallow(React.createElement(Wizard.Pattern.Body, {
    loading: false
  }));
  expect(component).toMatchSnapshot('Wizard pattern body renders empty snapshot');
});

const testWizardPattern = props => {
  const onHide = jest.fn();
  const onExited = jest.fn();
  const onStepChanged = jest.fn();
  return React.createElement(Wizard.Pattern, _extends({
    show: true,
    onHide: onHide,
    onExited: onExited,
    title: "Wizard Pattern Example",
    nextStepDisabled: false,
    steps: [{
      title: 'General',
      render: () => React.createElement("p", null, "General")
    }, {
      title: 'Step Two',
      render: () => React.createElement("p", null, "Step Two")
    }, {
      title: 'Step Three',
      render: () => React.createElement("p", null, "Step Three")
    }],
    loadingTitle: "Loading...",
    loadingMessage: "This may take a minute.",
    activeStepIndex: 0,
    onStepChanged: onStepChanged
  }, props));
};

test('Wizard Pattern renders properly', () => {
  const component = shallow(testWizardPattern({
    loading: false
  }));
  expect(component).toMatchSnapshot('Wizard pattern snapshot');
});
test('Wizard Pattern hides onClose', () => {
  const onHideMock = jest.fn();
  const component = mount(testWizardPattern({
    onHide: onHideMock
  }));
  component.find('.close').simulate('click');
  expect(onHideMock).toBeCalled();
});
test('Wizard Pattern sets active step to step 2 after step click', () => {
  const onStepChangedMock = jest.fn();
  const onNextMock = jest.fn();
  const component = mount(testWizardPattern({
    onStepChanged: onStepChangedMock,
    onNext: onNextMock
  }));
  component.find('.wizard-pf-step a').at(1).simulate('click');
  expect(onNextMock).toBeCalledWith(1);
  expect(onStepChangedMock).toBeCalledWith(1);
});
test('Wizard Pattern accepts next step then previous step', () => {
  let eventCount = 0;
  const onBackMock = jest.fn();
  const component = mount(testWizardPattern({
    onStepChanged: () => eventCount++,
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

const testStatefulWizardPattern = props => {
  const onHide = jest.fn();
  const onExited = jest.fn();
  const onStepChanged = jest.fn();
  return React.createElement(Wizard.Pattern.Stateful, _extends({
    show: true,
    onHide: onHide,
    onExited: onExited,
    title: "Wizard Pattern Stateful Example",
    shouldDisableNextStep: () => false,
    shouldDisablePreviousStep: () => false,
    shouldPreventStepChange: () => false,
    steps: [{
      title: 'General',
      render: () => React.createElement("p", null, "General")
    }, {
      title: 'Step Two',
      render: () => React.createElement("p", null, "Step Two")
    }, {
      title: 'Step Three',
      render: () => React.createElement("p", null, "Step Three")
    }],
    loadingTitle: "Loading...",
    loadingMessage: "This may take a minute.",
    onStepChanged: onStepChanged
  }, props));
};

test('Wizard Stateful Pattern renders properly', () => {
  const component = shallow(testStatefulWizardPattern());
  expect(component.state().activeStepIndex).toBe(0);
  expect(component).toMatchSnapshot('Wizard stateful pattern snapshot');
});
test('Wizard Stateful Pattern renders properly after wizard step click', () => {
  const component = mount(testStatefulWizardPattern());
  component.find('.wizard-pf-step a').at(1).simulate('click');
  expect(component.state().activeStepIndex).toBe(1);
});
test('Wizard Stateful Pattern should return on shouldPreventStepChange', () => {
  const component = mount(testStatefulWizardPattern({
    shouldPreventStepChange: (activeStepIndex, newStepIndex) => true
  }));
  component.find('.wizard-pf-step a').at(1).simulate('click');
  expect(component.state().activeStepIndex).toBe(0);
});

const testDisableNextStepWizard = props => {
  const onHide = jest.fn();
  const onExited = jest.fn();
  const onStepChanged = jest.fn();
  return React.createElement(Wizard.Pattern.Stateful, _extends({
    show: true,
    onHide: onHide,
    onExited: onExited,
    onStepChanged: onStepChanged,
    title: "Wizard Disable Next Step",
    shouldDisableNextStep: () => true,
    steps: [{
      title: '1',
      render: () => React.createElement("p", null, "1")
    }, {
      title: '2',
      render: () => React.createElement("p", null, "2")
    }, {
      title: '3',
      render: () => React.createElement("p", null, "3")
    }]
  }, props));
};

const testDisablePreviousStepWizard = props => {
  const onHide = jest.fn();
  const onExited = jest.fn();
  const onStepChanged = jest.fn();
  return React.createElement(Wizard.Pattern.Stateful, _extends({
    show: true,
    onHide: onHide,
    onExited: onExited,
    onStepChanged: onStepChanged,
    title: "Wizard Disable Previous Step",
    shouldDisablePreviousStep: idx => idx === 2,
    shouldDisableCancelButton: idx => idx === 1,
    steps: [{
      title: '1',
      render: () => React.createElement("p", null, "1")
    }, {
      title: '2',
      render: () => React.createElement("p", {
        className: "step2"
      }, "2")
    }, {
      title: '3',
      render: () => React.createElement("p", null, "3")
    }]
  }, props));
};

const expectDisability = (component, buttonIndex) => expect(component.find('.wizard-pf-footer .btn').at(buttonIndex).getDOMNode().disabled);

const clickOnNext = component => component.find('.wizard-pf-footer .btn').at(2).simulate('click');

test('Wizard Stateful with shouldDisableNextStep should disable next step', () => {
  const component = mount(testDisableNextStepWizard());
  expectDisability(component, 2).toBe(true);
});
test('Wizard Stateful with shouldDisablePreviousStep and shouldDisableCancelButton', () => {
  const component = mount(testDisablePreviousStepWizard());
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