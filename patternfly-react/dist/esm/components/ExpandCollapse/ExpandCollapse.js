function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from '../Button';
import { Icon } from '../Icon';
const ALIGN_LEFT = 'left';
const ALIGN_CENTER = 'center';
const ALIGN_TYPES = [ALIGN_LEFT, ALIGN_CENTER];

class ExpandCollapse extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      expanded: false,
      mirroredExpanded: false
    });

    _defineProperty(this, "onClick", () => {
      if (this.props.onToggle) {
        this.props.onToggle();
      } else {
        this.setState(prevState => ({
          expanded: !prevState.expanded
        }));
      }
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.mirroredExpanded !== nextProps.expanded) {
      return {
        expanded: nextProps.expanded,
        mirroredExpanded: nextProps.expanded
      };
    }

    return null;
  }

  render() {
    const {
      children,
      textCollapsed,
      textExpanded,
      align,
      className,
      bordered
    } = this.props;
    const {
      expanded
    } = this.state;
    const separatorClass = classNames('expand-collapse-pf-separator', {
      bordered
    });
    return React.createElement("div", {
      className: classNames('expand-collapse-pf', className)
    }, React.createElement("div", {
      className: "expand-collapse-pf-link-container"
    }, align === ALIGN_CENTER && React.createElement("span", {
      className: separatorClass
    }), React.createElement(Button, {
      bsStyle: "link",
      onClick: this.onClick
    }, React.createElement(Icon, {
      type: "fa",
      name: expanded ? 'angle-down' : 'angle-right'
    }), expanded ? textExpanded : textCollapsed), React.createElement("span", {
      className: separatorClass
    })), this.state.expanded && children);
  }

}

ExpandCollapse.propTypes = {
  children: PropTypes.any.isRequired,

  /** Top-level custom class */
  className: PropTypes.string,

  /** Text for the link in collapsed state */
  textCollapsed: PropTypes.string,

  /** Text for the link in expanded state */
  textExpanded: PropTypes.string,

  /** Align the link to the left or center. */
  align: PropTypes.oneOf(ALIGN_TYPES),

  /** Flag to show a separation border line */
  bordered: PropTypes.bool,

  /** Flag to control expansion state */
  expanded: PropTypes.bool,
  // eslint-disable-line react/no-unused-prop-types

  /** Callback function to control externally stored expansion state */
  onToggle: PropTypes.func
};
ExpandCollapse.defaultProps = {
  className: '',
  textCollapsed: 'Show Advanced Options',
  textExpanded: 'Hide Advanced Options',
  align: ALIGN_LEFT,
  bordered: true,
  expanded: false,
  onToggle: undefined
};
ExpandCollapse.ALIGN_LEFT = ALIGN_LEFT;
ExpandCollapse.ALIGN_CENTER = ALIGN_CENTER;
ExpandCollapse.ALIGN_TYPES = ALIGN_TYPES;
export default ExpandCollapse;