import React, { FC, ReactChildren, ReactElement } from 'react';
import classnames from 'classnames';

import './grid.scss';

export interface IRowProps {
  gutter?: number;
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
  align?: 'top' | 'middle' | 'bottom';
  className?: string;
  children: ReactChildren | ReactElement;
}

export const Row: FC<IRowProps> = (props: IRowProps) => {
  const { gutter, justify, align, className, children, ...restProps } = props;
  const classes = classnames(
    'rx-row',
    {
      'rx-row--flex': justify || align,
      [`is-justify-${justify}`]: justify,
      [`is-align-${align}`]: align,
    },
    className,
  );

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
