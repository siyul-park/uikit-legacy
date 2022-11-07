import React from 'react';
import classnames from 'classnames';

import Box from '@layout/Box';
import { OverridableComponent } from '@type';

import BasicButtonProps from './BasicButtonProps';
import BasicButtonTypeMap from './BasicButtonTypeMap';

const sizeConfig: Record<NonNullable<BasicButtonProps['size']>, string> = {
  xs: 'text-xs min-w-5 min-h-5 max-h-5',
  sm: 'text-sm min-w-7 min-h-7 max-h-7',
  md: 'text-md min-w-9 min-h-9 max-h-9',
  lg: 'text-lg min-w-11 min-h-11 max-h-11',
  xl: 'text-xl min-w-14 min-h-14 max-h-14',
};
const childSizeConfig: Record<NonNullable<BasicButtonProps['size']>, string> = {
  xs: 'text-xs h-4',
  sm: 'text-sm h-5',
  md: 'text-md h-6',
  lg: 'text-lg h-7',
  xl: 'text-xl h-7',
};
const gapConfig: Record<NonNullable<BasicButtonProps['size']>, string> = {
  xs: 'gap-1',
  sm: 'gap-1',
  md: 'gap-2',
  lg: 'gap-3',
  xl: 'gap-3',
};

function transitions(color: string) {
  return {
    text: {
      primary: 'hover:brightness-150 active:brightness-150',
      secondary: 'hover:brightness-150 active:brightness-150',
      tertiary: `hover:text-${color} hover:fill-${color} active:text-${color} active:fill-${color} opacity-75`,
    },
    outline: {
      primary: `hover:bg-${color}/5 active:bg-${color}/5`,
      secondary: `hover:bg-${color}/5 active:bg-${color}/5`,
      tertiary: `hover:bg-${color}/5 active:bg-${color}/5`,
    },
    contain: {
      primary: 'hover:brightness-150 active:brightness-150',
      secondary: 'hover:brightness-150 active:brightness-150',
      tertiary: `hover:bg-${color}/5 active:bg-${color}/5`,
    },
  };
}
function colors(color: string) {
  return {
    text: {
      primary: `text-${color} fill-${color} bg-transparent`,
      secondary: `text-${color} fill-${color} opacity-75 bg-transparent`,
      tertiary: 'text-slate-600 fill-slate-600 bg-transparent',
    },
    outline: {
      primary: `text-${color} fill-${color} bg-transparent`,
      secondary: `text-${color} fill-${color} bg-transparent`,
      tertiary: 'text-slate-600 fill-slate-600 bg-transparent',
    },
    contain: {
      primary: `text-slate-50 fill-slate-50 bg-${color}`,
      secondary: `text-${color} fill-${color} bg-${color}/5`,
      tertiary: 'text-slate-600 fill-slate-600',
    },
  };
}
function shapes(color: string) {
  return {
    outline: {
      primary: `border border-solid border-${color}`,
      secondary: 'border border-solid border-slate-900/5',
      tertiary: 'border border-solid border-slate-900/5',
    },
  };
}

const transitionConfig = {
  primary: transitions('primary'),
  nature: transitions('slate-800'),
};
const colorConfig = {
  primary: colors('primary'),
  nature: colors('slate-800'),
};
const shapeConfig = {
  primary: shapes('primary'),
  nature: shapes('slate-800'),
};

const BasicButton: OverridableComponent<BasicButtonTypeMap> = (props) => {
  const {
    variant = 'contain',
    importance = 'primary',
    color = 'primary',
    size = 'md',
    disabled = false,
    className,
    children,

    ...rest
  } = props;

  return (
    <Box
      as="button"
      className={classnames(
        colorConfig[color][variant][importance],
        'transition-colors',
        disabled ? 'opacity-40 pointer-events-none' : transitionConfig[color][variant][importance],

        'box-border',
        shapeConfig[color][variant]?.[importance],

        sizeConfig[size],
        'inline-flex flex-row items-center justify-center',
        gapConfig[size],

        'font-semibold truncate',

        className,
      )}
      disabled={disabled}
      {...rest}
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

export default BasicButton;
