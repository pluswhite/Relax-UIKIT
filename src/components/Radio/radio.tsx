import React, { FC, InputHTMLAttributes, useState } from 'react';
import classnames from 'classnames';

import './radio.scss';
import { InputValue } from '../../types';

interface IBaseRadioProps {
  className?: string;
  name?: string;
  checked?: boolean;
  value?: InputValue;
  disabled?: boolean;
  children?: React.ReactChild;
  onChange?: (value: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
}

// const ELEMENT_TYPE = 'radio';

// TODO: Radio Group

export type RadioProps = IBaseRadioProps &
  InputHTMLAttributes<HTMLInputElement>;

export const Radio: FC<RadioProps> = (props: RadioProps) => {
  const {
    className,
    name,
    checked = false,
    value,
    disabled = false,
    children,
    onChange,
    ...restProps
  } = props;

  const [checkedState, setCheckedState] = useState(checked);

  const wrapperClasses = classnames('dns-radio', className);
  const radioClasses = classnames('dns-radio__input', {
    'is-checked': checkedState,
    'is-disabled': disabled,
  });

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedState(!checkedState);
    onChange && onChange(!checkedState, evt);
  };

  return (
    <label className={wrapperClasses}>
      <span className={radioClasses}>
        <input
          className="dns-radio__radiobox"
          type="radio"
          name={name}
          checked={checkedState}
          disabled={disabled}
          onChange={handleChange}
          data-testid="test-radio"
          value={value}
          {...restProps}
        />
        <span className="dns-radio__inner" />
      </span>
      <span className="dns-radio__label">{children}</span>
    </label>
  );
};

export default Radio;
