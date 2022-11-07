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
  xs: 'px-1',
  sm: 'px-2',
  md: 'px-3',
  lg: 'px-4',
  xl: 'px-7',
};
const gapConfig: Record<NonNullable<ButtonProps['size']>, string> = {
  xs: 'gap-1',
  sm: 'gap-1',
  md: 'gap-2',
  lg: 'gap-3',
  xl: 'gap-3',
};
const roundConfig: Record<NonNullable<ButtonProps['size']>, string> = {
  xs: 'rounded-md',
  sm: 'rounded-md',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
};
const transitionConfig = {
  text: {
    primary: 'hover:opacity-80 active:opacity-80',
    secondary: 'hover:opacity-60 active:opacity-60',
    default: 'hover:text-slate-500 hover:fill-slate-500 active:text-slate-500 active:fill-slate-500',
  },
  outline: {
    primary: 'hover:bg-slate-900/5 active:bg-slate-900/5',
    secondary: 'hover:bg-slate-900/5 active:bg-slate-900/5',
    default: 'hover:bg-slate-900/5 active:bg-slate-900/5',
  },
  contain: {
    primary: 'hover:brightness-90 active:brightness-90',
    secondary: 'hover:brightness-75 active:brightness-75',
    default: 'hover:text-slate-700 hover:fill-slate-600 hover:bg-slate-50 active:text-slate-700 active:fill-slate-600 active:bg-slate-50',
  },
};
const colorConfig = {
  text: {
    primary: 'text-primary fill-primary bg-transparent',
    secondary: 'text-primary fill-primary opacity-70 bg-transparent',
    default: 'text-slate-600 fill-slate-600 bg-transparent',
  },
  outline: {
    primary: 'text-primary fill-primary bg-transparent',
    secondary: 'text-primary fill-primary bg-transparent',
    default: 'text-slate-600 fill-slate-600 bg-transparent',
  },
  contain: {
    primary: 'text-slate-50 fill-slate-50 bg-primary',
    secondary: 'text-primary fill-primary bg-primary/5',
    default: 'text-slate-600 fill-slate-600',
  },
};
const shapeConfig = {
  outline: {
    primary: 'border border-solid border-primary',
    secondary: 'border border-solid border-slate-900/5',
    default: 'border border-solid border-slate-900/5',
  },
};
const disableConfig = {
  text: {
    primary: 'opacity-40 pointer-events-none',
    secondary: 'opacity-30 pointer-events-none',
    default: 'text-slate-400 fill-slate-400 pointer-events-none',
  },
  outline: {
    primary: 'opacity-40 pointer-events-none',
    secondary: 'opacity-40 pointer-events-none',
    default: 'text-slate-400 fill-slate-400 pointer-events-none',
  },
  contain: {
    primary: 'opacity-40 pointer-events-none',
    secondary: 'opacity-30 pointer-events-none',
    default: 'text-slate-400 fill-slate-400 pointer-events-none',
  },
};

const Button: OverridableComponent<ButtonTypeMap> = (props) => {
  const {
    variant = 'text',
    color = 'default',
    size = 'md',
    rounded = false,
    disabled = false,
    className,
    children,

    ...others
  } = props;

  return (
    <Box
      as="button"
      className={classnames(
        colorConfig[variant][color],
        'transition-colors',
        disabled ? disableConfig[variant][color] : transitionConfig[variant][color],

        rounded ? 'rounded-full' : roundConfig[size],
        'box-border',
        shapeConfig[variant]?.[color],

        sizeConfig[size],
        paddingConfig[size],
        'inline-flex flex-row items-center justify-center',
        gapConfig[size],

        'font-semibold',

        className,
      )}
      disabled={disabled}
      {...others}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) {
          return child;
        }
        const c = child as React.ReactElement;

        return React.cloneElement(c, {
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
