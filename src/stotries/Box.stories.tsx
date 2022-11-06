import React from 'react';

import Box from '@layout/Box';

export default {
  title: 'layout | Box',
  component: Box,
};

export const Playground = (props) => <Box {...props} />;
Playground.args = {
  as: 'div',
  className: 'border border-slate-800 border-dashed w-96 h-96',
};
