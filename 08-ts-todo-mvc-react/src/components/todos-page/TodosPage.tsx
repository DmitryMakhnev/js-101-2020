import React from 'react';
import { observer } from 'mobx-react';
import { Header } from '../header/Header';
import { MainControls } from '../main-controls/MainControls';
import { Tasks } from '../tasks/Tasks';
import { ActionsBar } from '../actions-bar/ActionsBar';
import { TodoController } from '../../controllers/todo.controller';
import { TodoListModel } from '../../data-model/todo-list-model';

export const TodosPage = observer(class extends React.Component<
  {
    todoController: TodoController,
    todoListModel: TodoListModel
  }
> {
  componentDidMount() {
    const todoController = this.props.todoController;
    todoController.getAll();
  }

  render() {
    const {
      todoListModel,
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
