import React, {
  FC,
  ReactChild,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';
import classnames from 'classnames';

import './input.scss';

interface IBaseInputProps {
  className?: string;
  name?: string;
  checked?: boolean;
  size?: 'default' | 'xs' | 'sm' | 'md' | 'lg';
  value?: InputValue;
  disabled?: boolean;
  children?: React.ReactChild;
  onChange?: (
    value: InputValue,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void;
}

export type InputProps = IBaseInputProps &
  InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<InputProps> = (props: InputProps) => {
  const {
    className,
    name,
    size = 'default',
    value,
    disabled = false,
    children,
    onChange,
    ...restProps
  } = props;

  const classes = classnames(
    'dns-input',
    {
      [`dns-input--${size}`]: size,
      'is-disabled': disabled,
    },
    className,
  );

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(value, evt);
  };

  return (
    <div className={classes}>
      <span className="dns-input__prefix" />
      <input
        className="dns-input__elm"
        type="text"
        name={name}
        disabled={disabled}
        onChange={handleChange}
        value={value}
        data-testid="test-input"
        {...restProps}
      />
      <span className="dns-input__suffix">{children}</span>
    </div>
  );
};

interface ITextAreaBaseProps {
  className?: string;
  name?: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  autoSize?: boolean | Object; // TODO: handle `autoSize` prop
  children?: ReactChild;
}
export type TextAreaProps = ITextAreaBaseProps &
  TextareaHTMLAttributes<HTMLTextAreaElement>;
export const TextArea: FC<TextAreaProps> = (props: TextAreaProps) => {
  const { className, children, ...restProps } = props;
  const classes = classnames('dns-input', className);

  return (
    <div className={classes}>
      <textarea className="dns-input__elm" {...restProps}>
        {children}
      </textarea>
    </div>
  );
};

export default Input;
