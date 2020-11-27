export function createTodoItem({ id, text }) {
  const root = document.createElement('li');
  root.className = 'todo-app__task-item task-item js-todo-items';

  const view = document.createElement('div');
  view.className = 'task-item__view';
  root.appendChild(view);

  const checkbox = document.createElement('input');
  checkbox.className = 'task-item__status-input js-todo-ready-marker';
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('aria-label', 'Completed task: HTML');
  checkbox.id = `item_${id}`;
  view.appendChild(checkbox);

  const label = document.createElement('label');
  label.className = 'task-item__status-icon';
  label.setAttribute('for', checkbox.id);
  view.appendChild(label);

  const itemText = document.createElement('span');
  itemText.className = 'task-item__text';
  view.appendChild(itemText);

  const itemTextNode = document.createTextNode(text);
  itemText.appendChild(itemTextNode);

  const deleteButton = document.createElement('button');
  deleteButton.className = 'task-item__delete js-todo-item-remove-action';
  deleteButton.setAttribute('title', 'Delete task');
  view.appendChild(deleteButton);

  const deleteButtonText = document.createTextNode('Delete task');
  deleteButton.appendChild(deleteButtonText);

  return root;
}
