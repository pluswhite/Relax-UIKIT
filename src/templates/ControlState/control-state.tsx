import React, { FC, ReactNode } from 'react';
import classnames from 'classnames';

import './control-state.scss';

interface IControlState {
  type: 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'link';
  degree: 'default' | 'light' | 'dark';
  round?: boolean;
  children?: ReactNode;
}

const ControlState: FC<IControlState> = (props: IControlState) => {
  const { type, degree = 'default', round, children = 'Colors' } = props;
  const classes = classnames('control-state-block', {
    'is-round': round,
    [`is-${type}`]: type,
    [`is-${degree}`]: degree,
  });

  return (
    <div className="control-state">
      <div className={classes}></div>
      <p>{children}</p>
    </div>
  );
};

export default ControlState;
