import React, {
  FC,
  ReactChildren,
  ReactElement,
  CSSProperties,
  createContext,
  useContext,
} from 'react';
import classnames from 'classnames';

import './grid.scss';

export interface IRowProps {
  gutter?: number;
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
  align?: 'top' | 'middle' | 'bottom';
  className?: string;
  style?: CSSProperties;
  children: ReactChildren | ReactElement;
}

export interface RowContextType {
  gutter: number;
}
export const RowContext = createContext<RowContextType>({ gutter: 0 });

export const Row: FC<IRowProps> = (props: IRowProps) => {
  const { gutter = 8, justify, align, className, style, children, ...restProps } = props;
  const classes = classnames(
    'rx-row',
    {
      'rx-row--flex': justify || align,
      [`is-justify-${justify}`]: justify,
      [`is-align-${align}`]: align,
    },
    className,
  );
  const rowStyle = {
    ...(gutter > 0
      ? {
          marginLeft: gutter / -2,
          marginRight: gutter / -2,
        }
      : {}),
    ...style,
  };

  console.log(rowStyle);

  return (
    <RowContext.Provider value={{ gutter }}>
      <div className={classes} style={rowStyle} {...restProps}>
        {children}
      </div>
    </RowContext.Provider>
  );
};

export interface IColProps {
  span?: number;
  offset?: number;
  push?: number;
  pull?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactChildren | ReactElement;
}

export const Col: FC<IColProps> = (props: IColProps) => {
  const { span, offset, push, pull, className, style, children, ...restProps } = props;
  const classes = classnames(
    'rx-col',
    {
      [`rx-col-${span}`]: span,
      [`rx-col-offset-${offset}`]: offset,
      [`rx-col-push-${push}`]: push,
      [`rx-col-pull-${pull}`]: pull,
    },
    className,
  );
  const { gutter } = useContext(RowContext);
  const colStyle = {
    ...(gutter > 0
      ? {
          paddingLeft: gutter / 2,
          paddingRight: gutter / 2,
          // marginRight: style?.marginLeft,
        }
      : style),
  };

  return (
    <div className={classes} style={colStyle} {...restProps}>
      {children}
    </div>
  );
};
