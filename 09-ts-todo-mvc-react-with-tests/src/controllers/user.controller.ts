import { UserDataModel, UserModel } from '../data-model/user-model';
import { INCORRECT_LOGIN_OR_PASSWORD_ERROR_NAME } from '../consts/errors/names';

class IncorrectLoginOrPasswordError extends Error {
  name = INCORRECT_LOGIN_OR_PASSWORD_ERROR_NAME;
}

export class UserController {
  constructor(
    private userModel: UserModel
  ) {}

  checkAuthorization(): Promise<void> {
    this.userModel.isLoading = true;

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
            return response.json() as unknown as UserDataModel;
          } else {
            throw new Error('Unauthorized');
          }
        }
      )
      .then(
        userDataModel => {
          this.userModel.dataModel = userDataModel;
          this.userModel.isAuthorized = true;
        }
      )
      .catch((e: Error) => {
        this.userModel.error = e.message;
      })
      .finally(() => {
        this.userModel.isLoading = false;
      });
  }

  authorize(
    login: string,
    password: string
  ): Promise<void> {
    this.userModel.isLoginLoading = true;

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
            return response.json() as unknown as UserDataModel;
          } else {
            throw new IncorrectLoginOrPasswordError('Incorrect login or password');
          }
        }
      )
      .then(
        userDataModel => {
          this.userModel.dataModel = userDataModel;
          this.userModel.isAuthorized = true;
        }
      )
      .catch(e => {
        this.userModel.loginError = e;
      })
      .finally(() => {
        this.userModel.isLoginLoading = false;
      });
  }

  logout(): Promise<void> {
    return fetch(
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
