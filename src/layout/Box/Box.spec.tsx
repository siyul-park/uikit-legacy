import React from 'react';
import { render } from '@testing-library/react';
import { faker } from '@faker-js/faker';

import Box from './Box';

let boxTestId: string;
beforeEach(() => {
  boxTestId = faker.datatype.uuid();
});

it('should tag is div when default render', () => {
  const { getByTestId } = render(<Box testId={boxTestId} />);
  const box = getByTestId(boxTestId);

  expect(box.tagName).toEqual('DIV');
});

it('should tag is changed when use as props', () => {
  const { getByTestId } = render(<Box testId={boxTestId} as="a" />);
  const box = getByTestId(boxTestId);

  expect(box.tagName).toEqual('A');
});

it('should children is rendered when children is string', () => {
  const children = faker.datatype.uuid();
  const { getByTestId } = render(<Box testId={boxTestId}>{children}</Box>);
  const box = getByTestId(boxTestId);

  expect(box.tagName).toEqual('DIV');
  expect(box).toHaveTextContent(children);
});

it('should children is rendered when children is element', () => {
  const children = <Box />;
  const { getByTestId } = render(<Box testId={boxTestId}>{children}</Box>);
  const box = getByTestId(boxTestId);

  expect(box.tagName).toEqual('DIV');
  expect(box.children.length).toEqual(1);
});

it('should className is applied when className is exit', () => {
  const className = 'color: blue;';
  const { getByTestId } = render(<Box testId={boxTestId} className={className} />);
  const box = getByTestId(boxTestId);

  expect(box.tagName).toEqual('DIV');
  expect(box.className).toEqual(className);
});
