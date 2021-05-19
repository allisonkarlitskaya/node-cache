"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarContent = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const sidebar_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Sidebar/sidebar"));
exports.SidebarContent = (_a) => {
    var { children, hasNoBackground } = _a, props = tslib_1.__rest(_a, ["children", "hasNoBackground"]);
    return (React.createElement("div", Object.assign({ className: react_styles_1.css(sidebar_1.default.sidebarContent, hasNoBackground && sidebar_1.default.modifiers.noBackground) }, props), children));
};
exports.SidebarContent.displayName = 'SidebarContent';
//# sourceMappingURL=SidebarContent.js.map