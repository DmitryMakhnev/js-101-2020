import React from 'react';
import '../../styles/default.css';
import { observer } from 'mobx-react';
import { TodosPage } from '../todos-page/TodosPage';
import { AuthPage } from '../auth-page/AuthPage';

export const App = observer(class extends React.Component {

  componentDidMount() {
    /**
     * @type {UserController}
     */
    const userController = this.props.userController;
    userController.checkAuthorization();
  }

  render() {
    /**
     * @type {TodoListModel}
     */
    const {
      todoListModel,
      userModel,
      /**
       * @type {UserController}
       */
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
