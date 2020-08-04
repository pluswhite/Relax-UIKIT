import React, { FC, ReactChildren, ReactElement } from 'react';
import classnames from 'classnames';

import './grid.scss';

export interface IRowProps {
  field?: string;
  className?: string;
  children: ReactChildren | ReactElement;
}

export const Row: FC<IRowProps> = (props: IRowProps) => {
  const { className, children, ...restProps } = props;
  const classes = classnames('rx-row', className);

  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

export interface IColProps {
  span?: number;
  className?: string;
  children: ReactChildren | ReactElement;
}

export const Col: FC<IColProps> = (props: IColProps) => {
  const { span, className, children, ...restProps } = props;
  const classes = classnames('rx-col', `rx-col-${span}`, className);

  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};
