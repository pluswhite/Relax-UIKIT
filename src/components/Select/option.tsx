import React, { FC, ReactChildren, ReactElement } from 'react';
import classnames from 'classnames';

export interface IOptionProps {
  field?: string;
  className?: string;
  children: ReactChildren | ReactElement;
}

const Option: FC<IOptionProps> = (props: IOptionProps) => {
  const { className, children, ...restProps } = props;
  const classes = classnames('rx-select__option', className);

  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

export default Option;
