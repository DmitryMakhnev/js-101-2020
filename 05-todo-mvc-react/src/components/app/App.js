import React from 'react';
import '../../styles/default.css';
import { Header } from '../header/Header';
import { MainControls } from '../main-controls/MainControls';
import { Tasks } from '../tasks/Tasks';
import { ActionsBar } from '../actions-bar/ActionsBar';
import { observer } from 'mobx-react';

export const App = observer(class extends React.Component {
  render() {
    /**
     * @type {TodoListModel}
     */
    const todoListModel = this.props.todoListModel;

    return (
      <div className="todo-app">
        <Header />

        <main className="todo-app__frame">
          <MainControls
            addNewTodo={todoListModel.addItem}
            markAllAsReady={todoListModel.markAllAsReady}
          />
          <Tasks todoListModel={todoListModel}/>
          <ActionsBar
            activeFilter={todoListModel.currentFilterId}
            changeFilter={filterId => todoListModel.currentFilterId = filterId}
            itemsLeftCount={todoListModel.items.reduce(
              (result, item) => result + (item.isReady ? 0 : 1),
              0
            )}
            clearCompleted={todoListModel.clearCompleted}
          />
        </main>

      </div>
    );
  }
})
