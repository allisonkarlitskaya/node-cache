"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MockCompoundExpansionSource = exports.MockCompoundExpansion = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _index = require("@storybook/addon-knobs/dist/index");

var _mockListItems = require("./mockListItems");

var _index2 = require("../../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var MockCompoundExpansion = /*#__PURE__*/function (_React$Component) {
  _inherits(MockCompoundExpansion, _React$Component);

  function MockCompoundExpansion() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MockCompoundExpansion);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MockCompoundExpansion)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      listItems: _mockListItems.mockListItems
    });

    _defineProperty(_assertThisInitialized(_this), "toggleExpand", function (item, expandProp) {
      if (expandProp === item.expandType) {
        item.expanded = !item.expanded;
      } else {
        item.expanded = true;
        item.expandType = expandProp;
      }

      _this.setState({
        listItems: _mockListItems.mockListItems
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderItem", function (item, index) {
      var expandText = item.compoundExpandText[item.expandType];
      return _react["default"].createElement(_index2.ListView.Item, {
        key: index,
        actions: MockCompoundExpansion.renderActions(item.actions),
        checkboxInput: _react["default"].createElement("input", {
          type: "checkbox"
        }),
        leftContent: _react["default"].createElement(_index2.ListView.Icon, {
          name: "plane"
        }),
        additionalInfo: _this.renderAdditionalInfoExpandItems(item),
        heading: item.title,
        description: item.description,
        stacked: (0, _index["boolean"])('Stacked', false),
        compoundExpand: true,
        compoundExpanded: item.expanded,
        onCloseCompoundExpand: function onCloseCompoundExpand() {
          return _this.closeExpand(item);
        }
      }, _react["default"].createElement(_index2.Grid.Row, null, _react["default"].createElement(_index2.Grid.Col, {
        sm: 11
      }, expandText)));
    });

    return _this;
  }

  _createClass(MockCompoundExpansion, [{
    key: "closeExpand",
    value: function closeExpand(item) {
      item.expanded = false;
      this.setState({
        listItems: _mockListItems.mockListItems
      });
    }
  }, {
    key: "renderAdditionalInfoExpandItems",
    value: function renderAdditionalInfoExpandItems(item) {
      var _this2 = this;

      return item.properties && Object.keys(item.properties).map(function (prop) {
        var cssClassNames = (0, _classnames["default"])('pficon', {
          'pficon-flavor': prop === 'hosts',
          'pficon-cluster': prop === 'clusters',
          'pficon-container-node': prop === 'nodes',
          'pficon-image': prop === 'images'
        });
        return _react["default"].createElement(_index2.ListView.InfoItem, {
          key: prop
        }, _react["default"].createElement(_index2.ListView.Expand, {
          expanded: item.expanded && prop === item.expandType,
          toggleExpanded: function toggleExpanded() {
            _this2.toggleExpand(item, prop);
          }
        }, _react["default"].createElement("span", {
          className: cssClassNames
        }), _react["default"].createElement("strong", null, item.properties[prop]), " ", prop));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var listItems = this.state.listItems;
      return _react["default"].createElement(_index2.ListView, null, listItems.map(this.renderItem));
    }
  }], [{
    key: "renderActions",
    value: function renderActions() {
      return _react["default"].createElement("div", null, _react["default"].createElement(_index2.Button, null, "Details"));
    }
  }]);

  return MockCompoundExpansion;
}(_react["default"].Component);

exports.MockCompoundExpansion = MockCompoundExpansion;
var MockCompoundExpansionSource = "\nimport React from 'react';\n\nimport { mockListItems } from './mockListItems';\nimport { boolean } from '@storybook/addon-knobs/dist/index';\nimport classNames from 'classnames';\n\nimport { Button, Grid, ListView } from '../../../index';\n\nexport class MockCompoundExpansion extends React.Component {\n    state = {\n      listItems: []\n    };\n\n  componentDidMount() {\n    this.setState({ listItems: mockListItems });\n  }\n\n  toggleExpand = (item, expandProp) => {\n    if (expandProp === item.expandType) {\n      item.expanded = !item.expanded;\n    } else {\n      item.expanded = true;\n      item.expandType = expandProp;\n    }\n    this.setState({ listItems: mockListItems });\n  };\n\n  closeExpand(item) {\n    item.expanded = false;\n    this.setState({ listItems: mockListItems });\n  }\n\n  renderActions() {\n    return (\n      <div>\n        <Button>Details</Button>\n      </div>\n    );\n  }\n\n  renderAdditionalInfoExpandItems(item) {\n    return (\n      item.properties &&\n      Object.keys(item.properties).map(prop => {\n        const classNames = classNames('pficon', {\n          'pficon-flavor': prop === 'hosts',\n          'pficon-cluster': prop === 'clusters',\n          'pficon-container-node': prop === 'nodes',\n          'pficon-image': prop === 'images'\n        });\n        return (\n          <ListView.InfoItem key={prop}>\n            <ListView.Expand\n              expanded={item.expanded && prop === item.expandType}\n              toggleExpanded={() => {\n                this.toggleExpand(item, prop);\n              }}\n            >\n              <span className={classNames} />\n              <strong>{item.properties[prop]}</strong> {prop}\n            </ListView.Expand>\n          </ListView.InfoItem>\n        );\n      })\n    );\n  }\n\n  renderItem = (item, index) => {\n    let expandText = item.compoundExpandText[item.expandType];\n    return (\n      <ListView.Item\n        key={index}\n        actions={this.renderActions(item.actions)}\n        checkboxInput={<input type=\"checkbox\" />}\n        leftContent={<ListView.Icon name=\"plane\" />}\n        additionalInfo={this.renderAdditionalInfoExpandItems(item)}\n        heading={item.title}\n        description={item.description}\n        stacked={boolean('Stacked', false)}\n        compoundExpand\n        compoundExpanded={item.expanded}\n        onCloseCompoundExpand={() => this.closeExpand(item)}\n      >\n        <Grid.Row>\n          <Grid.Col sm={11}>\n            {expandText}\n          </Grid.Col>\n        </Grid.Row>\n      </ListView.Item>\n    );\n  };\n  render() {\n    const { listItems } = this.state;\n\n    return (\n      <ListView>\n        {listItems.map(this.renderItem)}\n      </ListView>\n    );\n  }\n}\n";
exports.MockCompoundExpansionSource = MockCompoundExpansionSource;