const port = 3012;

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const initAuthMiddleware = require('./middlewares/auth.middleware').initAuthMiddleware;
const initUserController = require('./controllers/user.controller').initUserController;
const initTodoController = require('./controllers/todos.controller').initTodoController;
const initAuthController = require('./controllers/auth.controller').initAuthController;

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());

initAuthMiddleware(app);

initUserController(app);
initAuthController(app)
initTodoController(app);

// app.use((req, res, next) => {
//   console.log(req.url);
//   next();
// });
//
// app.use('/static', express.static('static'));
// app.get('/', (req, res) => {
//   res.send([
//     {
//       id: 1,
//       name: 'User'
//     }
//   ]);
// });
//
// app.get('/user', (req, res) => {
//   res.send({
//     id: 1,
//     name: 'User'
//   });
// });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// const cookieParser = require('cookie-parser');
// app.use(cookieParser());
// res.cookie('cookieName',randomNumber, { maxAge: 900000, httpOnly: true });
