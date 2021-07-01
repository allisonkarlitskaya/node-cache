import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DualListSelector/dual-list-selector';
import { css } from '@patternfly/react-styles';
import { Button, ButtonVariant } from '../Button';
import AngleDoubleLeftIcon from "@patternfly/react-icons/dist/esm/icons/angle-double-left-icon";
import AngleLeftIcon from "@patternfly/react-icons/dist/esm/icons/angle-left-icon";
import AngleDoubleRightIcon from "@patternfly/react-icons/dist/esm/icons/angle-double-right-icon";
import AngleRightIcon from "@patternfly/react-icons/dist/esm/icons/angle-right-icon";
import { DualListSelectorPane } from './DualListSelectorPane';
import { getUniqueId } from '../../helpers';
import { Tooltip } from '../Tooltip';
import { flattenTree, flattenTreeWithFolders, filterFolders, filterTreeItems, filterTreeItemsWithoutFolders, filterRestTreeItems } from './treeUtils';
import { canUseDOM } from '../../helpers/util';
export class DualListSelector extends React.Component {
    constructor(props) {
        super(props);
        this.controlsEl = React.createRef();
        this.addAllButtonRef = React.createRef();
        this.addSelectedButtonRef = React.createRef();
        this.removeSelectedButtonRef = React.createRef();
        this.removeAllButtonRef = React.createRef();
        this.originalCopy = this.props.availableOptions;
        this.onFilterUpdate = (newFilteredOptions, paneType, isSearchReset) => {
            const { isTree } = this.props;
            if (paneType === 'available') {
                if (isSearchReset) {
                    this.setState({
                        availableFilteredOptions: null,
                        availableTreeFilteredOptions: null
                    });
                    return;
                }
                if (isTree) {
                    this.setState({
                        availableTreeFilteredOptions: flattenTreeWithFolders(newFilteredOptions)
                    });
                }
                else {
                    this.setState({
                        availableFilteredOptions: newFilteredOptions
                    });
                }
            }
            else if (paneType === 'chosen') {
                if (isSearchReset) {
                    this.setState({
                        chosenFilteredOptions: null,
                        chosenTreeFilteredOptions: null
                    });
                    return;
                }
                if (isTree) {
                    this.setState({
                        chosenTreeFilteredOptions: flattenTreeWithFolders(newFilteredOptions)
                    });
                }
                else {
                    this.setState({
                        chosenFilteredOptions: newFilteredOptions
                    });
                }
            }
        };
        this.addAllVisible = () => {
            this.setState(prevState => {
                const itemsToRemove = [];
                const newAvailable = [];
                const movedOptions = prevState.availableFilteredOptions || prevState.availableOptions;
                prevState.availableOptions.forEach(value => {
                    if (movedOptions.indexOf(value) !== -1) {
                        itemsToRemove.push(value);
                    }
                    else {
                        newAvailable.push(value);
                    }
                });
                const newChosen = [...prevState.chosenOptions, ...itemsToRemove];
                this.props.addAll && this.props.addAll(newAvailable, newChosen);
                this.props.onListChange && this.props.onListChange(newAvailable, newChosen);
                return {
                    chosenOptions: newChosen,
                    availableOptions: newAvailable
                };
            });
        };
        this.addAllTreeVisible = () => {
            this.setState(prevState => {
                const movedOptions = prevState.availableTreeFilteredOptions ||
                    flattenTreeWithFolders(prevState.availableOptions);
                const newAvailable = prevState.availableOptions
                    .map(opt => Object.assign({}, opt))
                    .filter(item => filterRestTreeItems(item, movedOptions));
                const currChosen = flattenTree(prevState.chosenOptions);
                const nextChosenOptions = currChosen.concat(movedOptions);
                const newChosen = this.originalCopy
                    .map(opt => Object.assign({}, opt))
                    .filter(item => filterTreeItemsWithoutFolders(item, nextChosenOptions));
                this.props.addAll && this.props.addAll(newAvailable, newChosen);
                this.props.onListChange && this.props.onListChange(newAvailable, newChosen);
                return {
                    chosenOptions: newChosen,
                    chosenFilteredOptions: newChosen,
                    availableOptions: newAvailable,
                    availableFilteredOptions: newAvailable
                };
            });
        };
        this.addSelected = () => {
            this.setState(prevState => {
                const itemsToRemove = [];
                const newAvailable = [];
                prevState.availableOptions.forEach((value, index) => {
                    if (prevState.availableOptionsSelected.indexOf(index) !== -1) {
                        itemsToRemove.push(value);
                    }
                    else {
                        newAvailable.push(value);
                    }
                });
                const newChosen = [...prevState.chosenOptions, ...itemsToRemove];
                this.props.addSelected && this.props.addSelected(newAvailable, newChosen);
                this.props.onListChange && this.props.onListChange(newAvailable, newChosen);
                return {
                    chosenOptionsSelected: [],
                    availableOptionsSelected: [],
                    chosenOptions: newChosen,
                    availableOptions: newAvailable
                };
            });
        };
        this.addTreeSelected = () => {
            this.setState(prevState => {
                // Remove selected available nodes from current available nodes
                const newAvailable = prevState.availableOptions
                    .map(opt => Object.assign({}, opt))
                    .filter(item => filterRestTreeItems(item, prevState.availableTreeOptionsSelected));
                // Get next chosen options from current + new nodes and remap from base
                const currChosen = flattenTree(prevState.chosenOptions);
                const nextChosenOptions = currChosen.concat(prevState.availableTreeOptionsSelected);
                const newChosen = this.originalCopy
                    .map(opt => Object.assign({}, opt))
                    .filter(item => filterTreeItemsWithoutFolders(item, nextChosenOptions));
                this.props.addSelected && this.props.addSelected(newAvailable, newChosen);
                this.props.onListChange && this.props.onListChange(newAvailable, newChosen);
                return {
                    availableTreeOptionsSelected: [],
                    chosenTreeOptionsSelected: [],
                    availableTreeOptionsChecked: [],
                    chosenTreeOptionsChecked: [],
                    availableOptions: newAvailable,
                    chosenOptions: newChosen
                };
            });
        };
        this.removeAllVisible = () => {
            this.setState(prevState => {
                const itemsToRemove = [];
                const newChosen = [];
                const movedOptions = prevState.chosenFilteredOptions || prevState.chosenOptions;
                prevState.chosenOptions.forEach(value => {
                    if (movedOptions.indexOf(value) !== -1) {
                        itemsToRemove.push(value);
                    }
                    else {
                        newChosen.push(value);
                    }
                });
                const newAvailable = [...prevState.availableOptions, ...itemsToRemove];
                this.props.removeAll && this.props.removeAll(newAvailable, newChosen);
                this.props.onListChange && this.props.onListChange(newAvailable, newChosen);
                return {
                    chosenOptions: newChosen,
                    availableOptions: newAvailable
                };
            });
        };
        this.removeAllTreeVisible = () => {
            this.setState(prevState => {
                const movedOptions = prevState.chosenTreeFilteredOptions ||
                    flattenTreeWithFolders(prevState.chosenOptions);
                const newChosen = prevState.chosenOptions
                    .map(opt => Object.assign({}, opt))
                    .filter(item => filterRestTreeItems(item, movedOptions));
                const currAvailable = flattenTree(prevState.availableOptions);
                const nextAvailableOptions = currAvailable.concat(movedOptions);
                const newAvailable = this.originalCopy
                    .map(opt => Object.assign({}, opt))
                    .filter(item => filterTreeItemsWithoutFolders(item, nextAvailableOptions));
                this.props.removeAll && this.props.removeAll(newAvailable, newChosen);
                this.props.onListChange && this.props.onListChange(newAvailable, newChosen);
                return {
                    chosenOptions: newChosen,
                    availableOptions: newAvailable
                };
            });
        };
        this.removeSelected = () => {
            this.setState(prevState => {
                const itemsToRemove = [];
                const newChosen = [];
                prevState.chosenOptions.forEach((value, index) => {
                    if (prevState.chosenOptionsSelected.indexOf(index) !== -1) {
                        itemsToRemove.push(value);
                    }
                    else {
                        newChosen.push(value);
                    }
                });
                const newAvailable = [...prevState.availableOptions, ...itemsToRemove];
                this.props.removeSelected && this.props.removeSelected(newAvailable, newChosen);
                this.props.onListChange && this.props.onListChange(newAvailable, newChosen);
                return {
                    chosenOptionsSelected: [],
                    availableOptionsSelected: [],
                    chosenOptions: newChosen,
                    availableOptions: newAvailable
                };
            });
        };
        this.removeTreeSelected = () => {
            this.setState(prevState => {
                // Remove selected chosen nodes from current chosen nodes
                const newChosen = prevState.chosenOptions
                    .map(opt => Object.assign({}, opt))
                    .filter(item => filterRestTreeItems(item, prevState.chosenTreeOptionsSelected));
                // Get next chosen options from current and remap from base
                const currAvailable = flattenTree(prevState.availableOptions);
                const nextAvailableOptions = currAvailable.concat(prevState.chosenTreeOptionsSelected);
                const newAvailable = this.originalCopy
                    .map(opt => Object.assign({}, opt))
                    .filter(item => filterTreeItemsWithoutFolders(item, nextAvailableOptions));
                this.props.removeSelected && this.props.removeSelected(newAvailable, newChosen);
                this.props.onListChange && this.props.onListChange(newAvailable, newChosen);
                return {
                    availableTreeOptionsSelected: [],
                    chosenTreeOptionsSelected: [],
                    availableTreeOptionsChecked: [],
                    chosenTreeOptionsChecked: [],
                    availableOptions: newAvailable,
                    chosenOptions: newChosen
                };
            });
        };
        this.onOptionSelect = (e, index, isChosen, 
        /* eslint-disable @typescript-eslint/no-unused-vars */
        id, itemData, parentData
        /* eslint-enable @typescript-eslint/no-unused-vars */
        ) => {
            this.setState(prevState => {
                const originalArray = isChosen ? prevState.chosenOptionsSelected : prevState.availableOptionsSelected;
                let updatedArray = null;
                if (originalArray.indexOf(index) !== -1) {
                    updatedArray = originalArray.filter(value => value !== index);
                }
                else {
                    updatedArray = [...originalArray, index];
                }
                return {
                    chosenOptionsSelected: isChosen ? updatedArray : prevState.chosenOptionsSelected,
                    availableOptionsSelected: isChosen ? prevState.availableOptionsSelected : updatedArray
                };
            });
            this.props.onOptionSelect && this.props.onOptionSelect(e);
        };
        this.onTreeOptionSelect = (e, index, isChosen, id, itemData, 
        /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
        parentData) => {
            this.setState(prevState => {
                const selectedOptions = isChosen ? prevState.chosenTreeOptionsSelected : prevState.availableTreeOptionsSelected;
                let updatedArray = null;
                if (itemData.children) {
                    const panelOptions = isChosen ? this.state.chosenOptions : this.state.availableOptions;
                    const selectedOptionTree = panelOptions
                        .map(opt => Object.assign({}, opt))
                        .filter(item => filterTreeItems(item, [id]));
                    const flatSelectedItems = flattenTreeWithFolders(selectedOptionTree);
                    if (selectedOptions.includes(id)) {
                        updatedArray = selectedOptions.filter(id => !flatSelectedItems.includes(id));
                    }
                    else {
                        updatedArray = selectedOptions.concat(flatSelectedItems.filter(id => !selectedOptions.includes(id)));
                    }
                }
                else {
                    if (selectedOptions.includes(id)) {
                        updatedArray = selectedOptions.filter(id => !selectedOptions.includes(id));
                    }
                    else {
                        updatedArray = [...selectedOptions, id];
                    }
                }
                return {
                    chosenTreeOptionsSelected: isChosen ? updatedArray : prevState.chosenTreeOptionsSelected,
                    availableTreeOptionsSelected: isChosen ? prevState.availableTreeOptionsSelected : updatedArray
                };
            });
            this.props.onOptionSelect && this.props.onOptionSelect(e);
        };
        this.isChecked = (treeItem, isChosen) => isChosen
            ? this.state.chosenTreeOptionsChecked.includes(treeItem.id)
            : this.state.availableTreeOptionsChecked.includes(treeItem.id);
        this.areAllDescendantsChecked = (treeItem, isChosen) => treeItem.children
            ? treeItem.children.every(child => this.areAllDescendantsChecked(child, isChosen))
            : this.isChecked(treeItem, isChosen);
        this.areSomeDescendantsChecked = (treeItem, isChosen) => treeItem.children
            ? treeItem.children.some(child => this.areSomeDescendantsChecked(child, isChosen))
            : this.isChecked(treeItem, isChosen);
        this.mapChecked = (item, isChosen) => {
            const hasCheck = this.areAllDescendantsChecked(item, isChosen);
            item.isChecked = false;
            if (hasCheck) {
                item.isChecked = true;
            }
            else {
                const hasPartialCheck = this.areSomeDescendantsChecked(item, isChosen);
                if (hasPartialCheck) {
                    item.isChecked = null;
                }
            }
            if (item.children) {
                return Object.assign(Object.assign({}, item), { children: item.children.map(child => this.mapChecked(child, isChosen)) });
            }
            return item;
        };
        this.onTreeOptionCheck = (evt, isChecked, isChosen, itemData) => {
            const { availableOptions, availableTreeFilteredOptions, chosenOptions, chosenTreeFilteredOptions } = this.state;
            const checked = evt.target.checked
                ? evt.target.checked
                : isChecked;
            let panelOptions;
            if (isChosen) {
                if (chosenTreeFilteredOptions) {
                    panelOptions = chosenOptions
                        .map(opt => Object.assign({}, opt))
                        .filter(item => filterTreeItemsWithoutFolders(item, chosenTreeFilteredOptions));
                }
                else {
                    panelOptions = chosenOptions;
                }
            }
            else {
                if (availableTreeFilteredOptions) {
                    panelOptions = availableOptions
                        .map(opt => Object.assign({}, opt))
                        .filter(item => filterTreeItemsWithoutFolders(item, availableTreeFilteredOptions));
                }
                else {
                    panelOptions = availableOptions;
                }
            }
            const checkedOptionTree = panelOptions
                .map(opt => Object.assign({}, opt))
                .filter(item => filterTreeItems(item, [itemData.id]));
            const flatTree = flattenTreeWithFolders(checkedOptionTree);
            const prevChecked = isChosen ? this.state.chosenTreeOptionsChecked : this.state.availableTreeOptionsChecked;
            let updatedChecked = [];
            let updatedSelected = [];
            const selectedOptions = isChosen ? this.state.chosenTreeOptionsSelected : this.state.availableTreeOptionsSelected;
            if (checked) {
                updatedChecked = prevChecked.concat(flatTree.filter(id => !prevChecked.includes(id)));
                updatedSelected = selectedOptions.concat(flatTree.filter(id => !selectedOptions.includes(id)));
            }
            else {
                updatedChecked = prevChecked.filter(id => !flatTree.includes(id));
                updatedSelected = selectedOptions.filter(id => !flatTree.includes(id));
            }
            this.setState(prevState => ({
                availableTreeOptionsChecked: isChosen ? prevState.availableTreeOptionsChecked : updatedChecked,
                chosenTreeOptionsChecked: isChosen ? updatedChecked : prevState.chosenTreeOptionsChecked,
                availableTreeOptionsSelected: isChosen ? prevState.availableTreeOptionsSelected : updatedSelected,
                chosenTreeOptionsSelected: isChosen ? updatedSelected : prevState.chosenTreeOptionsSelected
            }), () => {
                this.props.onOptionCheck && this.props.onOptionCheck(evt, isChecked, itemData.id, updatedChecked);
            });
            this.props.onOptionSelect && this.props.onOptionSelect(evt);
        };
        this.handleKeys = (event) => {
            const key = event.key;
            let moveFocus = false;
            let currentIndex = -1;
            const controls = Array.from(this.controlsEl.current.getElementsByClassName('pf-c-button'));
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
                if (document.activeElement === this.controlsEl.current) {
                    currentIndex = 0;
                    while (currentIndex < controls.length &&
                        currentIndex >= 0 &&
                        controls[currentIndex].classList.contains('pf-m-disabled')) {
                        currentIndex = currentIndex + 1;
                    }
                    moveFocus = true;
                    event.preventDefault();
                }
                else {
                    controls.forEach((control, index) => {
                        if (document.activeElement === control) {
                            const increment = key === 'ArrowUp' || key === 'ArrowLeft' ? -1 : 1;
                            currentIndex = index + increment;
                            while (currentIndex < controls.length &&
                                currentIndex >= 0 &&
                                controls[currentIndex].classList.contains('pf-m-disabled')) {
                                currentIndex = currentIndex + increment;
                            }
                            moveFocus = true;
                            event.preventDefault();
                        }
                    });
                }
            }
            if (moveFocus && controls[currentIndex]) {
                controls[currentIndex].focus();
            }
        };
        this.state = {
            availableOptions: [...this.props.availableOptions],
            availableOptionsSelected: [],
            availableFilteredOptions: null,
            availableTreeFilteredOptions: null,
            chosenOptions: [...this.props.chosenOptions],
            chosenOptionsSelected: [],
            chosenFilteredOptions: null,
            chosenTreeFilteredOptions: null,
            availableTreeOptionsSelected: [],
            chosenTreeOptionsSelected: [],
            availableTreeOptionsChecked: [],
            chosenTreeOptionsChecked: []
        };
    }
    componentDidUpdate() {
        if (JSON.stringify(this.props.availableOptions) !== JSON.stringify(this.state.availableOptions) ||
            JSON.stringify(this.props.chosenOptions) !== JSON.stringify(this.state.chosenOptions)) {
            this.setState({
                availableOptions: [...this.props.availableOptions],
                chosenOptions: [...this.props.chosenOptions]
            });
        }
    }
    componentDidMount() {
        if (canUseDOM) {
            window.addEventListener('keydown', this.handleKeys);
        }
    }
    componentWillUnmount() {
        if (canUseDOM) {
            window.removeEventListener('keydown', this.handleKeys);
        }
    }
    render() {
        const _a = this.props, { availableOptionsTitle, availableOptionsActions, availableOptionsSearchAriaLabel, className, chosenOptionsTitle, chosenOptionsActions, chosenOptionsSearchAriaLabel, filterOption, isSearchable, chosenOptionsStatus, availableOptionsStatus, controlsAriaLabel, addAllAriaLabel, addSelectedAriaLabel, removeSelectedAriaLabel, removeAllAriaLabel, 
        /* eslint-disable @typescript-eslint/no-unused-vars */
        availableOptions: consumerPassedAvailableOptions, chosenOptions: consumerPassedChosenOptions, removeSelected, addAll, removeAll, addSelected, onListChange, onAvailableOptionsSearchInputChanged, onChosenOptionsSearchInputChanged, onOptionSelect, onOptionCheck, id, isTree, addAllTooltip, addAllTooltipProps, addSelectedTooltip, addSelectedTooltipProps, removeAllTooltip, removeAllTooltipProps, removeSelectedTooltip, removeSelectedTooltipProps } = _a, props = __rest(_a, ["availableOptionsTitle", "availableOptionsActions", "availableOptionsSearchAriaLabel", "className", "chosenOptionsTitle", "chosenOptionsActions", "chosenOptionsSearchAriaLabel", "filterOption", "isSearchable", "chosenOptionsStatus", "availableOptionsStatus", "controlsAriaLabel", "addAllAriaLabel", "addSelectedAriaLabel", "removeSelectedAriaLabel", "removeAllAriaLabel", "availableOptions", "chosenOptions", "removeSelected", "addAll", "removeAll", "addSelected", "onListChange", "onAvailableOptionsSearchInputChanged", "onChosenOptionsSearchInputChanged", "onOptionSelect", "onOptionCheck", "id", "isTree", "addAllTooltip", "addAllTooltipProps", "addSelectedTooltip", "addSelectedTooltipProps", "removeAllTooltip", "removeAllTooltipProps", "removeSelectedTooltip", "removeSelectedTooltipProps"]);
        const { availableOptions, chosenOptions, chosenOptionsSelected, availableOptionsSelected, chosenTreeOptionsSelected, availableTreeOptionsSelected } = this.state;
        const availableOptionsStatusToDisplay = availableOptionsStatus ||
            (isTree
                ? `${filterFolders(availableOptions, availableTreeOptionsSelected).length} of ${flattenTree(availableOptions).length} items selected`
                : `${availableOptionsSelected.length} of ${availableOptions.length} items selected`);
        const chosenOptionsStatusToDisplay = chosenOptionsStatus ||
            (isTree
                ? `${filterFolders(chosenOptions, chosenTreeOptionsSelected).length} of ${flattenTree(chosenOptions).length} items selected`
                : `${chosenOptionsSelected.length} of ${chosenOptions.length} items selected`);
        const available = isTree
            ? availableOptions.map(item => this.mapChecked(item, false))
            : availableOptions;
        const chosen = isTree
            ? chosenOptions.map(item => this.mapChecked(item, true))
            : chosenOptions;
        return (React.createElement("div", Object.assign({ className: css(styles.dualListSelector, className), id: id }, props),
            React.createElement(DualListSelectorPane, { isSearchable: isSearchable, onFilterUpdate: this.onFilterUpdate, searchInputAriaLabel: availableOptionsSearchAriaLabel, filterOption: filterOption, onSearchInputChanged: onAvailableOptionsSearchInputChanged, status: availableOptionsStatusToDisplay, title: availableOptionsTitle, options: available, selectedOptions: isTree ? availableTreeOptionsSelected : availableOptionsSelected, onOptionSelect: isTree ? this.onTreeOptionSelect : this.onOptionSelect, onOptionCheck: this.onTreeOptionCheck, actions: availableOptionsActions, id: `${id}-available-pane`, isTree: isTree }),
            React.createElement("div", { className: css(styles.dualListSelectorControls), tabIndex: 0, ref: this.controlsEl, "aria-label": controlsAriaLabel },
                React.createElement("div", { className: css('pf-c-dual-list-selector__controls-item') },
                    React.createElement(Button, { isDisabled: availableOptions.length === 0, "aria-disabled": availableOptions.length === 0, variant: ButtonVariant.plain, onClick: isTree ? this.addAllTreeVisible : this.addAllVisible, "aria-label": addAllAriaLabel, tabIndex: -1, ref: this.addAllButtonRef },
                        React.createElement(AngleDoubleRightIcon, null)),
                    addAllTooltip && (React.createElement(Tooltip, Object.assign({ content: addAllTooltip, position: "left", reference: this.addAllButtonRef }, addAllTooltipProps)))),
                React.createElement("div", { className: css('pf-c-dual-list-selector__controls-item') },
                    React.createElement(Button, { isDisabled: isTree ? availableTreeOptionsSelected.length === 0 : availableOptionsSelected.length === 0, "aria-disabled": isTree ? availableTreeOptionsSelected.length === 0 : availableOptionsSelected.length === 0, variant: ButtonVariant.plain, onClick: isTree ? this.addTreeSelected : this.addSelected, "aria-label": addSelectedAriaLabel, tabIndex: -1, ref: this.addSelectedButtonRef },
                        React.createElement(AngleRightIcon, null)),
                    addSelectedTooltip && (React.createElement(Tooltip, Object.assign({ content: addSelectedTooltip, position: "right", reference: this.addSelectedButtonRef }, addSelectedTooltipProps)))),
                React.createElement("div", { className: css('pf-c-dual-list-selector__controls-item') },
                    React.createElement(Button, { variant: ButtonVariant.plain, onClick: isTree ? this.removeTreeSelected : this.removeSelected, "aria-label": removeSelectedAriaLabel, tabIndex: -1, isDisabled: isTree ? chosenTreeOptionsSelected.length === 0 : chosenOptionsSelected.length === 0, "aria-disabled": isTree ? chosenTreeOptionsSelected.length === 0 : chosenOptionsSelected.length === 0, ref: this.removeSelectedButtonRef },
                        React.createElement(AngleLeftIcon, null)),
                    removeSelectedTooltip && (React.createElement(Tooltip, Object.assign({ content: removeSelectedTooltip, position: "left", reference: this.removeSelectedButtonRef }, removeSelectedTooltipProps)))),
                React.createElement("div", { className: css('pf-c-dual-list-selector__controls-item') },
                    React.createElement(Button, { isDisabled: chosenOptions.length === 0, "aria-disabled": chosenOptions.length === 0, variant: ButtonVariant.plain, onClick: isTree ? this.removeAllTreeVisible : this.removeAllVisible, "aria-label": removeAllAriaLabel, tabIndex: -1, ref: this.removeAllButtonRef },
                        React.createElement(AngleDoubleLeftIcon, null)),
                    removeAllTooltip && (React.createElement(Tooltip, Object.assign({ content: removeAllTooltip, position: "right", reference: this.removeAllButtonRef }, removeAllTooltipProps))))),
            React.createElement(DualListSelectorPane, { isChosen: true, isSearchable: isSearchable, onFilterUpdate: this.onFilterUpdate, searchInputAriaLabel: chosenOptionsSearchAriaLabel, filterOption: filterOption, onSearchInputChanged: onChosenOptionsSearchInputChanged, title: chosenOptionsTitle, status: chosenOptionsStatusToDisplay, options: chosen, selectedOptions: isTree ? chosenTreeOptionsSelected : chosenOptionsSelected, onOptionSelect: isTree ? this.onTreeOptionSelect : this.onOptionSelect, onOptionCheck: this.onTreeOptionCheck, actions: chosenOptionsActions, id: `${id}-chosen-pane`, isTree: isTree })));
    }
}
DualListSelector.displayName = 'DualListSelector';
DualListSelector.defaultProps = {
    availableOptions: [],
    availableOptionsTitle: 'Available options',
    availableOptionsSearchAriaLabel: 'Available search input',
    chosenOptions: [],
    chosenOptionsTitle: 'Chosen options',
    chosenOptionsSearchAriaLabel: 'Chosen search input',
    id: getUniqueId('dual-list-selector'),
    controlsAriaLabel: 'Selector controls',
    addAllAriaLabel: 'Add all',
    addSelectedAriaLabel: 'Add selected',
    removeSelectedAriaLabel: 'Remove selected',
    removeAllAriaLabel: 'Remove all'
};
//# sourceMappingURL=DualListSelector.js.map