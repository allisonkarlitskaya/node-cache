import React from 'react';
import { mount } from 'enzyme';
import { Button, DropdownButton, Icon, Form, Grid, MenuItem, Modal } from '../../index';
test('Inline Form renders properly', () => {
  const component = mount(React.createElement(Form, {
    inline: true
  }, React.createElement(Form.FormGroup, {
    controlId: "email",
    placeholder: "Email"
  }, React.createElement(Form.FormControl, {
    type: "email",
    placeholder: "Email"
  })), React.createElement(Form.FormGroup, {
    controlId: "password",
    placeholder: "Password"
  }, React.createElement(Form.FormControl, {
    type: "password",
    placeholder: "Password"
  })), React.createElement(Button, {
    bsStyle: "primary"
  }, "Log In")));
  expect(component.render()).toMatchSnapshot();
});
test('Horizontal Form renders properly', () => {
  const component = mount(React.createElement(Form, {
    horizontal: true
  }, React.createElement(Form.FormGroup, {
    controlId: "name"
  }, React.createElement(Grid.Col, {
    componentClass: Form.ControlLabel,
    sm: 3
  }, "Name"), React.createElement(Grid.Col, {
    sm: 9
  }, React.createElement(Form.FormControl, {
    type: "text"
  }), React.createElement(Form.HelpBlock, null, "Enter your name"))), React.createElement(Form.FormGroup, {
    controlId: "address"
  }, React.createElement(Grid.Col, {
    componentClass: Form.ControlLabel,
    sm: 3
  }, "Address"), React.createElement(Grid.Col, {
    sm: 9
  }, React.createElement(Form.FormControl, {
    type: "address",
    disabled: true
  }), React.createElement(Form.HelpBlock, null, "Enter your address"))), React.createElement(Form.FormGroup, {
    controlId: "city"
  }, React.createElement(Grid.Col, {
    componentClass: Form.ControlLabel,
    sm: 3
  }, "City"), React.createElement(Grid.Col, {
    sm: 9
  }, React.createElement(Form.FormControl, {
    type: "text",
    disabled: true
  }), React.createElement(Form.HelpBlock, null, "Enter your city"))), React.createElement(Form.FormGroup, {
    controlId: "email"
  }, React.createElement(Grid.Col, {
    componentClass: Form.ControlLabel,
    sm: 3
  }, "Email"), React.createElement(Grid.Col, {
    sm: 9
  }, React.createElement(Form.FormControl, {
    type: "email",
    disabled: true
  }), React.createElement(Form.HelpBlock, null, "Enter a valid email address"))), React.createElement(Form.FormGroup, {
    controlId: "url"
  }, React.createElement(Grid.Col, {
    componentClass: Form.ControlLabel,
    sm: 3
  }, "My meeting URL"), React.createElement(Grid.Col, {
    sm: 9
  }, React.createElement(Form.InputGroup, null, React.createElement(Form.FormControl, {
    type: "url"
  }), React.createElement(Form.InputGroup.Button, null, React.createElement(Button, null, "Copy URL"))), React.createElement(Form.HelpBlock, null, "Enter a valid URL"))), React.createElement(Grid.Row, {
    style: {
      paddingTop: '10px',
      paddingBottom: '10px'
    }
  }, React.createElement(Grid.Col, {
    smOffset: 3,
    sm: 9
  }, React.createElement("span", null, React.createElement(Button, {
    bsStyle: "primary"
  }, "Save")), React.createElement("span", null, React.createElement(Button, {
    bsStyle: "default"
  }, "Cancel"))))));
  expect(component.render()).toMatchSnapshot();
});
test('Vertical Form renders properly', () => {
  const component = mount(React.createElement(Form, null, React.createElement(Grid.Row, null, React.createElement(Grid.Col, null, React.createElement(Form.FormGroup, {
    controlId: "name"
  }, React.createElement(Form.ControlLabel, null, "Name"), React.createElement(Form.FormControl, {
    type: "text"
  }), React.createElement(Form.HelpBlock, null, "Enter your name")), React.createElement(Form.FormGroup, {
    controlId: "address"
  }, React.createElement(Form.ControlLabel, null, "Address"), React.createElement(Form.FormControl, {
    type: "address"
  }), React.createElement(Form.HelpBlock, null, "Enter your address")), React.createElement(Form.FormGroup, {
    controlId: "city"
  }, React.createElement(Form.ControlLabel, null, "City"), React.createElement(Form.FormControl, {
    type: "text"
  }), React.createElement(Form.HelpBlock, null, "Enter your city")), React.createElement(Form.FormGroup, {
    controlId: "email"
  }, React.createElement(Form.ControlLabel, null, "Email"), React.createElement(Form.FormControl, {
    type: "email"
  }), React.createElement(Form.HelpBlock, null, "Enter a valid email address")), React.createElement(Form.FormGroup, {
    controlId: "url"
  }, React.createElement(Form.ControlLabel, null, "My meeting URL"), React.createElement(Form.InputGroup, null, React.createElement(Form.FormControl, {
    type: "url"
  }), React.createElement(Form.InputGroup.Button, null, React.createElement(Button, null, "Copy URL"))), React.createElement(Form.HelpBlock, null, "Enter a valid URL")))), React.createElement(Grid.Row, {
    style: {
      paddingTop: '10px',
      paddingBottom: '10px'
    }
  }, React.createElement(Grid.Col, null, React.createElement("span", null, React.createElement(Button, {
    bsStyle: "primary"
  }, "Save")), React.createElement("span", null, React.createElement(Button, {
    bsStyle: "default"
  }, "Cancel"))))));
  expect(component.render()).toMatchSnapshot();
});
test('Modal Form renders properly', () => {
  const component = mount(React.createElement(Modal, null, React.createElement(Modal.Header, null, React.createElement(Button, {
    className: "close",
    "aria-hidden": "true",
    "aria-label": "Close"
  }, React.createElement(Icon, {
    type: "pf",
    name: "close"
  })), React.createElement(Modal.Title, null, "Basic Settings")), React.createElement(Modal.Body, null, React.createElement(Form, {
    horizontal: true
  }, React.createElement(Form.FormGroup, {
    controlId: "name"
  }, React.createElement(Grid.Col, {
    componentClass: Form.ControlLabel,
    sm: 3
  }, "Name"), React.createElement(Grid.Col, {
    sm: 9
  }, React.createElement(Form.FormControl, {
    type: "text"
  }), React.createElement(Form.HelpBlock, null, "Enter your name"))), React.createElement(Form.FormGroup, {
    controlId: "address"
  }, React.createElement(Grid.Col, {
    componentClass: Form.ControlLabel,
    sm: 3
  }, "Address"), React.createElement(Grid.Col, {
    sm: 9
  }, React.createElement(Form.FormControl, {
    type: "address"
  }), React.createElement(Form.HelpBlock, null, "Enter your address"))), React.createElement(Form.FormGroup, {
    controlId: "city"
  }, React.createElement(Grid.Col, {
    componentClass: Form.ControlLabel,
    sm: 3
  }, "City"), React.createElement(Grid.Col, {
    sm: 9
  }, React.createElement(Form.FormControl, {
    type: "text"
  }), React.createElement(Form.HelpBlock, null, "Enter your city"))), React.createElement(Form.FormGroup, {
    controlId: "email"
  }, React.createElement(Grid.Col, {
    componentClass: Form.ControlLabel,
    sm: 3
  }, "Email"), React.createElement(Grid.Col, {
    sm: 9
  }, React.createElement(Form.FormControl, {
    type: "email"
  }), React.createElement(Form.HelpBlock, null, "Enter a valid email address"))), React.createElement(Form.FormGroup, {
    controlId: "url"
  }, React.createElement(Grid.Col, {
    componentClass: Form.ControlLabel,
    sm: 3
  }, "My meeting URL"), React.createElement(Grid.Col, {
    sm: 9
  }, React.createElement(Form.InputGroup, null, React.createElement(Form.FormControl, {
    type: "url"
  }), React.createElement(Form.InputGroup.Button, null, React.createElement(Button, null, "Copy URL"))), React.createElement(Form.HelpBlock, null, "Enter a valid URL"))))), React.createElement(Modal.Footer, null, React.createElement(Button, {
    bsStyle: "default"
  }, "Cancel"), React.createElement(Button, {
    bsStyle: "primary"
  }, "Save"))));
  expect(component.render()).toMatchSnapshot();
});
test('Supported controls render properly', () => {
  const component = mount(React.createElement(Form, null, React.createElement(Form.FormGroup, {
    controlId: "text"
  }, React.createElement(Form.ControlLabel, null, "Text"), React.createElement(Form.FormControl, {
    type: "text"
  }), React.createElement(Form.HelpBlock, null, "Help text")), React.createElement(Form.FormGroup, {
    controlId: "email"
  }, React.createElement(Form.ControlLabel, null, "Email"), React.createElement(Form.FormControl, {
    type: "email"
  }), React.createElement(Form.HelpBlock, null, "Help text")), React.createElement(Form.FormGroup, {
    controlId: "password"
  }, React.createElement(Form.ControlLabel, null, "Password"), React.createElement(Form.FormControl, {
    type: "password"
  }), React.createElement(Form.HelpBlock, null, "Help text")), React.createElement(Form.FormGroup, {
    controlId: "file"
  }, React.createElement(Form.ControlLabel, null, "File"), React.createElement(Form.FormControl, {
    type: "file"
  }), React.createElement(Form.HelpBlock, null, "Help text")), React.createElement(Form.FormGroup, {
    controlId: "checkbox"
  }, React.createElement(Form.ControlLabel, null, "Checkbox"), React.createElement(Form.Checkbox, null, "Checkbox"), React.createElement(Form.HelpBlock, null, "Help text")), React.createElement(Form.FormGroup, {
    controlId: "radio"
  }, React.createElement(Form.ControlLabel, null, "Radio"), React.createElement(Form.Radio, null, "Radio"), React.createElement(Form.HelpBlock, null, "Help text")), React.createElement(Form.FormGroup, {
    controlId: "checkboxGroup"
  }, React.createElement(Form.ControlLabel, null, "Checkbox Group"), React.createElement("div", null, React.createElement(Form.Checkbox, {
    inline: true
  }, "1"), React.createElement(Form.Checkbox, {
    inline: true
  }, "2"), React.createElement(Form.Checkbox, {
    inline: true
  }, "3")), React.createElement(Form.HelpBlock, null, "Help text")), React.createElement(Form.FormGroup, {
    controlId: "radioGroup"
  }, React.createElement(Form.ControlLabel, null, "Radio Group"), React.createElement("div", null, React.createElement(Form.Radio, {
    name: "radioGroup",
    inline: true
  }, "1"), React.createElement(Form.Radio, {
    name: "radioGroup",
    inline: true
  }, "2"), React.createElement(Form.Radio, {
    name: "radioGroup",
    inline: true
  }, "3")), React.createElement(Form.HelpBlock, null, "Help text")), React.createElement(Form.FormGroup, {
    controlId: "textarea"
  }, React.createElement(Form.ControlLabel, null, "Textarea"), React.createElement(Form.FormControl, {
    componentClass: "textarea"
  }), React.createElement(Form.HelpBlock, null, "Help text")), React.createElement(Form.FormGroup, {
    controlId: "static"
  }, React.createElement(Form.ControlLabel, null, "Static"), React.createElement(Form.FormControl.Static, null, "email@example.com"), React.createElement(Form.HelpBlock, null, "Help text"))));
  expect(component.render()).toMatchSnapshot();
});
test('Input Groups render properly', () => {
  const component = mount(React.createElement(Form, null, React.createElement(Grid.Row, null, React.createElement(Grid.Col, null, React.createElement(Form.FormGroup, {
    controlId: "control-1"
  }, React.createElement(Form.InputGroup, null, React.createElement(Form.InputGroup.Addon, null, "@"), React.createElement(Form.FormControl, {
    type: "text"
  }))), React.createElement(Form.FormGroup, {
    controlId: "control-2"
  }, React.createElement(Form.InputGroup, null, React.createElement(Form.FormControl, {
    type: "text"
  }), React.createElement(Form.InputGroup.Addon, null, ".00"))), React.createElement(Form.FormGroup, {
    controlId: "control-3"
  }, React.createElement(Form.InputGroup, null, React.createElement(Form.InputGroup.Addon, null, "$"), React.createElement(Form.FormControl, {
    type: "text"
  }), React.createElement(Form.InputGroup.Addon, null, ".00"))), React.createElement(Form.FormGroup, {
    controlId: "control-4"
  }, React.createElement(Form.InputGroup, null, React.createElement(Form.FormControl, {
    type: "text"
  }), React.createElement(Form.InputGroup.Addon, null, React.createElement(Icon, {
    name: "music"
  })))), React.createElement(Form.FormGroup, {
    controlId: "control-5"
  }, React.createElement(Form.InputGroup, null, React.createElement(Form.InputGroup.Button, null, React.createElement(Button, null, "Before")), React.createElement(Form.FormControl, {
    type: "text"
  }))), React.createElement(Form.FormGroup, {
    controlId: "control-6"
  }, React.createElement(Form.InputGroup, null, React.createElement(Form.FormControl, {
    type: "text"
  }), React.createElement(DropdownButton, {
    componentClass: Form.InputGroup.Button,
    id: "input-dropdown-addon",
    title: "Action"
  }, React.createElement(MenuItem, null, "Item")))), React.createElement(Form.FormGroup, {
    controlId: "control-7"
  }, React.createElement(Form.InputGroup, null, React.createElement(Form.InputGroup.Addon, null, React.createElement("input", {
    type: "radio"
  })), React.createElement(Form.FormControl, {
    type: "text"
  }))), React.createElement(Form.FormGroup, {
    controlId: "control-8"
  }, React.createElement(Form.InputGroup, null, React.createElement(Form.InputGroup.Addon, null, React.createElement("input", {
    type: "checkbox"
  })), React.createElement(Form.FormControl, {
    type: "text"
  })))))));
  expect(component.render()).toMatchSnapshot();
});