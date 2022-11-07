import React from 'react';

import { BoxTypeMap } from '@layout/Box';

type IconButtonTypeMap<P = {}, D extends React.ElementType = 'button'> = BoxTypeMap<P & {
  variant?: 'text' | 'contain' | 'outline';
  importance?: 'primary' | 'secondary' | 'tertiary';
  color?: 'primary' | 'nature';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  rounded?: boolean;
  disabled?: boolean;
}, D>

export default IconButtonTypeMap;
