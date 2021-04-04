import React from 'react';
import { observer } from 'mobx-react';
import { TodoItemModel } from '../../data-model/todo-item-model';

export const TaskItem = observer((props: {
  itemModel: TodoItemModel,
  readyChange: (isReady: boolean) => void
  textChange: (text: string) => void
  remove: () => void
}) => {
  const todoItem = props.itemModel;
  return (
    <li
      className="todo-app__task-item task-item"
      data-test-id="todo-item"
    >
      <div className="task-item__view">
        <input
          type="checkbox"
          checked={todoItem.isReady}
          onChange={e => props.readyChange(e.target.checked)}
          className="task-item__status-input"
          id={`item_${todoItem.id}`}
          aria-label={`Completed task: ${todoItem.text}`}
          data-test-id="todo-item__checked-checkbox"
        />
        <label className="task-item__status-icon" htmlFor={`item_${todoItem.id}`} />
        <input
          className="task-item__text"
          onInput={e => props.textChange((e.target as HTMLInputElement).value)}
          value={todoItem.text}
          data-test-id="todo-item__text-input"
        />
        <button
          className="task-item__delete"
          title="Delete task"
          onClick={props.remove}
          data-test-id="todo-item__remove-action"
        >
          Delete task
        </button>
      </div>
      {/*<div className="task-item__edit" hidden="hidden">*/}
      {/*  <input type="text" className="task-item__input" value="HTML" aria-label="Edit task: HTML" />*/}
      {/*</div>*/}
    </li>
  );
});
