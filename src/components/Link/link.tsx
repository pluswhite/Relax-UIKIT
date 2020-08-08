import React, { FC, ReactChildren, ReactElement } from 'react';
import classnames from 'classnames';

import './link.scss';

export interface ILinkProps {
  type?: ThemeType;
  className?: string;
  children: ReactChildren | ReactElement;
}

const Link: FC<ILinkProps> = (props: ILinkProps) => {
  const { className, children, ...restProps } = props;
  const classes = classnames('rx-link', className);

  return (
    <a className={classes} {...restProps}>
      {children}
    </a>
  );
};

export default Link;
