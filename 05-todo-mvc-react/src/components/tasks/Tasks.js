import React from 'react';
import { TaskItem } from '../task-item/TaskItem';
import { observer } from 'mobx-react';

export const Tasks = observer(class extends React.Component {
  render() {
    /**
     * @type {TodoListModel}
     */
    const todoListModel = this.props.todoListModel;

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
                key={item.id}
                itemModel={item}
                readyChange={isReady => item.isReady = isReady}
                textChange={text => item.text = text}
                remove={() => todoListModel.removeItem(item.id)}
              />
            )}
        </ul>
      </section>
    );
  }
})
