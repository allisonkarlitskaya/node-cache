"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = require("../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('Inline Form renders properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Form, {
    inline: true
  }, _react["default"].createElement(_index.Form.FormGroup, {
    controlId: "email",
    placeholder: "Email"
  }, _react["default"].createElement(_index.Form.FormControl, {
    type: "email",
    placeholder: "Email"
  })), _react["default"].createElement(_index.Form.FormGroup, {
    controlId: "password",
    placeholder: "Password"
  }, _react["default"].createElement(_index.Form.FormControl, {
    type: "password",
    placeholder: "Password"
  })), _react["default"].createElement(_index.Button, {
    bsStyle: "primary"
  }, "Log In")));
  expect(component.render()).toMatchSnapshot();
});
test('Horizontal Form renders properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Form, {
    horizontal: true
  }, _react["default"].createElement(_index.Form.FormGroup, {
    controlId: "name"
  }, _react["default"].createElement(_index.Grid.Col, {
    componentClass: _index.Form.ControlLabel,
    sm: 3
  }, "Name"), _react["default"].createElement(_index.Grid.Col, {
    sm: 9
  }, _react["default"].createElement(_index.Form.FormControl, {
    type: "text"
  }), _react["default"].createElement(_index.Form.HelpBlock, null, "Enter your name"))), _react["default"].createElement(_index.Form.FormGroup, {
    controlId: "address"
  }, _react["default"].createElement(_index.Grid.Col, {
    componentClass: _index.Form.ControlLabel,
    sm: 3
  }, "Address"), _react["default"].createElement(_index.Grid.Col, {
    sm: 9
  }, _react["default"].createElement(_index.Form.FormControl, {
    type: "address",
    disabled: true
  }), _react["default"].createElement(_index.Form.HelpBlock, null, "Enter your address"))), _react["default"].createElement(_index.Form.FormGroup, {
    controlId: "city"
  }, _react["default"].createElement(_index.Grid.Col, {
    componentClass: _index.Form.ControlLabel,
    sm: 3
  }, "City"), _react["default"].createElement(_index.Grid.Col, {
    sm: 9
  }, _react["default"].createElement(_index.Form.FormControl, {
    type: "text",
    disabled: true
  }), _react["default"].createElement(_index.Form.HelpBlock, null, "Enter your city"))), _react["default"].createElement(_index.Form.FormGroup, {
    controlId: "email"
  }, _react["default"].createElement(_index.Grid.Col, {
    componentClass: _index.Form.ControlLabel,
    sm: 3
  }, "Email"), _react["default"].createElement(_index.Grid.Col, {
    sm: 9
  }, _react["default"].createElement(_index.Form.FormControl, {
    type: "email",
    disabled: true
  }), _react["default"].createElement(_index.Form.HelpBlock, null, "Enter a valid email address"))), _react["default"].createElement(_index.Form.FormGroup, {
    controlId: "url"
  }, _react["default"].createElement(_index.Grid.Col, {
    componentClass: _index.Form.ControlLabel,
    sm: 3
  }, "My meeting URL"), _react["default"].createElement(_index.Grid.Col, {
    sm: 9
  }, _react["default"].createElement(_index.Form.InputGroup, null, _react["default"].createElement(_index.Form.FormControl, {
    type: "url"
  }), _react["default"].createElement(_index.Form.InputGroup.Button, null, _react["default"].createElement(_index.Button, null, "Copy URL"))), _react["default"].createElement(_index.Form.HelpBlock, null, "Enter a valid URL"))), _react["default"].createElement(_index.Grid.Row, {
    style: {
      paddingTop: '10px',
      paddingBottom: '10px'
    }
  }, _react["default"].createElement(_index.Grid.Col, {
    smOffset: 3,
    sm: 9
  }, _react["default"].createElement("span", null, _react["default"].createElement(_index.Button, {
    bsStyle: "primary"
  }, "Save")), _react["default"].createElement("span", null, _react["default"].createElement(_index.Button, {
    bsStyle: "default"
  }, "Cancel"))))));
  expect(component.render()).toMatchSnapshot();
});
test('Vertical Form renders properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Form, null, _react["default"].createElement(_index.Grid.Row, null, _react["default"].createElement(_index.Grid.Col, null, _react["default"].createElement(_index.Form.FormGroup, {
    controlId: "name"
  }, _react["default"].createElement(_index.Form.ControlLabel, null, "Name"), _react["default"].createElement(_index.Form.FormControl, {
    type: "text"
  }), _react["default"].createElement(_index.Form.HelpBlock, null, "Enter your name")), _react["default"].createElement(_index.Form.FormGroup, {
    controlId: "address"
  }, _react["default"].createElement(_index.Form.ControlLabel, null, "Address"), _react["default"].createElement(_index.Form.FormControl, {
    type: "address"
  }), _react["default"].createElement(_index.Form.HelpBlock, null, "Enter your address")), _react["default"].createElement(_index.Form.FormGroup, {
    controlId: "city"
  }, _react["default"].createElement(_index.Form.ControlLabel, null, "City"), _react["default"].createElement(_index.Form.FormControl, {
    type: "text"
  }), _react["default"].createElement(_index.Form.HelpBlock, null, "Enter your city")), _react["default"].createElement(_index.Form.FormGroup, {
    controlId: "email"
  }, _react["default"].createElement(_index.Form.ControlLabel, null, "Email"), _react["default"].createElement(_index.Form.FormControl, {
    type: "email"
  }), _react["default"].createElement(_index.Form.HelpBlock, null, "Enter a valid email address")), _react["default"].createElement(_index.Form.FormGroup, {
    controlId: "url"
  }, _react["default"].createElement(_index.Form.ControlLabel, null, "My meeting URL"), _react["default"].createElement(_index.Form.InputGroup, null, _react["default"].createElement(_index.Form.FormControl, {
    type: "url"
  }), _react["default"].createElement(_index.Form.InputGroup.Button, null, _react["default"].createElement(_index.Button, null, "Copy URL"))), _react["default"].createElement(_index.Form.HelpBlock, null, "Enter a valid URL")))), _react["default"].createElement(_index.Grid.Row, {
    style: {
      paddingTop: '10px',
      paddingBottom: '10px'
    }
  }, _react["default"].createElement(_index.Grid.Col, null, _react["default"].createElement("span", null, _react["default"].createElement(_index.Button, {
    bsStyle: "primary"
  }, "Save")), _react["default"].createElement("span", null, _react["default"].createElement(_index.Button, {
    bsStyle: "default"
  }, "Cancel"))))));
  expect(component.render()).toMatchSnapshot();
});
test('Modal Form renders properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Modal, null, _react["default"].createElement(_index.Modal.Header, null, _react["default"].createElement(_index.Button, {
    className: "close",
    "aria-hidden": "true",
    "aria-label": "Close"
  }, _react["default"].createElement(_index.Icon, {
    type: "pf",
    name: "close"
  })), _react["default"].createElement(_index.Modal.Title, null, "Basic Settings")), _react["default"].createElement(_index.Modal.Body, null, _react["default"].createElement(_index.Form, {
    horizontal: true
  }, _react["default"].createElement(_index.Form.FormGroup, {
    controlId: "name"
  }, _react["default"].createElement(_index.Grid.Col, {
    componentClass: _index.Form.ControlLabel,
    sm: 3
  }, "Name"), _react["default"].createElement(_index.Grid.Col, {
    sm: 9
  }, _react["default"].createElement(_index.Form.FormControl, {
    type: "text"
  }), _react["default"].createElement(_index.Form.HelpBlock, null, "Enter your name"))), _react["default"].createElement(_index.Form.FormGroup, {
    controlId: "address"
  }, _react["default"].createElement(_index.Grid.Col, {
    componentClass: _index.Form.ControlLabel,
    sm: 3
  }, "Address"), _react["default"].createElement(_index.Grid.Col, {
    sm: 9
  }, _react["default"].createElement(_index.Form.FormControl, {
    type: "address"
  }), _react["default"].createElement(_index.Form.HelpBlock, null, "Enter your address"))), _react["default"].createElement(_index.Form.FormGroup, {
    controlId: "city"
  }, _react["default"].createElement(_index.Grid.Col, {
    componentClass: _index.Form.ControlLabel,
    sm: 3
  }, "City"), _react["default"].createElement(_index.Grid.Col, {
    sm: 9
  }, _react["default"].createElement(_index.Form.FormControl, {
    type: "text"
  }), _react["default"].createElement(_index.Form.HelpBlock, null, "Enter your city"))), _react["default"].createElement(_index.Form.FormGroup, {
    controlId: "email"
  }, _react["default"].createElement(_index.Grid.Col, {
    componentClass: _index.Form.ControlLabel,
    sm: 3
  }, "Email"), _react["default"].createElement(_index.Grid.Col, {
    sm: 9
  }, _react["default"].createElement(_index.Form.FormControl, {
    type: "email"
  }), _react["default"].createElement(_index.Form.HelpBlock, null, "Enter a valid email address"))), _react["default"].createElement(_index.Form.FormGroup, {
    controlId: "url"
  }, _react["default"].createElement(_index.Grid.Col, {
    componentClass: _index.Form.ControlLabel,
    sm: 3
  }, "My meeting URL"), _react["default"].createElement(_index.Grid.Col, {
    sm: 9
  }, _react["default"].createElement(_index.Form.InputGroup, null, _react["default"].createElement(_index.Form.FormControl, {
    type: "url"
  }), _react["default"].createElement(_index.Form.InputGroup.Button, null, _react["default"].createElement(_index.Button, null, "Copy URL"))), _react["default"].createElement(_index.Form.HelpBlock, null, "Enter a valid URL"))))), _react["default"].createElement(_index.Modal.Footer, null, _react["default"].createElement(_index.Button, {
    bsStyle: "default"
  }, "Cancel"), _react["default"].createElement(_index.Button, {
    bsStyle: "primary"
  }, "Save"))));
  expect(component.render()).toMatchSnapshot();
});
test('Supported controls render properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Form, null, _react["default"].createElement(_index.Form.FormGroup, {
    controlId: "text"
  }, _react["default"].createElement(_index.Form.ControlLabel, null, "Text"), _react["default"].createElement(_index.Form.FormControl, {
    type: "text"
  }), _react["default"].createElement(_index.Form.HelpBlock, null, "Help text")), _react["default"].createElement(_index.Form.FormGroup, {
    controlId: "email"
  }, _react["default"].createElement(_index.Form.ControlLabel, null, "Email"), _react["default"].createElement(_index.Form.FormControl, {
    type: "email"
  }), _react["default"].createElement(_index.Form.HelpBlock, null, "Help text")), _react["default"].createElement(_index.Form.FormGroup, {
    controlId: "password"
  }, _react["default"].createElement(_index.Form.ControlLabel, null, "Password"), _react["default"].createElement(_index.Form.FormControl, {
    type: "password"
  }), _react["default"].createElement(_index.Form.HelpBlock, null, "Help text")), _react["default"].createElement(_index.Form.FormGroup, {
    controlId: "file"
  }, _react["default"].createElement(_index.Form.ControlLabel, null, "File"), _react["default"].createElement(_index.Form.FormControl, {
    type: "file"
  }), _react["default"].createElement(_index.Form.HelpBlock, null, "Help text")), _react["default"].createElement(_index.Form.FormGroup, {
    controlId: "checkbox"
  }, _react["default"].createElement(_index.Form.ControlLabel, null, "Checkbox"), _react["default"].createElement(_index.Form.Checkbox, null, "Checkbox"), _react["default"].createElement(_index.Form.HelpBlock, null, "Help text")), _react["default"].createElement(_index.Form.FormGroup, {
    controlId: "radio"
  }, _react["default"].createElement(_index.Form.ControlLabel, null, "Radio"), _react["default"].createElement(_index.Form.Radio, null, "Radio"), _react["default"].createElement(_index.Form.HelpBlock, null, "Help text")), _react["default"].createElement(_index.Form.FormGroup, {
    controlId: "checkboxGroup"
  }, _react["default"].createElement(_index.Form.ControlLabel, null, "Checkbox Group"), _react["default"].createElement("div", null, _react["default"].createElement(_index.Form.Checkbox, {
    inline: true
  }, "1"), _react["default"].createElement(_index.Form.Checkbox, {
    inline: true
  }, "2"), _react["default"].createElement(_index.Form.Checkbox, {
    inline: true
  }, "3")), _react["default"].createElement(_index.Form.HelpBlock, null, "Help text")), _react["default"].createElement(_index.Form.FormGroup, {
    controlId: "radioGroup"
  }, _react["default"].createElement(_index.Form.ControlLabel, null, "Radio Group"), _react["default"].createElement("div", null, _react["default"].createElement(_index.Form.Radio, {
    name: "radioGroup",
    inline: true
  }, "1"), _react["default"].createElement(_index.Form.Radio, {
    name: "radioGroup",
    inline: true
  }, "2"), _react["default"].createElement(_index.Form.Radio, {
    name: "radioGroup",
    inline: true
  }, "3")), _react["default"].createElement(_index.Form.HelpBlock, null, "Help text")), _react["default"].createElement(_index.Form.FormGroup, {
    controlId: "textarea"
  }, _react["default"].createElement(_index.Form.ControlLabel, null, "Textarea"), _react["default"].createElement(_index.Form.FormControl, {
    componentClass: "textarea"
  }), _react["default"].createElement(_index.Form.HelpBlock, null, "Help text")), _react["default"].createElement(_index.Form.FormGroup, {
    controlId: "static"
  }, _react["default"].createElement(_index.Form.ControlLabel, null, "Static"), _react["default"].createElement(_index.Form.FormControl.Static, null, "email@example.com"), _react["default"].createElement(_index.Form.HelpBlock, null, "Help text"))));
  expect(component.render()).toMatchSnapshot();
});
test('Input Groups render properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Form, null, _react["default"].createElement(_index.Grid.Row, null, _react["default"].createElement(_index.Grid.Col, null, _react["default"].createElement(_index.Form.FormGroup, {
    controlId: "control-1"
  }, _react["default"].createElement(_index.Form.InputGroup, null, _react["default"].createElement(_index.Form.InputGroup.Addon, null, "@"), _react["default"].createElement(_index.Form.FormControl, {
    type: "text"
  }))), _react["default"].createElement(_index.Form.FormGroup, {
    controlId: "control-2"
  }, _react["default"].createElement(_index.Form.InputGroup, null, _react["default"].createElement(_index.Form.FormControl, {
    type: "text"
  }), _react["default"].createElement(_index.Form.InputGroup.Addon, null, ".00"))), _react["default"].createElement(_index.Form.FormGroup, {
    controlId: "control-3"
  }, _react["default"].createElement(_index.Form.InputGroup, null, _react["default"].createElement(_index.Form.InputGroup.Addon, null, "$"), _react["default"].createElement(_index.Form.FormControl, {
    type: "text"
  }), _react["default"].createElement(_index.Form.InputGroup.Addon, null, ".00"))), _react["default"].createElement(_index.Form.FormGroup, {
    controlId: "control-4"
  }, _react["default"].createElement(_index.Form.InputGroup, null, _react["default"].createElement(_index.Form.FormControl, {
    type: "text"
  }), _react["default"].createElement(_index.Form.InputGroup.Addon, null, _react["default"].createElement(_index.Icon, {
    name: "music"
  })))), _react["default"].createElement(_index.Form.FormGroup, {
    controlId: "control-5"
  }, _react["default"].createElement(_index.Form.InputGroup, null, _react["default"].createElement(_index.Form.InputGroup.Button, null, _react["default"].createElement(_index.Button, null, "Before")), _react["default"].createElement(_index.Form.FormControl, {
    type: "text"
  }))), _react["default"].createElement(_index.Form.FormGroup, {
    controlId: "control-6"
  }, _react["default"].createElement(_index.Form.InputGroup, null, _react["default"].createElement(_index.Form.FormControl, {
    type: "text"
  }), _react["default"].createElement(_index.DropdownButton, {
    componentClass: _index.Form.InputGroup.Button,
    id: "input-dropdown-addon",
    title: "Action"
  }, _react["default"].createElement(_index.MenuItem, null, "Item")))), _react["default"].createElement(_index.Form.FormGroup, {
    controlId: "control-7"
  }, _react["default"].createElement(_index.Form.InputGroup, null, _react["default"].createElement(_index.Form.InputGroup.Addon, null, _react["default"].createElement("input", {
    type: "radio"
  })), _react["default"].createElement(_index.Form.FormControl, {
    type: "text"
  }))), _react["default"].createElement(_index.Form.FormGroup, {
    controlId: "control-8"
  }, _react["default"].createElement(_index.Form.InputGroup, null, _react["default"].createElement(_index.Form.InputGroup.Addon, null, _react["default"].createElement("input", {
    type: "checkbox"
  })), _react["default"].createElement(_index.Form.FormControl, {
    type: "text"
  })))))));
  expect(component.render()).toMatchSnapshot();
});