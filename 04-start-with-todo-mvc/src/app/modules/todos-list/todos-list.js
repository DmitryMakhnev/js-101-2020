import { AbstractDomMountComponent } from '../abstract-component/abstract-dom-mount-component';
import { TodoItem } from '../todo-item/todo-item';

let idsIterator = 0;

export class TodosList extends AbstractDomMountComponent {

  /**
   * @type {TodoItem[]}
   * @private
   */
  _todos = [];
  _currentFilterId = 'All';

  add(text) {
    const todoItemId = idsIterator++;
    const todoItem = new TodoItem({ id: todoItemId, text });

    todoItem.events
      .on('remove', () => this._removeItem(todoItem))
      .on('readyChange', this._notifyAboutReadyChange, this);

    this._todos.push(todoItem);
    this._rootNode.appendChild(todoItem.root);
    this._notifyAboutReadyChange();
  }

  /**
   * @param {TodoItem} item
   * @private
   */
  _removeItem(item) {
    this._rootNode.removeChild(item.root);
    this._todos = this._todos.filter(currentItem => currentItem !== item);

    item.events
      .removeAllListeners('remove')
      .off('readyChange', this._notifyAboutReadyChange, this);

    this._notifyAboutReadyChange();
  }

  _notifyAboutReadyChange() {
    let itemsLeftCount = 0;
    this._todos.forEach(todo => {
      if (!todo.isReady) {
        itemsLeftCount += 1;
      }
    });
    this.events.emit('itemsLeftChange', itemsLeftCount);
  }

  filter(filterId) {
    this._currentFilterId = filterId;
    this._filter();
  }

  /**
   * @protected
   */
  _filter() {
    this._todos.forEach(todoItem => {
      switch (this._currentFilterId) {
        case 'All':
          todoItem.show();
          break;
        case 'Active':
          todoItem.isReady ? todoItem.hide() : todoItem.show();
          break;
        case 'Completed':
          todoItem.isReady ? todoItem.show() : todoItem.hide();
          break;
      }
    });
  }

  clearCompleted() {
    this._todos.slice().forEach(todoItem => {
      if (todoItem.isReady) {
        this._removeItem(todoItem);
      }
    });
  }

  markAllAsReady() {
    this._todos.forEach(todoItem => todoItem.isReady = true);
    this._filter();
  }

}
