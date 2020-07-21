import React, { FC, useContext, ReactChildren, ReactElement } from 'react';
import classnames from 'classnames';

import './dropdown.scss';

export interface IDropdownItemProps {
  className?: string;
  children: ReactChildren | ReactElement;
}

const DropdownItem: FC<IDropdownItemProps> = (props: IDropdownItemProps) => {
  const { className, children, ...restProps } = props;
  const classes = classnames('rx-dropdown-item', className);

  return (
    <li className={classes} {...restProps}>
      {children}
    </li>
  );
};

export default DropdownItem;
