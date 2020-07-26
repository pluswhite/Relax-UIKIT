import React, {
  FC,
  ReactChild,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  useState,
  ReactNode,
} from 'react';
import classnames from 'classnames';

import './input.scss';

interface IBaseInputProps {
  className?: string;
  name?: string;
  checked?: boolean;
  wide?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  value?: InputValue;
  disabled?: boolean;
  prefix?: string | ReactNode;
  suffix?: string | ReactNode;
  children?: React.ReactChild;
  onChange?: (value: InputValue, e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type InputProps = IBaseInputProps & InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<InputProps> = (props: InputProps) => {
  const {
    className,
    name,
    size = 'default',
    value,
    disabled = false,
    wide,
    prefix,
    suffix,
    children,
    onChange,
    ...restProps
  } = props;

  const classes = classnames(
    'rx-input',
    {
      [`rx-input--${size}`]: size,
      'is-disabled': disabled,
      'is-wide': wide,
    },
    className,
  );

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(value, evt);
  };

  return (
    <div className={classes}>
      <span className="rx-input__prefix">{prefix}</span>
      <input
        className="rx-input__elm"
        type="text"
        name={name}
        disabled={disabled}
        onChange={handleChange}
        value={value}
        data-testid="test-input"
        {...restProps}
      />
      <span className="rx-input__suffix">{suffix}</span>
    </div>
  );
};

interface ITextAreaBaseProps {
  className?: string;
  name?: string;
  value?: InputValue | ReactChild;
  // autoSize?: boolean | Object; // TODO: handle `autoSize` prop
  onChange?: (value: boolean, e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export type TextAreaProps = ITextAreaBaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea: FC<TextAreaProps> = (props: TextAreaProps) => {
  const { className, name, value, onChange, ...restProps } = props;
  const classes = classnames('rx-input', className);
  const [text, setText] = useState(value);
  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(evt.target.value);
    onChange && onChange(evt);
  };

  return (
    <div className={classes}>
      <textarea
        name={name}
        className="rx-input__elm"
        value={text}
        onChange={handleChange}
        {...restProps}
      ></textarea>
    </div>
  );
};

export default Input;
