import { makeObservable, observable } from 'mobx';


export class UserModel {

  isLoading = false;
  error = null;

  isAuthorized = false;
  dataModel = null;

  isLoginLoading = false;
  loginError = null;

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
