import React, {FunctionComponent, useRef} from 'react';

type PropsType = {
  addNewTodo: (text: string) => void,
  markAllAsReady: () => void
}

export const MainControls: FunctionComponent<PropsType> = (props: PropsType) => {
  const inputRef: React.RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const input: HTMLInputElement = inputRef.current as HTMLInputElement;
    const currentNewTodoText = input?.value.trim();
    if (currentNewTodoText) {
      input.value = '';
      props.addNewTodo(currentNewTodoText);
    }
  }
  return (
      <section className="todo-app__main-controls main-controls">
        <div className="main-controls__select-all">
          <button
              className="main-controls__select-all-button"
              title="Select all tasks"
              onClick={props.markAllAsReady}
          >
            Select all tasks
          </button>
        </div>
        <form className="main-controls__create-new" onSubmit={onSubmit}>
          <input
              ref={inputRef}
              type="text"
              className="main-controls__create-new-input"
              placeholder="What needs to be done?"
              aria-label="Add new item"
              autoFocus
          />
        </form>
      </section>
  );
};