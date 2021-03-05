import React from 'react';

export class ActionsBar extends React.Component {
  render() {
    const activeFilter = this.props.activeFilter;
    const leftCount = this.props.itemsLeftCount;
    const onFilterChange = e => {
      if (e.target.checked) {
        this.props.changeFilter(e.target.value);
      }
    }

    return (
      <section className="todo-app__actions-bar actions-bar">
        <div className="actions-bar__item">
          <div className="task-counter js-todo-items-left-counter">
            {`${leftCount} item${leftCount !== 1 ? 's' : ''} left`}
          </div>
        </div>

        <div className="actions-bar__item js-todo-filters">
          <div className="task-filter" role="group" aria-label="Filter tasks by status">
            <label className="task-filter__item">
              <input
                onChange={onFilterChange}
                checked={activeFilter === 'All'}
                value="All"
                type="radio"
                className="task-filter__input js-todo-filter"
                name="filter"
              />
              <span className="task-filter__text" aria-label="Select all tasks">All</span>
            </label>
            <label className="task-filter__item">
              <input
                onChange={onFilterChange}
                checked={activeFilter === 'Active'}
                value="Active"
                type="radio"
                className="task-filter__input js-todo-filter"
                name="filter"
              />
              <span className="task-filter__text" aria-label="Select active tasks">Active</span>
            </label>
            <label className="task-filter__item">
              <input
                onChange={onFilterChange}
                checked={activeFilter === 'Completed'}
                value="Completed"
                type="radio"
                className="task-filter__input js-todo-filter"
                name="filter"
              />
              <span className="task-filter__text" aria-label="Select completed tasks">Completed</span>
            </label>
          </div>
        </div>

        <div className="actions-bar__item">
          <button
            className="task-clear-completed js-clear-completed-action"
            onClick={this.props.clearCompleted}
          >
            Clear completed
          </button>
        </div>
      </section>
    );
  }
}
