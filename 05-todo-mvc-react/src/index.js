import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/app/App';
import reportWebVitals from './reportWebVitals';
import { TodoListModel } from './data-model/todo-list-model';
import { UserModel } from './data-model/user-model';
import { UserController } from './controllers/user.controller';
import { TodoController } from './controllers/todo.controller';


const userModel = new UserModel();
const userController = new UserController(userModel);

const todoListModel = new TodoListModel();
const todoController = new TodoController(todoListModel);

ReactDOM.render(
  <App
    todoListModel={todoListModel}
    todoController={todoController}
    userModel={userModel}
    userController={userController}
  />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
