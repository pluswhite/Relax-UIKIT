import React, { FC, ReactChildren, ReactElement } from 'react';
import classnames from 'classnames';

import './select.scss';

export interface ISelectProps {
  value?: string | number;
  size?: string;
  className?: string;
  children: ReactChildren | ReactElement;
}

const Select: FC<ISelectProps> = (props: ISelectProps) => {
  const { className, children, ...restProps } = props;
  const classes = classnames('rx-select', className);

  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

export default Select;
