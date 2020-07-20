import React, { FC } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import './icon.scss';

export interface IIconProps extends FontAwesomeIconProps {
  theme?: ThemeType;
  icon: IconProp;
  className?: string;
}

const Icon: FC<IIconProps> = (props: IIconProps) => {
  const { icon, className, theme, ...restProps } = props;
  const classes = classnames('rx-icon', className, {
    [`rx-icon-${theme}`]: theme,
  });

  return <FontAwesomeIcon icon={icon} className={classes} {...restProps} />;
};

export default Icon;
