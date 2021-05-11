import { __rest } from "tslib";
import * as React from 'react';
import { useState } from 'react';
import styles from '@patternfly/react-styles/css/components/Slider/slider';
import { css } from '@patternfly/react-styles';
import { SliderStep } from './SliderStep';
import { InputGroup, InputGroupText } from '../InputGroup';
import { TextInput } from '../TextInput';
const getPercentage = (current, max) => (100 * current) / max;
export const Slider = (_a) => {
    var { className, currentValue = 0, steps, isDiscrete = false, isDisabled = false, isInputVisible = false, inputValue = 0, inputLabel, inputAriaLabel = 'Slider value input', thumbAriaLabel = 'Value', inputPosition = 'right', onChange, onValueChange, leftActions, rightActions } = _a, props = __rest(_a, ["className", "currentValue", "steps", "isDiscrete", "isDisabled", "isInputVisible", "inputValue", "inputLabel", "inputAriaLabel", "thumbAriaLabel", "inputPosition", "onChange", "onValueChange", "leftActions", "rightActions"]);
    const sliderRailRef = React.useRef();
    const thumbRef = React.useRef();
    const [value, setValue] = useState(currentValue);
    const [localInputValue, setLocalInputValue] = useState(inputValue);
    React.useEffect(() => {
        setValue(currentValue);
    }, [currentValue]);
    React.useEffect(() => {
        setLocalInputValue(inputValue);
    }, [inputValue]);
    let diff = 0;
    let snapValue;
    const style = { '--pf-c-slider--value': `${value}%` };
    const onChangeHandler = (value) => {
        setLocalInputValue(Number(value));
    };
    const handleKeyPressOnInput = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            if (onChange) {
                onChange(localInputValue);
            }
        }
    };
    const onInputFocus = (e) => {
        e.stopPropagation();
    };
    const onThumbClick = () => {
        thumbRef.current.focus();
    };
    const onBlur = () => {
        if (onChange) {
            onChange(localInputValue);
        }
    };
    const findAriaTextValue = () => {
        if (steps && isDiscrete) {
            const step = steps.find(step => step.value === value);
            if (step) {
                return step.label;
            }
        }
        return undefined;
    };
    const handleThumbDragEnd = () => {
        if (snapValue && isDiscrete && steps) {
            thumbRef.current.style.setProperty('--pf-c-slider--value', `${snapValue}%`);
            setValue(snapValue);
            if (onValueChange) {
                onValueChange(snapValue);
            }
        }
        document.removeEventListener('mousemove', callbackThumbMove);
        document.removeEventListener('mouseup', callbackThumbUp);
        document.removeEventListener('touchmove', callbackThumbMove);
        document.removeEventListener('touchend', callbackThumbUp);
        document.removeEventListener('touchcancel', callbackThumbUp);
    };
    const handleMouseDown = (e) => {
        e.stopPropagation();
        e.preventDefault();
        diff = e.clientX - thumbRef.current.getBoundingClientRect().left;
        document.addEventListener('mousemove', callbackThumbMove);
        document.addEventListener('mouseup', callbackThumbUp);
    };
    const handleToucheStart = (e) => {
        e.stopPropagation();
        diff = e.touches[0].clientX - thumbRef.current.getBoundingClientRect().left;
        document.addEventListener('touchmove', callbackThumbMove, { passive: false });
        document.addEventListener('touchend', callbackThumbUp);
        document.addEventListener('touchcancel', callbackThumbUp);
    };
    const onSliderRailClick = (e) => {
        handleThumbMove(e);
        if (snapValue && isDiscrete && steps) {
            thumbRef.current.style.setProperty('--pf-c-slider--value', `${snapValue}%`);
            setValue(snapValue);
            if (onValueChange) {
                onValueChange(snapValue);
            }
        }
    };
    const handleThumbMove = (e) => {
        if (e.type === 'touchmove') {
            e.preventDefault();
            e.stopImmediatePropagation();
        }
        const clientPosition = e.touches && e.touches.length ? e.touches[0].clientX : e.clientX;
        let newPosition = clientPosition - diff - sliderRailRef.current.getBoundingClientRect().left;
        const end = sliderRailRef.current.offsetWidth - thumbRef.current.offsetWidth;
        const start = 0;
        if (newPosition < start) {
            newPosition = 0;
        }
        if (newPosition > end) {
            newPosition = end;
        }
        const newPercentage = getPercentage(newPosition, end);
        thumbRef.current.style.setProperty('--pf-c-slider--value', `${newPercentage}%`);
        setValue(newPercentage);
        /* If discrete, snap to closest step value */
        if (isDiscrete && steps) {
            const stepIndex = steps.findIndex(step => step.value >= newPercentage);
            if (steps[stepIndex].value === newPercentage) {
                snapValue = steps[stepIndex].value;
            }
            else {
                const midpoint = (steps[stepIndex].value + steps[stepIndex - 1].value) / 2;
                if (midpoint > newPercentage) {
                    snapValue = steps[stepIndex - 1].value;
                }
                else {
                    snapValue = steps[stepIndex].value;
                }
            }
        }
        // Call value change callback
        if (onValueChange && !isDiscrete && !steps) {
            onValueChange(newPercentage);
        }
    };
    const callbackThumbMove = React.useCallback(handleThumbMove, []);
    const callbackThumbUp = React.useCallback(handleThumbDragEnd, []);
    const handleThumbKeys = (e) => {
        const key = e.key;
        if (key !== 'ArrowLeft' && key !== 'ArrowRight') {
            return;
        }
        e.preventDefault();
        let newValue = value;
        if (isDiscrete) {
            const stepIndex = steps.findIndex(step => step.value === value);
            if (key === 'ArrowRight') {
                if (stepIndex + 1 < steps.length) {
                    {
                        newValue = steps[stepIndex + 1].value;
                    }
                }
            }
            else if (key === 'ArrowLeft') {
                if (stepIndex - 1 >= 0) {
                    newValue = steps[stepIndex - 1].value;
                }
            }
        }
        else {
            if (key === 'ArrowRight') {
                newValue = value + 1 <= 100 ? value + 1 : 100;
            }
            else if (key === 'ArrowLeft') {
                newValue = value - 1 >= 0 ? value - 1 : 0;
            }
        }
        if (newValue !== value) {
            thumbRef.current.style.setProperty('--pf-c-slider--value', `${newValue}%`);
            setValue(newValue);
            if (onValueChange) {
                onValueChange(newValue);
            }
        }
    };
    const displayInput = () => {
        const textInput = (React.createElement(TextInput, { className: css(styles.formControl), isDisabled: isDisabled, type: "number", value: localInputValue, "aria-label": inputAriaLabel, onKeyDown: handleKeyPressOnInput, onChange: onChangeHandler, onClick: onInputFocus, onFocus: onInputFocus, onBlur: onBlur }));
        if (inputLabel) {
            return (React.createElement(InputGroup, null,
                textInput,
                React.createElement(InputGroupText, { className: css('pf-m-plain') }, inputLabel)));
        }
        else {
            return textInput;
        }
    };
    return (React.createElement("div", Object.assign({ className: css(styles.slider, className, isDisabled && styles.modifiers.disabled), style: style }, props),
        leftActions && React.createElement("div", { className: css(styles.sliderActions) }, leftActions),
        React.createElement("div", { className: css(styles.sliderMain) },
            React.createElement("div", { className: css(styles.sliderRail), ref: sliderRailRef, onClick: !isDisabled ? onSliderRailClick : null },
                React.createElement("div", { className: css(styles.sliderRailTrack) })),
            steps && (React.createElement("div", { className: css(styles.sliderSteps), "aria-hidden": "true" }, steps.map(step => (React.createElement(SliderStep, { key: step.value, value: step.value, label: step.label, isLabelHidden: step.isLabelHidden, isActive: step.value <= value }))))),
            React.createElement("div", { className: css(styles.sliderThumb), ref: thumbRef, tabIndex: isDisabled ? -1 : 0, role: "slider", "aria-valuemin": steps ? steps[0].value : 0, "aria-valuemax": steps ? steps[steps.length - 1].value : 100, "aria-valuenow": value, "aria-valuetext": findAriaTextValue(), "aria-label": thumbAriaLabel, "aria-disabled": isDisabled, onMouseDown: !isDisabled ? handleMouseDown : null, onTouchStart: !isDisabled ? handleToucheStart : null, onKeyDown: !isDisabled ? handleThumbKeys : null, onClick: !isDisabled ? onThumbClick : null }),
            isInputVisible && inputPosition === 'aboveThumb' && (React.createElement("div", { className: css(styles.sliderValue, styles.modifiers.floating) }, displayInput()))),
        isInputVisible && inputPosition === 'right' && React.createElement("div", { className: css(styles.sliderValue) }, displayInput()),
        rightActions && React.createElement("div", { className: css(styles.sliderActions) }, rightActions)));
};
Slider.displayName = 'Slider';
//# sourceMappingURL=Slider.js.map