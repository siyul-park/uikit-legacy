import React from 'react';
import classnames from 'classnames';

import { Box } from '@layout/index';
import { OverridableComponent } from '@type';

import ButtonProps from './ButtonProps';
import ButtonTypeMap from './ButtonTypeMap';

const sizeConfig: Record<NonNullable<ButtonProps['size']>, string> = {
  xs: 'text-xs min-w-5 min-h-5',
  sm: 'text-sm min-w-7 min-h-7',
  md: 'text-md min-w-9 min-h-9',
  lg: 'text-lg min-w-11 min-h-11',
  xl: 'text-xl min-w-14 min-h-14',
};
const childSizeConfig: Record<NonNullable<ButtonProps['size']>, string> = {
  xs: 'h-4',
  sm: 'h-5',
  md: 'h-6',
  lg: 'h-7',
  xl: 'h-7',
};
const paddingConfig: Record<NonNullable<ButtonProps['size']>, string> = {
  xs: 'px-2',
  sm: 'px-2',
  md: 'px-3',
  lg: 'px-4',
  xl: 'px-5',
};
const gapConfig: Record<NonNullable<ButtonProps['size']>, string> = {
  xs: 'gap-1',
  sm: 'gap-2',
  md: 'gap-3',
  lg: 'gap-4',
  xl: 'gap-5',
};
const roundConfig: Record<NonNullable<ButtonProps['size']>, string> = {
  xs: 'rounded-md',
  sm: 'rounded-md',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
};
const colorConfig: Record<NonNullable<ButtonProps['color']>, string> = {
  primary: 'text-slate-50 fill-slate-50 bg-primary transition-colors hover:brightness-90 active:brightness-90',
  secondary: 'text-primary fill-primary bg-secondary transition-colors hover:brightness-90 active:brightness-90',
  white: 'text-slate-600 fill-slate-600 bg-white transition-colors hover:text-slate-700 hover:fill-slate-600 hover:bg-slate-50',
};

const Button: OverridableComponent<ButtonTypeMap> = (props) => {
  const {
    color = 'white',
    size = 'md',
    round = false,
    className,
    children,
    ...others
  } = props;

  return (
    <Box
      as="button"
      className={classnames(
        sizeConfig[size],
        paddingConfig[size],
        round ? 'rounded-full' : roundConfig[size],
        colorConfig[color],
        'box-border',
        color === 'white' ? 'border border-solid border-slate-900/5' : null,
        'inline-flex flex-row items-center justify-center',
        gapConfig[size],
        'font-semibold',
        className,
      )}
      {...others}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) {
          return child;
        }
        const c = child as React.ReactElement;
        return React.cloneElement(child, {
          ...c.props,
          className: classnames(
            childSizeConfig[size],
            c.props?.className,
          ),
        });
      })}
    </Box>
  );
};

export default Button;
