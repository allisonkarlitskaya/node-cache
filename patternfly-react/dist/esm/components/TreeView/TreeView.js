function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { noop, KEYS } from '../../common/helpers';
import TreeViewNode from './TreeViewNode';
import TreeViewExpand from './TreeViewExpand';
import TreeViewIcon from './TreeViewIcon';
import TreeViewIndents from './TreeViewIndents';

class TreeView extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      focusedNodeId: '',
      expandSiblings: ''
    });

    _defineProperty(this, "onFocus", node => {
      this.setState(() => ({
        focusedNodeId: node.dataset.id
      }));
    });

    _defineProperty(this, "onKeyDown", event => {
      const nodes = this.getVisibleNodes([...this.treeRef.current.getElementsByTagName('li')]);
      const currentNodePosition = nodes.findIndex(element => element.dataset.id === this.state.focusedNodeId);

      if (event.key === KEYS.ARROW_DOWN && currentNodePosition !== nodes.length - 1) {
        nodes[currentNodePosition + 1].focus();
      } else if (event.key === KEYS.ARROW_UP && currentNodePosition !== 0) {
        nodes[currentNodePosition - 1].focus();
      } else if (event.key === KEYS.HOME) {
        const [firstNode] = nodes;
        firstNode.focus();
      } else if (event.key === KEYS.END) {
        const [lastVisibleNode] = nodes.slice(-1);
        lastVisibleNode.focus();
      }
    });

    _defineProperty(this, "onKeyPress", event => {
      const nodes = this.getVisibleNodes([...this.treeRef.current.getElementsByTagName('li')]);
      const currentNodePosition = nodes.findIndex(element => element.dataset.id === this.state.focusedNodeId);
      const {
        key
      } = event;

      if (/[a-zA-Z]{1}/.test(key) && key.length === 1) {
        const searchableNodes = nodes.slice(currentNodePosition + 1);
        const firstMatchingNode = searchableNodes.find(node => {
          const nodeText = node.querySelector('.treeitem-row').textContent;
          const [firstLetter] = nodeText;
          return firstLetter === key;
        });

        if (firstMatchingNode) {
          firstMatchingNode.focus();
        } else {
          const [firstNode] = nodes;
          firstNode.focus();
        }
      }

      if (key === '*') {
        this.setState(prevState => ({
          expandSiblings: prevState.focusedNodeId
        }));
      }
    });

    _defineProperty(this, "getVisibleNodes", nodes => nodes.filter(node => !node.className.match(/node-hidden/)));

    _defineProperty(this, "clearExpandSiblings", () => {
      this.setState(() => ({
        expandSiblings: ''
      }));
    });

    _defineProperty(this, "treeRef", React.createRef());
  }

  render() {
    const {
      nodes,
      selectNode,
      highlightOnHover,
      highlightOnSelect,
      accessibleName
    } = this.props;
    const {
      focusedNodeId,
      expandSiblings
    } = this.state;
    const classes = classNames('list-group', {
      'treeview-select': highlightOnSelect,
      'treeview-hover': highlightOnHover
    });
    return React.createElement("div", {
      className: "treeview"
    }, React.createElement("ul", {
      className: classes,
      ref: this.treeRef,
      onKeyDown: this.onKeyDown,
      onKeyPress: this.onKeyPress,
      role: "tree",
      "aria-label": accessibleName
    }, nodes && nodes.map((node, index) => React.createElement(TreeViewNode, {
      node: node,
      key: index,
      index: index,
      nodeId: String(index),
      level: 1,
      selectNode: selectNode,
      onFocus: this.onFocus,
      focusedNodeId: focusedNodeId,
      setSize: nodes.length,
      expandSiblings: expandSiblings,
      clearExpandSiblings: this.clearExpandSiblings
    }))));
  }

}

TreeView.propTypes = {
  /** Array of node objects */
  nodes: PropTypes.array,

  /** Function that will be triggered when a selectable node is clicked */
  selectNode: PropTypes.func,

  /** Highlight node row on hover */
  highlightOnHover: PropTypes.bool,

  /** Highlight node row when clicked */
  highlightOnSelect: PropTypes.bool,

  /** Identification for assistive devices */
  accessibleName: PropTypes.string
};
TreeView.defaultProps = {
  highlightOnHover: false,
  highlightOnSelect: false,
  nodes: [],
  selectNode: noop,
  accessibleName: ''
};
TreeView.Node = TreeViewNode;
TreeView.Expand = TreeViewExpand;
TreeView.Icon = TreeViewIcon;
TreeView.Indents = TreeViewIndents;
export default TreeView;