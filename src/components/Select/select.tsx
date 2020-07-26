import React, { FC, ReactChildren, ReactElement } from 'react';
import classnames from 'classnames';

import Icon from '../Icon';
import './select.scss';

export interface ISelectProps {
  value: string | number;
  size?: string;
  className?: string;
  children: ReactChildren | ReactElement;
}

const Select: FC<ISelectProps> = (props: ISelectProps) => {
  const { value, className, children, ...restProps } = props;
  const classes = classnames('rx-select', className);

  return (
    <div className={classes} {...restProps}>
      <div className="rx-select__trigger">
        <input
          className="rx-select__trigger__selector"
          // size="sm"
          placeholder="Select"
          value={value}
          readOnly
        />
        <Icon className="rx-select__trigger__close" icon="caret-down" />
      </div>
      <div className="rx-select__popover">{children}</div>
    </div>
  );
};

export default Select;
