import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Counter } from '../Counter';

import { ThemeProvider, THEME_1 } from '@lerna-demo/theme';
import { ReactNode } from 'react';

const withTheme = (children: ReactNode) => {
  return render(<ThemeProvider theme={THEME_1}>{children}</ThemeProvider>);
};

describe('Counter', () => {
  test('render the counter component with increment and decrement buttons', async () => {
    withTheme(<Counter />);

    expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '-' })).toBeInTheDocument();
  });

  test('render the counter component with default initial counter value', async () => {
    withTheme(<Counter />);

    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('render the counter component with given initial counter value', async () => {
    withTheme(<Counter initialCount={10} />);

    expect(screen.getByText('10')).toBeInTheDocument();
  });

  test('increment the counter component', async () => {
    withTheme(<Counter />);

    expect(screen.getByText('0')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: '+' }));
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('decrement the counter component', async () => {
    withTheme(<Counter />);

    expect(screen.getByText('0')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: '-' }));
    expect(screen.getByText('-1')).toBeInTheDocument();
  });
});
