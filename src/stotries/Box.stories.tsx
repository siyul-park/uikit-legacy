import React from 'react';

import Box from '@layout/Box';

export default {
  title: 'system | Box',
  component: Box,
};

export const BoxCSS = (props) => <Box {...props} />;

BoxCSS.args = {
  as: 'div',
  className: 'bg-black w-96 h-96',
};
