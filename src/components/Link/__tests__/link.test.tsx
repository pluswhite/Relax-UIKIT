import React from 'react';
import { render } from '@testing-library/react';
import Link, { ILinkProps } from '../link';

const defaultProps: ILinkProps = {
  children: 'Default',
};

const disabledProps: ILinkProps = {
  disabled: true,
  children: 'Disabled',
};

const testProps: ILinkProps = {
  type: 'primary',
  underline: true,
  children: 'Primary',
};

describe('Link component test', () => {
  it('should render the default link correctly', () => {
    const { getByText, getByTestId } = render(<Link data-testid="test-link" {...defaultProps} />);
    const linkEle = getByTestId('test-link');

    expect(getByText(defaultProps.children as string)).toBeInTheDocument();
    expect(linkEle).toHaveClass('rx-link');
  });

  it('should render a primary link with underline correct{ly', () => {
    const { getByText, getByTestId } = render(<Link data-testid="test-link" {...testProps} />);
    const linkEle = getByTestId('test-link');

    expect(getByText(testProps.children as string)).toBeInTheDocument();
    expect(linkEle).toHaveClass(`rx-link--${testProps.type} is-underline`);
  });

  it('should render disabled link when set link disabled', () => {
    const { getByText, getByTestId } = render(<Link data-testid="test-link" {...disabledProps} />);
    const linkEle = getByTestId('test-link');

    expect(getByText(disabledProps.children as string)).toBeInTheDocument();
    expect(linkEle).toHaveClass('rx-link is-disabled');
  });
});
