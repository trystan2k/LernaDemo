import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Button } from '../Button';
import { ThemeProvider, THEME_1 } from '@lerna-demo/theme';
import { ReactNode } from 'react';

const withTheme = (children: ReactNode) => {
  return render(<ThemeProvider theme={THEME_1}>{children}</ThemeProvider>);
};

describe('Button', () => {
  test('render the button with label', async () => {
    withTheme(<Button label="Button" />);

    await userEvent.click(screen.getByRole('button'));

    expect(screen.getByRole('button')).toHaveTextContent('Button');
  });

  test('render the button with correct informed type', async () => {
    const { container } = withTheme(<Button label="Button" type="submit" />);

    const button = container.querySelector('button[type="submit"]');
    expect(button).toBeInTheDocument();
  });
});
