import React from 'react';
import DualListHeading from './DualListHeading';
import DualListBody from './DualListBody';
import DualListFooter from './DualListFooter';

const DualListSelector = props => React.createElement("div", {
  className: "dual-list-pf-selector"
}, React.createElement(DualListHeading, props), React.createElement(DualListBody, props), React.createElement(DualListFooter, props));

export default DualListSelector;