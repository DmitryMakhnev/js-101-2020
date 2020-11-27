import './styles/default.css';
import { AddNewTodo } from './modules/add-new-todo/add-new-todo';
import { TodosList } from './modules/todos-list/todos-list';
import { ItemsLeftCounter } from './modules/items-left-counter/items-left-counter';

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

  const addNewTodo = new AddNewTodo(
    document.querySelector('.js-add-new-todo-form'),
    {
      onNew(newTodoText){
        todosList.add(newTodoText);
      }
    });



  // const itemsLeftCounter = document.querySelector('.js-todo-items-left-counter');
  // function incItemsLeftCounter() {
  //   const currentItemsLeftText = itemsLeftCounter.textContent;
  //   const currentItemsLeft = parseInt(currentItemsLeftText, 10);
  //   itemsLeftCounter.textContent = `${currentItemsLeft + 1} item${currentItemsLeft !== 1 ? 's' : ''} left`;
  // }
  // function decItemsLeftCounter() {
  //   const currentItemsLeftText = itemsLeftCounter.textContent;
  //   const currentItemsLeft = parseInt(currentItemsLeftText, 10);
  //   itemsLeftCounter.textContent = `${currentItemsLeft - 1} item${currentItemsLeft !== 1 ? 's' : ''} left`;
  // }


  // addNewFrom.addEventListener('submit', e => {
  //   e.preventDefault();
  //   const newTodoItemText = addNewInput.value.trim();
  //   if (newTodoItemText) {
  //     addNewInput.value = '';
  //
  //     const currentItem = createItem(newTodoItemText);
  //     itemsList.appendChild(currentItem);
  //     incItemsLeftCounter();
  //
  //     currentItem
  //       .querySelector('.js-todo-item-remove-action')
  //       .addEventListener('click', () => {
  //         itemsList.removeChild(currentItem);
  //         decItemsLeftCounter();
  //       });
  //     currentItem
  //       .querySelector('.js-todo-ready-marker')
  //       .addEventListener('change', event => {
  //         if (event.target.checked) {
  //           decItemsLeftCounter();
  //         } else {
  //           incItemsLeftCounter();
  //         }
  //       });
  //
  //     const checkedFilter = Array.from(
  //       document.querySelector('.js-todo-filters').querySelectorAll('.js-todo-filter')
  //     ).find(filter => filter.checked);
  //
  //     if (checkedFilter.value === 'Completed') {
  //       currentItem.style.display = 'none';
  //     }
  //   }
  // });

  const clearCompletedAction = document.querySelector('.js-clear-completed-action');
  clearCompletedAction.addEventListener('click', () => {
    itemsList
      .querySelectorAll('.js-todo-items')
      .forEach(item => {
        if (item.querySelector('.js-todo-ready-marker').checked) {
          item.remove();
        }
      });
  });

  document.querySelector('.js-todo-filters')
    .querySelectorAll('.js-todo-filter')
    .forEach(filter => {
      filter.addEventListener('change', e => {
        const currentFilter = e.target;
        if (currentFilter.checked) {
          switch (currentFilter.value) {
            case 'All':
              itemsList.querySelectorAll('.js-todo-items').forEach(item => {
                item.style.display = 'block';
              });
              break;
            case 'Active':
              itemsList.querySelectorAll('.js-todo-items').forEach(item => {
                item.style.display = item.querySelector('.js-todo-ready-marker').checked ? 'none' : 'block';
              });
              break;
            case 'Completed':
              itemsList.querySelectorAll('.js-todo-items').forEach(item => {
                item.style.display = item.querySelector('.js-todo-ready-marker').checked ? 'block' : 'none';
              });
              break;
          }
        }
      });
    })

  document.querySelector('.js-mark-all-todos-as-ready-action')
    .addEventListener('click', () => {
      itemsList.querySelectorAll('.js-todo-items .js-todo-ready-marker').forEach(item => {
        item.checked = true;
        itemsLeftCounter.textContent = '0 items left';
      });
    });

});
