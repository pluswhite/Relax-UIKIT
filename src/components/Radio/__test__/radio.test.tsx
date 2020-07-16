import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Radio, { RadioProps } from '../radio';

const defaultProps: RadioProps = {
  checked: false,
  children: 'Default',
};

const testProps: RadioProps = {
  className: 'radio-test-class',
  name: 'radio-test-name',
  checked: false,
  onChange: jest.fn(),
};

const disabledProps: RadioProps = {
  checked: true,
  disabled: true,
  onChange: jest.fn(),
};

describe('Radio component test', () => {
  it('should render the default radio correctly', () => {
    const { getByText, getByTestId, container } = render(<Radio {...defaultProps} />);
    const radioElm = getByTestId('test-radio');

    expect(getByText(defaultProps.children as string)).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('dns-radio');
    expect(radioElm).not.toBeChecked();
  });

  it('should render the correct component based on different props', () => {
    const { getByTestId, container } = render(<Radio {...testProps} />);
    const radioElm = getByTestId('test-radio');

    expect(radioElm).toBeInTheDocument();
    expect(container.firstChild).toHaveClass(testProps.className as string);
    expect((radioElm as HTMLInputElement).name).toBe(testProps.name);
    expect(radioElm).not.toBeChecked();

    fireEvent.click(container.querySelector('label') as HTMLLabelElement);
    expect(testProps.onChange).toHaveBeenCalled();
    expect(radioElm).toBeChecked();
  });

  it('should render disabled radio when set radio disabled', () => {
    const { getByTestId } = render(<Radio {...disabledProps} />);
    const radioElm = getByTestId('test-radio');

    expect(radioElm).toBeChecked();

    fireEvent.change(radioElm);
    expect(disabledProps.onChange).not.toHaveBeenCalled();
    expect(radioElm).toBeChecked();
  });
});
