import { AbstractDomMountComponent } from '../abstract-component/abstract-dom-mount-component';
import { TodoItem } from '../todo-item/todo-item';
import { TodoListModel } from '../../data-model/todo-list-model';
import { autorun } from 'mobx';

export class TodosList extends AbstractDomMountComponent {

  /**
   * @param {TodoListModel} model
   * @private
   */
  _bindModel(model) {
    autorun(() => {
      while (this._rootNode.firstChild) {
        this._rootNode.firstChild.remove();
      }

      model.items
        .filter(item => {
          switch (model.currentFilterId) {
            case 'All':
              return true;
            case 'Active':
              return !item.isReady;
            case 'Completed':
              return item.isReady;
          }
        })
        .forEach(itemModel => {
          const todoItem = new TodoItem(itemModel);
          todoItem.events.on('remove', () => {
            todoItem.events.removeAllListeners();
            this._model.removeItem(itemModel.id);
          });
          this._rootNode.appendChild(todoItem.root);
        });
    });
  }

}
