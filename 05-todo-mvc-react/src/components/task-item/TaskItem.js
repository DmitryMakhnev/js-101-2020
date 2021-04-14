import React from 'react';
import { observer } from 'mobx-react';
import cn from 'classnames';

import styles from './task-item.module.css';

const isProduction = true;

function generateTestDataAttribute(value) {
  return !isProduction ? {'data-test': value} : {};
}

export const TaskItem = observer(class extends React.Component {
  render() {
    /**
     * @type {TodoItemModel}
     */
    const todoItem = this.props.itemModel;
    const className = this.props.className;

    return (
      <li className={cn(className, styles.root)} {...generateTestDataAttribute('todo-item')}>
        <div className={styles.view}>
          <input
            type="checkbox"
            checked={todoItem.isReady}
            onChange={e => this.props.readyChange(e.target.checked)}
            className={styles.statusInput}
            id={`item_${todoItem.id}`}
            aria-label={`Completed task: ${todoItem.text}`}
          />
          <label className={styles.statusIcon} htmlFor={`item_${todoItem.id}`} />
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
