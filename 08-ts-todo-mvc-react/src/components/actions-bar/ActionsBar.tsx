import React from 'react';
import { TodosFilterVales } from '../../data-model/todos-filter-vales';

export class ActionsBar extends React.Component<{
  activeFilter: TodosFilterVales,
  itemsLeftCount: number,
  changeFilter: (activeFilter: TodosFilterVales) => void,
  clearCompleted: () => void,
}> {
  render() {
    const activeFilter = this.props.activeFilter;
    const leftCount = this.props.itemsLeftCount;
    const onFilterChange = (e: React.FormEvent<HTMLInputElement>) => {
      const target = e.target as HTMLInputElement;
      if (target.checked) {
        this.props.changeFilter(target.value as TodosFilterVales);
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
                checked={activeFilter === TodosFilterVales.All}
                value={TodosFilterVales.All}
                type="radio"
                className="task-filter__input js-todo-filter"
                name="filter"
              />
              <span className="task-filter__text" aria-label="Select all tasks">{TodosFilterVales.All}</span>
            </label>
            <label className="task-filter__item">
              <input
                onChange={onFilterChange}
                checked={activeFilter === TodosFilterVales.Active}
                value={TodosFilterVales.Active}
                type="radio"
                className="task-filter__input js-todo-filter"
                name="filter"
              />
              <span className="task-filter__text" aria-label="Select active tasks">{TodosFilterVales.Active}</span>
            </label>
            <label className="task-filter__item">
              <input
                onChange={onFilterChange}
                checked={activeFilter === TodosFilterVales.Completed}
                value={TodosFilterVales.Completed}
                type="radio"
                className="task-filter__input js-todo-filter"
                name="filter"
              />
              <span className="task-filter__text" aria-label="Select completed tasks">{TodosFilterVales.Completed}</span>
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
