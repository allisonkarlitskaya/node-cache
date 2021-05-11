import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { Tr } from '../TableComposable';
export const TreeRowWrapper = (_a) => {
    var { className, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    rowProps, row } = _a, props = __rest(_a, ["className", "rowProps", "row"]);
    const { 'aria-level': level, 'aria-posinset': posinset, 'aria-setsize': setsize, isExpanded, isHidden } = row.props;
    return (React.createElement(Tr, Object.assign({ "aria-level": level, "aria-posinset": posinset, "aria-setsize": setsize, "aria-expanded": !!isExpanded, isHidden: isHidden, className: css(className, isExpanded && 'pf-m-expandable', isExpanded && styles.modifiers.expanded) }, props)));
};
TreeRowWrapper.displayName = 'TreeRowWrapper';
//# sourceMappingURL=TreeRowWrapper.js.map