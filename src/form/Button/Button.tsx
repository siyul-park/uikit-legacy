import React from 'react';
import classnames from 'classnames';

import { Box } from '@layout/index';
import { OverridableComponent } from '@type';

import ButtonProps from './ButtonProps';
import ButtonTypeMap from './ButtonTypeMap';

const sizeConfig: Record<NonNullable<ButtonProps['size']>, string> = {
  xs: 'text-xs px-xs py-xs/2',
  sm: 'text-sm px-sm py-sm/2',
  md: 'text-md px-md py-md/2',
  lg: 'text-lg px-lg py-lg/2',
  xl: 'text-xl px-xl py-xl/2',
};
const colorConfig: Record<NonNullable<ButtonProps['color']>, string> = {
  primary: 'text-neutral-50 bg-primary',
  secondary: 'text-primary bg-secondary',
  white: 'text-neutral-900 bg-white',
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
        round ? 'rounded-full' : 'rounded-md',
        colorConfig[color],
        color === 'white' ? 'border border-solid border-neutral-300' : null,
        className,
      )}
      {...others}
    >
      {children}
    </Box>
  );
};

export default Button;
