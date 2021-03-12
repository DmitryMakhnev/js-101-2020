import React from 'react';
import { observer } from 'mobx-react';
import { UserController } from '../../controllers/user.controller';
import { UserModel } from '../../data-model/user-model';

export const AuthPage = observer(class extends React.Component<
  {
    userController: UserController,
    userModel: UserModel
  },
  {
    login: string,
    password: string
  }
> {

  state = {
    login: '',
    password: ''
  };

  onLoginChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newLogin = (e.target as HTMLInputElement).value;
    this.setState({
      login: newLogin,
    });
  }

  onPasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newPassword = (e.target as HTMLInputElement).value;
    this.setState({
      password: newPassword,
    });
  }

  onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const userController = this.props.userController;
    userController.authorize(
      this.state.login,
      this.state.password
    );
  }

  render() {
    const {
      userModel
    } = this.props;

    return (
      <div className="auth-page" data-test-id="auth-page">
        <form onSubmit={this.onSubmit} data-test-id="auth-form">
          <input
            placeholder="login"
            value={this.state.login}
            onInput={this.onLoginChange}
            data-test-id="auth-form__login-input"
          />
          <input
            placeholder="password"
            type="password"
            value={this.state.password}
            onInput={this.onPasswordChange}
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
  }
});
