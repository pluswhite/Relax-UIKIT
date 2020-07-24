import React, { FC, ReactChildren, ReactElement } from 'react';
import classnames from 'classnames';

import Icon from '../Icon';

import './tag.scss';

export interface ITagProps {
  color?: ThemeType | string;
  className?: string;
  closable?: boolean;
  onClose?: () => void;
  children: ReactChildren | ReactElement;
}

const Tag: FC<ITagProps> = (props: ITagProps) => {
  const { color, closable, className, children, ...restProps } = props;
  const classes = classnames(
    'rx-tag',
    {
      'is-closable': closable,
    },
    className,
  );

  return (
    <span className={classes} {...restProps}>
      {children}
      {closable && <Icon icon="times" theme="dark" />}
    </span>
  );
};

export default Tag;
