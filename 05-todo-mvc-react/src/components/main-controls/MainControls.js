import React, { createRef } from 'react';

export class MainControls extends React.Component {
  _inputRef = createRef();

  render() {
    const onSubmit = e => {
      e.preventDefault();
      const input = this._inputRef.current;
      const currentNewTodoText = input.value.trim();
      if (currentNewTodoText) {
        input.value = '';
        this.props.addNewTodo(currentNewTodoText);
      }
    }

    return (
      <section className="todo-app__main-controls main-controls">
        <div className="main-controls__select-all">
          <button
            className="main-controls__select-all-button"
            title="Select all tasks"
            onClick={this.props.markAllAsReady}
          >
            Select all tasks
          </button>
        </div>
        <form className="main-controls__create-new" onSubmit={onSubmit}>
          <input
            ref={this._inputRef}
            type="text"
            className="main-controls__create-new-input"
            placeholder="What needs to be done?"
            aria-label="Add new item"
            autoFocus="autofocus"
          />
        </form>
      </section>
    );
  }
}
