
export class UserController {
  /**
   * @param {UserModel} userModel
   */
  constructor(userModel) {
    this._userModel = userModel;
  }

  checkAuthorization() {
    this._userModel.isLoading = true;

    return fetch(
      'http://localhost:3012/user',
      {
        mode: 'cors',
        credentials: 'include'
      }
    )
      .then(
        response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Unauthorized');
          }
        }
      )
      .then(
        userDataModel => {
          this._userModel.dataModel = userDataModel;
          this._userModel.isAuthorized = true;
        }
      )
      .catch(e => {
        this._userModel.error = e.message;
      })
      .finally(() => {
        this._userModel.isLoading = false;
      });
  }

  authorize(login, password) {
    this._userModel.isLoginLoading = true;

    return fetch(
      'http://localhost:3012/auth/login',
      {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          login,
          password
        })
      }
    )
      .then(
        response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Incorrect login or password');
          }
        }
      )
      .then(
        userDataModel => {
          this._userModel.dataModel = userDataModel;
          this._userModel.isAuthorized = true;
        }
      )
      .catch(e => {
        this._userModel.loginError = e.message;
      })
      .finally(() => {
        this._userModel.isLoginLoading = false;
      });
  }

  logout() {
    fetch(
      'http://localhost:3012/auth/logout',
      {
        method: 'POST',
        mode: 'cors',
        credentials: 'include'
      }
    ).then(() => {
      window.location.reload();
    });
  }
}
