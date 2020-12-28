
interface UserRecord {
  id: string;
  login: string;
  password: string;
}

export const mockUsersTable: UserRecord[] = [
  {
    id: '1',
    login: 'user1',
    password: '123'
  },
  {
    id: '2',
    login: 'testBot',
    password: 'qwe'
  },
];
