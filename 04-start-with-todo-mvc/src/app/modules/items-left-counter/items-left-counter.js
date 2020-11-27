import { AbstractDomMountComponent } from '../abstract-component/abstract-dom-mount-component';

export class ItemsLeftCounter extends AbstractDomMountComponent {

  changeCount(count) {
    this._rootNode.textContent = `${count} item${count !== 1 ? 's' : ''} left`;
  }

}
