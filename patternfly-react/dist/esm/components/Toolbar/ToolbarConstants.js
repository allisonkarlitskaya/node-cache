import React from 'react';
import PropTypes from 'prop-types';
import { withContext } from 'recompose';
const toolbarContextTypes = {
  isDescendantOfToolbar: PropTypes.bool
};

const getToolbarContext = props => ({
  isDescendantOfToolbar: props.isDescendantOfToolbar
});

const provideToolbarContext = withContext(toolbarContextTypes, getToolbarContext);
const ToolbarContextProvider = provideToolbarContext(props => React.createElement(React.Fragment, null, props.children));
export { toolbarContextTypes, getToolbarContext, ToolbarContextProvider };