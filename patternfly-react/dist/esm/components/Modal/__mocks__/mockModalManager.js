import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../Button';
import { Modal } from '../index';

class MockModalManager extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  close() {
    this.setState({
      showModal: false
    });
  }

  open() {
    this.setState({
      showModal: true
    });
  }

  render() {
    const {
      children,
      rightSide
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
      onClick: this.open
    }, "Launch Modal"), React.createElement(Modal, {
      show: this.state.showModal,
      onHide: this.close,
      className: rightSide ? 'right-side-modal-pf' : ''
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

MockModalManager.propTypes = {
  children: PropTypes.node,
  rightSide: PropTypes.bool
};
MockModalManager.defaultProps = {
  children: null,
  rightSide: false
};
const basicExampleSource = `
  <Button bsStyle="primary" bsSize="large" onClick={this.open}>
  Launch basic modal
  </Button>

  <Modal show={this.state.showModal} onHide={this.close}>
    <Modal.Header>
      <button
        className="close"
        onClick={this.close}
        aria-hidden="true"
        aria-label="Close"
      >
        <Icon type="pf" name="close" />
      </button>
      <Modal.Title>Modal Overlay Title</Modal.Title>
    </Modal.Header>
    <Modal.Body>
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
    </Modal.Body>
    <Modal.Footer>
      <Button
        bsStyle="default"
        className="btn-cancel"
        onClick={this.close}
      >
        Cancel
      </Button>
      <Button bsStyle="primary" onClick={this.close}>
        Save
      </Button>
    </Modal.Footer>
  </Modal>
`;
export { MockModalManager, basicExampleSource };