import './styles/default.css';
import { AddNewTodo } from './modules/add-new-todo/add-new-todo';
import { TodosList } from './modules/todos-list/todos-list';
import { ItemsLeftCounter } from './modules/items-left-counter/items-left-counter';
import { Filters } from './modules/filters/filters';

document.addEventListener('DOMContentLoaded', () => {

  // init
  const addNewTodo = new AddNewTodo(
    document.querySelector('.js-add-new-todo-form')
  );
  const todosList = new TodosList(
    document.querySelector('.js-todo-items-list'),
  );
  const itemsLeftCounter = new ItemsLeftCounter(
    document.querySelector('.js-todo-items-left-counter')
  );
  const filters = new Filters(
    document.querySelector('.js-todo-filters')
  );

  // binding
  todosList.events.on(
    'itemsLeftChange',
    itemsLeftCounter.changeCount,
    itemsLeftCounter
  );
  addNewTodo.events.on('new', todosList.add, todosList);
  filters.events.on('change', todosList.filter, todosList);

  document.querySelector('.js-clear-completed-action')
    .addEventListener('click', () => {
      todosList.clearCompleted();
    });

  document.querySelector('.js-mark-all-todos-as-ready-action')
    .addEventListener('click', () => {
      todosList.markAllAsReady();
    });

});
