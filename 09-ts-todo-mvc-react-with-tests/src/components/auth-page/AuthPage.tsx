import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { UserController } from '../../controllers/user.controller';
import { UserModel } from '../../data-model/user-model';

export const AuthPage = observer((props:
  {
    userController: UserController,
    userModel: UserModel
  }
) => {
  const [state, setState] = useState({
    login: '',
    password: ''
  });

  const onLoginChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newLogin = (e.target as HTMLInputElement).value;
    setState({
      ...state,
      login: newLogin,
    });
  }

  const onPasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newPassword = (e.target as HTMLInputElement).value;
    setState({
      ...state,
      password: newPassword,
    });
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const userController = props.userController;
    userController.authorize(
      state.login,
      state.password
    );
  }

  const {
    userModel
  } = props;

  return (
    <div className="auth-page" data-test-id="auth-page">
      <form onSubmit={onSubmit} data-test-id="auth-form">
        <input
          placeholder="login"
          value={state.login}
          onInput={onLoginChange}
          data-test-id="auth-form__login-input"
        />
        <input
          placeholder="password"
          type="password"
          value={state.password}
          onInput={onPasswordChange}
          data-test-id="auth-form__password-input"
        />
        <button type="submit" data-test-id="auth-form__submit">
          {userModel.isLoginLoading ? 'Loading...' : 'Sign in'}
        </button>

        {userModel.loginError && (
          <div
            style={{ color: '#f00' }}
            data-test-id="auth-form__error"
            data-test-error-name={userModel.loginError.name}
          >
            { userModel.loginError.message }
          </div>
        )}
      </form>
    </div>
  );
});
