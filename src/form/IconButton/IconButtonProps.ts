import React from 'react';
import { OverrideProps } from '@type';

import IconButtonTypeMap from './CircleButtonTypeMap';

type IconButtonProps<
  D extends React.ElementType = IconButtonTypeMap['defaultComponent'],
  P = {},
  > = OverrideProps<IconButtonTypeMap<P, D>, D>;

export default IconButtonProps;
