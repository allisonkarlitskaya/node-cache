import React from 'react';
import { TreeViewDataItem } from './TreeView';
interface CheckProps extends Partial<React.InputHTMLAttributes<HTMLInputElement>> {
    checked?: boolean | null;
}
export interface TreeViewListItemProps {
    /** Internal content of a tree view item */
    name: React.ReactNode;
    /** ID of a tree view item */
    id?: string;
    /** Flag indicating if the node is expanded, overrides internal state */
    isExpanded?: boolean;
    /** Flag indicating if node is expanded by default */
    defaultExpanded?: boolean;
    /** Child nodes of a tree view item */
    children?: React.ReactNode;
    /** Callback for item selection */
    onSelect?: (event: React.MouseEvent, item: TreeViewDataItem, parent: TreeViewDataItem) => void;
    /** Callback for item checkbox selection */
    onCheck?: (event: React.ChangeEvent, item: TreeViewDataItem, parent: TreeViewDataItem) => void;
    /** Flag indicating if a tree view item has a checkbox */
    hasCheck?: boolean;
    /** Additional properties of the tree view item checkbox */
    checkProps?: CheckProps;
    /** Flag indicating if a tree view item has a badge */
    hasBadge?: boolean;
    /** Optional prop for custom badge */
    customBadgeContent?: React.ReactNode;
    /** Additional properties of the tree view item badge */
    badgeProps?: any;
    /** Active items of tree view */
    activeItems?: TreeViewDataItem[];
    /** Data structure of tree view item */
    itemData?: TreeViewDataItem;
    /** Parent item of tree view item */
    parentItem?: TreeViewDataItem;
    /** Default icon of a tree view item */
    icon?: React.ReactNode;
    /** Expanded icon of a tree view item */
    expandedIcon?: React.ReactNode;
    /** Action of a tree view item, can be a Button or Dropdown */
    action?: React.ReactNode;
    /** Callback for item comparison function */
    compareItems?: (item: TreeViewDataItem, itemToCheck: TreeViewDataItem) => boolean;
}
export declare const TreeViewListItem: React.FunctionComponent<TreeViewListItemProps>;
export {};
//# sourceMappingURL=TreeViewListItem.d.ts.map