import React from 'react';
import PropTypes from 'prop-types';
/**
 * ListViewDescription wraps Heading and Text
 */

const ListViewDescription = ({
  children
}) => React.createElement("div", {
  className: "list-view-pf-description"
}, children);

ListViewDescription.propTypes = {
  /** Child nodes - ListViewDescriptionHeading or ListViewDescriptionText instances */
  children: PropTypes.node
};
ListViewDescription.defaultProps = {
  children: null
};
export default ListViewDescription;