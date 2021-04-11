

const initUserController = app => {
  app.get('/user', (req, res) => {
    if (req._user) {
      res.send(req._user);
    } else {
      res.status(401).send(null);
    }
  });
};

module.exports = {
  initUserController
};
