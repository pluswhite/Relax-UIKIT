import React, { FC, ReactChildren, ReactElement, ReactChild } from 'react';
import classnames from 'classnames';

import Icon from '../Icon';
import { tuple } from '../../util/colors';

import './tag.scss';

const PresetColorTypes = tuple(
  'primary',
  'secondary',
  'success',
  'warning',
  'danger',
  'info',
  'default',
);

export interface ITagProps {
  color?: ThemeType | 'default' | string;
  className?: string;
  closable?: boolean;
  onClose?: () => void;
  style?: React.CSSProperties;
  children: ReactChildren | ReactElement | ReactChild;
}

const PresetColorRegex = new RegExp(`^${PresetColorTypes.join('|')}`);

const Tag: FC<ITagProps> = (props: ITagProps) => {
  const { color = 'default', closable, onClose, className, children, style, ...restProps } = props;
  const isPresetColor = (): boolean => {
    if (!color) {
      return false;
    }

    return PresetColorRegex.test(color);
  };
  const classes = classnames(
    'rx-tag',
    {
      [`rx-tag--${color}`]: isPresetColor(),
      'is-closable': closable,
    },
    className,
  );

  const styles = {
    ...style,
    backgroundColor: color && !isPresetColor() ? `${color}` : undefined,
  };

  return (
    <span className={classes} {...restProps} style={styles}>
      {children}
      {closable && <Icon className="rx-tag__close" icon="times" onClick={onClose} />}
    </span>
  );
};

export default Tag;
