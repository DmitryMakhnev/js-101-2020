const authService = require('../services/auth.service').authService;
const userService = require('../services/user.service').userService;

const SESSION_COOKIE_NAME = '__todo-app-session__';

const initAuthController = app => {
  app.post('/auth/login/', (req, res) => {
    const login = req.body.login;
    const password = req.body.password;

    authService
      .authorize(login, password)
      .then(authorizationData => {
        if (!authorizationData) {
          throw new Error('Invalid login or password');
        }
        return userService.getUserById(authorizationData.userId)
          .then(user => {
            res.cookie(
              SESSION_COOKIE_NAME,
              authorizationData.session,
              { httpOnly: true }
            );
            res.send(user);
          });
      })
      .catch(e => {
        console.error(e);
        res.status(403).send(null);
      })
  });
}

module.exports = {
  initAuthController,
};
