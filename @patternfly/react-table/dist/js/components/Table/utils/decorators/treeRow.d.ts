/// <reference types="react" />
import { IExtra, IFormatterValueType, OnCheckChange, OnTreeRowCollapse } from '../../TableTypes';
export declare const treeRow: (onCollapse: OnTreeRowCollapse, onCheckChange?: OnCheckChange) => (value: IFormatterValueType, { rowIndex, rowData }: IExtra) => {
    value: IFormatterValueType;
    component: string;
    className: string;
    children: JSX.Element;
};
//# sourceMappingURL=treeRow.d.ts.map