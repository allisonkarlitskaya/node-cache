import React from 'react';
import PropTypes from 'prop-types';
/**
 * ListViewActions wraps ListViewItem actions and positions them to the right
 */

const ListViewActions = ({
  children
}) => React.createElement("div", {
  className: "list-view-pf-actions"
}, children);

ListViewActions.propTypes = {
  /** Child nodes which render individual actions - Buttons, DropdownKebab... */
  children: PropTypes.node
};
ListViewActions.defaultProps = {
  children: null
};
export default ListViewActions;