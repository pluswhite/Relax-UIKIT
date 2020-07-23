import React, { FC, ReactChildren, ReactElement, useState } from 'react';
import classnames from 'classnames';

// import Button from '../Button';
// import Icon from '../Icon';
import DropdownMenu from './dropdownMenu';
import DropdownItem from './dropdownItem';

import './dropdown.scss';

export interface IDropdownProps {
  className?: string;
  menus: ReactElement;
  children: ReactChildren | ReactElement;
  Menu: typeof DropdownMenu;
  Item: typeof DropdownItem;
}

const Dropdown: FC<IDropdownProps> = (props: IDropdownProps) => {
  const [visible, setVisible] = useState(false);
  const { menus, className, children, ...restProps } = props;
  const classes = classnames('rx-dropdown', className);

  const handleHover = (evt: React.MouseEvent) => {
    setVisible(!visible);
  };

  return (
    <div className={classes} {...restProps} onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <div className="rx-dropdown__trigger">{children}</div>
      <div className="rx-dropdown__popover">{visible && menus}</div>
    </div>
  );
};

export default Dropdown;
