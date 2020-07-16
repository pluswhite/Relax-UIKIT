import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button, { ButtonProps } from '../button';

const defaultProps = {
  onClick: jest.fn(),
};

const testProps: ButtonProps = {
  btnType: 'primary',
  size: 'lg',
  className: 'test-btn',
};

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
};

describe('Button component test', () => {
  it('should render the default button correctly', () => {
    const wrapper = render(<Button {...defaultProps}>Default</Button>);
    const elm = wrapper.getByText('Default');

    expect(elm).toBeInTheDocument();
    expect(elm.tagName).toEqual('BUTTON');
    expect(elm).toHaveClass('dns-button dns-button--default');

    fireEvent.click(elm);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it('should render the correct button based on different props', () => {
    const wrapper = render(<Button {...testProps}>Button</Button>);
    const elm = wrapper.getByText('Button');

    expect(elm).toBeInTheDocument();
    expect(elm).toHaveClass('dns-button dns-button--primary dns-button--lg test-btn');
  });

  it('should render disabled button correctly when disabled prop set to be true', () => {
    const wrapper = render(<Button {...disabledProps}>Disabled</Button>);
    const elm = wrapper.getByText('Disabled') as HTMLButtonElement;

    expect(elm).toBeInTheDocument();
    expect(elm).toHaveClass('dns-button dns-button--default');
    expect(elm).toHaveProperty('disabled');
    expect(elm.disabled).toBeTruthy();

    fireEvent.click(elm);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
