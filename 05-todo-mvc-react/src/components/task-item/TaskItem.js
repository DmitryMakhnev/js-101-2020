import React from 'react';
import { observer } from 'mobx-react';

export const TaskItem = observer(class extends React.Component {
  render() {
    /**
     * @type {TodoItemModel}
     */
    const todoItem = this.props.itemModel;

    return (
      <li className="todo-app__task-item task-item">
        <div className="task-item__view">
          <input
            type="checkbox"
            checked={todoItem.isReady}
            onChange={e => this.props.readyChange(e.target.checked)}
            className="task-item__status-input"
            id={`item_${todoItem.id}`}
            aria-label={`Completed task: ${todoItem.text}`}
          />
          <label className="task-item__status-icon" htmlFor={`item_${todoItem.id}`} />
          <input
            className="task-item__text"
            onInput={e => this.props.textChange(e.target.value)}
            value={todoItem.text}
          />
          <button
            className="task-item__delete"
            title="Delete task"
            onClick={this.props.remove}
          >
            Delete task
          </button>
        </div>
        {/*<div className="task-item__edit" hidden="hidden">*/}
        {/*  <input type="text" className="task-item__input" value="HTML" aria-label="Edit task: HTML" />*/}
        {/*</div>*/}
      </li>
    );
  }
});
