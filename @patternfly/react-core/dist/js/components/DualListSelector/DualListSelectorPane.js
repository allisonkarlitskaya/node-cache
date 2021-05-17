"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DualListSelectorPane = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const dual_list_selector_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/DualListSelector/dual-list-selector"));
const react_styles_1 = require("@patternfly/react-styles");
const form_control_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/FormControl/form-control"));
const DualListSelectorListItem_1 = require("./DualListSelectorListItem");
const DualListSelectorTree_1 = require("./DualListSelectorTree");
class DualListSelectorPane extends React.Component {
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
        filterOption, onOptionSelect, onOptionCheck } = _a, props = tslib_1.__rest(_a, ["isChosen", "title", "actions", "isSearchable", "isTree", "searchInputAriaLabel", "className", "status", "selectedOptions", "options", "id", "onSearchInputChanged", "filterOption", "onOptionSelect", "onOptionCheck"]);
        const { input, focusedOption } = this.state;
        let displayIndex = -1;
        return (React.createElement("div", Object.assign({ className: react_styles_1.css(dual_list_selector_1.default.dualListSelectorPane, isChosen ? dual_list_selector_1.default.modifiers.chosen : 'pf-m-available', className) }, props),
            title && (React.createElement("div", { className: react_styles_1.css(dual_list_selector_1.default.dualListSelectorHeader) },
                React.createElement("div", { className: "pf-c-dual-list-selector__title" },
                    React.createElement("div", { className: react_styles_1.css(dual_list_selector_1.default.dualListSelectorTitleText) }, title)))),
            (actions || isSearchable) && (React.createElement("div", { className: react_styles_1.css(dual_list_selector_1.default.dualListSelectorTools) },
                isSearchable && (React.createElement("div", { className: react_styles_1.css(dual_list_selector_1.default.dualListSelectorToolsFilter) },
                    React.createElement("input", { className: react_styles_1.css(form_control_1.default.formControl, form_control_1.default.modifiers.search), type: "search", onChange: this.onChange, "aria-label": searchInputAriaLabel }))),
                actions && React.createElement("div", { className: react_styles_1.css(dual_list_selector_1.default.dualListSelectorToolsActions) }, actions))),
            status && (React.createElement("div", { className: react_styles_1.css(dual_list_selector_1.default.dualListSelectorStatus) },
                React.createElement("div", { className: react_styles_1.css(dual_list_selector_1.default.dualListSelectorStatusText), id: `${id}-status` }, status))),
            options && !isTree && (React.createElement("div", { className: react_styles_1.css(dual_list_selector_1.default.dualListSelectorMenu), ref: this.menuEl, tabIndex: 0 },
                React.createElement("ul", { className: react_styles_1.css(dual_list_selector_1.default.dualListSelectorList), role: "listbox", "aria-multiselectable": "true", "aria-labelledby": `${id}-status`, "aria-activedescendant": focusedOption }, options.map((option, index) => {
                    if (this.displayOption(option, input)) {
                        displayIndex = displayIndex + 1;
                        return (React.createElement(DualListSelectorListItem_1.DualListSelectorListItem, { key: index, isSelected: selectedOptions.indexOf(index) !== -1, onOptionSelect: this.onOptionSelect, isChosen: isChosen, orderIndex: index, filteredIndex: displayIndex, sendRef: this.sendRef, id: `${id}-option-${index}` }, option));
                    }
                    return;
                })))),
            options && isTree && (React.createElement("div", { className: react_styles_1.css(dual_list_selector_1.default.dualListSelectorMenu), ref: this.menuEl, tabIndex: 0 },
                React.createElement(DualListSelectorTree_1.DualListSelectorTree, { data: isSearchable
                        ? options
                            .map(opt => Object.assign({}, opt))
                            .filter(item => this.filterInput(item, input))
                        : options, isChosen: isChosen, onOptionSelect: this.onOptionSelect, onOptionCheck: onOptionCheck, selectedOptions: selectedOptions })))));
    }
}
exports.DualListSelectorPane = DualListSelectorPane;
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