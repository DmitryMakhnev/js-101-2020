import React, {createRef, FormEvent, RefObject} from 'react';

type propsType = {
    addNewTodo: (text: string) => void,
    markAllAsReady: () => void
}

export const MainControls = (props: propsType) => {
    const _inputRef: RefObject<HTMLInputElement> = createRef();

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        if(_inputRef.current) {
            const input: HTMLInputElement = _inputRef.current;
            const currentNewTodoText = input.value.trim();
            if (currentNewTodoText) {
                input.value = '';
                props.addNewTodo(currentNewTodoText);
            }
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
                    autoFocus
                    data-test-id="create-new-todo-form__todo-text-input"
                />
            </form>
        </section>
    );
}
