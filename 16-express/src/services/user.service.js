
const usersTable = [
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
]

class UserService {
  async getUserById(id) {
    return usersTable.find(user => user.id === id);
  }
}

module.exports = {
  userService: new UserService()
};
