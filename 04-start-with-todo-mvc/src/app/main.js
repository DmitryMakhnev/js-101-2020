import './styles/default.css';

let idIterator = 1;

document.addEventListener('DOMContentLoaded', () => {

  function createItem(todoText) {
    const root = document.createElement('li');
    root.className = 'todo-app__task-item task-item js-todo-items';

    const view = document.createElement('div');
    view.className = 'task-item__view';
    root.appendChild(view);

    const checkbox = document.createElement('input');
    checkbox.className = 'task-item__status-input js-todo-ready-marker';
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('aria-label', 'Completed task: HTML');
    checkbox.id = `item_${idIterator}`;
    view.appendChild(checkbox);

    const label = document.createElement('label');
    label.className = 'task-item__status-icon';
    label.setAttribute('for', checkbox.id);
    view.appendChild(label);

    const itemText = document.createElement('span');
    itemText.className = 'task-item__text';
    view.appendChild(itemText);

    const itemTextNode = document.createTextNode(todoText);
    itemText.appendChild(itemTextNode);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'task-item__delete js-todo-item-remove-action';
    deleteButton.setAttribute('title', 'Delete task');
    view.appendChild(deleteButton);

    const deleteButtonText = document.createTextNode('Delete task');
    deleteButton.appendChild(deleteButtonText);

    return root;
  }

  const addNewFrom = document.querySelector('.js-add-new-todo-form');
  const addNewInput = addNewFrom.querySelector('.js-add-new-todo-input');
  const itemsList = document.querySelector('.js-todo-items-list');

  const itemsLeftCounter = document.querySelector('.js-todo-items-left-counter');
  function incItemsLeftCounter() {
    const currentItemsLeftText = itemsLeftCounter.textContent;
    const currentItemsLeft = parseInt(currentItemsLeftText, 10);
    itemsLeftCounter.textContent = `${currentItemsLeft + 1} item${currentItemsLeft !== 1 ? 's' : ''} left`;
  }
  function decItemsLeftCounter() {
    const currentItemsLeftText = itemsLeftCounter.textContent;
    const currentItemsLeft = parseInt(currentItemsLeftText, 10);
    itemsLeftCounter.textContent = `${currentItemsLeft - 1} item${currentItemsLeft !== 1 ? 's' : ''} left`;
  }


  addNewFrom.addEventListener('submit', e => {
    e.preventDefault();
    const newTodoItemText = addNewInput.value.trim();
    if (newTodoItemText) {
      addNewInput.value = '';

      const currentItem = createItem(newTodoItemText);
      itemsList.appendChild(currentItem);
      incItemsLeftCounter();

      currentItem
        .querySelector('.js-todo-item-remove-action')
        .addEventListener('click', () => {
          itemsList.removeChild(currentItem);
          decItemsLeftCounter();
        });
      currentItem
        .querySelector('.js-todo-ready-marker')
        .addEventListener('change', event => {
          if (event.target.checked) {
            decItemsLeftCounter();
          } else {
            incItemsLeftCounter();
          }
        });

      const checkedFilter = Array.from(
        document.querySelector('.js-todo-filters').querySelectorAll('.js-todo-filter')
      ).find(filter => filter.checked);

      if (checkedFilter.value === 'Completed') {
        currentItem.style.display = 'none';
      }
    }
  });

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
