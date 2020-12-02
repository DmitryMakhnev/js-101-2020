import { createTodoItem } from './todo-item.template';
import { AbstractRenderingComponent } from '../abstract-component/abstract-rendering-component';

export class TodoItem extends AbstractRenderingComponent {

  _render(props) {
    return createTodoItem(props);
  }

  _findElements() {
    this._removeAction = this.root.querySelector('.js-todo-item-remove-action');
    this._readyMarker = this.root.querySelector('.js-todo-ready-marker');
  }

  _bindEvents() {
    this._removeAction.addEventListener('click', () => {
      this._callbackMap.onRemove();
    });
    this._readyMarker.addEventListener('change', e => {
      this._callbackMap.onReadyChange(e.target.checked);
    });
  }

  get isReady() {
    return this._readyMarker.checked;
  }

  set isReady(value) {
    this._readyMarker.checked = value;
  }

  show() {
    this.root.style.display = 'block';
  }

  hide() {
    this.root.style.display = 'none';
  }
}
