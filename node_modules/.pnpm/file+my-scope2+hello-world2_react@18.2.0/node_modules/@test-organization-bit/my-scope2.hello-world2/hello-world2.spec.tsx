import React from 'react';
import { render } from '@testing-library/react';
import { BasicHelloWorld2 } from './hello-world2.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicHelloWorld2 />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
