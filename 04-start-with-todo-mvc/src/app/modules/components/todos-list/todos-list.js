import { AbstractDomMountComponent } from '../abstract-component/abstract-dom-mount-component';
import { TodoItem } from '../todo-item/todo-item';
import { TodoListModel } from '../../data-model/todo-list-model';
import { autorun } from 'mobx';

export class TodosList extends AbstractDomMountComponent {

  /**
   * @type {Object<string, TodoItem>}
   * @private
   */
  _visibleItems = {};

  /**
   * @param {TodoListModel} model
   * @private
   */
  _bindModel(model) {
    autorun(() => {
      while (this._rootNode.firstChild) {
        this._rootNode.removeChild(this._rootNode.firstChild);
      }

      const filteredItems = model.items
        .filter(item => {
          switch (model.currentFilterId) {
            case 'All':
              return true;
            case 'Active':
              return !item.isReady;
            case 'Completed':
              return item.isReady;
          }
        });

      filteredItems.forEach(itemModel => {
        const itemModelId = itemModel.id;
        if (!this._visibleItems.hasOwnProperty(itemModelId)) {
          const todoItem = new TodoItem(itemModel);
          todoItem.events.on('remove', () => {
            this._model.removeItem(itemModel.id);
          });
          this._visibleItems[itemModelId] = todoItem;
        }
      });

      Object.keys(this._visibleItems || {}).forEach(visibleItemIdAsString => {
        const visibleItemId = parseInt(visibleItemIdAsString, 10);
        const itemFromModel = filteredItems.find(item => item.id === visibleItemId);
        if (!itemFromModel) {
          const itemFromVisibleItems = this._visibleItems[visibleItemIdAsString];
          delete this._visibleItems[visibleItemIdAsString];
          itemFromVisibleItems.events.removeAllListeners();
        }
      });

      filteredItems.forEach(item => {
        this._rootNode.appendChild(this._visibleItems[item.id].root);
      });
    });
  }

}
