import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Counter } from '../Counter';

describe('Counter', () => {
  test('render the counter component with increment and decrement buttons', async () => {
    render(<Counter />);

    expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '-' })).toBeInTheDocument();
  });

  test('render the counter component with default initial counter value', async () => {
    render(<Counter />);

    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('render the counter component with given initial counter value', async () => {
    render(<Counter initialCount={10} />);

    expect(screen.getByText('10')).toBeInTheDocument();
  });

  test('increment the counter component', async () => {
    render(<Counter />);

    expect(screen.getByText('0')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: '+' }));
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('decrement the counter component', async () => {
    render(<Counter />);

    expect(screen.getByText('0')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: '-' }));
    expect(screen.getByText('-1')).toBeInTheDocument();
  });
});
