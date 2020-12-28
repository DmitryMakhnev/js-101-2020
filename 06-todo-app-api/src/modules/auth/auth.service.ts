import { Injectable } from '@nestjs/common';
import { LoginCredentials } from './login-credentials';
import { mockUsersTable } from '../user/mock-users-table';
import { UserModel } from '../user/user.model';

@Injectable()
export class AuthService {

  async authByLoginAndPassword(cred: LoginCredentials): Promise<UserModel|undefined> {
    const userRecord = mockUsersTable.find(
      userRecord => userRecord.login === cred.login && userRecord.password === cred.password
    );

    if (userRecord) {
      return {
        id: userRecord.id,
        login: userRecord.login
      };
    }
  }

}
