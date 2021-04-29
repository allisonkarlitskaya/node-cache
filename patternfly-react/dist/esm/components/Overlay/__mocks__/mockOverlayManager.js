function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/no-find-dom-node */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../Button';
import { Popover } from '../../Popover';
import { Overlay } from '../index';
export class MockOverlayManager extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "toggleOverlay", () => {
      const {
        showOverlay
      } = this.state;
      this.setState({
        showOverlay: !showOverlay
      });
    });

    this.buttonRef = React.createRef();
    this.state = {
      showOverlay: false
    };
  }

  render() {
    const {
      placement
    } = this.props;
    const {
      showOverlay
    } = this.state;
    return React.createElement(React.Fragment, null, React.createElement(Button, {
      bsStyle: "primary",
      bsSize: "large",
      onClick: this.toggleOverlay,
      ref: this.buttonRef
    }, "Click Here"), React.createElement(Overlay, {
      target: this.buttonRef.current,
      container: this,
      show: showOverlay,
      placement: placement
    }, React.createElement(Popover, {
      id: "my-overlay"
    }, React.createElement("strong", null, "Holy guacamole!"), " Check this info.")));
  }

}
MockOverlayManager.propTypes = {
  placement: PropTypes.oneOf(['top', 'bottom', 'right', 'left'])
};
MockOverlayManager.defaultProps = {
  placement: 'top'
};
export const basicExampleSource = `
/* eslint-disable react/no-find-dom-node */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../Button';
import { Popover } from '../../Popover';
import { Overlay } from '../index';

export class MockOverlayManager extends React.Component {
  constructor(props) {
    super(props);

    this.buttonRef = React.createRef();
    this.state = { showOverlay: false };
  }
  toggleOverlay = () => {
    const { showOverlay } = this.state;
    this.setState({ showOverlay: !showOverlay });
  };
  render() {
    const { placement } = this.props;
    const { showOverlay } = this.state;

    return (
      <React.Fragment>
        <Button bsStyle="primary" bsSize="large" onClick={this.toggleOverlay} ref={this.buttonRef}>
          Click Here
        </Button>
        <Overlay target={this.buttonRef.current} container={this} show={showOverlay} placement={placement}>
          <Popover id="my-overlay">
            <strong>Holy guacamole!</strong> Check this info.
          </Popover>
        </Overlay>
      </React.Fragment>
    );
  }
}

MockOverlayManager.propTypes = {
  placement: PropTypes.oneOf(['top', 'bottom', 'right', 'left'])
};

MockOverlayManager.defaultProps = {
  placement: 'top'
};
`;