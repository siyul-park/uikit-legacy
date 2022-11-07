import React from 'react';
import classnames from 'classnames';

import { OverridableComponent } from '@type';
import BasicButton from '@form/BasicButton';

import IconButtonProps from './IconButtonProps';
import IconButtonTypeMap from './IconButtonTypeMap';
import BasicButtonProps from '../BasicButton/BasicButtonProps';
import ButtonProps from '../Button/ButtonProps';

const sizeConfig: Record<NonNullable<BasicButtonProps['size']>, string> = {
  xs: 'max-w-5',
  sm: 'max-w-7',
  md: 'max-w-9',
  lg: 'max-w-11',
  xl: 'max-w-14',
};
const paddingConfig: Record<NonNullable<IconButtonProps['size']>, string> = {
  xs: 'p-0.5',
  sm: 'p-1',
  md: 'p-1.5',
  lg: 'p-2',
  xl: 'p-3.5',
};
const roundConfig: Record<NonNullable<ButtonProps['size']>, string> = {
  xs: 'rounded-md',
  sm: 'rounded-md',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
};

const IconButton: OverridableComponent<IconButtonTypeMap> = (props) => {
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
        sizeConfig[size],
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

export default IconButton;
