import React from 'react';
import PropTypes from 'prop-types';

const TreeViewNodeSpecification = ({
  text,
  icon,
  selectable,
  state,
  nodes
}) => React.createElement("div", null, text, icon, selectable, state, nodes);

TreeViewNodeSpecification.propTypes = {
  /** Display text */
  text: PropTypes.string,

  /** http://www.patternfly.org/styles/icons/ */
  icon: PropTypes.string,

  /** Use with TreeView selectNode and highlightOnSelect props */
  selectable: PropTypes.bool,

  /** Object that holds initial node state. Currently supports the expanded
  property, which can be set to true in order to have the node be expanded by
  default. */
  state: PropTypes.object,

  /** Array of child nodes */
  nodes: PropTypes.array
};
TreeViewNodeSpecification.defaultProps = {
  icon: 'fa fa-folder',
  text: '',
  selectable: false,
  state: {},
  nodes: []
};
export default TreeViewNodeSpecification;