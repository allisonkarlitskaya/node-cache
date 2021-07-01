import * as React from 'react';
import { DualListSelectorTreeItemData } from './DualListSelectorTree';
import { PickOptional } from '../../helpers';
export interface DualListSelectorPaneProps {
    /** Additional classes applied to the dual list selector. */
    className?: string;
    /** Flag indicating if this pane is the chosen pane. */
    isChosen?: boolean;
    isTree?: boolean;
    /** Status to display above the pane. */
    status?: string;
    /** Title of the pane. */
    title?: React.ReactNode;
    /** Options to list in the pane. */
    options?: React.ReactNode[];
    /** Options currently selected in the pane. */
    selectedOptions?: string[] | number[];
    /** Callback for search input. */
    onSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /** Callback for when an option is selected. */
    onOptionSelect?: (e: React.MouseEvent | React.ChangeEvent, index: number, isChosen: boolean, text?: string, itemData?: any, parentData?: any) => void;
    onOptionCheck?: (evt: React.MouseEvent | React.ChangeEvent<HTMLInputElement>, isChecked: boolean, isChosen: boolean, itemData: DualListSelectorTreeItemData) => void;
    /** Actions to place above the pane. */
    actions?: React.ReactNode[];
    /** A callback for when the search input value for changes. */
    onSearchInputChanged?: (value: string, event: React.FormEvent<HTMLInputElement>) => void;
    /** Filter function for custom filtering based on search string. */
    filterOption?: (option: React.ReactNode, input: string) => boolean;
    /** Flag indicating a search bar should be included above the pane. */
    isSearchable?: boolean;
    /** Accessible label for the search input */
    searchInputAriaLabel?: string;
    /** Id of the pane. */
    id: string;
    /** Callback for updating the filtered options in DualListSelector */
    onFilterUpdate?: (newFilteredOptions: React.ReactNode[], paneType: string, isSearchReset: boolean) => void;
}
interface DualListSelectorPaneState {
    input: string;
    focusedOption: string;
}
export declare class DualListSelectorPane extends React.Component<DualListSelectorPaneProps, DualListSelectorPaneState> {
    static displayName: string;
    static defaultProps: PickOptional<DualListSelectorPaneProps>;
    private menuEl;
    private optionsRefs;
    constructor(props: DualListSelectorPaneProps);
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    sendRef: (optionRef: React.ReactNode, index: number) => void;
    handleKeys: (event: KeyboardEvent) => void;
    filterInput: (item: DualListSelectorTreeItemData, input: string) => boolean;
    displayOption: (option: React.ReactNode, input: string) => boolean;
    onOptionSelect: (e: React.MouseEvent | React.ChangeEvent, index: number, isChosen: boolean, text?: string, itemData?: any, parentItem?: any) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=DualListSelectorPane.d.ts.map