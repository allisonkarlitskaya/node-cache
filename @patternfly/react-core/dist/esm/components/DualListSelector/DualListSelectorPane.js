import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DualListSelector/dual-list-selector';
import { css } from '@patternfly/react-styles';
import formStyles from '@patternfly/react-styles/css/components/FormControl/form-control';
import { DualListSelectorListItem } from './DualListSelectorListItem';
import { DualListSelectorTree } from './DualListSelectorTree';
export class DualListSelectorPane extends React.Component {
    constructor(props) {
        super(props);
        this.menuEl = React.createRef();
        this.optionsRefs = [];
        this.onChange = (e) => {
            this.setState({ input: e.target.value });
            if (this.props.onSearchInputChanged) {
                this.props.onSearchInputChanged(e.target.value, e);
            }
            this.optionsRefs = [];
        };
        this.sendRef = (optionRef, index) => {
            this.optionsRefs[index] = optionRef;
        };
        this.handleKeys = (event) => {
            const key = event.key;
            let moveFocus = false;
            let currentIndex = -1;
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
                if (document.activeElement === this.menuEl.current) {
                    currentIndex = 0;
                    moveFocus = true;
                    event.preventDefault();
                }
                else {
                    this.optionsRefs.forEach((option, index) => {
                        if (document.activeElement === option) {
                            currentIndex = key === 'ArrowUp' || key === 'ArrowLeft' ? index - 1 : index + 1;
                            moveFocus = true;
                            event.preventDefault();
                        }
                    });
                }
            }
            if (moveFocus && this.optionsRefs[currentIndex]) {
                this.optionsRefs[currentIndex].focus();
                this.setState({ focusedOption: `${this.props.id}-option-${currentIndex}` });
            }
        };
        this.filterInput = (item, input) => {
            if (this.props.filterOption) {
                return this.props.filterOption(item, input);
            }
            else {
                if (item.text.toLowerCase().includes(input.toLowerCase()) || input === '') {
                    return true;
                }
            }
            if (item.children) {
                return ((item.children = item.children
                    .map(opt => Object.assign({}, opt))
                    .filter(child => this.filterInput(child, input))).length > 0);
            }
        };
        this.displayOption = (option, input) => {
            if (this.props.filterOption) {
                return this.props.filterOption(option, input);
            }
            else {
                return option
                    .toString()
                    .toLowerCase()
                    .includes(input.toLowerCase());
            }
        };
        this.onOptionSelect = (e, index, isChosen, text, itemData, parentItem) => {
            this.setState({ focusedOption: `${this.props.id}-option-${index}` });
            this.props.onOptionSelect(e, index, isChosen, text, itemData, parentItem);
        };
        this.state = {
            input: '',
            focusedOption: null
        };
    }
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeys);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeys);
    }
    render() {
        const _a = this.props, { isChosen, title, actions, isSearchable, isTree, searchInputAriaLabel, className, status, selectedOptions, options, id, 
        /* eslint-disable @typescript-eslint/no-unused-vars */
        onSearchInputChanged, 
        /* eslint-disable @typescript-eslint/no-unused-vars */
        filterOption, onOptionSelect, onOptionCheck } = _a, props = __rest(_a, ["isChosen", "title", "actions", "isSearchable", "isTree", "searchInputAriaLabel", "className", "status", "selectedOptions", "options", "id", "onSearchInputChanged", "filterOption", "onOptionSelect", "onOptionCheck"]);
        const { input, focusedOption } = this.state;
        let displayIndex = -1;
        return (React.createElement("div", Object.assign({ className: css(styles.dualListSelectorPane, isChosen ? styles.modifiers.chosen : 'pf-m-available', className) }, props),
            title && (React.createElement("div", { className: css(styles.dualListSelectorHeader) },
                React.createElement("div", { className: "pf-c-dual-list-selector__title" },
                    React.createElement("div", { className: css(styles.dualListSelectorTitleText) }, title)))),
            (actions || isSearchable) && (React.createElement("div", { className: css(styles.dualListSelectorTools) },
                isSearchable && (React.createElement("div", { className: css(styles.dualListSelectorToolsFilter) },
                    React.createElement("input", { className: css(formStyles.formControl, formStyles.modifiers.search), type: "search", onChange: this.onChange, "aria-label": searchInputAriaLabel }))),
                actions && React.createElement("div", { className: css(styles.dualListSelectorToolsActions) }, actions))),
            status && (React.createElement("div", { className: css(styles.dualListSelectorStatus) },
                React.createElement("div", { className: css(styles.dualListSelectorStatusText), id: `${id}-status` }, status))),
            options && !isTree && (React.createElement("div", { className: css(styles.dualListSelectorMenu), ref: this.menuEl, tabIndex: 0 },
                React.createElement("ul", { className: css(styles.dualListSelectorList), role: "listbox", "aria-multiselectable": "true", "aria-labelledby": `${id}-status`, "aria-activedescendant": focusedOption }, options.map((option, index) => {
                    if (this.displayOption(option, input)) {
                        displayIndex = displayIndex + 1;
                        return (React.createElement(DualListSelectorListItem, { key: index, isSelected: selectedOptions.indexOf(index) !== -1, onOptionSelect: this.onOptionSelect, isChosen: isChosen, orderIndex: index, filteredIndex: displayIndex, sendRef: this.sendRef, id: `${id}-option-${index}` }, option));
                    }
                    return;
                })))),
            options && isTree && (React.createElement("div", { className: css(styles.dualListSelectorMenu), ref: this.menuEl, tabIndex: 0 },
                React.createElement(DualListSelectorTree, { data: isSearchable
                        ? options
                            .map(opt => Object.assign({}, opt))
                            .filter(item => this.filterInput(item, input))
                        : options, isChosen: isChosen, onOptionSelect: this.onOptionSelect, onOptionCheck: onOptionCheck, selectedOptions: selectedOptions })))));
    }
}
DualListSelectorPane.displayName = 'DualListSelectorPane';
DualListSelectorPane.defaultProps = {
    isChosen: false,
    status: '',
    title: '',
    options: [],
    selectedOptions: [],
    isSearchable: false,
    searchInputAriaLabel: ''
};
//# sourceMappingURL=DualListSelectorPane.js.map