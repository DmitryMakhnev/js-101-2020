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
      <form onSubmit={this.onSubmit}>
        <input
          placeholder="login"
          value={this.state.login}
          onInput={this.onLoginChange}
        />
        <input
          placeholder="password"
          type="password"
          value={this.state.password}
          onInput={this.onPasswordChange}
        />
        <button type="submit">
          {userModel.isLoginLoading ? 'Loading...' : 'Sign in'}
        </button>

        {userModel.loginError && (
          <div style={{ color: '#f00' }}>
            { userModel.loginError }
          </div>
        )}
      </form>
    );
  }
});
