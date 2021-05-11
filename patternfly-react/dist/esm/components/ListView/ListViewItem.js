function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../common/helpers';
import ListViewExpand from './ListViewExpand';
import ListViewGroupItem from './ListViewGroupItem';
import ListViewGroupItemContainer from './ListViewGroupItemContainer';
import ListViewGroupItemHeader from './ListViewGroupItemHeader';
import ListViewRow from './ListViewRow';
/**
 * ListViewItem - main ListViewItem component which handles the expansion logic.
 * ListViewItem is considered expandable if it has child props. In that case it
 * renders ListViewGroupItemHeader and ListViewGroupItemContainer
 */

class ListViewItem extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      expanded: this.props.initExpanded
    });

    _defineProperty(this, "toggleExpanded", () => {
      const {
        onExpand,
        onExpandClose
      } = this.props;

      if (this.state.expanded) {
        onExpandClose();
      } else {
        onExpand();
      }

      this.setState(prevState => ({
        expanded: !prevState.expanded
      }));
    });
  }

  render() {
    const _this$props = this.props,
          {
      children,
      stacked,
      onExpand,
      onExpandClose,
      actions,
      additionalInfo,
      description,
      heading,
      leftContent,
      checkboxInput,
      hideCloseIcon,
      compoundExpand,
      compoundExpanded,
      onCloseCompoundExpand,
      initExpanded
    } = _this$props,
          other = _objectWithoutProperties(_this$props, ["children", "stacked", "onExpand", "onExpandClose", "actions", "additionalInfo", "description", "heading", "leftContent", "checkboxInput", "hideCloseIcon", "compoundExpand", "compoundExpanded", "onCloseCompoundExpand", "initExpanded"]);

    const {
      expanded
    } = this.state;

    if (children) {
      if (compoundExpand) {
        return React.createElement(ListViewGroupItem, _extends({
          expanded: compoundExpanded,
          stacked: stacked
        }, other), React.createElement(ListViewRow, {
          checkboxInput: checkboxInput,
          leftContent: leftContent,
          heading: heading,
          description: description,
          additionalInfo: additionalInfo,
          actions: actions
        }), React.createElement(ListViewGroupItemContainer, {
          expanded: compoundExpanded,
          onClose: hideCloseIcon ? undefined : onCloseCompoundExpand
        }, children));
      }

      return React.createElement(ListViewGroupItem, _extends({
        expanded: expanded,
        stacked: stacked
      }, other), React.createElement(ListViewGroupItemHeader, {
        toggleExpanded: this.toggleExpanded
      }, React.createElement(ListViewExpand, {
        expanded: expanded,
        toggleExpanded: this.toggleExpanded
      }), React.createElement(ListViewRow, {
        checkboxInput: checkboxInput,
        leftContent: leftContent,
        heading: heading,
        description: description,
        additionalInfo: additionalInfo,
        actions: actions
      })), React.createElement(ListViewGroupItemContainer, {
        expanded: expanded,
        onClose: hideCloseIcon ? undefined : this.toggleExpanded
      }, children));
    }

    return React.createElement(ListViewGroupItem, _extends({
      stacked: stacked
    }, other), React.createElement(ListViewRow, {
      checkboxInput: checkboxInput,
      leftContent: leftContent,
      heading: heading,
      description: description,
      additionalInfo: additionalInfo,
      actions: actions
    }));
  }

}

ListViewItem.propTypes = {
  /** Child node rendered as expanded content of the ListViewItem */
  children: PropTypes.node,

  /** Display the ListViewItem stacked or not */
  stacked: PropTypes.bool,

  /** Function triggered when expandable content is expanded */
  onExpand: PropTypes.func,

  /** Function triggered when expandable content is closed */
  onExpandClose: PropTypes.func,

  /** Node which renders right-positioned actions (e.g. Buttons, DropdownKebab...) */
  actions: PropTypes.node,

  /** An array of ListViewInfoItem instances to render additional info items */
  additionalInfo: PropTypes.arrayOf(PropTypes.node),

  /** Contents of ListViewItem description section */
  description: PropTypes.node,

  /** Contents of ListViewItem heading */
  heading: PropTypes.node,

  /** Contents for left section of ListViewItem (usually ListViewIcon) */
  leftContent: PropTypes.node,

  /** Checkbox form input component */
  checkboxInput: PropTypes.node,

  /** Optionally hide the close icon in expanded content */
  hideCloseIcon: PropTypes.bool,

  /** Flag to use compound expansion contents */
  compoundExpand: PropTypes.bool,

  /** Flag to show compound expansion contents */
  compoundExpanded: PropTypes.bool,

  /** Flag to initialize expanded state */
  initExpanded: PropTypes.bool,

  /** Function triggered when compound expandable content is closed */
  onCloseCompoundExpand: PropTypes.func
};
ListViewItem.defaultProps = {
  children: null,
  actions: null,
  additionalInfo: null,
  description: null,
  heading: null,
  leftContent: null,
  checkboxInput: null,
  compoundExpand: false,
  compoundExpanded: false,
  hideCloseIcon: false,
  onExpand: noop,
  onExpandClose: noop,
  initExpanded: false,
  onCloseCompoundExpand: noop,
  stacked: false
};
export default ListViewItem;