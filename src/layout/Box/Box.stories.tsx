import React from 'react';

import Box from './Box';

export default {
  title: 'layout | Box',
  component: Box,
};

export const Style = (props) => <Box {...props} />;

Style.args = {
  as: 'div',
  className: 'border border-slate-800 border-dashed w-96 h-96',
};
