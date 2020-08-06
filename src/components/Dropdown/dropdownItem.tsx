import React, { FC, useContext, ReactChildren, ReactElement } from 'react';
import classnames from 'classnames';

import { DropdownContext } from './dropdown';
import './dropdown.scss';

export interface IDropdownItemProps {
  className?: string;
  children: ReactChildren | ReactElement;
  onClick?: (e: React.MouseEvent<HTMLLIElement>) => void;
}

const DropdownItem: FC<IDropdownItemProps> = (props: IDropdownItemProps) => {
  const { className, children, onClick, ...restProps } = props;
  const classes = classnames('rx-dropdown-menu__item', className);
  const { setVisible } = useContext(DropdownContext);

  const handleClick = (evt: React.MouseEvent<HTMLLIElement>) => {
    onClick && onClick(evt);
    setVisible && setVisible(false);
  };

  return (
    <li className={classes} {...restProps} onClick={handleClick}>
      {children}
    </li>
  );
};

export default DropdownItem;
