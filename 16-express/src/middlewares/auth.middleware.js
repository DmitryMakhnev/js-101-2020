const authService = require('../services/auth.service').authService;
const userService = require('../services/user.service').userService;

const SESSION_COOKIE_NAME = '__todo-app-session__';

const initAuthMiddleware = app => {

  app.use((req, res, next) => {
    const session = req.cookies[SESSION_COOKIE_NAME];
    if (session) {
      authService.checkAuthorization(session)
        .then(userId => {
          if (!userId) {
            throw new Error('Session is not registered');
          }
          return userService.getUserById(userId);
        })
        .then(user => {
          if (!user) {
            throw new Error('User not found');
          }
          req._user = user;
        })
        .catch(e => {
          console.error(e);
        })
        .finally(() => {
          next();
        });
    } else {
      next();
    }
  });

};

module.exports = {
  initAuthMiddleware
};
