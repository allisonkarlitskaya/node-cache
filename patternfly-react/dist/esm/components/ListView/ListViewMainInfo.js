import React from 'react';
import PropTypes from 'prop-types';
/**
 * ListViewMainInfo wraps the informational content of the ListViewItem
 */

const ListViewMainInfo = ({
  children
}) => React.createElement("div", {
  className: "list-view-pf-main-info"
}, children);

ListViewMainInfo.propTypes = {
  /** Child nodes - instances of ListViewLeft and ListViewBody */
  children: PropTypes.node
};
ListViewMainInfo.defaultProps = {
  children: null
};
export default ListViewMainInfo;