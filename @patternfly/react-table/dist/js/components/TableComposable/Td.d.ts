import * as React from 'react';
import { DropdownDirection, DropdownPosition } from '@patternfly/react-core/dist/js/components/Dropdown/dropdownConstants';
import { BaseCellProps } from './TableComposable';
import { OnSelect, IActions, OnExpand, OnCollapse, OnFavorite, OnCheckChange, OnTreeRowCollapse, OnToggleRowDetails } from '../Table/TableTypes';
import { CustomActionsToggleProps } from '../Table';
export interface TdProps extends BaseCellProps, Omit<React.HTMLProps<HTMLTableDataCellElement>, 'onSelect' | 'width'> {
    /**
     * The column header the cell corresponds to.
     * This attribute replaces table header in mobile viewport. It is rendered by ::before pseudo element.
     */
    dataLabel?: string;
    /** Renders a checkbox or radio select */
    select?: {
        /** The selectable variant */
        variant?: 'checkbox' | 'radio';
        /** Callback on select */
        onSelect?: OnSelect;
        /** Whether the cell is selected */
        isSelected: boolean;
        /** Whether to disable the selection */
        disable?: boolean;
        /** The row index */
        rowIndex: number;
        /** Additional props forwarded to select rowData */
        props?: any;
    };
    /** Turns the cell into an actions cell */
    actions?: {
        /** Cell actions */
        items: IActions;
        /** Whether to disable the actions */
        disable?: boolean;
        /** Actions dropdown position */
        dropdownPosition?: DropdownPosition;
        /** Actions dropdown direction */
        dropdownDirection?: DropdownDirection;
        /** */
        actionsToggle?: (props: CustomActionsToggleProps) => React.ReactNode;
    };
    /** Turns the cell into an expansion toggle and determines if the corresponding expansion row is open */
    expand?: {
        isExpanded: boolean;
        /** The row index */
        rowIndex: number;
        /** The column index */
        columnIndex?: number;
        /** On toggling the expansion */
        onToggle?: OnCollapse;
    };
    /** Turns the cell into a compound expansion toggle */
    compoundExpand?: {
        /** determines if the corresponding expansion row is open */
        isExpanded: boolean;
        /** Callback on toggling of the expansion */
        onToggle?: OnExpand;
    };
    favorites?: {
        /** Whether the corresponding row is favorited */
        isFavorited: boolean;
        /** Callback on clicking the favorites button */
        onFavorite?: OnFavorite;
        /** The row index */
        rowIndex?: number;
        /** Additional props forwarded to the FavoritesCell */
        props?: any;
    };
    treeRow?: {
        /** Callback when user expands/collapses a row to reveal/hide the row's children */
        onCollapse: OnTreeRowCollapse;
        /** (optional) Callback when user changes the checkbox on a row */
        onCheckChange?: OnCheckChange;
        /** (optional) Callback when user shows/hides the row details in responsive view. */
        onToggleRowDetails?: OnToggleRowDetails;
        /** The row index */
        rowIndex?: number;
        /** Additional props forwarded to the title cell of the tree row */
        props?: any;
    };
    draggableRow?: {
        id: string;
    };
    /** True to remove padding */
    noPadding?: boolean;
}
export declare const Td: React.ForwardRefExoticComponent<Pick<TdProps, "span" | "wrap" | "content" | "accept" | "acceptCharset" | "action" | "allowFullScreen" | "allowTransparency" | "alt" | "as" | "async" | "autoComplete" | "autoFocus" | "autoPlay" | "capture" | "cellPadding" | "cellSpacing" | "charSet" | "challenge" | "checked" | "cite" | "classID" | "cols" | "colSpan" | "controls" | "coords" | "crossOrigin" | "data" | "dateTime" | "default" | "defer" | "disabled" | "download" | "encType" | "form" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "frameBorder" | "headers" | "height" | "high" | "href" | "hrefLang" | "htmlFor" | "httpEquiv" | "integrity" | "keyParams" | "keyType" | "kind" | "label" | "list" | "loop" | "low" | "manifest" | "marginHeight" | "marginWidth" | "max" | "maxLength" | "media" | "mediaGroup" | "method" | "min" | "minLength" | "multiple" | "muted" | "name" | "nonce" | "noValidate" | "open" | "optimum" | "pattern" | "placeholder" | "playsInline" | "poster" | "preload" | "readOnly" | "rel" | "required" | "reversed" | "rows" | "rowSpan" | "sandbox" | "scope" | "scoped" | "scrolling" | "seamless" | "selected" | "shape" | "size" | "sizes" | "src" | "srcDoc" | "srcLang" | "srcSet" | "start" | "step" | "summary" | "target" | "type" | "useMap" | "value" | "width" | "wmode" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "slot" | "spellCheck" | "style" | "tabIndex" | "title" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "key" | "select" | "component" | "noPadding" | "innerRef" | "dataLabel" | "textCenter" | "modifier" | "visibility" | "actions" | "expand" | "treeRow" | "compoundExpand" | "favorites" | "draggableRow"> & React.RefAttributes<HTMLTableDataCellElement>>;
//# sourceMappingURL=Td.d.ts.map