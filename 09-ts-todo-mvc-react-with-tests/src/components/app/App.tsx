import React from 'react';
import '../../styles/default.css';
import { observer } from 'mobx-react';
import { TodosPage } from '../todos-page/TodosPage';
import { AuthPage } from '../auth-page/AuthPage';
import { UserController } from '../../controllers/user.controller';
import { TodoListModel } from '../../data-model/todo-list-model';
import { UserModel } from '../../data-model/user-model';
import { TodoController } from '../../controllers/todo.controller';

export const App = observer(class extends React.Component<
  {
    userController: UserController,
    todoListModel: TodoListModel,
    userModel: UserModel,
    todoController: TodoController
  }
> {

  componentDidMount() {
    /**
     * @type {UserController}
     */
    const userController = this.props.userController;
    userController.checkAuthorization();
  }

  render() {
    const {
      todoListModel,
      userModel,
      userController,
      todoController
    } = this.props;

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
  }
})
