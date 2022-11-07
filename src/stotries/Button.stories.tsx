import React from 'react';
import _ from 'lodash';

import Box from '@layout/Box';
import Button from '@form/Button';

export default {
  title: 'form | Button',
  component: Button,
};

export const Playground = (props) => <Button {...props} />;
Playground.args = {
  className: '',
  variant: 'text',
  color: 'white',
  size: 'md',
  children: 'Button Text',
  round: false,
};
Playground.argTypes = {
  variant: { control: 'select', options: ['text', 'contain', 'outline'] },
  color: { control: 'select', options: ['primary', 'secondary', 'white'] },
  size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
};

const Sample = (props) => {
  const { children, ...others } = props;
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

  return (
    <Box className="flex flex-row items-center justify-center gap-5">
      {sizes.map((size) => (
        <Button size={size} {...others}>
          {children}
        </Button>
      ))}
    </Box>
  );
};
Sample.args = _.omit(Playground.args, 'size');
Sample.argTypes = _.omit(Playground.argTypes, 'size');

export const Primary = (props) => <Sample {...props} />;
Primary.args = {
  ...Sample.args,
  color: 'primary',
};
Primary.argTypes = Sample.argTypes;

export const Secondary = (props) => <Sample {...props} />;
Secondary.args = {
  ...Sample.args,
  color: 'secondary',
};
Secondary.argTypes = Sample.argTypes;

export const White = (props) => <Sample {...props} />;
White.args = {
  ...Sample.args,
  color: 'white',
};
White.argTypes = Sample.argTypes;

const Icon = (props) => (
  <Box as="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
  </Box>
);

export const WithLeadingIcon = (props) => {
  const { children, ...others } = props;
  return (
    <Sample {...others}>
      <Icon />
      {children}
    </Sample>
  );
};
WithLeadingIcon.args = {
  ...Sample.args,
  color: 'primary',
};
WithLeadingIcon.argTypes = Sample.argTypes;

export const WithTailingIcon = (props) => {
  const { children, ...others } = props;
  return (
    <Sample {...others}>
      {children}
      <Icon />
    </Sample>
  );
};
WithTailingIcon.args = {
  ...Sample.args,
  color: 'primary',
};
WithTailingIcon.argTypes = Sample.argTypes;
