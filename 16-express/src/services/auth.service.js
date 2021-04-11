const nanoid = require('nanoid').nanoid;

const sessionToUserIdTable = {};

const usersAuthorizationData = [
  {
    userId: '1',
    login: 'user1',
    password: '123'
  }
];

class AuthService {

  async checkAuthorization(session) {
    return sessionToUserIdTable[session];
  }

  async authorize(login, password) {
    const userAuthorizationData = usersAuthorizationData.find(
      data => data.login === login && data.password === password
    );

    if (userAuthorizationData) {
      const session = nanoid();

      sessionToUserIdTable[session] = userAuthorizationData.userId;

      return {
        session,
        userId: userAuthorizationData.userId
      };
    }
  }

}

module.exports = {
  authService: new AuthService(),
};
