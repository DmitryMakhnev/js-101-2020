import React from 'react';
import { TaskItem } from '../task-item/TaskItem';
import { observer } from 'mobx-react';

export const Tasks = observer(class extends React.Component {
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
      <section className="todo-app__tasks">
        <ul className="todo-app__task-list tasks js-todo-items-list">
          {todoListModel.items
            .filter(item => {
              switch (todoListModel.currentFilterId) {
                case 'All':
                  return true;
                case 'Active':
                  return !item.isReady;
                case 'Completed':
                  return item.isReady;
              }
            })
            .map(item =>
              <TaskItem
                className="todo-app__task-item"
                key={item.id}
                itemModel={item}
                readyChange={isReady => todoController.updateTodo(
                  { id: item.id, isDone: isReady }
                )}
                textChange={text => todoController.updateTodo(
                  { id: item.id, text: text }
                )}
                remove={() => todoController.removeTodo(item.id)}
              />
            )}
        </ul>
      </section>
    );
  }
})
