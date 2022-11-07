import React from 'react';
import classnames from 'classnames';

import { OverridableComponent } from '@type';
import BasicButton from '@form/BasicButton';

import CircleButtonProps from './CircleButtonProps';
import CircleButtonTypeMap from './CircleButtonTypeMap';
import BasicButtonProps from '../BasicButton/BasicButtonProps';

const sizeConfig: Record<NonNullable<BasicButtonProps['size']>, string> = {
  xs: 'max-w-5',
  sm: 'max-w-7',
  md: 'max-w-9',
  lg: 'max-w-11',
  xl: 'max-w-14',
};
const paddingConfig: Record<NonNullable<CircleButtonProps['size']>, string> = {
  xs: 'p-0.5',
  sm: 'p-1',
  md: 'p-1.5',
  lg: 'p-2',
  xl: 'p-3.5',
};

const CircleButton: OverridableComponent<CircleButtonTypeMap> = (props) => {
  const {
    className, size, children, ...rest
  } = props;

  return (
    <BasicButton
      as="button"
      className={classnames(
        sizeConfig[size],
        paddingConfig[size],
        'rounded-circle',
        className,
      )}
      size={size}
      {...rest}
    >
      {children}
    </BasicButton>
  );
};

export default CircleButton;
