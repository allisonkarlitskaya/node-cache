function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import ListViewActions from './ListViewActions';
import ListViewAdditionalInfo from './ListViewAdditionalInfo';
import ListViewBody from './ListViewBody';
import ListViewCheckbox from './ListViewCheckbox';
import ListViewDescription from './ListViewDescription';
import ListViewDescriptionHeading from './ListViewDescriptionHeading';
import ListViewDescriptionText from './ListViewDescriptionText';
import ListViewExpand from './ListViewExpand';
import ListViewGroupItem from './ListViewGroupItem';
import ListViewGroupItemContainer from './ListViewGroupItemContainer';
import ListViewGroupItemHeader from './ListViewGroupItemHeader';
import ListViewIcon from './ListViewIcon';
import ListViewInfoItem from './ListViewInfoItem';
import ListViewItem from './ListViewItem';
import ListViewLeft from './ListViewLeft';
import ListViewMainInfo from './ListViewMainInfo';
import ListViewRow from './ListViewRow';
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

const ListView = (_ref) => {
  let {
    children,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "className"]);

  const classes = classNames('list-group list-view-pf list-view-pf-view', className);
  return React.createElement("div", _extends({
    className: classes
  }, props), children);
};

ListView.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,

  /** Children nodes - ListViewGroupItem or ListViewItem instances */
  children: PropTypes.node
};
ListView.defaultProps = {
  className: '',
  children: null
};
ListView.Actions = ListViewActions;
ListView.AdditionalInfo = ListViewAdditionalInfo;
ListView.Body = ListViewBody;
ListView.Checkbox = ListViewCheckbox;
ListView.Description = ListViewDescription;
ListView.DescriptionHeading = ListViewDescriptionHeading;
ListView.DescriptionText = ListViewDescriptionText;
ListView.Expand = ListViewExpand;
ListView.GroupItem = ListViewGroupItem;
ListView.GroupItemContainer = ListViewGroupItemContainer;
ListView.GroupItemHeader = ListViewGroupItemHeader;
ListView.Icon = ListViewIcon;
ListView.InfoItem = ListViewInfoItem;
ListView.Item = ListViewItem;
ListView.Left = ListViewLeft;
ListView.MainInfo = ListViewMainInfo;
ListView.Row = ListViewRow;
export default ListView;