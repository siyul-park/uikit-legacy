import React from 'react';
import _ from 'lodash';
import { EnvelopeIcon, PlusIcon } from '@heroicons/react/20/solid';

import Box from '@layout/Box';
import Button from '@form/Button';
import CircleButton from '@form/CircleButton';
import { IconButton } from '@form/index';

export default {
  title: 'form | Button',
  component: Button,
};

const groupClass = 'flex flex-row items-center justify-center gap-5 max-w-screen';

export const Playground = (props) => {
  const { children, rounded, ...rest } = props;

  return (
    <Box className={groupClass}>
      <Button rounded={rounded} {...rest}>
        {children}
      </Button>
      <IconButton {...rest}>
        <PlusIcon />
      </IconButton>
    </Box>
  );
};
Playground.args = {
  className: '',
  variant: 'contain',
  color: 'default',
  size: 'md',
  children: 'Button Text',
  rounded: false,
  disabled: false,
};
Playground.argTypes = {
  variant: { control: 'select', options: ['text', 'contain', 'outline'] },
  color: { control: 'select', options: ['primary', 'secondary', 'default'] },
  size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
};

const Sample = (props) => {
  const { children, ...rest } = props;
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

  return (
    <Box className={groupClass}>
      {sizes.map((size) => (
        <Button size={size} {...rest}>
          {children}
        </Button>
      ))}
    </Box>
  );
};
Sample.args = _.omit(Playground.args, 'size');
Sample.argTypes = _.omit(Playground.argTypes, 'size');

export const Primary = Sample;
Primary.args = {
  ...Sample.args,
  color: 'primary',
};
Primary.argTypes = Sample.argTypes;

export const Secondary = Sample;
Secondary.args = {
  ...Sample.args,
  color: 'secondary',
};
Secondary.argTypes = Sample.argTypes;

export const Default = Sample;
Default.args = {
  ...Sample.args,
  color: 'default',
};
Default.argTypes = Sample.argTypes;

export const WithLeadingIcon = (props) => {
  const { children, ...others } = props;
  return Sample({
    children: [
      <EnvelopeIcon />,
      children,
    ],
    ...others,
  });
};
WithLeadingIcon.args = {
  ...Sample.args,
  color: 'primary',
};
WithLeadingIcon.argTypes = Sample.argTypes;

export const WithTailingIcon = (props) => {
  const { children, ...others } = props;
  return Sample({
    children: [
      children,
      <EnvelopeIcon />,
    ],
    ...others,
  });
};
WithTailingIcon.args = {
  ...Sample.args,
  color: 'primary',
};
WithTailingIcon.argTypes = Sample.argTypes;

export const Circle = (props) => {
  const { ...rest } = props;
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

  return (
    <Box className={groupClass}>
      {sizes.map((size) => (
        <CircleButton size={size} {...rest}>
          <PlusIcon />
        </CircleButton>
      ))}
    </Box>
  );
};
Circle.args = _.omit(Playground.args, 'size', 'children', 'rounded');
Circle.argTypes = _.omit(Playground.argTypes, 'size', 'children', 'rounded');

export const Combined = (props) => {
  const {
    children, rounded, size, ...rest
  } = props;
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
  let i = sizes.indexOf(size) - 1;
  if (i < 0) {
    i = 0;
  }

  return (
    <Button size={size} rounded={rounded} {...rest}>
      {children}
      <CircleButton size={sizes[i]} {...rest}>
        <PlusIcon />
      </CircleButton>
    </Button>
  );
};
Combined.args = Playground.args;
Combined.argTypes = Playground.argTypes;
