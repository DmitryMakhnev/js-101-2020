// HOME WORK COMPONENT! Please don't rewrite me during lecture!
import React, {createRef, FormEvent, RefObject} from 'react';

// HOME WORK COMPONENT! Please don't rewrite me during lecture!
export class MainControls extends React.Component<{
  addNewTodo: (text: string) => void,
  markAllAsReady: () => void
}> {
  _inputRef: RefObject<HTMLInputElement> = createRef();

  // HOME WORK COMPONENT! Please don't rewrite me during lecture!
  render() {
    // HOME WORK COMPONENT! Please don't rewrite me during lecture!
    const onSubmit = (e: FormEvent) => {
      e.preventDefault();
      const input: HTMLInputElement = this._inputRef.current!!;
      const currentNewTodoText: string = input.value.trim();
      if (currentNewTodoText) {
        input.value = '';
        this.props.addNewTodo(currentNewTodoText);
      }
    }

    // HOME WORK COMPONENT! Please don't rewrite me during lecture!
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
                autoFocus={true}
            />
          </form>
        </section>
    );
  }
}
