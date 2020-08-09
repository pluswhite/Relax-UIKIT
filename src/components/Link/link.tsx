import React, { FC, ReactChildren, ReactElement } from 'react';
import classnames from 'classnames';

import './link.scss';

export interface ILinkProps {
  type?: ThemeType;
  disabled?: boolean;
  className?: string;
  children: ReactChildren | ReactElement;
}

const Link: FC<ILinkProps> = (props: ILinkProps) => {
  const { type, disabled, className, children, ...restProps } = props;
  const classes = classnames(
    'rx-link',
    {
      [`rx-link--${type}`]: type,
      [`is-disabled`]: disabled,
    },
    className,
  );

  return (
    <a className={classes} {...restProps}>
      {children}
    </a>
  );
};

export default Link;
