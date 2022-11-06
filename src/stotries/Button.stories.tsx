import React from 'react';

import Box from '@layout/Box';
import Button from '@form/Button';

export default {
  title: 'form | Button',
  component: Button,
};

export const Primary = () => (
  <Box className="space-x-md">
    <Button color="primary" size="xs">
      Button Text
    </Button>
    <Button color="primary" size="sm">
      Button Text
    </Button>
    <Button color="primary" size="md">
      Button Text
    </Button>
    <Button color="primary" size="lg">
      Button Text
    </Button>
    <Button color="primary" size="xl">
      Button Text
    </Button>
  </Box>
);

export const Secondary = () => (
  <Box className="space-x-md">
    <Button color="secondary" size="xs">
      Button Text
    </Button>
    <Button color="secondary" size="sm">
      Button Text
    </Button>
    <Button color="secondary" size="md">
      Button Text
    </Button>
    <Button color="secondary" size="lg">
      Button Text
    </Button>
    <Button color="secondary" size="xl">
      Button Text
    </Button>
  </Box>
);

export const White = () => (
  <Box className="space-x-md">
    <Button color="white" size="xs">
      Button Text
    </Button>
    <Button color="white" size="sm">
      Button Text
    </Button>
    <Button color="white" size="md">
      Button Text
    </Button>
    <Button color="white" size="lg">
      Button Text
    </Button>
    <Button color="white" size="xl">
      Button Text
    </Button>
  </Box>
);
