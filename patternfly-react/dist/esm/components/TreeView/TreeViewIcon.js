import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const TreeViewIcon = ({
  icon
}) => {
  const classes = classNames('icon node-icon indent', icon);
  return React.createElement("span", {
    className: classes,
    "aria-hidden": true
  });
};

TreeViewIcon.propTypes = {
  icon: PropTypes.string
};
TreeViewIcon.defaultProps = {
  icon: 'fa fa-folder'
};
export default TreeViewIcon;