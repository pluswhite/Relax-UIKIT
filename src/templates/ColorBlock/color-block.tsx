import React, { FC, ReactNode, CSSProperties } from 'react';
import classnames from 'classnames';

import './color-block.scss';

interface IColorBlock {
  type: 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'link';
  children?: ReactNode;
}

const ColorBlock: FC<IColorBlock> = (props: IColorBlock) => {
  const { type, children = 'Colors' } = props;
  const classes = classnames(`colors-block`, {
    [`colors-block__${type}`]: type,
  });

  return <div className={classes}>{children}</div>;
};

interface IColorDegree {
  degree: number;
  children?: ReactNode;
}

export const ColorDegree: FC<IColorDegree> = (props: IColorDegree) => {
  const { degree, children } = props;
  const classes = classnames('colors-degree', {
    [`colors-degree--${degree}`]: degree,
  });

  return <div className={classes}>{children}</div>;
};

export default ColorBlock;
