import React, { FC, InputHTMLAttributes, useState, ReactChildren, ReactChild } from 'react';
import classnames from 'classnames';

import './radio.scss';

interface IBaseRadioProps {
  className?: string;
  name?: string;
  checked?: boolean;
  value?: InputValue;
  disabled?: boolean;
  children?: ReactChild | ReactChildren;
  onChange?: (value: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
}

// const ELEMENT_TYPE = 'radio';

// TODO: Radio Group

export type RadioProps = IBaseRadioProps & InputHTMLAttributes<HTMLInputElement>;

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

  const wrapperClasses = classnames('rx-radio', className);
  const radioClasses = classnames('rx-radio__input', {
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
          className="rx-radio__radiobox"
          type="radio"
          name={name}
          checked={checkedState}
          disabled={disabled}
          onChange={handleChange}
          data-testid="test-radio"
          value={value}
          {...restProps}
        />
        <span className="rx-radio__inner" />
      </span>
      <span className="rx-radio__label">{children}</span>
    </label>
  );
};

export default Radio;
