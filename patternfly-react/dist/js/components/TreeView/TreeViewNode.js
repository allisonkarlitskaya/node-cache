"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _helpers = require("../../common/helpers");

var _TreeViewExpand = _interopRequireDefault(require("./TreeViewExpand"));

var _TreeViewIcon = _interopRequireDefault(require("./TreeViewIcon"));

var _TreeViewIndents = _interopRequireDefault(require("./TreeViewIndents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TreeViewNode = /*#__PURE__*/function (_Component) {
  _inherits(TreeViewNode, _Component);

  function TreeViewNode() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TreeViewNode);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TreeViewNode)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      expanded: _this.props.node.hasOwnProperty('state') && _this.props.node.state.expanded || false,
      focused: false,
      tabIndex: -1,
      nodeId: _this.props.nodeId
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (e) {
      var nodeId = _this.state.nodeId;
      var _this$props = _this.props,
          node = _this$props.node,
          focusedNodeId = _this$props.focusedNodeId;
      var key = e.key;

      if (node.nodes && focusedNodeId === nodeId && (key === _helpers.KEYS.ARROW_RIGHT || key === _helpers.KEYS.ARROW_LEFT)) {
        e.stopPropagation();

        if (key === _helpers.KEYS.ARROW_RIGHT) {
          _this.setState(function () {
            return {
              expanded: true
            };
          });
        } else {
          _this.setState(function () {
            return {
              expanded: false
            };
          });
        }
      }

      if (key === _helpers.KEYS.SPACE || key === _helpers.KEYS.ENTER) {
        e.stopPropagation();

        _this.handleSelect(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function (e) {
      e.stopPropagation();

      _this.props.onFocus(_this.nodeRef.current);

      _this.setState(function () {
        return {
          focused: true
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function () {
      _this.setState(function () {
        return {
          focused: false
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelect", function (e) {
      var _this$props2 = _this.props,
          node = _this$props2.node,
          selectNode = _this$props2.selectNode;
      e.stopPropagation();

      if (node.selectable) {
        _this.nodeRef.current.focus();

        selectNode(node);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "toggleExpand", function (e) {
      e.stopPropagation();

      _this.toggleExpandedState();
    });

    _defineProperty(_assertThisInitialized(_this), "toggleExpandedState", function () {
      _this.setState(function (prevState) {
        return {
          expanded: !prevState.expanded
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "nodeRef", _react["default"].createRef());

    return _this;
  }

  _createClass(TreeViewNode, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          node = _this$props3.node,
          level = _this$props3.level,
          visible = _this$props3.visible,
          selectNode = _this$props3.selectNode,
          index = _this$props3.index,
          onFocus = _this$props3.onFocus,
          focusedNodeId = _this$props3.focusedNodeId,
          setSize = _this$props3.setSize,
          expandSiblings = _this$props3.expandSiblings,
          clearExpandSiblings = _this$props3.clearExpandSiblings;
      var _this$state = this.state,
          expanded = _this$state.expanded,
          focused = _this$state.focused,
          tabIndex = _this$state.tabIndex,
          nodeId = _this$state.nodeId;
      var treeitemClasses = (0, _classnames["default"])('list-group-item', {
        'node-hidden': level > 1 ? !visible : false,
        'node-selected': node.selected
      });
      var treeitemRowClasses = (0, _classnames["default"])('treeitem-row', {
        focus: focused
      });
      return _react["default"].createElement("li", {
        className: treeitemClasses,
        onClick: this.handleSelect,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onKeyDown: this.onKeyDown,
        ref: this.nodeRef,
        tabIndex: tabIndex,
        "data-id": nodeId,
        role: "treeitem",
        "aria-expanded": node.nodes && expanded,
        "aria-level": level,
        "aria-posinset": index + 1,
        "aria-setsize": setSize
      }, _react["default"].createElement("span", {
        className: treeitemRowClasses
      }, _react["default"].createElement(_TreeViewIndents["default"], {
        level: level
      }), _react["default"].createElement(_TreeViewExpand["default"], {
        nodes: node.nodes,
        expanded: expanded,
        toggleExpand: this.toggleExpand
      }), _react["default"].createElement(_TreeViewIcon["default"], {
        icon: node.icon
      }), node.text), node.nodes && _react["default"].createElement("ul", {
        className: "list-group",
        role: "group"
      }, node.nodes.map(function (childNode, idx) {
        return _react["default"].createElement(TreeViewNode, {
          node: childNode,
          key: idx,
          index: idx,
          level: level + 1,
          visible: expanded,
          selectNode: selectNode,
          onFocus: onFocus,
          focusedNodeId: focusedNodeId,
          setSize: node.nodes.length,
          expandSiblings: expandSiblings,
          clearExpandSiblings: clearExpandSiblings,
          nodeId: "".concat(nodeId, "-").concat(idx)
        });
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      // Collapse the current node if any of its parents is collapsed. This should
      // only fire for nodes that are level 2 or greater
      if (!nextProps.visible && nextProps.level > 1) {
        return {
          expanded: false
        };
      } // Roving tab index
      // When a treeview is first rendered and not interacted with, the first
      // node should have a tabindex of 0, while the rest of the nodes have a
      // tabindex of -1. Subsequently, the tabindex "roves" to whatever node has
      // gained focus


      var tabIndex = nextProps.focusedNodeId === prevState.nodeId || !nextProps.focusedNodeId && prevState.nodeId === '0' ? 0 : -1;

      if (tabIndex !== prevState.tabIndex) {
        return {
          tabIndex: tabIndex
        };
      } // * keyboard action


      if (nextProps.expandSiblings) {
        var siblingsLevel = nextProps.expandSiblings.split('-').length;

        if (parseInt(siblingsLevel, 10) === nextProps.level) {
          nextProps.clearExpandSiblings();
          return {
            expanded: true
          };
        }
      }

      return null;
    } // A node can be set to be expanded by default

  }]);

  return TreeViewNode;
}(_react.Component);

TreeViewNode.propTypes = {
  node: _propTypes["default"].object,
  level: _propTypes["default"].number.isRequired,
  visible: _propTypes["default"].bool,
  selectNode: _propTypes["default"].func,
  index: _propTypes["default"].number.isRequired,
  onFocus: _propTypes["default"].func,
  focusedNodeId: _propTypes["default"].string.isRequired,
  setSize: _propTypes["default"].number.isRequired,
  expandSiblings: _propTypes["default"].string,
  clearExpandSiblings: _propTypes["default"].func,
  nodeId: _propTypes["default"].string
};
TreeViewNode.defaultProps = {
  node: {},
  visible: false,
  selectNode: _helpers.noop,
  onFocus: _helpers.noop,
  expandSiblings: '',
  clearExpandSiblings: _helpers.noop,
  nodeId: ''
};
var _default = TreeViewNode;
exports["default"] = _default;