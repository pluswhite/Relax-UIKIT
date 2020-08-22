import React, { FC, ReactChildren, ReactElement, ReactChild } from 'react';
import classnames from 'classnames';

import './link.scss';

export interface ILinkProps {
  type?: ThemeType;
  disabled?: boolean;
  underline?: boolean;
  className?: string;
  children: ReactChildren | ReactChild | ReactElement;
}

const Link: FC<ILinkProps> = (props: ILinkProps) => {
  const { type, disabled, underline, className, children, ...restProps } = props;
  const classes = classnames(
    'rx-link',
    {
      [`rx-link--${type}`]: type,
      [`is-disabled`]: disabled,
      [`is-underline`]: underline,
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
