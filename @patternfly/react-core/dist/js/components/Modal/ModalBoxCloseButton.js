"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalBoxCloseButton = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const Button_1 = require("../Button");
const times_icon_1 = tslib_1.__importDefault(require("@patternfly/react-icons/dist/js/icons/times-icon"));
exports.ModalBoxCloseButton = (_a) => {
    var { className = '', onClose = () => undefined } = _a, props = tslib_1.__rest(_a, ["className", "onClose"]);
    return (React.createElement(Button_1.Button, Object.assign({ className: className, variant: "plain", onClick: onClose, "aria-label": "Close" }, props),
        React.createElement(times_icon_1.default, null)));
};
exports.ModalBoxCloseButton.displayName = 'ModalBoxCloseButton';
//# sourceMappingURL=ModalBoxCloseButton.js.map