import { Button } from '@lerna-demo/button';
import { Checkbox } from '@lerna-demo/checkbox';
import { Input } from '@lerna-demo/input';
import { ChangeEvent, useState } from 'react';

export interface LoginUserInfoProps {
  username: string;
  password: string;
  rememberMe?: boolean;
}

export interface LoginFormProps {
  onLoginSubmit?: (loginUserInfo: LoginUserInfoProps) => void;
}

export const LoginForm = ({ onLoginSubmit }: LoginFormProps) => {
  const [username, setUsername] = useState('');
  const onUsernameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const [password, setPassword] = useState('');
  const onPasswordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const [rememberMe, setRememberMe] = useState(false);
  const onRememberMeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setRememberMe(event.target.checked);
  };

  const onLoginHandler = () => {
    onLoginSubmit && onLoginSubmit({ username, password, rememberMe });
  };

  return (
    <>
      <h1>Login</h1>
      <div>
        <Input label="Username" type="text" value={username} onChange={onUsernameChangeHandler} />
        <Input label="Password" type="password" value={password} onChange={onPasswordChangeHandler} />
      </div>
      <div>
        <Checkbox label="Remember me" checked={rememberMe} onChange={onRememberMeChangeHandler} />
      </div>
      <Button label="Login" type="button" onClick={onLoginHandler} />
    </>
  );
};
