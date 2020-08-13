import React, { FC, ReactChildren, ReactElement, ReactNode } from 'react';
import classnames from 'classnames';

import './switch.scss';

export interface ISwitchProps {
  value?: string | number | readonly string[];
  disabled?: boolean;
  checked?: boolean;
  checkedNode?: string | ReactNode;
  uncheckedNode?: string | ReactNode;
  onChange?: (checked: boolean, e: Event) => void;
  onClick?: (checked: boolean, e: MouseEvent) => void;
  className?: string;
}

const Switch: FC<ISwitchProps> = (props: ISwitchProps) => {
  const {
    value,
    disabled,
    checked,
    checkedNode,
    uncheckedNode,
    className,
    onChange,
    onClick,
    ...restProps
  } = props;
  const classes = classnames('rx-Switch', className);

  return (
    <label className={classes} {...restProps}>
      <input type="checkbox" value={value} className="rx-switch__input" />
      <span className="rx-switch__text"></span>
    </label>
  );
};

Switch.displayName = 'Switch';

export default Switch;
