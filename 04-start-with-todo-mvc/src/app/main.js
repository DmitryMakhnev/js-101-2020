import './styles/default.css';
import { AddNewTodo } from './modules/components/add-new-todo/add-new-todo';
import { TodosList } from './modules/components/todos-list/todos-list';
import { ItemsLeftCounter } from './modules/components/items-left-counter/items-left-counter';
import { Filters } from './modules/components/filters/filters';
import { TodoListModel } from './modules/data-model/todo-list-model';

document.addEventListener('DOMContentLoaded', () => {

  const todoListModel = new TodoListModel();

  new AddNewTodo(
    document.querySelector('.js-add-new-todo-form'),
    todoListModel
  );

  new TodosList(
    document.querySelector('.js-todo-items-list'),
    todoListModel,
  );

  new ItemsLeftCounter(
    document.querySelector('.js-todo-items-left-counter'),
    todoListModel
  );

  new Filters(
    document.querySelector('.js-todo-filters'),
    todoListModel
  );

  document.querySelector('.js-clear-completed-action')
    .addEventListener('click', () => {
      todoListModel.clearCompleted();
    });

  document.querySelector('.js-mark-all-todos-as-ready-action')
    .addEventListener('click', () => {
      todoListModel.markAllAsReady();
    });


});
