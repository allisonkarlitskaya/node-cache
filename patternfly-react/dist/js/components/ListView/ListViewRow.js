"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ListViewActions = _interopRequireDefault(require("./ListViewActions"));

var _ListViewAdditionalInfo = _interopRequireDefault(require("./ListViewAdditionalInfo"));

var _ListViewCheckbox = _interopRequireDefault(require("./ListViewCheckbox"));

var _ListViewLeft = _interopRequireDefault(require("./ListViewLeft"));

var _ListViewBody = _interopRequireDefault(require("./ListViewBody"));

var _ListViewDescription = _interopRequireDefault(require("./ListViewDescription"));

var _ListViewDescriptionHeading = _interopRequireDefault(require("./ListViewDescriptionHeading"));

var _ListViewDescriptionText = _interopRequireDefault(require("./ListViewDescriptionText"));

var _ListViewMainInfo = _interopRequireDefault(require("./ListViewMainInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * ListViewRow wraps the ListViewItem row, conditionally renders sections
 * based on availability of individual props, maintains the ListItem row structure
 */
var ListViewRow = function ListViewRow(_ref) {
  var actions = _ref.actions,
      additionalInfo = _ref.additionalInfo,
      checkboxInput = _ref.checkboxInput,
      leftContent = _ref.leftContent,
      heading = _ref.heading,
      description = _ref.description;
  var items = [];

  if (checkboxInput) {
    items.push(_react["default"].createElement(_ListViewCheckbox["default"], {
      key: "checkbox"
    }, checkboxInput));
  }

  if (actions) {
    items.push(_react["default"].createElement(_ListViewActions["default"], {
      key: "actions"
    }, actions));
  }

  items.push(_react["default"].createElement(_ListViewMainInfo["default"], {
    key: "main_info"
  }, leftContent && _react["default"].createElement(_ListViewLeft["default"], null, leftContent), _react["default"].createElement(_ListViewBody["default"], null, (heading || description) && _react["default"].createElement(_ListViewDescription["default"], null, heading && _react["default"].createElement(_ListViewDescriptionHeading["default"], null, heading), description && _react["default"].createElement(_ListViewDescriptionText["default"], null, description)), additionalInfo && _react["default"].createElement(_ListViewAdditionalInfo["default"], null, additionalInfo))));
  return items;
};

ListViewRow.propTypes = {
  /** Node which renders right-positioned actions (e.g. Buttons, DropdownKebab...) */
  actions: _propTypes["default"].node,

  /** An array of ListViewInfoItem instances to render additional info items */
  additionalInfo: _propTypes["default"].arrayOf(_propTypes["default"].node),

  /** Contents of ListViewItem description section */
  description: _propTypes["default"].node,

  /** Contents of ListViewItem heading */
  heading: _propTypes["default"].node,

  /** Contents for left section of ListViewItem (usually ListViewIcon) */
  leftContent: _propTypes["default"].node,

  /** Checkbox form input component */
  checkboxInput: _propTypes["default"].node
};
var _default = ListViewRow;
exports["default"] = _default;