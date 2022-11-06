import React from 'react';

import { OverrideProps } from '../type';

import BoxTypeMap from './BoxTypeMap';

type BoxProps<
  D extends React.ElementType = BoxTypeMap['defaultComponent'],
  P = {},
  > = OverrideProps<BoxTypeMap<P, D>, D>;

export default BoxProps;
