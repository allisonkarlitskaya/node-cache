import * as React from 'react';
export declare enum TextVariants {
    h1 = "h1",
    h2 = "h2",
    h3 = "h3",
    h4 = "h4",
    h5 = "h5",
    h6 = "h6",
    p = "p",
    a = "a",
    small = "small",
    blockquote = "blockquote",
    pre = "pre"
}
export interface TextProps extends React.HTMLProps<HTMLElement> {
    /** The text component */
    component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'a' | 'small' | 'blockquote' | 'pre';
    /** Content rendered within the Text */
    children?: React.ReactNode;
    /** Additional classes added to the Text */
    className?: string;
}
export declare const Text: React.FunctionComponent<TextProps>;
//# sourceMappingURL=Text.d.ts.map