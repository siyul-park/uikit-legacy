import React from 'react';
import OverridableTypeMap from './OverridableTypeMap';
import BaseProps from './BaseProps';
import DistributiveOmit from './DistributiveOmit';

type DefaultComponentProps<M extends OverridableTypeMap> =
  & BaseProps<M>
  & DistributiveOmit<React.ComponentPropsWithRef<M['defaultComponent']>, keyof BaseProps<M>>;

export default DefaultComponentProps;
