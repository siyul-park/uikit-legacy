import React from 'react';
import { OverrideProps } from '@type';

import ButtonTypeMap from './ButtonTypeMap';

type ButtonProps<
  D extends React.ElementType = ButtonTypeMap['defaultComponent'],
  P = {},
  > = OverrideProps<ButtonTypeMap<P, D>, D>;

export default ButtonProps;
