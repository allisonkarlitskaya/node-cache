import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Nav/nav';
import { css } from '@patternfly/react-styles';
import { NavContext } from './Nav';
import { PageSidebarContext } from '../Page/PageSidebar';
import { useOUIAProps } from '../../helpers';
export const NavItem = (_a) => {
    var { children, styleChildren = true, className, to, isActive = false, groupId = null, itemId = null, preventDefault = false, onClick = null, component = 'a', ouiaId, ouiaSafe } = _a, props = __rest(_a, ["children", "styleChildren", "className", "to", "isActive", "groupId", "itemId", "preventDefault", "onClick", "component", "ouiaId", "ouiaSafe"]);
    const Component = component;
    const { isNavOpen } = React.useContext(PageSidebarContext);
    const renderDefaultLink = (context) => {
        const preventLinkDefault = preventDefault || !to;
        return (React.createElement(Component, Object.assign({ href: to, onClick: (e) => context.onSelect(e, groupId, itemId, to, preventLinkDefault, onClick), className: css(styles.navLink, isActive && styles.modifiers.current, className), "aria-current": isActive ? 'page' : null, tabIndex: isNavOpen ? null : '-1' }, props), children));
    };
    const renderClonedChild = (context, child) => React.cloneElement(child, Object.assign(Object.assign({ onClick: (e) => context.onSelect(e, groupId, itemId, to, preventDefault, onClick), 'aria-current': isActive ? 'page' : null }, (styleChildren && {
        className: css(styles.navLink, isActive && styles.modifiers.current, child.props && child.props.className)
    })), { tabIndex: child.props.tabIndex || isNavOpen ? null : -1 }));
    const ouiaProps = useOUIAProps(NavItem.displayName, ouiaId, ouiaSafe);
    return (React.createElement("li", Object.assign({ className: css(styles.navItem, className) }, ouiaProps),
        React.createElement(NavContext.Consumer, null, context => React.isValidElement(children)
            ? renderClonedChild(context, children)
            : renderDefaultLink(context))));
};
NavItem.displayName = 'NavItem';
//# sourceMappingURL=NavItem.js.map