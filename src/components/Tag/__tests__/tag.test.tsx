import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Tag, { ITagProps } from '../tag';

const defaultProps: ITagProps = {
  children: 'Default',
};

const tagWithCloseBtnProps: ITagProps = {
  color: 'primary',
  children: 'Primary',
  closable: true,
  onClose: jest.fn(),
};

const tagWithCustomColorProps: ITagProps = {
  color: '#6209f1',
  children: '#6209f1',
};

describe('Tag component test', () => {
  it('should render the default Tag correctly', () => {
    const { getByTestId } = render(<Tag data-testid="test-tag" {...defaultProps} />);
    const tag = getByTestId('test-tag');

    expect(tag).toBeInTheDocument();
    expect(tag.textContent).toBe(defaultProps.children);
    expect(tag).toHaveClass('rx-tag rx-tag--default');
  });
  it('should render the a Tag with close button correctly', () => {
    const { getByTestId } = render(<Tag data-testid="test-tag" {...tagWithCloseBtnProps} />);
    const tag = getByTestId('test-tag');

    expect(tag.textContent).toBe(tagWithCloseBtnProps.children);
    expect(tag).toHaveClass('rx-tag rx-tag--primary');

    const closeBtn = tag.querySelector('.rx-tag__close');
    expect(closeBtn).not.toBeNull();

    fireEvent.click(closeBtn as Element);
    expect(tagWithCloseBtnProps.onClose).toBeCalled();
  });

  it('should render the a Tag with custom color correctly', () => {
    const { getByTestId } = render(<Tag data-testid="test-tag" {...tagWithCustomColorProps} />);
    const tag = getByTestId('test-tag');

    expect(tag.textContent).toBe(tagWithCustomColorProps.children);

    // Issue: react convert HEX to RGB, need to spike the reason.
    expect(tag.style.backgroundColor).toBe('rgb(98, 9, 241)');
  });
});
