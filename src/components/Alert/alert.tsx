import React, { FC, ReactNode, MouseEvent, useState, CSSProperties } from 'react';
import classnames from 'classnames';

import Icon from '../Icon';

import './alert.scss';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface IAlertProps {
  type?: 'success' | 'warning' | 'info' | 'danger';
  message?: string | ReactNode;
  description?: string | ReactNode;
  closable?: boolean;
  showIcon?: boolean;
  onClose?: (e: MouseEvent) => void;
  className?: string;
}

const ALERT_TYPE_MAP: { [type: string]: IconProp } = {
  success: 'check-circle',
  warning: 'exclamation-circle',
  danger: 'times-circle',
  info: 'info-circle',
};

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

  const [visible, setVisible] = useState(true);

  const alertClasses = classnames(
    'rx-alert',
    {
      [`rx-alert--${type}`]: type,
      [`is-hide`]: !visible,
    },
    className,
  );

  const iconClasses = classnames('rx-alert__icon', {
    [`rx-alert__icon--${type}`]: type,
    [`is-big`]: description,
  });

  const messageClasses = classnames('rx-alert__message', {
    [`is-bold`]: description,
  });

  const handleClose = (evt: MouseEvent) => {
    onClose && onClose(evt);
    setVisible(false);
  };

  return (
    <div className={alertClasses} {...restProps}>
      {showIcon && type && <Icon className={iconClasses} icon={ALERT_TYPE_MAP[type]} />}
      <div className="rx-alert__content">
        <p className={messageClasses}>{message}</p>
        {description && <div className="rx-alert__description">{description}</div>}
      </div>
      {closable && <Icon className="rx-alert__close-icon" icon="times" onClick={handleClose} />}
    </div>
  );
};

export default Alert;
