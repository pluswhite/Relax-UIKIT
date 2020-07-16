import React, { FC, ReactChild, InputHTMLAttributes, useState } from 'react';
import classnames from 'classnames';

import './checkbox.scss';

interface IBaseCheckboxProps {
  className?: string;
  name?: string;
  checked?: boolean;
  value?: InputValue;
  disabled?: boolean;
  children?: ReactChild;
  onChange?: (value: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type CheckboxProps = IBaseCheckboxProps & InputHTMLAttributes<HTMLInputElement>;

const Checkbox: FC<CheckboxProps> = (props: CheckboxProps) => {
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

  const wrapperClasses = classnames('dns-checkbox', className);
  const checkboxClasses = classnames('dns-checkbox__input', {
    'is-checked': checkedState,
    'is-disabled': disabled,
  });

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedState(!checkedState);
    onChange && onChange(!checkedState, evt);
  };

  return (
    <label className={wrapperClasses}>
      <span className={checkboxClasses}>
        <input
          className="dns-checkbox__checkbox"
          type="checkbox"
          name={name}
          checked={checkedState}
          disabled={disabled}
          onChange={handleChange}
          data-testid="test-checkbox"
          value={value}
          {...restProps}
        />
        <span className="dns-checkbox__inner" />
      </span>
      <span className="dns-checkbox__label">{children}</span>
    </label>
  );
};

export default Checkbox;
