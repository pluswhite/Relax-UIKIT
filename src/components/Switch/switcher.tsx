import React, { FC, ReactNode, useState, MouseEvent, ChangeEvent } from 'react';
import classnames from 'classnames';

import './switcher.scss';

export interface ISwitcherProps {
  name?: string;
  value?: string | number | readonly string[];
  disabled?: boolean;
  checked?: boolean;
  checkedNode?: string | ReactNode;
  uncheckedNode?: string | ReactNode;
  onChange?: (checked: boolean, e: ChangeEvent) => void;
  onClick?: (checked: boolean, e: MouseEvent) => void;
  className?: string;
}

const Switcher: FC<ISwitcherProps> = (props: ISwitcherProps) => {
  const {
    name,
    value,
    disabled,
    checked = false,
    checkedNode,
    uncheckedNode,
    className,
    onChange,
    onClick,
    ...restProps
  } = props;
  const classes = classnames(
    'rx-switch',
    {
      'is-disabled': disabled,
      'is-checked': checked,
    },
    className,
  );
  const [switchState, setSwitchState] = useState(checked);

  const handleSwitch = (evt: MouseEvent<HTMLInputElement>) => {
    setSwitchState(!switchState);
    onClick && onClick(switchState, evt);
  };

  const handleChange = (evt: ChangeEvent) => {
    onChange && onChange(switchState, evt);
  };

  return (
    <label className={classes}>
      <input
        type="checkbox"
        className="rx-switch__input"
        name={name}
        value={value}
        checked={switchState}
        disabled={disabled}
        onChange={handleChange}
        onClick={handleSwitch}
        {...restProps}
      />
      <span className="rx-switch__text">{switchState ? checkedNode : uncheckedNode}</span>
    </label>
  );
};

export default Switcher;
