import * as React from 'react';

export const MenuContext = React.createContext<{
  menuId?: string;
  parentMenu?: string;
  onSelect?: (event?: any, itemId?: any) => void;
  onActionClick?: (event?: any, itemId?: any, actionId?: any) => void;
  activeItemId?: any;
  selected?: any | any[];
  drilldownItemPath?: string[];
  drilledInMenus?: string[];
  onDrillIn?: (fromItemId: string, toItemId: string, itemId: string) => void;
  onDrillOut?: (toItemId: string, itemId: string) => void;
  onGetMenuHeight?: (menuId: string, height: number) => void;
}>({
  menuId: null,
  parentMenu: null,
  onActionClick: () => null,
  onSelect: () => null,
  activeItemId: null,
  selected: null,
  drilledInMenus: [],
  drilldownItemPath: [],
  onDrillIn: null,
  onDrillOut: null,
  onGetMenuHeight: () => null
});

export const MenuItemContext = React.createContext<{
  itemId?: any;
  isDisabled?: boolean;
}>({
  itemId: null,
  isDisabled: false
});
