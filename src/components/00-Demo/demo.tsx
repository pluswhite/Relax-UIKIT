import React, { FC, ReactChildren, ReactElement } from 'react';
import classnames from 'classnames';

import './demo.scss';

export interface IDemoProps {
  field?: string;
  className?: string;
  children: ReactChildren | ReactElement;
}

const Demo: FC<IDemoProps> = (props: IDemoProps) => {
  const { className, children, ...restProps } = props;

  return (
    <div className={className} {...restProps}>
      {children}
    </div>
  );
};

export default Demo;
