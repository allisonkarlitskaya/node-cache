function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import TreeView from '../TreeView';
import { basicData } from './data';
const treeViewContainerStyles = {
  width: '400px'
};
export class MockTreeView extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      nodes: basicData
    });

    _defineProperty(this, "nodeSelector", (nodes, targetNode) => nodes.map(node => {
      if (node.nodes) {
        return _objectSpread({}, node, {
          nodes: this.nodeSelector(node.nodes, targetNode),
          selected: node.id === targetNode.id ? !node.selected : false
        });
      } else if (node.id === targetNode.id) {
        return _objectSpread({}, node, {
          selected: !node.selected
        });
      } else if (node.id !== targetNode.id && node.selected) {
        return _objectSpread({}, node, {
          selected: false
        });
      }

      return node;
    }));

    _defineProperty(this, "selectNode", selectedNode => {
      this.setState(prevState => ({
        nodes: this.nodeSelector(prevState.nodes, selectedNode)
      }));
    });
  }

  render() {
    const {
      nodes
    } = this.state;
    return React.createElement("div", {
      className: "tree-view-container",
      style: treeViewContainerStyles
    }, React.createElement(TreeView, {
      nodes: nodes,
      highlightOnHover: boolean('Highlight on hover', true),
      highlightOnSelect: boolean('Highlight on select', true),
      selectNode: this.selectNode,
      accessibleName: "Tree"
    }));
  }

}
export const MockTreeViewSource = `
import React from 'react';
import { boolean } from '@storybook/addon-knobs';

import TreeView from '../TreeView';
import { basicData } from './data';

const treeViewContainerStyles = {
  width: '400px'
};

export class MockTreeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nodes: []
    };

  }

  componentDidMount() {
    this.setState(() => ({ nodes: basicData }));
  }

  selectNode(selectedNode) {
    this.setState(prevState => {
      return {
        nodes: this.nodeSelector(prevState.nodes, selectedNode)
      };
    });
  }

  nodeSelector(nodes, targetNode) {
    return nodes.map(node => {
      if (node.nodes) {
        return {
          ...node,
          nodes: this.nodeSelector(node.nodes, targetNode),
          selected: node.id === targetNode.id ? !node.selected : false
        };
      } else if (node.id === targetNode.id) {
        return { ...node, selected: !node.selected };
      } else if (node.id !== targetNode.id && node.selected) {
        return { ...node, selected: false };
      } else {
        return node;
      }
    });
  }

  render() {
    const { nodes } = this.state;
    return (
      <div className="tree-view-container" style={treeViewContainerStyles}>
        <TreeView
          nodes={nodes}
          highlightOnHover={boolean('Highlight on hover', true)}
          highlightOnSelect={boolean('Highlight on select', true)}
          selectNode={this.selectNode}
        />
      </div>
    );
  }
}
`;
export const keyboardNavigation = React.createElement("ul", null, React.createElement("li", null, "Roving ", React.createElement("code", null, "tabindex"), " (please see", ' ', React.createElement("a", {
  href: "https://www.w3.org/TR/2017/NOTE-wai-aria-practices-1.1-20171214/#kbd_roving_tabindex"
}, "w3.org documentation"), ' ', "for details)"), React.createElement("li", null, React.createElement("code", null, "ArrowUp/ArrowDown"), " shifts focus, ", React.createElement("code", null, "ArrowRight/ArrowLeft"), " expands/collapses parent nodes"), React.createElement("li", null, React.createElement("code", null, "Enter/Space"), " triggers default action"), React.createElement("li", null, "Keyboard Search"), React.createElement("ul", null, React.createElement("li", null, React.createElement("code", null, "[a-zA-Z]")), React.createElement("li", null, "Focus moves to the next node whose text starts with the typed character"), React.createElement("li", null, "Search wraps to the first node if matching name is not found among the nodes that follow the focused node"), React.createElement("li", null, "Ignores nodes that are descendants of closed nodes")), React.createElement("li", null, React.createElement("code", null, "*"), " (asterisk)"), React.createElement("ul", null, React.createElement("li", null, "Expands all closed sibling nodes that are at the same level as the focused node"), React.createElement("li", null, "Focus does not move")));