import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Switcher, { ISwitcherProps } from '../switcher';

const defaultProps: ISwitcherProps = {
  className: 'test-switch',
};

const switchWithNodeProps: ISwitcherProps = {
  className: 'test-switch',
  checkedNode: 'ON',
  uncheckedNode: 'OFF',
};

describe('Switch component test', () => {
  it('should render the default Switch correctly', () => {
    const { container, getByTestId } = render(
      <Switcher data-testid="test-switch" {...defaultProps} />,
    );
    const elm = getByTestId('test-switch');
    const switchText = container.querySelector('.rx-switch__text');
    expect(switchText?.textContent).toBe('');

    expect(elm).toBeInTheDocument();
    expect(elm).not.toBeChecked();

    fireEvent.click(elm);
    expect(elm).toBeChecked();
  });

  it('should render the Switch with checked/unchecked Node correctly', () => {
    const { container, getByTestId } = render(
      <Switcher data-testid="test-switch" {...switchWithNodeProps} />,
    );
    const elm = getByTestId('test-switch');
    const switchText = container.querySelector('.rx-switch__text');

    expect(elm).not.toBeChecked();
    expect(switchText?.textContent).toBe(switchWithNodeProps.uncheckedNode);

    fireEvent.click(elm);
    expect(elm).toBeChecked();
    expect(switchText?.textContent).toBe(switchWithNodeProps.checkedNode);
  });
});
