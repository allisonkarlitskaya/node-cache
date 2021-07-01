import * as React from 'react';
import { PickOptional } from '../../helpers';
import { DualListSelectorTreeItemData } from './DualListSelectorTree';
export interface DualListSelectorProps {
    /** Additional classes applied to the dual list selector. */
    className?: string;
    /** Title applied to the available options pane. */
    availableOptionsTitle?: string;
    /** Options to display in the available options pane. When using trees, the options should be in the DualListSelectorTreeItemData[] format. */
    availableOptions?: React.ReactNode[] | DualListSelectorTreeItemData[];
    /** Status message to display above the available options pane. */
    availableOptionsStatus?: string;
    /** Actions to be displayed above the available options pane. */
    availableOptionsActions?: React.ReactNode[];
    /** Title applied to the chosen options pane. */
    chosenOptionsTitle?: string;
    /** Options to display in the chosen options pane. When using trees, the options should be in the DualListSelectorTreeItemData[] format. */
    chosenOptions?: React.ReactNode[] | DualListSelectorTreeItemData[];
    /** Status message to display above the chosen options pane.*/
    chosenOptionsStatus?: string;
    /** Actions to be displayed above the chosen options pane. */
    chosenOptionsActions?: React.ReactNode[];
    /** Accessible label for the controls between the two panes. */
    controlsAriaLabel?: string;
    /** Optional callback for the add selected button */
    addSelected?: (newAvailableOptions: React.ReactNode[], newChosenOptions: React.ReactNode[]) => void;
    /** Accessible label for the add selected button */
    addSelectedAriaLabel?: string;
    /** Tooltip content for the add selected button */
    addSelectedTooltip?: React.ReactNode;
    /** Additonal tooltip properties for the add selected tooltip */
    addSelectedTooltipProps?: any;
    /** Callback fired every time options are chosen or removed */
    onListChange?: (newAvailableOptions: React.ReactNode[], newChosenOptions: React.ReactNode[]) => void;
    /** Optional callback for the add all button */
    addAll?: (newAvailableOptions: React.ReactNode[], newChosenOptions: React.ReactNode[]) => void;
    /** Accessible label for the add all button */
    addAllAriaLabel?: string;
    /** Tooltip content for the add all button */
    addAllTooltip?: React.ReactNode;
    /** Additonal tooltip properties for the add all tooltip */
    addAllTooltipProps?: any;
    /** Optional callback for the remove selected button */
    removeSelected?: (newAvailableOptions: React.ReactNode[], newChosenOptions: React.ReactNode[]) => void;
    /** Accessible label for the remove selected button */
    removeSelectedAriaLabel?: string;
    /** Tooltip content for the remove selected button */
    removeSelectedTooltip?: React.ReactNode;
    /** Additonal tooltip properties for the remove selected tooltip  */
    removeSelectedTooltipProps?: any;
    /** Optional callback for the remove all button */
    removeAll?: (newAvailableOptions: React.ReactNode[], newChosenOptions: React.ReactNode[]) => void;
    /** Accessible label for the remove all button */
    removeAllAriaLabel?: string;
    /** Tooltip content for the remove all button */
    removeAllTooltip?: React.ReactNode;
    /** Additonal tooltip properties for the remove all tooltip */
    removeAllTooltipProps?: any;
    /** Optional callback fired when an option is selected */
    onOptionSelect?: (e: React.MouseEvent | React.ChangeEvent) => void;
    /** Optional callback fired when an option is checked */
    onOptionCheck?: (e: React.MouseEvent | React.ChangeEvent<HTMLInputElement>, checked: boolean, checkedId: string, newCheckedItems: string[]) => void;
    /** Flag indicating a search bar should be included above both the available and chosen panes. */
    isSearchable?: boolean;
    /** Accessible label for the search input on the available options pane. */
    availableOptionsSearchAriaLabel?: string;
    /** A callback for when the search input value for available options changes. */
    onAvailableOptionsSearchInputChanged?: (value: string, event: React.FormEvent<HTMLInputElement>) => void;
    /** Accessible label for the search input on the chosen options pane. */
    chosenOptionsSearchAriaLabel?: string;
    /** A callback for when the search input value for chosen options changes. */
    onChosenOptionsSearchInputChanged?: (value: string, event: React.FormEvent<HTMLInputElement>) => void;
    /** Optional filter function for custom filtering based on search string. */
    filterOption?: (option: React.ReactNode, input: string) => boolean;
    /** Id of the dual list selector. */
    id?: string;
    isTree?: boolean;
}
interface DualListSelectorState {
    availableOptions: React.ReactNode[];
    availableOptionsSelected: number[];
    availableFilteredOptions: React.ReactNode[];
    chosenOptions: React.ReactNode[];
    chosenOptionsSelected: number[];
    chosenFilteredOptions: React.ReactNode[];
    availableTreeOptionsSelected: string[];
    availableTreeFilteredOptions: string[];
    chosenTreeOptionsSelected: string[];
    availableTreeOptionsChecked: string[];
    chosenTreeOptionsChecked: string[];
    chosenTreeFilteredOptions: string[];
}
export declare class DualListSelector extends React.Component<DualListSelectorProps, DualListSelectorState> {
    static displayName: string;
    private controlsEl;
    private addAllButtonRef;
    private addSelectedButtonRef;
    private removeSelectedButtonRef;
    private removeAllButtonRef;
    static defaultProps: PickOptional<DualListSelectorProps>;
    private originalCopy;
    constructor(props: DualListSelectorProps);
    componentDidUpdate(): void;
    onFilterUpdate: (newFilteredOptions: React.ReactNode[], paneType: string, isSearchReset: boolean) => void;
    addAllVisible: () => void;
    addAllTreeVisible: () => void;
    addSelected: () => void;
    addTreeSelected: () => void;
    removeAllVisible: () => void;
    removeAllTreeVisible: () => void;
    removeSelected: () => void;
    removeTreeSelected: () => void;
    onOptionSelect: (e: React.MouseEvent | React.ChangeEvent, index: number, isChosen: boolean, id?: string, itemData?: any, parentData?: any) => void;
    onTreeOptionSelect: (e: React.MouseEvent | React.ChangeEvent, index: number, isChosen: boolean, id?: string, itemData?: any, parentData?: any) => void;
    isChecked: (treeItem: DualListSelectorTreeItemData, isChosen: boolean) => boolean;
    areAllDescendantsChecked: (treeItem: DualListSelectorTreeItemData, isChosen: boolean) => boolean;
    areSomeDescendantsChecked: (treeItem: DualListSelectorTreeItemData, isChosen: boolean) => boolean;
    mapChecked: (item: DualListSelectorTreeItemData, isChosen: boolean) => DualListSelectorTreeItemData;
    onTreeOptionCheck: (evt: React.MouseEvent | React.ChangeEvent<HTMLInputElement>, isChecked: boolean, isChosen: boolean, itemData: DualListSelectorTreeItemData) => void;
    handleKeys: (event: KeyboardEvent) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=DualListSelector.d.ts.map