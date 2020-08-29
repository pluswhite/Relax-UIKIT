import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Alert, { IAlertProps } from '../alert';

const defaultProps: IAlertProps = {
  type: 'success',
  message: 'Alert title',
  description: 'description message',
};

const closeableProps: IAlertProps = {
  type: 'info',
  message: 'Alert title',
  closable: true,
  onClose: jest.fn(),
};

const iconProps: IAlertProps = {
  type: 'warning',
  message: 'Alert title',
  showIcon: true,
  description: 'description message',
};

describe('Alert component test', () => {
  it('should render the default Alert correctly', () => {
    const { getByTestId, getByText } = render(<Alert data-testid="test-alert" {...defaultProps} />);
    const elm = getByTestId('test-alert');

    expect(getByText(defaultProps.message as string)).toBeInTheDocument();
    expect(getByText(defaultProps.description as string)).toBeInTheDocument();
    expect(elm).toHaveClass('rx-alert rx-alert--success');
  });

  it('should render a closable Alert correctly', () => {
    const { getByTestId } = render(<Alert data-testid="test-alert" {...closeableProps} />);
    const elm = getByTestId('test-alert');
    const closeBtn = elm.querySelector('.rx-alert__close-icon') as Element;

    expect(closeBtn).not.toBeNull();

    fireEvent.click(closeBtn);

    expect(closeableProps.onClose).toHaveBeenCalled();
    expect(elm).toHaveClass('is-hide');
  });

  it('should render a Alert with Icon correctly', () => {
    const { getByTestId } = render(<Alert data-testid="test-alert" {...iconProps} />);
    const elm = getByTestId('test-alert');
    const alertTypeIcon = elm.querySelector('.rx-alert__icon') as Element;

    expect(alertTypeIcon).not.toBeNull();
    expect(alertTypeIcon).toHaveClass('rx-alert__icon--warning is-big');
  });
});
