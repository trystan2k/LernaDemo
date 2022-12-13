import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Input } from '../Input';

describe('Input', () => {
  test('render the input with label', async () => {
    render(<Input label="Input" />);
    expect(screen.getByText('Input')).toBeInTheDocument();
  });

  test('render the button with correct informed type', async () => {
    const { container } = render(<Input label="Button" type="number" />);

    const button = container.querySelector('input[type="number"]');
    expect(button).toBeInTheDocument();
  });
});
