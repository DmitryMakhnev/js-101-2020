import React, {createRef, FormEvent, RefObject} from 'react';

export const MainControls = (props: {
    addNewTodo: (text: string) => void,
    markAllAsReady: () => void
}) => {

    const _inputRef: RefObject<HTMLInputElement> = createRef(null);

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        const input: HTMLInputElement = _inputRef.current;
        const currentNewTodoText: string = input.value.trim();
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
            <form
                className="main-controls__create-new"
                onSubmit={onSubmit}
                data-test-id="create-new-todo-form"
            >
                <input
                    ref={_inputRef}
                    type="text"
                    className="main-controls__create-new-input"
                    placeholder="What needs to be done?"
                    aria-label="Add new item"
                    autoFocus={true}
                    data-test-id="create-new-todo-form__todo-text-input"
                />
            </form>
        </section>
    );
}
