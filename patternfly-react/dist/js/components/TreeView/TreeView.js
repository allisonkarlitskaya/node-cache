"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _helpers = require("../../common/helpers");

var _TreeViewNode = _interopRequireDefault(require("./TreeViewNode"));

var _TreeViewExpand = _interopRequireDefault(require("./TreeViewExpand"));

var _TreeViewIcon = _interopRequireDefault(require("./TreeViewIcon"));

var _TreeViewIndents = _interopRequireDefault(require("./TreeViewIndents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TreeView = /*#__PURE__*/function (_React$Component) {
  _inherits(TreeView, _React$Component);

  function TreeView() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TreeView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TreeView)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      focusedNodeId: '',
      expandSiblings: ''
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function (node) {
      _this.setState(function () {
        return {
          focusedNodeId: node.dataset.id
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      var nodes = _this.getVisibleNodes(_toConsumableArray(_this.treeRef.current.getElementsByTagName('li')));

      var currentNodePosition = nodes.findIndex(function (element) {
        return element.dataset.id === _this.state.focusedNodeId;
      });

      if (event.key === _helpers.KEYS.ARROW_DOWN && currentNodePosition !== nodes.length - 1) {
        nodes[currentNodePosition + 1].focus();
      } else if (event.key === _helpers.KEYS.ARROW_UP && currentNodePosition !== 0) {
        nodes[currentNodePosition - 1].focus();
      } else if (event.key === _helpers.KEYS.HOME) {
        var _nodes = _slicedToArray(nodes, 1),
            firstNode = _nodes[0];

        firstNode.focus();
      } else if (event.key === _helpers.KEYS.END) {
        var _nodes$slice = nodes.slice(-1),
            _nodes$slice2 = _slicedToArray(_nodes$slice, 1),
            lastVisibleNode = _nodes$slice2[0];

        lastVisibleNode.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyPress", function (event) {
      var nodes = _this.getVisibleNodes(_toConsumableArray(_this.treeRef.current.getElementsByTagName('li')));

      var currentNodePosition = nodes.findIndex(function (element) {
        return element.dataset.id === _this.state.focusedNodeId;
      });
      var key = event.key;

      if (/[a-zA-Z]{1}/.test(key) && key.length === 1) {
        var searchableNodes = nodes.slice(currentNodePosition + 1);
        var firstMatchingNode = searchableNodes.find(function (node) {
          var nodeText = node.querySelector('.treeitem-row').textContent;

          var _nodeText = _slicedToArray(nodeText, 1),
              firstLetter = _nodeText[0];

          return firstLetter === key;
        });

        if (firstMatchingNode) {
          firstMatchingNode.focus();
        } else {
          var _nodes2 = _slicedToArray(nodes, 1),
              firstNode = _nodes2[0];

          firstNode.focus();
        }
      }

      if (key === '*') {
        _this.setState(function (prevState) {
          return {
            expandSiblings: prevState.focusedNodeId
          };
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getVisibleNodes", function (nodes) {
      return nodes.filter(function (node) {
        return !node.className.match(/node-hidden/);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "clearExpandSiblings", function () {
      _this.setState(function () {
        return {
          expandSiblings: ''
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "treeRef", _react["default"].createRef());

    return _this;
  }

  _createClass(TreeView, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          nodes = _this$props.nodes,
          selectNode = _this$props.selectNode,
          highlightOnHover = _this$props.highlightOnHover,
          highlightOnSelect = _this$props.highlightOnSelect,
          accessibleName = _this$props.accessibleName;
      var _this$state = this.state,
          focusedNodeId = _this$state.focusedNodeId,
          expandSiblings = _this$state.expandSiblings;
      var classes = (0, _classnames["default"])('list-group', {
        'treeview-select': highlightOnSelect,
        'treeview-hover': highlightOnHover
      });
      return _react["default"].createElement("div", {
        className: "treeview"
      }, _react["default"].createElement("ul", {
        className: classes,
        ref: this.treeRef,
        onKeyDown: this.onKeyDown,
        onKeyPress: this.onKeyPress,
        role: "tree",
        "aria-label": accessibleName
      }, nodes && nodes.map(function (node, index) {
        return _react["default"].createElement(_TreeViewNode["default"], {
          node: node,
          key: index,
          index: index,
          nodeId: String(index),
          level: 1,
          selectNode: selectNode,
          onFocus: _this2.onFocus,
          focusedNodeId: focusedNodeId,
          setSize: nodes.length,
          expandSiblings: expandSiblings,
          clearExpandSiblings: _this2.clearExpandSiblings
        });
      })));
    }
  }]);

  return TreeView;
}(_react["default"].Component);

TreeView.propTypes = {
  /** Array of node objects */
  nodes: _propTypes["default"].array,

  /** Function that will be triggered when a selectable node is clicked */
  selectNode: _propTypes["default"].func,

  /** Highlight node row on hover */
  highlightOnHover: _propTypes["default"].bool,

  /** Highlight node row when clicked */
  highlightOnSelect: _propTypes["default"].bool,

  /** Identification for assistive devices */
  accessibleName: _propTypes["default"].string
};
TreeView.defaultProps = {
  highlightOnHover: false,
  highlightOnSelect: false,
  nodes: [],
  selectNode: _helpers.noop,
  accessibleName: ''
};
TreeView.Node = _TreeViewNode["default"];
TreeView.Expand = _TreeViewExpand["default"];
TreeView.Icon = _TreeViewIcon["default"];
TreeView.Indents = _TreeViewIndents["default"];
var _default = TreeView;
exports["default"] = _default;