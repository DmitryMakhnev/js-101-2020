import React, { createRef } from 'react';

interface propsType {
  addNewTodo: (text: string) => void,
  markAllAsReady: () => void
}

export class MainControls extends React.Component<propsType> {
  private inputRef: React.RefObject<HTMLInputElement> = createRef();

  render() {
    const onSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const input: HTMLInputElement = this.inputRef.current as HTMLInputElement;
      const currentNewTodoText = input?.value.trim();
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
            ref={this.inputRef}
            type="text"
            className="main-controls__create-new-input"
            placeholder="What needs to be done?"
            aria-label="Add new item"
          />
        </form>
      </section>
    );
  }
}
