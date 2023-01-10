import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Input } from '../Input';

import { ThemeProvider, THEME_1 } from '@lerna-demo/theme';
import { ReactNode } from 'react';

const withTheme = (children: ReactNode) => {
  return render(<ThemeProvider theme={THEME_1}>{children}</ThemeProvider>);
};

describe('Input', () => {
  test('render the input with label', async () => {
    withTheme(<Input label="Input" />);
    expect(screen.getByText('Input')).toBeInTheDocument();
  });

  test('render the button with correct informed type', async () => {
    const { container } = withTheme(<Input label="Button" type="number" />);

    const button = container.querySelector('input[type="number"]');
    expect(button).toBeInTheDocument();
  });
});
