import React from 'react';
import _ from 'lodash';
import { EnvelopeIcon, PlusIcon } from '@heroicons/react/20/solid';

import Box from '@layout/Box';
import Button from '@form/Button';
import IconButton from '@form/IconButton';

export default {
  title: 'form | Button',
  component: Button,
};

const groupClass = 'flex flex-row items-center justify-center gap-5';

export const Playground = (props) => {
  const { children, ...rest } = props;

  return (
    <Box className={groupClass}>
      <Button {...rest}>
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
  color: 'primary',
  importance: 'primary',
  size: 'md',
  children: 'Button Text',
  rounded: false,
  disabled: false,
};
Playground.argTypes = {
  variant: { control: 'select', options: ['text', 'contain', 'outline'] },
  importance: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
  color: { control: 'select', options: ['primary', 'nature'] },
  size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
};

const Sample = (props) => {
  const { children, ...rest } = props;
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

  return (
    <Box className="flex flex-col items-center justify-center gap-5">
      <Box className={groupClass}>
        {sizes.map((size) => (
          <Button size={size} importance="primary" {...rest}>
            {children}
          </Button>
        ))}
      </Box>
      <Box className={groupClass}>
        {sizes.map((size) => (
          <Button size={size} importance="secondary" {...rest}>
            {children}
          </Button>
        ))}
      </Box>
      <Box className={groupClass}>
        {sizes.map((size) => (
          <Button size={size} importance="tertiary" {...rest}>
            {children}
          </Button>
        ))}
      </Box>
    </Box>
  );
};
Sample.args = _.omit(Playground.args, 'size', 'importance');
Sample.argTypes = _.omit(Playground.argTypes, 'size', 'importance');

export const Primary = Sample.bind({});
Primary.args = {
  ...Sample.args,
  color: 'primary',
};
Primary.argTypes = Sample.argTypes;

export const Nature = Sample.bind({});
Nature.args = {
  ...Sample.args,
  color: 'nature',
};
Nature.argTypes = Sample.argTypes;

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
WithLeadingIcon.args = Sample.args;
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
WithTailingIcon.args = Sample.args;
WithTailingIcon.argTypes = Sample.argTypes;

export const Icon = (props) => {
  const { ...rest } = props;
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

  return (
    <Box className={groupClass}>
      {sizes.map((size) => (
        <IconButton size={size} {...rest}>
          <PlusIcon />
        </IconButton>
      ))}
    </Box>
  );
};
Icon.args = _.omit(Playground.args, 'size', 'children');
Icon.argTypes = _.omit(Playground.argTypes, 'size', 'children');

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
      <IconButton size={sizes[i]} {...rest}>
        <PlusIcon />
      </IconButton>
    </Button>
  );
};
Combined.args = Playground.args;
Combined.argTypes = Playground.argTypes;
