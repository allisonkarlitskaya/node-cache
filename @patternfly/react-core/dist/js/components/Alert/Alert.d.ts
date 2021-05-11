import * as React from 'react';
import { OUIAProps } from '../../helpers';
export declare enum AlertVariant {
    success = "success",
    danger = "danger",
    warning = "warning",
    info = "info",
    default = "default"
}
export interface AlertProps extends Omit<React.HTMLProps<HTMLDivElement>, 'action' | 'title'>, OUIAProps {
    /** Adds Alert variant styles  */
    variant?: 'success' | 'danger' | 'warning' | 'info' | 'default';
    /** Flag to indicate if the Alert is inline */
    isInline?: boolean;
    /** Title of the Alert  */
    title: React.ReactNode;
    /** Close button; use the AlertActionCloseButton component  */
    actionClose?: React.ReactNode;
    /** Action links; use a single AlertActionLink component or multiple wrapped in an array or React.Fragment */
    actionLinks?: React.ReactNode;
    /** Content rendered inside the Alert */
    children?: React.ReactNode;
    /** Additional classes added to the Alert  */
    className?: string;
    /** Adds accessible text to the Alert */
    'aria-label'?: string;
    /** Variant label text for screen readers */
    variantLabel?: string;
    /** Flag to indicate if the Alert is in a live region */
    isLiveRegion?: boolean;
    /** If set to true, the timeout is 8000 milliseconds. If a number is provided, alert will be dismissed after that amount of time in milliseconds. */
    timeout?: number | boolean;
    /** If the user hovers over the Alert and `timeout` expires, this is how long to wait before finally dismissing the Alert */
    timeoutAnimation?: number;
    /** Function to be executed on alert timeout. Relevant when the timeout prop is set */
    onTimeout?: () => void;
    /** Truncate title to number of lines */
    truncateTitle?: number;
    /** Position of the tooltip which is displayed if text is truncated */
    tooltipPosition?: 'auto' | 'top' | 'bottom' | 'left' | 'right';
    /** Set a custom icon to the Alert. If not set the icon is set according to the variant */
    customIcon?: React.ReactNode;
}
export declare const Alert: React.FunctionComponent<AlertProps>;
//# sourceMappingURL=Alert.d.ts.map