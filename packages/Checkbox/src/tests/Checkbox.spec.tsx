import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Checkbox } from '../Checkbox';

import { ThemeProvider, THEME_1 } from '@lerna-demo/theme';
import { ReactNode } from 'react';

const withTheme = (children: ReactNode) => {
  return render(<ThemeProvider theme={THEME_1}>{children}</ThemeProvider>);
};

describe('Checkbox', () => {
  test('render the checkbox with label', async () => {
    withTheme(<Checkbox label="Checkbox" />);
    expect(screen.getByText('Checkbox')).toBeInTheDocument();
  });
});
