import React, { FC, ReactChildren, ReactElement, ReactNode, MouseEvent } from 'react';
import classnames from 'classnames';

import Icon from '../Icon';

import './alert.scss';

export interface IAlertProps {
  type?: ThemeType;
  message?: string | ReactNode;
  description?: string | ReactNode;
  closable?: boolean;
  showIcon?: boolean;
  onClose?: (e: MouseEvent) => void;
  className?: string;
}

const Alert: FC<IAlertProps> = (props: IAlertProps) => {
  const {
    type,
    message,
    description,
    closable,
    showIcon,
    onClose,
    className,
    ...restProps
  } = props;
  const classes = classnames(
    'rx-alert',
    {
      [`rx-alert--${type}`]: type,
    },
    className,
  );

  const handleClose = (evt: MouseEvent) => {
    onClose && onClose(evt);
  };

  return (
    <div className={classes} {...restProps}>
      {showIcon && <Icon icon="check-circle" />}
      <div className="rx-alert__content">
        <p className="rx-alert__message">{message}</p>
        {description && <div className="rx-alert__description">{description}</div>}
      </div>
      {closable && <Icon icon="times" onClick={handleClose} />}
    </div>
  );
};

export default Alert;
