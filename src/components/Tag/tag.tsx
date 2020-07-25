import React, { FC, ReactChildren, ReactElement } from 'react';
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
  children: ReactChildren | ReactElement;
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
    backgroundColor: color && !isPresetColor() ? color : undefined,
    ...style,
  };

  return (
    <span className={classes} {...restProps} style={styles}>
      {children}
      {closable && <Icon icon="times" onClick={onClose} />}
    </span>
  );
};

export default Tag;
