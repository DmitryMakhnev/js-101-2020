import { Injectable } from '@nestjs/common';

export type UserModel = {
  id: string;
  name: string;
}

const usersTable: UserModel[] = [
  {
    id: '1',
    name: 'Dmitry'
  },
  {
    id: '2',
    name: 'Pavel'
  }
];

@Injectable()
export class UserService {

  async getUserById(userId: string) {
    return usersTable.find(user => user.id === userId);
  }

}
