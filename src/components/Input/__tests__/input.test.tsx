import React from 'react';
import { render } from '@testing-library/react';
import Input, { InputProps } from '../input';

const defaultProps: InputProps = {
  className: 'test-input',
};
describe('Input component test', () => {
  it('should render the default input correctly', () => {
    const { container } = render(<Input {...defaultProps} />);

    expect(container.firstChild).toHaveClass(defaultProps.className as string);
  });
});
