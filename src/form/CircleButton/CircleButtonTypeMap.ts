import React from 'react';

import { BoxTypeMap } from '@layout/Box';

type CircleButtonTypeMap<P = {}, D extends React.ElementType = 'button'> = BoxTypeMap<P & {
  variant?: 'text' | 'contain' | 'outline';
  color?: 'primary' | 'secondary' | 'default';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
}, D>

export default CircleButtonTypeMap;
