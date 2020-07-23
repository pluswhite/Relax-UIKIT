import React, { FC, ReactChildren, ReactElement } from 'react';
import classnames from 'classnames';

import './dropdown.scss';

export interface IDropdownMenuProps {
  className?: string;
  children: ReactChildren | ReactElement;
}

const DropdownMenu: FC<IDropdownMenuProps> = (props: IDropdownMenuProps) => {
  const { className, children, ...restProps } = props;
  const classes = classnames('rx-dropdown-menu', className);

  return (
    <ul className={classes} {...restProps}>
      {children}
    </ul>
  );
};

export default DropdownMenu;
