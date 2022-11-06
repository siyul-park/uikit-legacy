import React from 'react';

import { DistributiveOmit } from './index';

import OverridableTypeMap from './OverridableTypeMap';
import BaseProps from './BaseProps';

type OverrideProps<
  M extends OverridableTypeMap,
  C extends React.ElementType,
> = BaseProps<M> &
  DistributiveOmit<React.ComponentPropsWithRef<C>, keyof BaseProps<M>>;

export default OverrideProps;
