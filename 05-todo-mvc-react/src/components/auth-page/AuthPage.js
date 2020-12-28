import React from 'react';
import { observer } from 'mobx-react';

export const AuthPage = observer(class extends React.Component {
  state = {
    login: '',
    password: ''
  };

  onSubmit = e => {
    e.preventDefault();

    /**
     * @type {UserController}
     */
    const userController = this.props.userController;
    userController.authorize(
      this.state.login,
      this.state.password
    );
    // this.setState({
    //   login: '',
    //   password: ''
    // });
  }

  onLoginChange = e => {
    const newLogin = e.target.value;
    this.setState({
      login: newLogin,
    });
  }

  onPasswordChange = e => {
    const newPassword = e.target.value;
    this.setState({
      password: newPassword,
    });
  }

  render() {
    const {
      /**
       * @type {UserModel}
       */
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
