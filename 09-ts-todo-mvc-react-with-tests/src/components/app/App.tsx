import React, { useEffect } from 'react';
import '../../styles/default.css';
import { observer } from 'mobx-react';
import { TodosPage } from '../todos-page/TodosPage';
import { AuthPage } from '../auth-page/AuthPage';
import { UserController } from '../../controllers/user.controller';
import { TodoListModel } from '../../data-model/todo-list-model';
import { UserModel } from '../../data-model/user-model';
import { TodoController } from '../../controllers/todo.controller';

export const App = observer((props: {
  userController: UserController,
  todoListModel: TodoListModel,
  userModel: UserModel,
  todoController: TodoController
}) => {
  useEffect(() => {
    const userController = props.userController;
    userController.checkAuthorization();
  }, []);

  const {
    todoListModel,
    userModel,
    userController,
    todoController
  } = props;

  if (userModel.isLoading) {
    return <div>Loading...</div>
  }

  return (
    userModel.isAuthorized
      ? <>
        <button onClick={() => userController.logout()}>
          Sign out
        </button>
        <TodosPage
          todoListModel={todoListModel}
          todoController={todoController}
        />
      </>
      : <AuthPage
        userModel={userModel}
        userController={userController}
      />
  );
});
