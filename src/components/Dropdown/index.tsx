import { FC } from 'react';
import Dropdown, { IDropdownProps } from './dropdown';
import DropdownMenu, { IDropdownMenuProps } from './dropdownMenu';
import DropdownItem, { IDropdownItemProps } from './dropdownItem';

export type IDropdown = FC<IDropdownProps> & {
  Menu: FC<IDropdownMenuProps>;
  Item: FC<IDropdownItemProps>;
};

const DropdownComponent = Dropdown as IDropdown;
DropdownComponent.Menu = DropdownMenu;
DropdownComponent.Item = DropdownItem;

export default DropdownComponent;
