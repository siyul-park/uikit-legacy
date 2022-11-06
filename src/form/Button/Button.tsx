import React from 'react';
import classnames from 'classnames';

import { Box } from '@layout/index';
import { OverridableComponent } from '@type';

import ButtonProps from './ButtonProps';
import ButtonTypeMap from './ButtonTypeMap';

const sizeConfig: Record<NonNullable<ButtonProps['size']>, string> = {
  xs: 'text-xs min-w-xs min-h-xs',
  sm: 'text-sm min-w-sm min-h-sm',
  md: 'text-md min-w-md min-h-md',
  lg: 'text-lg min-w-lg min-h-lg',
  xl: 'text-xl min-w-xl min-h-xl',
};
const childSizeConfig: Record<NonNullable<ButtonProps['size']>, string> = {
  xs: 'h-xs_in',
  sm: 'h-sm_in',
  md: 'h-md_in',
  lg: 'h-lg_in',
  xl: 'h-xl_in',
};
const paddingConfig: Record<NonNullable<ButtonProps['size']>, string> = {
  xs: 'px-sm',
  sm: 'px-sm',
  md: 'px-md',
  lg: 'px-lg',
  xl: 'px-xl',
};
const gapConfig: Record<NonNullable<ButtonProps['size']>, string> = {
  xs: 'gap-xs',
  sm: 'gap-sm',
  md: 'gap-md',
  lg: 'gap-md',
  xl: 'gap-md',
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
