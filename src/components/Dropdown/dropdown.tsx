import React, { FC, ReactChildren, ReactElement, useState, useContext, createContext } from 'react';
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
  trigger?: 'hover' | 'click'; // TODO: handle trigger mode.
  visible?: boolean;
}

type DropdownContextType = {
  setVisible?: (visible: boolean) => void;
};

export const DropdownContext = createContext<DropdownContextType>({});

const Dropdown: FC<IDropdownProps> = (props: IDropdownProps) => {
  const { menus, className, children, trigger = 'hover', visible, ...restProps } = props;
  const classes = classnames('rx-dropdown', className);
  const [isVisible, setVisible] = useState(visible);
  const { Provider } = DropdownContext;

  const handleHover = (evt: React.MouseEvent) => {
    setVisible(!isVisible);
  };

  return (
    <div className={classes} {...restProps} onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <div className="rx-dropdown__trigger">{children}</div>
      <Provider
        value={{
          setVisible,
        }}
      >
        <div className="rx-dropdown__popover">{isVisible && menus}</div>
      </Provider>
    </div>
  );
};

export default Dropdown;
