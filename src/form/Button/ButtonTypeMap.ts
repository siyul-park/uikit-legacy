import React from 'react';

import { BoxTypeMap } from '@layout/Box';

type ButtonTypeMap<P = {}, D extends React.ElementType = 'button'> = BoxTypeMap<P & {
  variant?: 'text' | 'contain' | 'outline';
  color?: 'primary' | 'secondary' | 'white';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  round?: boolean;
}, D>

export default ButtonTypeMap;
