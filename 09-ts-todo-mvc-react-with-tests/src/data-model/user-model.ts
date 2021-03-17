import { makeObservable, observable } from 'mobx';

export type UserDataModel = {
  id: string;
  login: string;
};

export class UserModel {

  isLoading: boolean = false;
  error: string|null = null;

  isAuthorized: boolean = false;
  dataModel: UserDataModel|null = null;

  isLoginLoading: boolean = false;
  loginError: Error|null = null;

  constructor() {
    makeObservable(
      this,
      {
        isAuthorized: observable,
        isLoading: observable,
        error: observable,
        dataModel: observable.shallow,
        isLoginLoading: observable,
        loginError: observable,
      }
    );
  }


}
