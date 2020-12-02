import './styles/default.css';
import { AddNewTodo } from './modules/add-new-todo/add-new-todo';
import { TodosList } from './modules/todos-list/todos-list';
import { ItemsLeftCounter } from './modules/items-left-counter/items-left-counter';
import { Filters } from './modules/filters/filters';

document.addEventListener('DOMContentLoaded', () => {

  const itemsLeftCounter = new ItemsLeftCounter(
    document.querySelector('.js-todo-items-left-counter')
  );

  const todosList = new TodosList(
    document.querySelector('.js-todo-items-list'),
    {
      onItemsLeftChange(count) {
        itemsLeftCounter.changeCount(count);
      }
    }
  );

  new AddNewTodo(
    document.querySelector('.js-add-new-todo-form'),
    {
      onNew(newTodoText){
        todosList.add(newTodoText);
      }
    });

  new Filters(
    document.querySelector('.js-todo-filters'),
    {
      onChange(filterId) {
        todosList.filter(filterId);
      }
    }
  )

  document.querySelector('.js-clear-completed-action')
    .addEventListener('click', () => {
      todosList.clearCompleted();
    });

  document.querySelector('.js-mark-all-todos-as-ready-action')
    .addEventListener('click', () => {
      todosList.markAllAsReady();
    });

});
