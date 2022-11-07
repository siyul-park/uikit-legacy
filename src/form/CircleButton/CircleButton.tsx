import React from 'react';
import classnames from 'classnames';

import { OverridableComponent } from '@type';
import BasicButton from '@form/BasicButton';

import CircleButtonProps from './CircleButtonProps';
import CircleButtonTypeMap from './CircleButtonTypeMap';

const paddingConfig: Record<NonNullable<CircleButtonProps['size']>, string> = {
  xs: 'px-0.5 py-0.5',
  sm: 'px-1 py-1',
  md: 'px-1.5 py-1.5',
  lg: 'px-2 py-2',
  xl: 'px-3.5 py-3.5',
};

const CircleButton: OverridableComponent<CircleButtonTypeMap> = (props) => {
  const {
    className, size, children, ...rest
  } = props;

  return (
    <BasicButton
      as="button"
      className={classnames(
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
