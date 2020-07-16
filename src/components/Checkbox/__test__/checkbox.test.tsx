import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkbox, { CheckboxProps } from '../checkbox';

const defaultProps: CheckboxProps = {
  checked: false,
  children: 'Default',
};

const testProps: CheckboxProps = {
  className: 'checkbox-test-class',
  name: 'checkbox-test-name',
  checked: true,
  onChange: jest.fn(),
};

const disabledProps: CheckboxProps = {
  checked: true,
  disabled: true,
  onChange: jest.fn(),
};

describe('Checkbox component test', () => {
  it('should render the default checkbox correctly', () => {
    const { getByText, getByTestId, container } = render(<Checkbox {...defaultProps} />);
    const checkboxElm = getByTestId('test-checkbox');

    expect(getByText(defaultProps.children as string)).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('dns-checkbox');
    expect(checkboxElm).not.toBeChecked();
  });

  it('should render the correct component based on different props', () => {
    const { getByTestId, container } = render(<Checkbox {...testProps} />);
    const checkboxElm = getByTestId('test-checkbox');

    expect(checkboxElm).toBeInTheDocument();
    expect(container.firstChild).toHaveClass(testProps.className as string);
    expect((checkboxElm as HTMLInputElement).name).toBe(testProps.name);
    expect(checkboxElm).toBeChecked();

    fireEvent.click(container.querySelector('label') as HTMLLabelElement);
    expect(testProps.onChange).toHaveBeenCalled();
    expect(checkboxElm).not.toBeChecked();
  });

  it('should render disabled checkbox when set checkbox disabled', () => {
    const { getByTestId } = render(<Checkbox {...disabledProps} />);
    const checkboxElm = getByTestId('test-checkbox');

    expect(checkboxElm).toBeChecked();

    fireEvent.change(checkboxElm);
    expect(disabledProps.onChange).not.toHaveBeenCalled();
    expect(checkboxElm).toBeChecked();
  });
});
