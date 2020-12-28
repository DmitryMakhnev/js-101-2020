import { Injectable } from '@nestjs/common';
import { UserModel } from '../user/user.model';
import { nanoid } from 'nanoid';

type SessionMockRecord = {
  token: string;
  user: UserModel;
};

const mockSessionTable: SessionMockRecord[] = []

@Injectable()
export class AuthSessionService {

  async register(user: UserModel): Promise<string> {
    let currentRecord = mockSessionTable.find(record => record.user.id === user.id);
    if (!currentRecord) {
      currentRecord = {
        token: '',
        user: user,
      };
      mockSessionTable.push(currentRecord);
    }
    const newToken = nanoid(32);
    currentRecord.token = newToken;
    return newToken;
  }

  async verify(token: string): Promise<UserModel|undefined> {
    const record = mockSessionTable.find(record => record.token === token);
    return record?.user;
  }

}
