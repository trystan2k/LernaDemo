import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Radio } from '../Radio';

import { ThemeProvider, THEME_1 } from '@lerna-demo/theme';
import { ReactNode } from 'react';

const withTheme = (children: ReactNode) => {
  return render(<ThemeProvider theme={THEME_1}>{children}</ThemeProvider>);
};

describe('Checkbox', () => {
  test('render the radio with label', async () => {
    withTheme(<Radio label="Radio" />);
    expect(screen.getByText('Radio')).toBeInTheDocument();
  });
});
