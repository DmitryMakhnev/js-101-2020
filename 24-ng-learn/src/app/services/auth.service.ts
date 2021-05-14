import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

type UserDataModel = {
  id: string;
  login: string;
}

@Injectable()
export class AuthService {

  user: UserDataModel|null = null;

  constructor(
    private http: HttpClient,
  ) {}

  private authCheckPromise: Promise<boolean>|null = null;

  checkAuth(): Promise<boolean> {
    if (this.user) {
      return Promise.resolve(true);
    }
    if (!this.authCheckPromise) {
      this.authCheckPromise = this.http.get('/api/user')
        .toPromise()
        .then(
          user => {
            this.user = user as UserDataModel;
            return true;
          },
          () => false
        );
    }

    return this.authCheckPromise;
  }

  tryLogin(
    login: string,
    password: string
  ): Promise<UserDataModel> {
    return this.http
      .post('/api/auth/login', { login, password })
      .toPromise()
      .then(
        user => {
          this.user = user as UserDataModel;
          return this.user;
        }
      );
  }

  logout(): Promise<void> {
    return this.http
      .post('/api/auth/logout', {})
      .toPromise()
      .then(() => {
        this.user = null;
      });
  }

}
