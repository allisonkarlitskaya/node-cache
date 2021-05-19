"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keyboardNavigation = exports.MockTreeViewSource = exports.MockTreeView = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _TreeView = _interopRequireDefault(require("../TreeView"));

var _data = require("./data");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var treeViewContainerStyles = {
  width: '400px'
};

var MockTreeView = /*#__PURE__*/function (_React$Component) {
  _inherits(MockTreeView, _React$Component);

  function MockTreeView() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MockTreeView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MockTreeView)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      nodes: _data.basicData
    });

    _defineProperty(_assertThisInitialized(_this), "nodeSelector", function (nodes, targetNode) {
      return nodes.map(function (node) {
        if (node.nodes) {
          return _objectSpread({}, node, {
            nodes: _this.nodeSelector(node.nodes, targetNode),
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
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectNode", function (selectedNode) {
      _this.setState(function (prevState) {
        return {
          nodes: _this.nodeSelector(prevState.nodes, selectedNode)
        };
      });
    });

    return _this;
  }

  _createClass(MockTreeView, [{
    key: "render",
    value: function render() {
      var nodes = this.state.nodes;
      return _react["default"].createElement("div", {
        className: "tree-view-container",
        style: treeViewContainerStyles
      }, _react["default"].createElement(_TreeView["default"], {
        nodes: nodes,
        highlightOnHover: (0, _addonKnobs["boolean"])('Highlight on hover', true),
        highlightOnSelect: (0, _addonKnobs["boolean"])('Highlight on select', true),
        selectNode: this.selectNode,
        accessibleName: "Tree"
      }));
    }
  }]);

  return MockTreeView;
}(_react["default"].Component);

exports.MockTreeView = MockTreeView;
var MockTreeViewSource = "\nimport React from 'react';\nimport { boolean } from '@storybook/addon-knobs';\n\nimport TreeView from '../TreeView';\nimport { basicData } from './data';\n\nconst treeViewContainerStyles = {\n  width: '400px'\n};\n\nexport class MockTreeView extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      nodes: []\n    };\n\n  }\n\n  componentDidMount() {\n    this.setState(() => ({ nodes: basicData }));\n  }\n\n  selectNode(selectedNode) {\n    this.setState(prevState => {\n      return {\n        nodes: this.nodeSelector(prevState.nodes, selectedNode)\n      };\n    });\n  }\n\n  nodeSelector(nodes, targetNode) {\n    return nodes.map(node => {\n      if (node.nodes) {\n        return {\n          ...node,\n          nodes: this.nodeSelector(node.nodes, targetNode),\n          selected: node.id === targetNode.id ? !node.selected : false\n        };\n      } else if (node.id === targetNode.id) {\n        return { ...node, selected: !node.selected };\n      } else if (node.id !== targetNode.id && node.selected) {\n        return { ...node, selected: false };\n      } else {\n        return node;\n      }\n    });\n  }\n\n  render() {\n    const { nodes } = this.state;\n    return (\n      <div className=\"tree-view-container\" style={treeViewContainerStyles}>\n        <TreeView\n          nodes={nodes}\n          highlightOnHover={boolean('Highlight on hover', true)}\n          highlightOnSelect={boolean('Highlight on select', true)}\n          selectNode={this.selectNode}\n        />\n      </div>\n    );\n  }\n}\n";
exports.MockTreeViewSource = MockTreeViewSource;

var keyboardNavigation = _react["default"].createElement("ul", null, _react["default"].createElement("li", null, "Roving ", _react["default"].createElement("code", null, "tabindex"), " (please see", ' ', _react["default"].createElement("a", {
  href: "https://www.w3.org/TR/2017/NOTE-wai-aria-practices-1.1-20171214/#kbd_roving_tabindex"
}, "w3.org documentation"), ' ', "for details)"), _react["default"].createElement("li", null, _react["default"].createElement("code", null, "ArrowUp/ArrowDown"), " shifts focus, ", _react["default"].createElement("code", null, "ArrowRight/ArrowLeft"), " expands/collapses parent nodes"), _react["default"].createElement("li", null, _react["default"].createElement("code", null, "Enter/Space"), " triggers default action"), _react["default"].createElement("li", null, "Keyboard Search"), _react["default"].createElement("ul", null, _react["default"].createElement("li", null, _react["default"].createElement("code", null, "[a-zA-Z]")), _react["default"].createElement("li", null, "Focus moves to the next node whose text starts with the typed character"), _react["default"].createElement("li", null, "Search wraps to the first node if matching name is not found among the nodes that follow the focused node"), _react["default"].createElement("li", null, "Ignores nodes that are descendants of closed nodes")), _react["default"].createElement("li", null, _react["default"].createElement("code", null, "*"), " (asterisk)"), _react["default"].createElement("ul", null, _react["default"].createElement("li", null, "Expands all closed sibling nodes that are at the same level as the focused node"), _react["default"].createElement("li", null, "Focus does not move")));

exports.keyboardNavigation = keyboardNavigation;