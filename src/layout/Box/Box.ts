import { createElement, forwardRef } from 'react';

import { OverridableComponent } from '../type';

import BoxTypeMap from './BoxTypeMap';
import BoxProps from './BoxProps';

const Box = forwardRef<unknown, BoxProps>((props, ref) => {
  const {
    as = 'div',
    testId,
    children,
    ...others
  } = props;

  return createElement(as, { 'data-testid': testId, ref, ...others }, children);
}) as OverridableComponent<BoxTypeMap>;

export default Box;
