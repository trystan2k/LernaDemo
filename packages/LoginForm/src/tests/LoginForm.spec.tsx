import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LoginForm } from '../LoginForm';
import userEvent from '@testing-library/user-event';

import { ThemeProvider, THEME_1 } from '@lerna-demo/theme';
import { ReactNode } from 'react';

const withTheme = (children: ReactNode) => {
  return render(<ThemeProvider theme={THEME_1}>{children}</ThemeProvider>);
};

describe('LoginForm', () => {
  test('render the login form component with username and password inputs', async () => {
    withTheme(<LoginForm />);

    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  test('render the login form component with remember me checkbox', async () => {
    withTheme(<LoginForm />);

    expect(screen.getByLabelText('Remember me')).toBeInTheDocument();
  });

  test('render the login form component with login submit button', async () => {
    withTheme(<LoginForm />);

    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
  });

  test('emit event with username, password and remember me options', async () => {
    const onLoginSubmitSpy = jest.fn();
    withTheme(<LoginForm onLoginSubmit={onLoginSubmitSpy} />);

    await userEvent.type(screen.getByLabelText('Username'), 'username');
    await userEvent.type(screen.getByLabelText('Password'), '123456789');
    await userEvent.click(screen.getByLabelText('Remember me'));

    await userEvent.click(screen.getByRole('button', { name: 'Login' }));

    expect(onLoginSubmitSpy).toHaveBeenCalledWith({ username: 'username', password: '123456789', rememberMe: true });
  });
});
