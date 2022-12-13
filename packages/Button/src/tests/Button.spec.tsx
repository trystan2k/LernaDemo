import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Button } from '../Button';

describe('Button', () => {
  test('render the button with label', async () => {
    render(<Button label="Button" />);

    await userEvent.click(screen.getByRole('button'));

    expect(screen.getByRole('button')).toHaveTextContent('Button');
  });

  test('render the button with correct informed type', async () => {
    const { container } = render(<Button label="Button" type="submit" />);

    const button = container.querySelector('button[type="submit"]');
    expect(button).toBeInTheDocument();
  });
});
