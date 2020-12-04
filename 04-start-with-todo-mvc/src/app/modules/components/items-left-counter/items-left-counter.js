import { AbstractDomMountComponent } from '../abstract-component/abstract-dom-mount-component';
import { autorun } from 'mobx';

export class ItemsLeftCounter extends AbstractDomMountComponent {

  /**
   * @param {TodoListModel} model
   * @private
   */
  _bindModel(model) {
    autorun(() => {
      let leftCount = 0;

      model.items.forEach(item => {
        if (!item.isReady) {
          leftCount++;
        }
      });

      this._rootNode.textContent = `${leftCount} item${leftCount !== 1 ? 's' : ''} left`;
    });
  }

}
