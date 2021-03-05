import React from 'react';
import { observer } from 'mobx-react';
import { Header } from '../header/Header';
import { MainControls } from '../main-controls/MainControls';
import { Tasks } from '../tasks/Tasks';
import { ActionsBar } from '../actions-bar/ActionsBar';

export const TodosPage = observer(class extends React.Component {
  componentDidMount() {
    /**
     * @type {TodoController}
     */
    const todoController = this.props.todoController;
    todoController.getAll();
  }

  render() {

    const {
      /**
       * @type {TodoListModel}
       */
      todoListModel,
      /**
       * @type {TodoController}
       */
      todoController
    } = this.props;

    return (
      <div className="todo-app">
        <Header />

        <main className="todo-app__frame">
          <MainControls
            addNewTodo={todoController.createTodo}
            markAllAsReady={todoController.markAllAsReady}
          />
          <Tasks
            todoListModel={todoListModel}
            todoController={todoController}
          />
          <ActionsBar
            activeFilter={todoListModel.currentFilterId}
            changeFilter={filterId => todoListModel.currentFilterId = filterId}
            itemsLeftCount={todoListModel.items.reduce(
              (result, item) => result + (item.isReady ? 0 : 1),
              0
            )}
            clearCompleted={todoController.clearCompleted}
          />
        </main>
      </div>
    );
  }
});
