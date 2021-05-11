function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { withContext } from 'recompose';
import { hasDisplayName, filterChildren } from '../../common/helpers';
import { Grid } from '../Grid';
import ToolbarResults from './ToolbarResults';
import ToolbarRightContent from './ToolbarRightContent';
import ToolbarFind from './ToolbarFind';
import ToolbarViewSelector from './ToolbarViewSelector';
import { toolbarContextTypes, getToolbarContext, ToolbarContextProvider } from './ToolbarConstants';

const ContextualToolbar = (_ref) => {
  let {
    children,
    className,
    preventSubmit
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "className", "preventSubmit"]);

  const toolbarChildren = filterChildren(children, child => !hasDisplayName(child, ToolbarResults.displayName));
  const resultsChildren = filterChildren(children, child => hasDisplayName(child, ToolbarResults.displayName));
  return React.createElement(ToolbarContextProvider, {
    isDescendantOfToolbar: true
  }, React.createElement(Grid, {
    fluid: true,
    className: className
  }, React.createElement(Grid.Row, {
    className: "toolbar-pf"
  }, React.createElement(Grid.Col, {
    sm: 12
  }, React.createElement("form", {
    className: "toolbar-pf-actions",
    onSubmit: e => {
      if (preventSubmit) {
        e.preventDefault();
      }
    }
  }, toolbarChildren), resultsChildren))));
};

ContextualToolbar.propTypes = {
  /** Children nodes */
  children: PropTypes.node,

  /** Additional css classes */
  className: PropTypes.string,

  /** Prevent submission of toolbar children internal form */
  preventSubmit: PropTypes.bool
};
ContextualToolbar.defaultProps = {
  children: null,
  className: '',
  preventSubmit: false
};
const Toolbar = withContext(toolbarContextTypes, getToolbarContext)(ContextualToolbar);
Toolbar.Results = ToolbarResults;
Toolbar.RightContent = ToolbarRightContent;
Toolbar.Find = ToolbarFind;
Toolbar.ViewSelector = ToolbarViewSelector;
export default Toolbar;