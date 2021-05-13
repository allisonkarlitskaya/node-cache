function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../Button';
import { Modal } from '../../Modal';
import { ModelessOverlay } from '../index';
export class MockModelessManager extends React.Component {
  constructor() {
    super();

    _defineProperty(this, "close", () => {
      this.setState({
        showOverlay: false
      });
    });

    _defineProperty(this, "toggleOpen", () => {
      this.setState({
        showOverlay: !this.state.showOverlay
      });
    });

    this.state = {
      showOverlay: false
    };
  }

  render() {
    const {
      children,
      size
    } = this.props;
    const defaultBody = React.createElement("form", {
      className: "form-horizontal"
    }, React.createElement("div", {
      className: "form-group"
    }, React.createElement("label", {
      className: "col-sm-3 control-label",
      htmlFor: "textInput"
    }, "Field One"), React.createElement("div", {
      className: "col-sm-9"
    }, React.createElement("input", {
      type: "text",
      id: "textInput",
      className: "form-control"
    }))), React.createElement("div", {
      className: "form-group"
    }, React.createElement("label", {
      className: "col-sm-3 control-label",
      htmlFor: "textInput2"
    }, "Field Two"), React.createElement("div", {
      className: "col-sm-9"
    }, React.createElement("input", {
      type: "text",
      id: "textInput2",
      className: "form-control"
    }))), React.createElement("div", {
      className: "form-group"
    }, React.createElement("label", {
      className: "col-sm-3 control-label",
      htmlFor: "textInput3"
    }, "Field Three"), React.createElement("div", {
      className: "col-sm-9"
    }, React.createElement("input", {
      type: "text",
      id: "textInput3",
      className: "form-control"
    }))), React.createElement("div", {
      className: "form-group"
    }, React.createElement("label", {
      className: "col-sm-3 control-label",
      htmlFor: "textInput4"
    }, "Field Four"), React.createElement("div", {
      className: "col-sm-9"
    }, React.createElement("input", {
      type: "text",
      id: "textInput3",
      className: "form-control"
    }))), React.createElement("div", {
      className: "form-group"
    }, React.createElement("label", {
      className: "col-sm-3 control-label",
      htmlFor: "textInput5"
    }, "Field Five"), React.createElement("div", {
      className: "col-sm-9"
    }, React.createElement("input", {
      type: "text",
      id: "textInput3",
      className: "form-control"
    }))), React.createElement("div", {
      className: "form-group"
    }, React.createElement("label", {
      className: "col-sm-3 control-label",
      htmlFor: "textInput6"
    }, "Field Six"), React.createElement("div", {
      className: "col-sm-9"
    }, React.createElement("input", {
      type: "text",
      id: "textInput3",
      className: "form-control"
    }))));
    return React.createElement("div", null, React.createElement(Button, {
      bsStyle: "primary",
      bsSize: "large",
      onClick: this.toggleOpen
    }, this.state.showOverlay ? 'Close Modeless Overlay' : 'Open Modeless Overlay'), React.createElement(ModelessOverlay, {
      show: this.state.showOverlay,
      bsSize: size !== 'default' ? size : null
    }, React.createElement(Modal.Header, null, React.createElement(Modal.CloseButton, {
      onClick: this.close
    }), React.createElement(Modal.Title, null, "Modal Overlay Title")), React.createElement(Modal.Body, null, children || defaultBody), React.createElement(Modal.Footer, null, React.createElement(Button, {
      bsStyle: "default",
      className: "btn-cancel",
      onClick: this.close
    }, "Cancel"), React.createElement(Button, {
      bsStyle: "primary",
      onClick: this.close
    }, "Save"))));
  }

}
MockModelessManager.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string
};
MockModelessManager.defaultProps = {
  children: null,
  size: 'default'
};
export const basicExampleSource = `
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../Button';
import { Modal } from '../../Modal';
import { ModelessOverlay } from '../index';

export class MockModelessManager extends React.Component {
  constructor() {
    super();
    this.state = { showOverlay: false };
  }
  close = () => {
    this.setState({ showOverlay: false });
  };
  toggleOpen = () => {
    this.setState({ showOverlay: !this.state.showOverlay });
  };
  render() {
    const { children, size } = this.props;
    const defaultBody = (
      <form className="form-horizontal">
        <div className="form-group">
          <label className="col-sm-3 control-label" htmlFor="textInput">
            Field One
          </label>
          <div className="col-sm-9">
            <input type="text" id="textInput" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-3 control-label" htmlFor="textInput2">
            Field Two
          </label>
          <div className="col-sm-9">
            <input type="text" id="textInput2" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-3 control-label" htmlFor="textInput3">
            Field Three
          </label>
          <div className="col-sm-9">
            <input type="text" id="textInput3" className="form-control" />
          </div>
        </div>
      </form>
    );

    return (
      <div>
        <Button bsStyle="primary" bsSize="large" onClick={this.toggleOpen}>
          {this.state.showOverlay ? 'Close Modeless Overlay' : 'Open Modeless Overlay'}
        </Button>

        <ModelessOverlay show={this.state.showOverlay} bsSize={size !== 'default' ? size : null}>
          <Modal.Header>
            <Modal.CloseButton onClick={this.close} />
            <Modal.Title>Modal Overlay Title</Modal.Title>
          </Modal.Header>
          <Modal.Body>{children || defaultBody}</Modal.Body>
          <Modal.Footer>
            <Button bsStyle="default" className="btn-cancel" onClick={this.close}>
              Cancel
            </Button>
            <Button bsStyle="primary" onClick={this.close}>
              Save
            </Button>
          </Modal.Footer>
        </ModelessOverlay>
      </div>
    );
  }
}

MockModelessManager.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string
};

MockModelessManager.defaultProps = {
  children: null,
  size: 'default'
};
`;