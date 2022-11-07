import React from 'react';
import { OverrideProps } from '@type';

import BasicButtonTypeMap from './ButtonTypeMap';

type BasicButtonProps<
  D extends React.ElementType = BasicButtonTypeMap['defaultComponent'],
  P = {},
  > = OverrideProps<BasicButtonTypeMap<P, D>, D>;

export default BasicButtonProps;
