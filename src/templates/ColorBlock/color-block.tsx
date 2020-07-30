import React, { FC, ReactNode } from 'react';

import './color-block.scss';

interface IColorBlock {
  type: 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'link';
  degree: 'default' | 'light' | 'dark';
  children?: ReactNode;
}

const ColorBlock: FC<IColorBlock> = (props: IColorBlock) => {
  const { type, degree = 'default', children = 'Colors' } = props;
  const classes = `colors-block colors-block__${type}--${degree}`;

  return (
    <div className="colors-block">
      <div className={classes}></div>
      {children}
    </div>
  );
};

export default ColorBlock;
