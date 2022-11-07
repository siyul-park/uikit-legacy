import React from 'react';
import { OverrideProps } from '@type';

import CircleButtonTypeMap from './CircleButtonTypeMap';

type CircleButtonProps<
  D extends React.ElementType = CircleButtonTypeMap['defaultComponent'],
  P = {},
  > = OverrideProps<CircleButtonTypeMap<P, D>, D>;

export default CircleButtonProps;
