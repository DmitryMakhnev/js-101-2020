import { AbstractDomMountComponent } from '../abstract-component/abstract-dom-mount-component';
import { TodoItem } from '../todo-item/todo-item';

let idsIterator = 0;

export class TodosList extends AbstractDomMountComponent {

  /**
   * @type {TodoItem[]}
   * @private
   */
  _todos = [];

  add(text) {
    const todoItemId = idsIterator++;
    const todoItem = new TodoItem(
      { id: todoItemId, text },
      {
        onRemove: () => {
          this._removeItem(todoItem);
        },
        onReadyChange: () => {
          this._notifyAboutReadyChange();
        }
      }
    );
    this._todos.push(todoItem);
    this._rootNode.appendChild(todoItem.root);
    this._notifyAboutReadyChange();
  }

  _removeItem(item) {
    this._rootNode.removeChild(item.root);
    this._todos = this._todos.filter(currentItem => currentItem !== item);
    this._notifyAboutReadyChange();
  }

  _notifyAboutReadyChange() {
    let itemsLeftCount = 0;
    this._todos.forEach(todo => {
      if (!todo.isReady) {
        itemsLeftCount += 1;
      }
    });
    this._callbackMap.onItemsLeftChange(itemsLeftCount);
  }

}
