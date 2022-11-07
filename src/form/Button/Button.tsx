import React from 'react';
import classnames from 'classnames';

import { OverridableComponent } from '@type';
import BasicButton from '@form/BasicButton';

import ButtonProps from './ButtonProps';
import ButtonTypeMap from './ButtonTypeMap';

const paddingConfig: Record<NonNullable<ButtonProps['size']>, string> = {
  xs: 'px-1 py-0.5',
  sm: 'px-2 py-1',
  md: 'px-3 py-1.5',
  lg: 'px-4 py-2',
  xl: 'px-7 py-3.5',
};
const roundConfig: Record<NonNullable<ButtonProps['size']>, string> = {
  xs: 'rounded-md',
  sm: 'rounded-md',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
};

const Button: OverridableComponent<ButtonTypeMap> = (props) => {
  const {
    className,
    size = 'md',
    rounded = false,
    children,
    ...rest
  } = props;

  return (
    <BasicButton
      as="button"
      className={classnames(
        paddingConfig[size],
        rounded ? 'rounded-full' : roundConfig[size],
        className,
      )}
      size={size}
      {...rest}
    >
      {children}
    </BasicButton>
  );
};

export default Button;
