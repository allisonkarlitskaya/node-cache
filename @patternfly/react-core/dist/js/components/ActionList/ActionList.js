"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionList = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const action_list_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/ActionList/action-list"));
exports.ActionList = (_a) => {
    var { children, isIconList } = _a, props = tslib_1.__rest(_a, ["children", "isIconList"]);
    return (React.createElement("div", Object.assign({ className: react_styles_1.css(action_list_1.default.actionList, isIconList && action_list_1.default.modifiers.icons) }, props), children));
};
exports.ActionList.displayName = 'ActionList';
//# sourceMappingURL=ActionList.js.map