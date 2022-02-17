import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Button, { ButtonTypes } from './Button';

describe('Button component', () => {
  it('renders without crashing', () => {
    render(
      <Button
        type={ButtonTypes.APPROVE}
        disabled={false}
        onClick={() => {}}
      ></Button>
    );
  });

  it('renders the correct icon for the approve button', () => {
    const { container } = render(
      <Button
        type={ButtonTypes.APPROVE}
        disabled={false}
        onClick={() => {}}
      ></Button>
    );

    const approveIcon = container.querySelector('.approve-icon');
    const denyIcon = container.querySelector('.deny-icon');
    expect(approveIcon).toBeInTheDocument();
    expect(denyIcon).not.toBeInTheDocument();
  });

  it('renders the correct icon for the deny button', () => {
    const { container } = render(
      <Button
        type={ButtonTypes.DENY}
        disabled={false}
        onClick={() => {}}
      ></Button>
    );

    const approveIcon = container.querySelector('.approve-icon');
    const denyIcon = container.querySelector('.deny-icon');
    expect(denyIcon).toBeInTheDocument();
    expect(approveIcon).not.toBeInTheDocument();
  });

  it('renders the button disabled', () => {
    const { container } = render(
      <Button
        type={ButtonTypes.APPROVE}
        disabled={true}
        onClick={() => {}}
      ></Button>
    );

    const approveBtn = container.querySelector('a');
    expect(approveBtn).toHaveAttribute('disabled');
  });
});
