"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ListViewActions = _interopRequireDefault(require("./ListViewActions"));

var _ListViewAdditionalInfo = _interopRequireDefault(require("./ListViewAdditionalInfo"));

var _ListViewBody = _interopRequireDefault(require("./ListViewBody"));

var _ListViewCheckbox = _interopRequireDefault(require("./ListViewCheckbox"));

var _ListViewDescription = _interopRequireDefault(require("./ListViewDescription"));

var _ListViewDescriptionHeading = _interopRequireDefault(require("./ListViewDescriptionHeading"));

var _ListViewDescriptionText = _interopRequireDefault(require("./ListViewDescriptionText"));

var _ListViewExpand = _interopRequireDefault(require("./ListViewExpand"));

var _ListViewGroupItem = _interopRequireDefault(require("./ListViewGroupItem"));

var _ListViewGroupItemContainer = _interopRequireDefault(require("./ListViewGroupItemContainer"));

var _ListViewGroupItemHeader = _interopRequireDefault(require("./ListViewGroupItemHeader"));

var _ListViewIcon = _interopRequireDefault(require("./ListViewIcon"));

var _ListViewInfoItem = _interopRequireDefault(require("./ListViewInfoItem"));

var _ListViewItem = _interopRequireDefault(require("./ListViewItem"));

var _ListViewLeft = _interopRequireDefault(require("./ListViewLeft"));

var _ListViewMainInfo = _interopRequireDefault(require("./ListViewMainInfo"));

var _ListViewRow = _interopRequireDefault(require("./ListViewRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Components in this module are used as building blocks for ListViewItem and
 * ListViewRow. If needed, components can be used to create custom ListViewItem
 *
 * Custom ListView example:
 *
 * <ListView>
 *   <ListViewGroupItem stacked expanded>
 *     <ListViewGroupItemHeader toggleExpanded={functionToToggle}> // required only if the ListViewGroupItem is supposed to be expandable
 *       <ListViewExpand expanded />
 *       <ListViewCheckbox />
 *       <ListViewActions>
 *         // buttons, dropdowns...
 *       </ListViewActions>
 *       <ListViewMainInfo>
 *         <ListViewLeft>
 *           <ListViewIcon size="sm" name={iconName} />
 *         </ListViewLeft>
 *         <ListViewBody>
 *           <ListViewDescription>
 *             <ListViewDescriptionHeading>
 *               {name}
 *             </ListViewDescriptionHeading>
 *             <ListViewDescriptionText>
 *               {description}
 *             </ListViewDescriptionText>
 *           </ListViewDescription>
 *           <ListViewAdditionalInfo>
 *             <ListViewInfoItem>
 *               <ListViewIcon type="pf" name="flavor" />
 *               {Item1}
 *             </ListViewInfoItem>
 *             <ListViewInfoItem>
 *               <ListViewIcon type="pf" name="cpu" />
 *               {Item2}
 *             </ListViewInfoItem>
 *           </ListViewAdditionalInfo>
 *         </ListViewBody>
 *       </ListViewMainInfo>
 *     </ListViewGroupItemHeader>
 *
 *     <ListViewGroupItemContainer onClose={functionWhichClosesMe} expanded>
 *       <Row>Some content goes here</Row>
 *     </ListViewGroupItemContainer>
 *
 *   </ListViewGroupItem>
 *   ...
 * </ListView>
 */

/**
 * ListView component wraps ListViewItems
 */
var ListView = function ListView(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "className"]);

  var classes = (0, _classnames["default"])('list-group list-view-pf list-view-pf-view', className);
  return _react["default"].createElement("div", _extends({
    className: classes
  }, props), children);
};

ListView.propTypes = {
  /** Additional css classes */
  className: _propTypes["default"].string,

  /** Children nodes - ListViewGroupItem or ListViewItem instances */
  children: _propTypes["default"].node
};
ListView.defaultProps = {
  className: '',
  children: null
};
ListView.Actions = _ListViewActions["default"];
ListView.AdditionalInfo = _ListViewAdditionalInfo["default"];
ListView.Body = _ListViewBody["default"];
ListView.Checkbox = _ListViewCheckbox["default"];
ListView.Description = _ListViewDescription["default"];
ListView.DescriptionHeading = _ListViewDescriptionHeading["default"];
ListView.DescriptionText = _ListViewDescriptionText["default"];
ListView.Expand = _ListViewExpand["default"];
ListView.GroupItem = _ListViewGroupItem["default"];
ListView.GroupItemContainer = _ListViewGroupItemContainer["default"];
ListView.GroupItemHeader = _ListViewGroupItemHeader["default"];
ListView.Icon = _ListViewIcon["default"];
ListView.InfoItem = _ListViewInfoItem["default"];
ListView.Item = _ListViewItem["default"];
ListView.Left = _ListViewLeft["default"];
ListView.MainInfo = _ListViewMainInfo["default"];
ListView.Row = _ListViewRow["default"];
var _default = ListView;
exports["default"] = _default;