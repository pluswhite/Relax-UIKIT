import React, {
  FC,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ReactChildren,
  ReactChild,
} from 'react';
import classnames from 'classnames';

import './button.scss';

interface IBaseButtonProps {
  className?: string;
  disabled?: boolean;
  btnType?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'info'
    | 'danger'
    | 'link';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  plain?: boolean;
  round?: boolean;
  circle?: boolean;
  href?: string;
  children: ReactChildren | ReactChild;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
}

type NativeButtonProps = IBaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = IBaseButtonProps & AnchorHTMLAttributes<HTMLElement>;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const {
    btnType = 'default',
    className,
    disabled,
    size,
    plain,
    round,
    circle,
    href,
    children,
    onClick,
    ...restProps
  } = props;

  const isLink = btnType === 'link';

  const classes = classnames(
    'rx-button',
    `rx-button--${btnType}`,
    {
      [`rx-button--${size}`]: size,
      'is-plain': plain,
      'is-disabled': disabled,
      'is-round': round,
      'is-circle': circle,
    },
    className,
  );

  const handleClick = (evt: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    onClick && onClick(evt);
  };

  if (isLink) {
    if (disabled) {
      return (
        <a className={classes} {...restProps} onClick={handleClick}>
          {children}
        </a>
      );
    }
    return (
      <a className={classes} href={href || '#'} {...restProps} onClick={handleClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} disabled={disabled} {...restProps} onClick={handleClick}>
      {children}
    </button>
  );
};

interface ButtonGroupProps {
  children: ReactChildren | ReactChild;
}

export const ButtonGroup: FC<ButtonGroupProps> = ({ children }: ButtonGroupProps) => {
  return <div className="rx-button-group">{children}</div>;
};

export default Button;
