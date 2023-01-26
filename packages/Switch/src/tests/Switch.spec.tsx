import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { Switch } from '../Switch';
import { ThemeProvider, THEME_1 } from '@lerna-demo/theme';
import { ReactNode } from 'react';

const withTheme = (children: ReactNode) => {
  return render(<ThemeProvider theme={THEME_1}>{children}</ThemeProvider>);
};

describe('Switch', () => {
  test('render the Switch', async () => {
    withTheme(<Switch label="Esto es un switch" name="switch" id="switch" defaultChecked={true} />);
    expect(screen.getByText('Esto es un switch')).toBeInTheDocument();
  });
  test('render the Switch no checked', async () => {
    withTheme(
      <Switch label="Esto es un switch" name="switch" id="switch" defaultChecked={true} dataTestId={'switch'} />,
    );
    await userEvent.click(screen.getByRole('checkbox'));

    expect(screen.getByTestId('switch')).not.toBeChecked(); //toHaveTextContent('Switch');
  });
});
