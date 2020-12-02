import { AbstractDomMountComponent } from '../abstract-component/abstract-dom-mount-component';

export class Filters extends AbstractDomMountComponent {

  _findElements() {
    this._filters = this._rootNode.querySelectorAll('.js-todo-filter');
  }

  _bindEvents() {
    this._filters.forEach(filter => {
      filter.addEventListener('change', e => {
        this._callbackMap.onChange(e.target.value);
      });
    });
  }

}
